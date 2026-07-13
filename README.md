# Blommas Cocktail & Eatery — Website

A static, multi-page website for Blommas Cocktail & Eatery: a modern minimal restaurant/cocktail bar site with menu browsing and table reservations.

## Structure

```
index.html      Home — hero, about teaser, chef's picks, hours strip, gallery, CTA
menu.html       Full menu with tabbed categories (Starters, Mains, Desserts, Cocktails, Mocktails & Wine)
booking.html    Reservation request form
about.html      Restaurant story and values
contact.html    Location, hours, phone/email, embedded map
css/styles.css  Shared design system (colors, type, components)
js/script.js    Nav toggle, sticky header, menu tabs, scroll reveal, booking form handling
assets/         Place real logo/photography files here
```

## Running locally

No build step required. From this directory, serve the files with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Next steps / TODO

- **Logo & photography:** All images are placeholder color blocks labeled with a caption (e.g. "Photo: Rose Spritz"). Drop real files into `assets/` and swap the `.ph` placeholder `<div>`s for `<img>` tags, and replace the inline SVG logo mark in each page's header/footer with the real logo file.
- **Reservation form backend:** The booking form posts to `https://formspree.io/f/YOUR_FORM_ID` in `booking.html`. Create a free [Formspree](https://formspree.io) account, create a form, and replace `YOUR_FORM_ID` with the real endpoint ID. Until then, submissions show a success message locally but are not actually sent anywhere.
- **Contact details:** Phone number, email, and address are placeholders — update them in every page's footer and on `contact.html`/`booking.html`.
- **Map embed:** `contact.html` uses a keyless Google Maps embed based on the placeholder address string — update the query in the iframe `src` once the real address is set.
