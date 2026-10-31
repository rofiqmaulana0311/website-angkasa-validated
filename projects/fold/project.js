// Fold Apparel — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).fold={
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
    quote:   "quote-portrait.webp"        // portrait 4:5 — photo next to the quote
  },

  // Card on the Works page + link in the menu
  label: "FOLD+",
  menu:  "Fold+",
  year:  "2026",
  type:  "Digital product",
  home:  1,          // position on the home page (1–4); delete this line to hide it from home

  // Project page
  meta:  "Digital product · Design system · 2026",
  title: "Fold<br>Apparel",          // <br> = line break
  brief: "FOLD+ had three storefronts, two checkout flows and a design file no one trusted. We rebuilt the product surface as one system — tokens, components and templates their engineers own — then shipped the new shop alongside them over eleven weeks.",

  quote: {
    text: "The old file was a museum. What we have now is a library our engineers actually pull from, and the shop has not drifted since.",
    name: "Noor Haddad",
    role: "Head of digital, Fold"
  },

  // Stored for the case study (not shown on the page yet)
  results: [
    ["Checkout", "Checkout completion up 21% on the same traffic, with the three storefronts collapsed into one flow.", "+21%"],
    ["Speed", "Brief to launch in eleven weeks, designed and built in parallel rather than handed over at the end.", "11 wks"],
    ["System", "One token set and 64 components now running every surface, named the way their engineers name things.", "180 tokens"],
    ["Handover", "Two seasonal campaigns shipped by their own team since handover, with nothing redrawn by the studio.", "0 redraws"]
  ]
};
