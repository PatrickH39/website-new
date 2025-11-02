// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "a collection of cool projects I&#39;ve worked on over the years",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-camtag",
          title: 'CamTag',
          description: "a portable safety device prototyped during Shad 2022 @ TMU",
          section: "Projects",handler: () => {
              window.location.href = "/projects/camtag.html";
            },},{id: "projects-dt-clubs-day-website",
          title: 'DT Clubs Day Website',
          description: "developed during COVID-19 for high school students to sign up for clubs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clubsday.html";
            },},{id: "projects-epaper-transit-board",
          title: 'ePaper Transit Board',
          description: "low-power e-ink screen displaying real-time route information nearby",
          section: "Projects",handler: () => {
              window.location.href = "/projects/epaper.html";
            },},{id: "projects-ai-powered-iot-parking-meter",
          title: 'AI-Powered IoT Parking Meter',
          description: "4G/LTE parking meter achieving 95.6% vehicle recognition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/parkingmeter.html";
            },},{id: "projects-triboelectric-nanogenerators",
          title: 'Triboelectric Nanogenerators',
          description: "experimented with different material types used in TENGs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tengs.html";
            },},{id: "projects-waxstic",
          title: 'Waxstic',
          description: "tested beeswax and wax composites to develop sustainable HDPE alternatives, winning silver at GVRSF",
          section: "Projects",handler: () => {
              window.location.href = "/projects/waxstic.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65@%70%61%74%72%69%63%6B%68.%63%61", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/patricklbh", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/patrickh39", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
