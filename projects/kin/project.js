// KIN — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).kin={
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
  label: "KIN®",
  menu:  "KIN",
  year:  "2025",
  type:  "Design systems",

  // Project page
  meta:  "Design systems · 2025",
  title: "KIN",          // <br> = line break
  brief: "KIN’s product team shipped on three frameworks and four sets of buttons. We unified them into one cross-platform system — tokens, documented components and release tooling — built with their engineers from the first week.",

  quote: {
    text: "The system feels like something we built ourselves, because we did, together.",
    name: "Jonas Weber",
    role: "Design engineering lead, KIN"
  },

  // Stored for the case study (not shown on the page yet)
  results: [
    ["Delivery", "Feature teams ship interface work 40% faster using shared components.", "+40%"],
    ["Coverage", "58 components now cover every web and mobile surface.", "58 parts"],
    ["Quality", "Accessibility defects fell by two thirds after the audit.", "−66%"],
    ["Adoption", "All six product squads were on the system within one quarter.", "6 squads"]
  ]
};
