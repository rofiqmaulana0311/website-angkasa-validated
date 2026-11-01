// Journal articles, newest first. All of them are shown in full on the Journal page,
// and the four newest appear as cards in "Notes from the studio" on Home.
// Each article:
//   slug     – used in the link (#journal/slug); letters, numbers and dashes only
//   cover    – image in this folder, landscape 16:10 (suggested 1600 x 1000, .webp)
//   body     – paragraphs in order. Start a line with "## " for a subheading, "> " for a pull quote.
// Keep each article short: 3 to 5 paragraphs reads best on the page.
window.POSTS = [
  {
    slug: "brand-system-engineers",
    title: "What a brand system owes its engineers.",
    category: "Brand systems",
    date: "June 12, 2026",
    read: "2 min read",
    cover: "brand-system-engineers.webp",
    excerpt: "A brand system only lasts if the people who ship the product can use it without asking us.",
    body: [
      "Most brand systems are written for the people who made them, then quietly ignored six months later. The engineers who build with them were never the audience.",
      "So we design for them first. Tokens are named for what they do (surface, text, border, accent), not for moods, so the palette can change without renaming anything.",
      "Every system lives in the product's own repository and ships like code: versioned, reviewed and released, so brand and product cannot drift apart unnoticed.",
      "> The test: can their team ship a campaign without us? If not, we are not done."
    ]
  },
  {
    slug: "designing-in-the-browser",
    title: "Designing in the browser.",
    category: "Interface",
    date: "May 5, 2026",
    read: "2 min read",
    cover: "designing-in-the-browser.webp",
    excerpt: "Static mockups hide the hard parts of an interface, so we move the second half of every project into the browser.",
    body: [
      "A mockup shows how a screen looks. It cannot show slow data, a name that is too long, or a phone on one bar of signal.",
      "Halfway through every product project we stop drawing and start building. Motion, empty states and errors get designed because we can see them, and clients review the real thing on their own devices.",
      "Early direction still happens in a design tool. The browser is where decisions that need real content get made.",
      "> Our best review came from a client testing the prototype on the train home."
    ]
  },
  {
    slug: "inside-a-studio-week",
    title: "Inside an Angkasa Studio week.",
    category: "Studio",
    date: "April 21, 2026",
    read: "2 min read",
    cover: "inside-a-studio-week.webp",
    excerpt: "A small team, a few projects at a time, and a week built around two fixed moments.",
    body: [
      "Monday starts with one list per project: what the client will see on Friday. If it is not on the list, it waits.",
      "Tuesday to Thursday, mornings are for making with no meetings, and afternoons are for reviews and pairing with the client's team. Seniors work on no more than two projects at once.",
      "Friday, every client gets a walkthrough of real work, even when it is rough. Feedback stays small and nobody is surprised at the end.",
      "> A predictable week is what lets the work itself be ambitious."
    ]
  },
  {
    slug: "price-in-outcomes",
    title: "Why we price in outcomes, not hours.",
    category: "Practice",
    date: "March 2, 2026",
    read: "2 min read",
    cover: "price-in-outcomes.webp",
    excerpt: "Hourly billing rewards the slowest version of the work, so we price around what a project has to achieve.",
    body: [
      "Billing by the hour meant the faster we got, the less we earned for the same result. The incentives were quietly wrong.",
      "Now every proposal starts with what has to change: a launch date, a conversion number, a system the client's team can run alone. The price follows that scope, and it is fixed.",
      "Clients get a number that does not move and a clear definition of done. We stay motivated to find the fastest good solution. When the goal changes, we agree a new outcome and price together.",
      "> Clients do not buy hours. They buy what is different afterwards."
    ]
  }
];
