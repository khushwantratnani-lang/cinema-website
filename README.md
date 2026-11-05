# Cinema City

A multi-page cinema booking website built with **HTML**, **CSS** and **JavaScript**, with no frameworks or back end. It was designed using the Waterfall methodology.

## Pages

| Page | What it does |
|---|---|
| `index.html` | Home page with the film grid, live search and a genre filter |
| `movies.html` | "Now Showing" list of all films |
| `booking.html` | Film details, showtime picker, ticket counter (1 to 10), clickable seat map and live price total |
| `payment.html` | Checkout with a booking summary and a card form that formats the card number and expiry as you type |
| `confirmation.html` | Booking confirmation message |
| `login.html` | Member login page (demo) |
| `admin.html` | Employee dashboard to add and remove films, with a price and discount |

## How it works

- Film details (title, price, genre, length, rating) are passed between pages in the URL and read with `URLSearchParams`.
- The booking page saves the chosen film, showtime, ticket count and total to `localStorage`, and the checkout and confirmation pages read them back.
- The seat map is built with JavaScript. Ten random seats are marked as taken each time the page loads, and the rest can be selected and deselected.
- The employee dashboard saves films to `localStorage` so the list survives a page refresh.
- The layout is responsive and uses a dark theme with an orange accent.

## Run it

Open `index.html` in any browser. There is nothing to install.

## Notes

- This is a front-end project. The login pages and the payment form are **demos**: nothing is checked, stored on a server or charged. The demo accounts shown on the login pages are made up.
- The film posters in `images/` are plain placeholders, because film posters are copyrighted. Replace `images/*.jpg` with your own images, keeping the same file names, to see them on the site.

## Author

Khushwant Kumar, BSc Computer Science student at Aston University. Released under the MIT licence.
