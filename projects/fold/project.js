// Fold Apparel — edit the text below. Replace an image by overwriting its file in this folder
// (if you use .png / .webp instead, change the file name in "images").
(window.PJ=window.PJ||{}).fold={
  images: {
    cover:   "cover.webp",                // square 1:1 — Home card, Works card, "Next project"
    coverVideo: "cover.webm",            // optional: square looping video (.webm or .mp4) (logo motion) played on the cards; cover.webp is its still frame
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
  label: "FOLD+",
  menu:  "Fold+",
  year:  "2026",
  type:  "Brand identity",
  home:  1,          // position on the home page (1–4); delete this line to hide it from home

  // Project page
  meta:  "Brand identity · Agency partner · 2026",
  title: "Fold<br>Apparel",          // <br> = line break
  brief: "A retail agency won FOLD+ with no designer free for eleven weeks. We joined their team on a monthly contract and built the identity end to end: wordmark, monogram, type and colour, plus a guide their account team now presents from.",

  // Three short texts placed between the gallery images (title + body)
  story: [
    ["The challenge", "FOLD+ sells modular apparel built from a few precise folds. The old look was generic streetwear and said nothing about the idea behind the product."],
    ["The mark", "We built the wordmark and monogram from a single folded square, so the logo carries the product's own construction. The plus sign marks the modular range."],
    ["The system", "A tight palette of ink, paper and one signal colour, a sharp grotesk and fold-based layouts give the agency a kit they can roll out across store, web and packaging."]
  ],

  quote: {
    text: "We pitched it as ours and it was the strongest work in the room. Angkasa felt like the senior team we never had time to hire.",
    name: "Noor Haddad",
    role: "Creative director, partner agency"
  },

  // Shown as "Results" after the last gallery image: [title, text, figure]
  results: [
    ["Capacity", "One extra senior designer for the length of the project, no hiring.", "+1 senior"],
    ["Speed", "Brief to approved identity in eleven weeks.", "11 wks"],
    ["Approval", "Client signed off on the first presented route.", "1st round"],
    ["Handover", "Guide and master files delivered under the agency's name.", "White-label"]
  ]
};
