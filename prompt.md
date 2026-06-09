Create a React + Vite landing page for a Hebrew-speaking real estate agent, inspired by the uploaded mobile screenshot.

The page must be fully in Hebrew and RTL.

Project goal:
Build a polished, mobile-first real estate landing page that looks like a premium digital business card, but is scrollable and includes sections for contact links, real estate images, about me, services, featured properties, customer reviews, and a call-to-action.

Important:
- Use React + Vite.
- Use CSS only or CSS modules.
- Do not use Redux.
- Do not use a backend.
- Use lucide-react and react-icons.
- Put the main UI in src/App.jsx.
- Put styles in src/App.css.
- The design should be responsive, but optimized for mobile first.
- Match the visual style of the reference image: phone-style layout, rounded black frame, warm beige/gold colors, elegant buttons, Hebrew labels, circular icons, smooth modern landing page.

General layout:
1. Center a mobile phone-style container on the page.
2. The phone frame should have:
   - black border
   - rounded corners
   - max-width around 390px
   - height around 820px
   - overflow-y: auto
   - hidden scrollbar or custom thin scrollbar
3. The content inside must be scrollable vertically.
4. Add smooth scrolling behavior.

Hero section:
- Top section with luxury real estate background image.
- Use a dark overlay for readability.
- Add a circular white logo/profile badge in the center.
- Inside the badge show:
  “שם הסוכן”
  and below:
  “יועץ נדל״ן”
- Add main Hebrew headline:
  “הדרך החכמה לנכס הבא שלך”
- Add subheadline:
  “ליווי אישי, מקצועי ואמין בקנייה, מכירה והשקעה בנדל״ן”
- Add two CTA buttons:
  “דברו איתי”
  “לנכסים זמינים”
- CTA buttons should scroll/contact appropriately.

Custom menu:
Create a customized floating or sticky Hebrew menu inside the phone.
The menu should be elegant and match the design.
It should include links that scroll to sections:
- ראשי
- יצירת קשר
- נכסים
- אודות
- המלצות
- שירותים

The menu can be either:
A. horizontal pill navigation below the hero, scrollable sideways on mobile
or
B. floating bottom navigation with icons.

Choose the better looking option and implement it cleanly.
The menu must be customized, not a default browser menu.

Contact section:
Create a 2x3 grid of circular contact buttons like the reference.
Each button should be an anchor link.
Use Hebrew labels:
- מייל
- טלפון
- וואטסאפ
- אינסטגרם
- פייסבוק
- אתר

Use placeholder links:
mailto:agent@example.com
tel:+972500000000
https://wa.me/972500000000
https://instagram.com/
https://facebook.com/
https://example.com/

Featured properties section:
Create a section titled:
“נכסים נבחרים”

Show 3 property cards with real estate images.
Each card should include:
- image
- property title
- location
- price
- short description
- button: “לפרטים נוספים”

Use placeholder property content in Hebrew:
1. “דירת 4 חדרים מודרנית”
   “תל אביב”
   “₪3,250,000”
   “דירה משופצת, מוארת וממוקמת באזור מבוקש.”

2. “בית פרטי עם גינה”
   “הרצליה”
   “₪5,900,000”
   “בית משפחתי מרווח עם חצר גדולה וסביבת מגורים שקטה.”

3. “פנטהאוז יוקרתי”
   “רמת גן”
   “₪4,750,000”
   “נוף פתוח, מרפסת גדולה וסטנדרט בנייה גבוה.”

Real estate gallery section:
Create a section titled:
“הצצה לנכסים”

Show a clean image gallery with 4 real estate images.
Use placeholder image paths and comments explaining where to replace them:
- /property-1.jpg
- /property-2.jpg
- /property-3.jpg
- /property-4.jpg

About me section:
Create a section titled:
“קצת עליי”

Use this Hebrew text:
“אני מלווה לקוחות בתהליך קנייה, מכירה והשקעה בנדל״ן עם דגש על שקיפות, זמינות מלאה ותוצאה מדויקת לצרכים שלכם. המטרה שלי היא להפוך את התהליך לפשוט, בטוח ומשתלם יותר — מהשיחה הראשונה ועד חתימת העסקה.”

Add 3 small highlight cards:
- ניסיון בשוק המקומי
- ליווי אישי
- משא ומתן מקצועי

Services section:
Create a section titled:
“השירותים שלי”

Add service cards:
- מכירת נכסים
- קניית דירה
- השקעות נדל״ן
- הערכת שווי נכס
- ליווי משקיעים
- שיווק נכסים

Customer reviews section:
Create a section titled:
“לקוחות ממליצים”

Add 3 review cards in Hebrew:
1. Name: “דניאל כהן”
   Review: “שירות מקצועי, סבלני ואמין. קיבלנו ליווי מלא עד סגירת העסקה.”
   Rating: 5 stars

2. Name: “מיכל לוי”
   Review: “הצלחנו למכור את הדירה במהירות ובמחיר מעולה. ממליצה בחום.”
   Rating: 5 stars

3. Name: “אבי ישראלי”
   Review: “יחס אישי, זמינות גבוהה והבנה אמיתית של הצרכים שלנו.”
   Rating: 5 stars

Final CTA section:
Create a final call-to-action section:
Title:
“מחפשים את הנכס הבא שלכם?”

Text:
“השאירו פרטים או שלחו הודעה בוואטסאפ ואחזור אליכם בהקדם.”

Buttons:
- “שליחת וואטסאפ”
- “חיוג עכשיו”

Footer:
Add a small footer:
“© כל הזכויות שמורות | שם הסוכן”

Styling requirements:
- RTL layout.
- Elegant Hebrew typography.
- Use font-family with Hebrew support:
  Assistant, Heebo, Rubik, Arial, sans-serif.
- Warm luxury palette:
  black / dark charcoal
  white
  beige
  gold
  light cream
- Use rounded cards.
- Use soft shadows.
- Use hover/tap effects.
- Use smooth transitions.
- Keep spacing clean.
- Images should have object-fit: cover.
- Make it look premium, not generic.

Assets:
Use images from the public folder:
public/hero-real-estate.jpg
public/property-1.jpg
public/property-2.jpg
public/property-3.jpg
public/property-4.jpg
public/profile-logo.png

Add comments in the code showing where to replace these assets.

Return the full code for:
- package.json
- src/main.jsx
- src/App.jsx
- src/App.css

Also include terminal commands to install and run:
npm install
npm install lucide-react react-icons
npm run dev