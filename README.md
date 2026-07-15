# Blommas Cocktail & Eatery — Website

A static, multi-page website for Blommas Cocktail & Eatery: a modern minimal restaurant/cocktail bar site with menu browsing and table reservations.

## Structure

```
index.html      Home — hero, about teaser, chef's picks, testimonials, hours strip, gallery teaser, private events teaser, CTA
menu.html       Full menu with tabbed categories (Starters, Mains, Desserts, Cocktails, Mocktails & Wine)
booking.html    Reservation request form
gallery.html    Filterable photo gallery (All / Space / Food / Cocktails)
events.html     Private events packages and inquiry form
about.html      Restaurant story and values
contact.html    Location, hours, phone/email, map placeholder
css/styles.css  Shared design system (colors, type, components)
js/script.js    Nav toggle, sticky header, menu/gallery tabs, scroll reveal, form handling
assets/logo.png Real Blommas logo — used as the header/footer mark and favicon
```

## Running locally

No build step required. From this directory, serve the files with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Next steps / TODO

- **Logo:** Done — `assets/logo.png` is the real Blommas logo, wired in as the header/footer mark and browser favicon on every page.
- **Photography:** All dish/interior images are still placeholder color blocks labeled with a caption (e.g. "Photo: Rose Spritz"). Drop real files into `assets/` and swap the `.ph` placeholder `<div>`s for `<img>` tags.
- **Reservation form backend:** The booking form posts to `https://formspree.io/f/YOUR_FORM_ID` in `booking.html`, and the events inquiry form posts to `https://formspree.io/f/YOUR_EVENTS_FORM_ID` in `events.html`. Create a free [Formspree](https://formspree.io) account, create a form for each, and replace the placeholder IDs. Until then, submissions show a success message locally but are not actually sent anywhere.
- **Contact details:** Phone number, email, and address are placeholders — update them in every page's footer and on `contact.html`/`booking.html`.
- **Map:** `contact.html` currently shows a styled placeholder in place of the map (the address isn't real, so there's nothing to embed yet). Once a real address is set, replace the `.ph.map-frame` div with a Google Maps (or other) embed.
