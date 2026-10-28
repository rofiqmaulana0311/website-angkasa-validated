// Ostra — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).sable={
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
  label: "OSTRA",
  menu:  "Ostra",
  year:  "2025",
  type:  "Brand Identity",
  home:  4,          // position on the home page (1–4); delete this line to hide it from home

  // Project page
  meta:  "Brand Identity · 2025",
  title: "Ostra",          // <br> = line break
  brief: "Ostra’s range sat on shelves looking like three different companies. We redrew the packaging system — structure, print and typography — so every product reads as one family and costs less to produce.",

  quote: {
    text: "Customers find us on the shelf now. The range finally looks like it belongs together.",
    name: "Tomas Reyes",
    role: "Founder, Ostra"
  },

  // Stored for the case study (not shown on the page yet)
  results: [
    ["Shelf", "Shelf recognition up 28% in retail tests.", "+28%"],
    ["Cost", "Print cost per unit down after consolidating to two finishes.", "−12%"],
    ["Range", "36 products moved onto one packaging system.", "36 SKUs"],
    ["Materials", "Recyclable board used across the full range.", "100%"]
  ]
};
