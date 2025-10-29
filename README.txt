
Suryansh-Portfolio — Apple Blue Edition
======================================

Contents
--------
- index.html      ← Main page (Apple-style hero, projects, contact)
- style.css       ← Light & dark glassmorphism, animations, responsive styles
- script.js       ← Loader, cursor glow, theme toggle, reveal on scroll, contact handler
- assets/         ← Social SVG icons (instagram, x, github, whatsapp, email)
- README.txt      ← This file

How to deploy on GitHub Pages
----------------------------
1. Create a new GitHub repository named: <your-username>.github.io
   - Example: if your GitHub username is 'suryansh', name the repo 'suryansh.github.io'
2. Upload the entire folder contents (index.html, style.css, script.js, assets/) to the repository root.
   - Use GitHub web upload or push via Git/GitHub Desktop.
3. If you used a different repo name, enable GitHub Pages:
   - Go to the repository -> Settings -> Pages
   - Under 'Source' choose main branch and root (/) -> Save
4. After a minute, your site will be live at: https://<your-username>.github.io/
5. If you update files, just commit & push — changes appear live in ~1 minute.

Notes
-----
- The contact form uses a mailto: link (no backend required). For a working contact form with storage, integrate a form backend (e.g., Formspree, Netlify Forms) and replace the form handler in script.js.
- The Google Drive image link is used as-is; for more reliability consider uploading images into the assets/ folder and referencing locally.
- Tested for modern browsers and mobile screens. For best effects use Safari/Chrome on desktop where backdrop-filter is supported.
