---
layout: page
title: ePaper Transit Board
description: A low-power e-ink dashboard displaying real-time transit and schedule info.
img: assets/img/epaper.png
importance: 1
---
<div class="row" style="margin-top: 2em; text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epaper-thumbnail.jpg" title="Fully Assembled Transit Board" class="img-fluid rounded z-depth-1" width="60%" %}
    </div>
</div>
<div class="caption">
    The ePaper display put into its custom enclosure.
</div>

After reading about TransLink's GTFS API, I wanted to visualize the data in a way that was actually useful for my daily routine. The result is a dedicated, "always-on" dashboard that lives in my living room.

## How It Started
The primary motivation was my dad, who refuses to learn how to check bus times on his smartphone. I wanted to build a zero-friction appliance that shows the next departures at a glance.

I also missed the real-time departure boards that used to be at bus stops (many were phased out with the sunset of the Rogers 3G network). I wanted to bring that utility back, but optimize it for my life as a UBC student.

## Physical Components
The hardware build is relatively simple, designed to be low-power and unobtrusive:
- **Compute:** Raspberry Pi Zero 2 W
- **Display:** Waveshare 7.5 Inch e-ink display HAT
- **Enclosure:** Custom PLA print (modeled in SolidWorks)
- **Sensors:** DHT22 Temperature / Humidity Sensor (for interior climate monitoring)

## Development
This project was multifaceted, requiring work on CAD, backend data parsing, and frontend interface design.

### The "Frontend" Challenge
Originally, I planned to have the Pi simply take a screenshot of a headless browser and push that image to the e-ink screen. However, I found that constantly rendering and screenshotting a modern web page was too resource-intensive for the Pi.

<div class="row" style="margin-top: 2em; text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epaper-webpreview.jpg" title="Web Preview of Departure Board" class="img-fluid rounded z-depth-1" width="60%" %}
    </div>
</div>
<div class="caption">
    Web preview of the departure board.
</div>

Instead, I shifted to a lightweight architecture:
1.  **Backend:** A Python Flask server that aggregates and caches data.
2.  **Frontend:** Uses the Waveshare Python library to render content and fetches JSON data to refresh the screen.
3.  **Display:** The e-paper display updates only when data changes to prevent ghosting and save power.

The visual layout uses a standard layout to create a high-contrast, readable table that mimics physical transit signage.

### The Backend (Transit Data)
I used Python and Flask to build the API. The system aggregates data from two sources:
1.  **Transit App API:** Crowdsourced real-time data (often faster than official feeds).
2.  **TransLink GTFS:** The official static schedule for backup.

To be a "good citizen" of the API, I implemented caching so we don't spam the server. The data is fetched every ~60 seconds, cached locally, and then served to the frontend.

Here is a snippet of how I filter and sort the routes (e.g., grouping the 49 and 430 together):

```python
# app.py snippet: Grouping and sorting routes
@app.route("/data")
def get_data():
    # ... fetching logic ...
    
    # Sort routes numerically (e.g., 20 comes before 49)
    def sort_key(entry):
        match = re.match(r"(\d+)", entry["route"])
        numeric_part = int(match.group(1)) if match else float('inf')
        return (numeric_part, entry["route"], entry["direction"])

    output.sort(key=sort_key)
    return jsonify({"departures": output})
```

## The "Smart" Features: Calendar & Geospatial Data
To make this useful for my commute to UBC, I added an integration with my Google Calendar.

The system parses an **.ics feed** of my class schedule. However, raw calendar data usually just gives a building code (e.g., "LIFE" or "ESB"). To make this actionable, I used the [UBC Geospatial OpenData Portal](https://github.com/UBCGeodata/ubc-geospatial-opendata).

How it works:
1. **Extract Location:** The script pulls the location field from the calendar event (e.g., "HENN 201").
2. **Geocode:** It looks up the building code in the `ubcv_buildings` dataset to get the specific latitude and longitude.
3. **Route Calculation:** It calculates the walking time from my current location to that specific building, letting me know exactly when I need to leave the house to make it to class on time.

## The Enclosure
I used SOLIDWORKS to CAD a snap-fit enclosure that houses the Pi, HAT, and screen securely. My friend Jacky printed it on his Bambu Lab P1S, which resulted in a super clean surface finish.

<div class="row" style="margin-top: 2em; text-align: center;">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epaper-cad.png" title="SolidWorks Model of Enclosure" class="img-fluid rounded z-depth-1" width="80%" %}
    </div>
</div>
<div class="caption">
    Model of the enclosure used for the display.
</div>

## Future Improvements
The `main.js` currently handles the "pagination" of data—switching between Eastbound/Northbound and Westbound/Southbound views every 30 seconds. In the future, I'd like to implement a physical button on the enclosure to toggle views manually, rather than waiting for the cycle.

```javascript
// main.js snippet: Toggling views
setInterval(() => {
    showAlternate = !showAlternate;
    countdown = 30; // reset countdown
    updateTable();
}, 30000);
```