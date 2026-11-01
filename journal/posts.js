// Journal articles. Newest first; the first one is featured at the top of the Journal page.
// Each article:
//   slug     – used in the link (#journal/slug); letters, numbers and dashes only
//   cover    – image in this folder, landscape 16:10 (suggested 1600 x 1000, .webp)
//   body     – paragraphs in order. Start a line with "## " for a subheading, "> " for a pull quote.
// The two newest articles also show as cards in "Notes from the studio" on Home.
window.POSTS = [
  {
    slug: "brand-system-engineers",
    title: "What a brand system owes its engineers.",
    category: "Brand systems",
    date: "June 12, 2026",
    read: "6 min read",
    cover: "brand-system-engineers.webp",
    excerpt: "A brand system only lasts if the people who ship the product can use it without asking us. Here is what we hand over, and why.",
    body: [
      "Most brand systems are written for the people who made them. They are beautiful on the day of the launch and quietly ignored six months later, because the engineers who have to build with them were never the audience.",
      "We now treat engineers as the first readers of every system we make. If a developer cannot find the right token, component or rule in under a minute, the system has failed, however good it looks in the deck.",
      "## Name things the way they are built",
      "The fastest way to lose an engineering team is to name colours after moods. We name tokens after what they do: surface, text, border, accent. The palette can change next year; the names should not have to.",
      "## Ship the system as code, not as a PDF",
      "Every system we hand over lives in the same repository as the product. Tokens, components and templates are versioned, reviewed and released like any other code, so the brand and the product cannot drift apart without someone noticing.",
      "> The test is simple: can their team ship a campaign without us? If the answer is no, we are not done.",
      "That is the standard we hold ourselves to. It makes the work slower at the start and much faster for everyone after."
    ]
  },
  {
    slug: "designing-in-the-browser",
    title: "Designing in the browser.",
    category: "Interface",
    date: "May 5, 2026",
    read: "5 min read",
    cover: "designing-in-the-browser.webp",
    excerpt: "Static mockups hide the hard parts of an interface. We moved the second half of every product project into the browser.",
    body: [
      "A mockup can show what a screen looks like. It cannot show how it feels when the data is slow, the name is too long, or the user is on a phone with one bar of signal.",
      "Halfway through every product project we stop drawing and start building. The design file becomes a reference, and the browser becomes the place where decisions are made.",
      "## What changes when you build early",
      "Motion stops being a note in the margin. Empty states and error states get designed because you see them. Clients review the real thing on their own devices instead of a link to a frame.",
      "## What we still draw",
      "Early direction, layout ideas and anything we want to throw away quickly still happen in a design tool. The browser is for the decisions that need real content and real constraints.",
      "> The best review we ever had was a client using the prototype on the train home and sending notes before they arrived."
    ]
  },
  {
    slug: "inside-a-studio-week",
    title: "Inside an Angkasa Studio week.",
    category: "Studio",
    date: "April 21, 2026",
    read: "4 min read",
    cover: "inside-a-studio-week.webp",
    excerpt: "Small team, a few projects at a time, and a week built around two fixed moments. This is how the studio actually runs.",
    body: [
      "People often ask how a small studio keeps several projects moving without everything slipping. The honest answer is a very boring week.",
      "## Monday: one list",
      "Every project starts the week with a single list of what will be shown on Friday. Not tasks, just outcomes the client will see. If it is not on the list, it waits.",
      "## Tuesday to Thursday: quiet time",
      "Mornings are for making, without meetings. Afternoons are for reviews, calls and pairing with the client's own team. Seniors work on no more than two projects at once.",
      "## Friday: show the work",
      "Every client gets a short walkthrough of real work every Friday, even when it is rough. It keeps feedback small and frequent, and nobody is surprised at the end.",
      "> A predictable week is what lets the work itself be ambitious."
    ]
  },
  {
    slug: "price-in-outcomes",
    title: "Why we price in outcomes, not hours.",
    category: "Practice",
    date: "March 2, 2026",
    read: "5 min read",
    cover: "price-in-outcomes.webp",
    excerpt: "Hourly billing rewards the slowest version of the work. We price each project around what it has to achieve instead.",
    body: [
      "For years we billed by the hour, and for years the incentives were quietly wrong. The more efficient we became, the less we were paid for the same result.",
      "## How we price now",
      "Every proposal starts with what the project has to change: a launch date, a conversion number, a system the client's team can run alone. The price follows the scope needed to get there, and it is fixed.",
      "## What clients get",
      "A number that does not move, a clear definition of done, and a studio that is motivated to find the fastest good solution rather than the longest one.",
      "## What it asks of us",
      "We have to scope carefully and say no to extras that do not serve the outcome. When the scope genuinely changes, we agree a new outcome and a new price together.",
      "> Clients do not buy hours. They buy the thing that is different afterwards."
    ]
  }
];
