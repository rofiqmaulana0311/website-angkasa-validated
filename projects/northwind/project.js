// Northwind — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).northwind={
  images: {
    cover:   "cover.jpg",                // square 1:1 — Home card, Works card, "Next project"
    hero:    "hero.jpg",                 // wide 16:9 — top of the project page
    gallery: [                           // project page, top to bottom
      "gallery-1-wide.jpg",              //   row 1: wide 16:9
      "gallery-2-portrait.jpg",          //   row 2: portrait 4:5 (left)
      "gallery-3-portrait.jpg",          //   row 2: portrait 4:5 (right)
      "gallery-4-wide.jpg",              //   row 3: wide 16:9
      "gallery-5-portrait.jpg",          //   row 4: portrait 4:5 (left)
      "gallery-6-portrait.jpg",          //   row 4: portrait 4:5 (right)
      "gallery-7-wide.jpg",              //   row 5: wide 16:9
      "gallery-8-wide.jpg"               //   row 6: wide 16:9
    ],
    quote:   "quote-portrait.jpg"        // portrait 4:5 — photo next to the quote
  },

  // Card on the Works page + link in the menu
  label: "NORTHWIND",
  menu:  "Northwind",
  year:  "2024",
  type:  "Brand identity",

  // Project page
  meta:  "Brand identity · 2024",
  title: "Northwind",          // <br> = line break
  brief: "Northwind’s name was strong but its look belonged to the company it used to be. We reset the brand — positioning, identity and voice — and carried it across their site, stores and sales material.",

  quote: {
    text: "Our sales team finally has a story they believe, and a look that backs it up.",
    name: "Henrik Olsen",
    role: "CEO, Northwind"
  },

  // Stored for the case study (not shown on the page yet)
  results: [
    ["Perception", "Customers calling the brand modern rose from 22% to 51%.", "+29 pts"],
    ["Pipeline", "Qualified leads up 19% within two quarters.", "+19%"],
    ["Rollout", "Site, stores and sales deck relaunched in a single week.", "1 week"],
    ["Guidelines", "One 48-page guide replaced six old decks.", "48 pages"]
  ]
};
