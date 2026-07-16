# Deploying the AGIX Expo Site on cPanel (alongside WordPress)

The site is plain HTML/CSS/JS — **no WordPress theme, plugin or database is
needed**. It uploads straight to your cPanel hosting and can live next to your
existing WordPress installation without touching it.

**What you need:** the `agix-expo-site.zip` package (contains `index.html`, the
four sub-pages, `css/`, `js/`, `admin/`). You can regenerate it any time with:

```bash
zip -r agix-expo-site.zip index.html about.html exhibitors.html sponsors.html travel.html css js admin
```

---

## Option A — Its own subdomain (recommended)

Result: `https://expo.agixafrica.com` (or replace the content of the existing
`agribizagritechexpo.agixafrica.com` subdomain).

1. **cPanel → Domains → Create a New Domain / Subdomains.** Create
   `expo.agixafrica.com`. Note the *Document Root* it assigns (e.g.
   `public_html/expo.agixafrica.com`). If you're replacing the existing
   WordPress site on `agribizagritechexpo.agixafrica.com`, skip this step and
   use that subdomain's document root instead — but **back up / rename its
   current contents first**.
2. **cPanel → File Manager.** Open the subdomain's document root folder.
3. **Upload** `agix-expo-site.zip` into that folder, right-click it → **Extract**,
   then delete the zip.
4. Confirm `index.html` sits directly in the document root (not inside a
   nested folder — if extraction created one, move the files up one level).
5. **cPanel → SSL/TLS Status** → run **AutoSSL** for the new subdomain so it
   serves over `https://`.
6. Visit the subdomain — the site is live.

## Option B — A subfolder of your WordPress site

Result: `https://agixafrica.com/expo/` while WordPress keeps running at
`https://agixafrica.com`.

1. **cPanel → File Manager** → open `public_html` (your WordPress root — you'll
   see `wp-admin`, `wp-content` etc.).
2. Create a new folder named `expo`.
3. Upload `agix-expo-site.zip` into `expo/`, right-click → **Extract**, delete
   the zip.
4. Visit `https://yourdomain.com/expo/`. No WordPress changes are required:
   WordPress's `.htaccess` rules skip real directories by default
   (`RewriteCond %{REQUEST_FILENAME} !-d`), so the folder is served directly.
   - Only caveat: don't create a WordPress *page* with the slug `expo`, and if
     you use a WP security/caching plugin that rewrites all URLs, whitelist the
     `/expo/` path.

## Option C — Link it from WordPress

Whichever option you choose, add the site to your WordPress menus: WP Admin →
Appearance → Menus → add a **Custom Link** to the deployed URL (e.g. "Expo
2027 – Register"). If you want it to appear inside a WordPress page instead,
embed it: add a Custom HTML block containing
`<iframe src="https://expo.agixafrica.com" style="width:100%;height:100vh;border:0"></iframe>`
— though a direct link gives a better experience than an iframe.

---

## After deploying — 3-minute checklist

1. **Activate email delivery.** Submit one test registration on the live site,
   then check `peace.ezema@agixafrica.com` (including spam) for FormSubmit's
   one-time **activation email** and click the link. Registrations are emailed
   as formatted tables only after this single confirmation.
2. **Send a second test registration** and confirm it arrives in the inbox.
3. **Bookmark the admin page** `https://<your-url>/admin/registrations.html`.
   It shows the local backup copies captured in that browser and exports CSV —
   note it's per-device (the authoritative record is Peace's inbox).

## Updating the site later

Edit the files in this repository (or directly in cPanel File Manager), then
re-upload the changed files. Common edits:

- Dates/venue/copy → the `.html` files
- Countdown target → `EVENT_START` in `js/main.js`
- Registration email → `REGISTRATION_EMAIL` in `js/main.js` (re-activation
  required for a new address)
