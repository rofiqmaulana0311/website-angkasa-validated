// Ostra — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).sable={
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
      "gallery-8-wide.webp",              //   row 6: wide 16:9
      "gallery-9-portrait.webp",          //   portrait 4:5 (left)
      "gallery-10-portrait.webp",         //   portrait 4:5 (right)
      "gallery-11-wide.webp",             //   wide 16:9
      "gallery-12-wide.webp",             //   wide 16:9
      "gallery-13-portrait.webp",         //   portrait 4:5 (left)
      "gallery-14-portrait.webp",         //   portrait 4:5 (right)
      "gallery-15-portrait.webp",         //   portrait 4:5 (left)
      "gallery-16-portrait.webp",         //   portrait 4:5 (right)
      "gallery-17-wide.webp"              //   wide 16:9
    ],
    quote:   "quote-portrait.webp",        // portrait 4:5 — photo next to the quote
    avatar:  "avatar.webp"               // square 1:1, 400 x 400 — founder photo next to the name
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
  brief: "OSTRA is an IT Solution Network Company focused on delivering reliable, secure, and scalable digital infrastructure for modern businesses.",

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
