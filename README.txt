WEDDING INVITATION - HOW TO EDIT
================================
Open index.html in your browser (double-click it) to preview.
Edit files with a code editor (VS Code, Notepad++, Sublime) - NOT Word. Save as UTF-8.
After saving, refresh the browser page.

WHAT TO EDIT
------------
js/config.js     <- MOST CHANGES ARE HERE
                    names, parents, date, time, place, schedule, map address,
                    Telegram/WhatsApp/Messenger links, intro style,
                    countdown date (WEDDING_DATE), photo list, music file
images/          <- replace photo-1.jpg ... photo-8.jpg with your photos
                    (keep the same file names, or change names in config.js)
                    logo.png = emblem on the doors
audio/music.mp3  <- replace with your own song (keep the name music.mp3)
css/style.css    <- colors (top of file: --maroon, --gold, --paper), fonts, sizes
index.html       <- page layout and fixed text; Khmer/English labels such as
                    "Thank you" are in js/main.js (search: var T=)

PHOTO NUMBERS (in config.js, 1st line = photo 1)
------------------------------------------------
Photos 1-8 are used in: the scratch page, the opening slideshow,
"Our Love Story" polaroids, and the big final photo.

DON'T FORGET
------------
- Date: change BOTH the text (date, day, month, dateEn ...) AND WEDDING_DATE.
- Schedule: if you add/remove rows, do it in schedule AND scheduleEn,
  and keep the icons list the same length.
- Use photos about 800px wide so the page loads fast.
- To put it online, upload the WHOLE folder (not only index.html) to your
  hosting (Netlify, GitHub Pages, etc.).
- js/scratch-logo.js is the logo on the scratch card (embedded data) - leave it.
