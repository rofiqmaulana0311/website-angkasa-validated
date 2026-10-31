// Aurel — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).aurel={
  images: {
    cover:   "cover.webp",                // square 1:1 — Home card, Works card, "Next project"
    hero:    "hero.webp",                 // wide 16:9 — top of the project page
    gallery: [   // project page, top to bottom — add as many as you like: "wide" in the name = full row, "portrait" = 2 per row, "small" = 3 per row
      "gallery-1-wide.webp",              //   row 1: wide 16:9
      "gallery-2-portrait.webp",          //   row 2: portrait 4:5 (left)
      "gallery-3-portrait.webp",          //   row 2: portrait 4:5 (right)
      "gallery-4-wide.webp",              //   row 3: wide 16:9
      "gallery-5-portrait.webp",          //   row 4: portrait 4:5 (left)
      "gallery-6-portrait.webp",          //   row 4: portrait 4:5 (right)
      "gallery-7-wide.webp",              //   row 5: wide 16:9
      "gallery-8-wide.webp"               //   row 6: wide 16:9
    ],
    quote:   "quote-portrait.webp"        // portrait 4:5 — photo next to the quote
  },

  // Card on the Works page + link in the menu
  label: "AUREL+",
  menu:  "Aurel",
  year:  "2024",
  type:  "Digital product",

  // Project page
  meta:  "Digital product · 2024",
  title: "Aurel",          // <br> = line break
  brief: "Aurel’s booking app lost people between the first tap and the payment. We redesigned the flow end to end, rebuilt the interface and shipped it in stages so their service never went offline.",

  quote: {
    text: "Customers stopped dropping out halfway through. Support tickets fell the same month.",
    name: "Priya Nair",
    role: "Head of product, Aurel"
  },

  // Stored for the case study (not shown on the page yet)
  results: [
    ["Conversion", "Booking completion up 17% after the new flow.", "+17%"],
    ["Speed", "Time to book cut from four minutes to ninety seconds.", "90 sec"],
    ["Rating", "App store rating rose from 3.8 to 4.6.", "4.6"],
    ["Release", "Six staged releases shipped with no downtime.", "0 outages"]
  ]
};
