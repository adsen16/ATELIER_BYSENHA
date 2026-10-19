# Atelier website — editable source

This is the latest version of your website, including the rotating floating painting, stronger floor shadow, gallery-wall transition and automatic Index scrolling that stops when you interact.

No npm installation or build step is needed. All artwork images are included.

## Run it on your computer

1. Unzip the download.
2. Open the `atelier-website` folder in your code editor.
3. Open a terminal in that folder and run:

   ```sh
   python3 -m http.server 8000
   ```

4. Open http://localhost:8000 in your browser.

Alternatively, use your editor's local web-server extension, serving this folder as the root. Do not simply double-click index.html: the site uses root-relative image paths and page routes.

## Where to make changes

| File | What it controls |
| --- | --- |
| `app.js` | Artwork data, page content, rotation, floating motion, scroll transitions, sliders and automatic Index scrolling |
| `style.css` | Colours, fonts, spacing, artwork sizes, frames, shadows and mobile layout |
| `index.html` | Main HTML shell, browser metadata, logo, menu and contact details |
| `images/` | Artwork, detail images and artist portrait |
| `about/index.html`, `index/index.html`, `works/*/index.html` | Entry files for direct page links and their metadata |

The HTML shell is repeated in the route entry files. If you change the logo, menu or contact details in index.html, apply those edits to the other index.html files too. Preserve the unique page titles and descriptions.

## Common edits

- **Artworks:** edit the `artworks` array at the start of app.js. It contains titles, years, media, dimensions and descriptions. Images follow the numbered names in images/.
- **Biography:** edit the `about()` function in app.js.
- **Contact details:** replace artist@example.com and @artistname in the HTML files. Replace the Instagram URL with your real profile.
- **Rotation speed:** find `freeAngle=elapsed*9` in app.js. The 9 is degrees per second: 9 gives a full turn every 40 seconds; 6 gives one every 60 seconds.
- **Floating height:** find `Math.sin(elapsed*.8)*14*hover`. The 14 is the vertical movement in pixels.
- **Shadow intensity:** find `(.29+Math.sin(elapsed*.8)*.035)` in app.js. Increase .29 for a darker shadow. In style.css, the final `.floor-shadow` rule controls its height and blur; decrease the 17px blur for a sharper shadow.
- **Index scrolling speed:** find `position+dt*22` in app.js. The 22 is pixels per second. Use a smaller number for slower movement.
- **Index start delay:** find `performance.now()+1200`. The delay is in milliseconds.
- **Wall colour:** change the final `.scene{background:#eeece6}` rule in style.css.
- **General background:** change `--paper:#f5f3ee` at the start of style.css.

## Placeholder assets

The four paintings are AI-generated demonstration assets. Detail images are crops. The portrait file currently contains an artwork placeholder. Replace it with your portrait.

The second artwork-slider view is a simple wall-scale mockup, not a real interior photograph. Its markup is inside `work()` in app.js; replace it with a photo when ready.

## Hosting your changes

You can upload the contents of this folder to a static website host. Keep the folder structure and serve it from the root of the domain. No server-side code is required.

Editing this downloaded copy does not automatically update the live website in ChatGPT. You can return with your edited files and ask for the live site to be updated.
