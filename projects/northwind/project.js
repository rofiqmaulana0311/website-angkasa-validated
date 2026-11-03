// Northwind — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).northwind={
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
  label: "NORTHWIND",
  menu:  "Northwind",
  year:  "2024",
  type:  "Brand identity",

  // Project page
  meta:  "Brand identity · 2024",
  title: "Northwind",          // <br> = line break
  brief: "Northwind's name was strong but its look belonged to the company it used to be. Alongside their agency's strategy team, we redrew the identity — mark, type and colour — and built the guidelines they rolled out to every store.",

  // Three short texts placed between the gallery images (title + body)
  story: [
    ["The challenge", "The name was strong, but the look belonged to the company Northwind used to be: dated, heavy and hard to use online."],
    ["The mark", "We redrew the arrow into a lighter, more confident form that points forward without losing the recognition built over the years."],
    ["The system", "A wider type range, a crisp colour palette and a 48-page guide replaced six old decks and let stores relaunch in a single week."]
  ],

  quote: {
    text: "Our sales team finally has a story they believe, and a look that backs it up.",
    name: "Henrik Olsen",
    role: "CEO, Northwind"
  },

  // Shown as "Results" after the last gallery image: [title, text, figure]
  results: [
    ["Refresh", "Mark redrawn, name and equity kept.", "Redrawn"],
    ["Rollout", "Stores and sales material relaunched in one week.", "1 week"],
    ["Guidelines", "One 48-page guide replaced six old decks.", "48 pages"],
    ["Partnership", "Strategy by the agency, identity by Angkasa.", "Joint team"]
  ]
};
