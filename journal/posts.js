// Journal articles, newest first. All of them are shown in full on the Journal page,
// and the four newest appear as cards in "Notes from the studio" on Home.
// Each article:
//   slug     – used in the link (#journal/slug); letters, numbers and dashes only
//   cover    – image in this folder, landscape 16:10 (suggested 1600 x 1000, .webp)
//   body     – paragraphs in order. Start a line with "## " for a subheading, "> " for a pull quote.
// Keep each article short: 3 to 5 paragraphs reads best on the page.
window.POSTS = [
  {
    slug: "design-team-by-the-month",
    title: "Why agencies add a design team by the month.",
    category: "Agencies",
    date: "June 12, 2026",
    read: "2 min read",
    cover: "brand-system-engineers.webp",
    excerpt: "Hiring takes months and freelancers come and go. A monthly design team fits the way agency work actually arrives.",
    body: [
      "Agency work comes in waves. One month the studio is quiet, the next three identity briefs land in the same week and nobody has room for them.",
      "Hiring for the peak takes months and leaves you paying for capacity you do not need in the quiet weeks. Freelancers help, until the good ones are booked and you are briefing someone new every time.",
      "A monthly team sits in between. The same senior designers learn your process once, then scale up or down with your workload, on one simple contract.",
      "> You get a design team when you need one, without carrying it when you do not."
    ]
  },
  {
    slug: "what-makes-a-logo-last",
    title: "What makes a logo last.",
    category: "Logo design",
    date: "May 5, 2026",
    read: "2 min read",
    cover: "designing-in-the-browser.webp",
    excerpt: "A logo has to work at 16 pixels, on a sign and in ten years. Here is what we check before anything goes to your client.",
    body: [
      "Most logos look good at the size they were drawn. The ones that last also work as a favicon, an embroidered patch and a building sign.",
      "So every mark we design is tested small first. If it does not read at 16 pixels, it goes back to the sketchbook, however good it looks in the presentation.",
      "We also design in one colour before adding any. A mark that only works with a gradient is a mark that will break the first time it is printed on a receipt.",
      "> Simple is not the goal. Clear at every size is."
    ]
  },
  {
    slug: "white-label-without-the-awkwardness",
    title: "White-label, without the awkwardness.",
    category: "Partnership",
    date: "April 21, 2026",
    read: "2 min read",
    cover: "inside-a-studio-week.webp",
    excerpt: "Most of our work is presented under our partners' names. This is how we make that feel seamless for everyone.",
    body: [
      "When we work as your design team, the work is yours. We present nothing to your client unless you ask us to, and our name stays off the files.",
      "We join your Slack, use your project board and follow your naming and file conventions, so the work looks like it came from inside your studio.",
      "If you want us in the room, we can join client calls as part of your team. If you do not, we stay behind the scenes and make you look good.",
      "> Your client should see one team. Ours is just part of it."
    ]
  },
  {
    slug: "brief-to-brand-guidelines",
    title: "From brief to brand guidelines in four weeks.",
    category: "Brand identity",
    date: "March 2, 2026",
    read: "2 min read",
    cover: "price-in-outcomes.webp",
    excerpt: "What a typical identity looks like inside one monthly cycle, from your brief to files your client can use.",
    body: [
      "Week one: we read your brief and strategy, then explore widely in sketches. You see a short list of directions by Friday.",
      "Week two: three routes, each shown on real applications so your client can picture them. You pick one, or mix two.",
      "Week three: we refine the chosen route, tune the type and colour, and test the mark at every size. Week four: final files and a clear guideline, ready to present under your name.",
      "> Four weeks is not a rule, but it is the rhythm most identities fit."
    ]
  }
];
