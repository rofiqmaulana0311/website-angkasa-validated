// Luma — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).luma={
  images: {
    cover:   "cover.jpg",                // square 1:1 — Home card, Works card, "Next project"
    hero:    "hero.jpg",                 // wide 16:9 — top of the project page
    gallery: [   // project page, top to bottom — add as many as you like: "wide" in the name = full row, "portrait" = 2 per row, "small" = 3 per row
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
  label: "LUMA®",
  menu:  "Luma",
  year:  "2023",
  type:  "Content & motion",

  // Project page
  meta:  "Content & motion · 2023",
  title: "Luma",          // <br> = line break
  brief: "Luma had a product people loved and almost no content to show for it. We built a motion language and a content engine — short films, templates and a weekly production routine their own team runs.",

  quote: {
    text: "We went from posting when we could to a rhythm we can keep. The motion language does the rest.",
    name: "Sofia Marchetti",
    role: "Content lead, Luma"
  },

  // Stored for the case study (not shown on the page yet)
  results: [
    ["Output", "Content published each month tripled with the same team.", "3×"],
    ["Engagement", "Social engagement up 62% across all channels.", "+62%"],
    ["Library", "120 motion templates now live in their editing tool.", "120 files"],
    ["Routine", "One weekly production cycle, run in house since launch.", "52 wks"]
  ]
};
