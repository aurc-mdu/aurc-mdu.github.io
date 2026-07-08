# CSE Symposium site — Razorpay registration, 10 events, sponsors

Static site, free to host on GitHub Pages. Registration and payment for
all 10 events go through Razorpay Payment Pages.

Five files:

- **`events-data.js`** — the one place you edit: event details, each
  event's Razorpay link, the optional Google Form link, and sponsors.
- **`index.html`** — homepage: hero, About, two big Technical /
  Non-Technical buttons (no event details shown here), and the sponsor
  grid. Picking a track reveals a hamburger button in the top-left
  corner; opening it slides in a drawer of that track's 5 events as flip
  cards — tap one to flip and see its blurb, fee, and a link through to
  its full page and Razorpay payment link.
- **`event.html`** — one template that renders a full page per event
  (`event.html?slug=hackathon`, etc.): full description and rules shown
  directly, and a "Register & pay" button to that event's Razorpay page.
- **`ui-effects.js`** — shared across both pages: a Windows 95-style
  loading screen, a short synthesized click sound, and a small sparkle
  burst on every button.
- **`README.md`** — this file.

## 1. Create one Razorpay Payment Page per event

1. Razorpay Dashboard → **Payment Pages** → **Create** — one per event
   (10 total), titled to match, amount set to that event's fee.
2. Under **Additional Fields**, add: Name, Email, Phone, College — mark
   them required. This means Razorpay collects registration details
   directly; you don't need a separate form.
3. Copy each page's link (`https://rzp.io/l/...`) into the matching
   event's `razorpayLink` in `events-data.js`.

Only a small % fee applies per successful transaction — creating and
hosting the pages themselves is free.

## 2. Edit event details

Open `events-data.js` and edit the `events` array — each object has:

- `slug` — used in the URL (`event.html?slug=this-value`).
- `blurb` — short teaser shown on the drawer flip card and at the top of
  the detail page.
- `fullDescription` and `rules` — shown on the detail page.
- `fee`, `image`, `razorpayLink` — as above.

`googleFormUrl` is optional — leave it blank (`""`) to hide the embedded
form on event pages entirely, or set it if organizers want to collect
anything extra beyond what Razorpay already asks for.

Also edit the `sponsors` array (10 objects: name, logo, url).

## 3. Track registrations

Razorpay's dashboard shows every payment plus the custom field data
(name, email, etc.) for each Payment Page, exportable as CSV — no extra
setup needed. If you want it synced to a Google Sheet in real time
instead, Razorpay webhooks can push `payment.captured` events to a free
Google Apps Script Web App that appends a row to a Sheet — ask if you'd
like that snippet, it's a few lines and needs no separate hosting.

## 4. Publish on GitHub Pages

1. Push this folder to a public GitHub repo.
2. **Settings → Pages** → deploy from `main` / root.
3. Live at `https://<username>.github.io/<repo>/`.

## 5. Keep it light at 10k visitors/day

- Compress every event/sponsor image with **TinyPNG** or **Squoosh**
  before adding real posters — placeholders are already lightweight.
- Images already use `loading="lazy"`.
- No external JS libraries — the flip cards, drawer, sparkle effect, and
  loading screen are all hand-rolled CSS/JS.

