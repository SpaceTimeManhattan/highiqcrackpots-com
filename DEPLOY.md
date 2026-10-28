# HighIqCrackpots.com — GoDaddy deployment

## A. GoDaddy Web Hosting (cPanel) — recommended
1. GoDaddy → My Products → Web Hosting → **Manage** → **cPanel Admin** → **File Manager**.
2. Open `public_html` (the document root for HighIqCrackpots.com). Remove the default `index.html`/placeholder if present.
3. Zip the *contents* of this `site/` folder (not the folder itself), click **Upload**, then right-click the zip → **Extract** into `public_html`.
4. Confirm `public_html/index.html`, `css/`, `js/`, `assets/` exist. Visit https://HighIqCrackpots.com. Enable free SSL under cPanel → SSL/TLS Status if not active.

## B. GoDaddy Website Builder (note)
Website Builder cannot host this package as files; custom HTML blocks render in iframes and break forms/styling. This static package is preferred for full control. If Builder is already attached to the domain, either disconnect it or point the domain to Web Hosting.

## C. Adding GoDaddy Pay Links
1. GoDaddy → Payments (GoDaddy Payments / Commerce) → **Pay Links** → create one link per offer (amount set per engagement, or create per-client links after acceptance).
2. Edit `book.html`, find `var PAY_LINKS=` and paste URLs:
   `{"Session":"https://...","Advisory Board Seat":"https://...","Think-Tank Program":""}`
3. Non-empty links appear in an "Accepted clients — pay here" block. Usually better: send per-client links by email after acceptance and leave these blank.

## D. Alternate: GitHub Pages + GoDaddy DNS
1. Push `site/` contents to a repo (root contains `CNAME` = `HighIqCrackpots.com` and `.nojekyll`). Settings → Pages → deploy from branch `main` / root.
2. GoDaddy → Domain → DNS: add A records for `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; add CNAME `www` → `<user>.github.io`. (An apex cannot be a CNAME at GoDaddy; use the A records for HighIqCrackpots.com.)
3. In Pages settings set custom domain HighIqCrackpots.com and tick **Enforce HTTPS**.

Forms use `mailto:Guide@HighIqCrackpots.com` — no server needed.
