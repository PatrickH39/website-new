---
layout: page
title: DT Clubs Day Website
description: developed during COVID-19 for high school students to sign up for clubs
img: assets/img/clubsday.png
importance: 6

shortcuts:
  - name: Code
    icon: fa-brands fa-github
    link: https://github.com/PatrickH39/DT-Clubs-Day
  - name: Website
    icon: fa-solid fa-globe
    link: https://dtclubsday.ca

---

> **How are we going to run Clubs Day when we can’t gather in person?**

## Project Overview

When the COVID-19 pandemic hit, in-person Clubs Day at David Thompson (my high school) was no longer possible. To bridge this gap, I helped Student Council develop an **online Clubs Day platform** - a digital space where students could **explore, connect, and join clubs** safely from home.



<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clubsday-landing.png" title="Clubs Day Landing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This is the landing page that everyone sees when they first go to the website.
</div>

## The Goal
- **Recreate the spirit of Clubs Day online**  
  The pandemic took a toll on many people whether it be mental health or physical.
- **Enable club visibility**  
  Help student organizations present themselves through digital profiles and photos.  
- **Support long-term engagement**  
  Build a system that could be used for future hybrid events, not just during the pandemic.


## The Story
I first joined Student Council back in grade 9, as one of the Tech Specialists. With the pandemic being in full-swing, all our meetings were hosted on Microsoft Teams. With school closures and safety restrictions, we had to completely rethink how to connect students to their clubs.


### Putting It Together
On one of the professional development days (Pro-D Day), I decided to open up **VS Code** and start building a barebones site that allowed people to submit form entries and view them in an **SQL database**. Admittedly, this wasn’t the best approach, so I had to figure out a more practical solution.

There were two core components that would determine the site’s success:
1. Allowing students to **join clubs**, and
2. Allowing **club owners to see who joined**.

I kept iterating and eventually created a clean, organized template displaying clubs and their placeholders, a landing page, and a submission form at the bottom of the site. Of course, we couldn’t risk random users flooding the site with spam submissions, so I decided to ask our teacher sponsor, Ms. Lum, to have an **access code** distributed through the _All Students_ channel on **Microsoft Teams**.

We then reached out to club executives and their teacher sponsors to submit key details about their clubs, such as:
-   Meeting times
-   Meeting locations
-   Club mandates
-   Social media handles

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clubsday-club.png" title="Clubs Day Landing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    What students would see when they try to inspect a club.
</div>


### How It Worked
1. Students could browse the site and click **“Add to List”** on any clubs they were interested in. Their list would grow until they were ready to submit.  
2. Once finished, they would enter the **access code**, along with their **student number**, **first and last name**, and **email address**.  
3. The **backend** would verify whether the access code was valid before allowing the form to **POST**.  
4. The **SQL database** would then receive the submission and check whether a student with the same number had previously submitted a response. If so, their original entry would be updated.  
5. Finally, **club owners** could view their members through **Airtable**, where a separate table was automatically generated for each club, complete with a unique access link.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/clubsday-admin.png" title="Clubs Day Admin View" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This would be the administative view of responses collected.
</div>

## Results

The website played a key role in supporting Clubs Day during the COVID-19 pandemic, when in-person interactions were restricted. It provided students with a safe and accessible way to explore and sign up for clubs remotely, ensuring that the event could still take place despite the limitations of virtual learning.

Over 30 clubs participated, and more than 400 students submitted sign-ups through the platform. This helped maintain strong engagement within the school community at a time when many extracurricular activities were at risk of being overlooked. The system also simplified coordination for club executives by organizing member information automatically, making it easier to manage and communicate with new members.

Overall, the project ensured that Clubs Day could continue in a meaningful way during a challenging period, preserving an important part of student life at David Thompson Secondary.