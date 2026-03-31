Act as an elite, Awwwards-winning Creative Frontend Developer and Art Director specializing in luxury outdoor/nature editorial aesthetics. Your task is to scaffold a complete, production-ready Vite + React + Tailwind CSS project for "Laxá á Ásum — Iceland's Premier Salmon River." This is a high-end salmon fishing lodge and river estate in North Iceland. The audience is wealthy international anglers. The tone is: quiet luxury, Icelandic wilderness, editorial restraint — think Kinfolk magazine meets a Michelin-starred fishing lodge.

═══════════════════════════════════════

1. TECH STACK & PROJECT STRUCTURE
   ═══════════════════════════════════════

- Vite + React 18 (functional components, hooks only)
- Tailwind CSS v3 with a fully custom theme (extend, do NOT use default palette names — define custom tokens)
- Framer Motion for all animations
- React Router v6 for navigation
- Axios for API calls
- Phosphor Icons (react-phosphor-icons) — NO Lucide, NO Heroicons
- Google Fonts via @fontsource: 'Cormorant Garamond' (headings, display) + 'DM Sans' (body, UI)

File structure:
src/
components/
layout/ (Navbar, Footer)
ui/ (Button, Tag, Divider, TeamCard, GalleryGrid, ContactForm)
sections/ (Hero, Overview, OurTeam, Gallery, GetInTouch, LiveStats, WeatherWidget)
hooks/ (useWeather.js, useFishingStats.js, useScrollProgress.js)
lib/ (api.js, utils.js)
assets/ (placeholder — use Unsplash URLs)
pages/ (Home.jsx)
App.jsx
main.jsx
index.css

═══════════════════════════════════════ 2. STRICT ART DIRECTION & COLOR PALETTE
═══════════════════════════════════════
Theme: Icelandic river estate — glacial water, weathered lava stone, bone white, amber light.
PROHIBITIONS: NO purple, blue gradients, neon, or tech/SaaS aesthetics. NO generic card grids.

Exact Tailwind custom tokens (tailwind.config.js):
colors:
stone-deep: '#1A1917' // Deep charcoal/ink
stone-warm: '#2C2A26' // Dark surface
parchment: '#F0EBE1' // Background base
parchment-light: '#F7F4EE' // Card surfaces
taupe: '#8C867E' // Muted text
river: '#3D6B6B' // Single allowed cool-tone: deep teal/slate (river water)
ember: '#B85C38' // Accent — ember/terracotta
bone: '#D9D3C7' // Borders, dividers
fontFamily:
display: ['Cormorant Garamond', 'serif']
body: ['DM Sans', 'sans-serif']

Image treatment: All images use a CSS filter to give an editorial, slightly desaturated Icelandic feel:
filter: grayscale(25%) sepia(10%) hue-rotate(5deg) contrast(1.05) brightness(0.95)
Transition to full color on hover (300ms ease).

═══════════════════════════════════════ 3. GLOBAL LAYOUT & EFFECTS
═══════════════════════════════════════

- Noise texture: Fixed SVG fractal noise overlay, opacity 0.04, pointer-events none, z-index 9999
- Horizontal rule system: Use thin 1px bone-colored lines liberally to divide sections — editorial newspaper feel
- Scroll progress bar: Thin ember-colored line at very top of viewport (fixed, z-50)
- Smooth scroll: CSS scroll-behavior smooth + Framer Motion layout animations
- Section numbering: Each section has a small "01", "02" etc. label in taupe, Cormorant Garamond, positioned to the left margin

Navbar:

- Ultra-minimal sticky nav. Logo left (SVG logotype using the fish/wave mark from Laxá á Ásum). Links center: HOME | OVERVIEW | OUR TEAM | GALLERY | CONTACT. CTA button right: "Book a Rod" — ember background, bone text.
- On scroll: nav gains subtle backdrop-blur and very light parchment/80 background.
- Mobile: full-screen slide-in menu (Framer Motion AnimatePresence).

═══════════════════════════════════════ 4. SECTIONS (build all of these)
═══════════════════════════════════════

── SECTION 01: HERO ──
Full-viewport hero. Background: Unsplash video loop OR full-bleed image of Icelandic river landscape (use https://images.unsplash.com/photo-1506905925346-21bda4d32df4 as fallback). Apply the image filter. Dark gradient overlay bottom 60% so text is legible.

- Large display headline: "Laxá á Ásum" in Cormorant Garamond 96px/italic, bone color
- Subheadline: "Iceland's Premier Salmon River" — DM Sans, taupe
- Tagline: "World-class salmon fishing, pristine nature, and refined lodge accommodations await." — small, bone, max-w-md
- Two CTAs: "Explore the River" (ghost/outline, bone border) + "Book a Session" (ember filled)
- Scroll indicator: animated chevron-down bouncing
- Framer Motion: hero text staggered reveal on mount (y: 40 → 0, opacity 0 → 1, stagger 0.15s)

── SECTION 02: OVERVIEW ──
Full editorial layout. Left: large section label "02 / Overview" rotated -90deg on far left. Right: content area.
Four tab pills: "The River" | "The Lodge" | "The Fishing" | "The Service" | "Location"
Active tab: ember background. Inactive: bone border.
Tab content panels use AnimatePresence (slide + fade).

THE RIVER content:
Headline: "A River of Singular Reputation" (Cormorant Garamond, large, with italic words)
Body text: [insert full river copy from site text above]
Stat callouts: Inline highlighted stats in a 3-column micro-grid:

- "42-Year Average" / "955 Salmon" / "Seasonal Catch"
- "1795" / "Salmon in 2015" / "Record Season"
- "4 Rods" / "Only" / "Maximum Guests"
- "18 km" / "Total" / "Fishable Water"
  Each stat: large Cormorant number, small DM Sans label.

Side image: tall vertical Unsplash image (river/Iceland) with arched top: border-radius: 160px 4px 4px 4px. Framer Motion clip-path reveal on scroll.

THE LODGE tab: Placeholder text about luxury accommodation. 5-star lodge, Ásgarður, rebuilt 2017. Two ensuite twin rooms. Full-board catering.

── SECTION 03: LIVE FISHING STATISTICS ──
This is the most technically interesting section. Pull live data from:
https://veiditolur.angling.is/veidisvaedi/laxa-a-asum

The page has two data tables:

1. "Heildarveiði ára" (Total Annual Catch) — year + salmon count going back to 1974
2. "Veiði eftir vikum" (Weekly Catch for current season) — date + weekly count + cumulative

SCRAPING STRATEGY: Since this is a public Icelandic fishing statistics site, create a custom hook useFishingStats() that:

- Fetches via a CORS proxy or direct fetch to the page URL
- Parses the HTML response to extract the two tables
- Falls back to hardcoded 2024 data if fetch fails (show "Data may be delayed" notice)
- Include full error handling and loading states

Hardcoded fallback data (include this in the hook):
Annual: [{year: 2025, count: 471}, {year: 2024, count: 1008}, {year: 2023, count: 660}, {year: 2022, count: 820}, {year: 2021, count: 800}, {year: 2020, count: 671}, {year: 2019, count: 807}, ...]
Weekly 2025: [{date: '2. júlí', weekly: 4, cumulative: 4}, {date: '9. júlí', weekly: 16, cumulative: 20}, ...]

Display layout:

- Full-width section on parchment-light background with stone-deep header bar
- Left panel: Vertical bar chart built with pure CSS (no chart library) showing last 20 years of annual catch. Bars are ember-colored with hover tooltip showing year + count.
- Right panel: Current season weekly table — clean editorial table, alternating parchment/white rows, bold cumulative column in ember
- Large display stat at top: "Current Season" + year + total so far in huge Cormorant Garamond
- Subtle loading skeleton animation while data fetches

── SECTION 04: WEATHER WIDGET ──
Small tasteful section or sidebar component (can be integrated into hero or overview).
Use Open-Meteo API (free, no API key needed):
https://api.open-meteo.com/v1/forecast?latitude=65.65&longitude=-20.15&current=temperature_2m,windspeed_10m,weathercode&wind_speed_unit=ms&timezone=Atlantic/Reykjavik

Location: Blönduós area (lat 65.65, lon -20.15) — near the river.
Display: Temperature (°C) + Wind speed (m/s) + Weather icon from Phosphor matching weathercode + "River Conditions" label.
Style: Minimal card, bone border, taupe label, stone-deep text.

── SECTION 05: OUR TEAM ──
Section label: "05 / The Guardians"
Layout: Three cards in a row on desktop, stacked on mobile.
Each card:

- Circular portrait photo (border: 3px solid bone)
- Name in Cormorant Garamond display
- Title in DM Sans taupe small-caps
- Email with Envelope icon (Phosphor)
- Phone with Phone icon (Phosphor)
- Card background: parchment-light, no box-shadow, just a 1px bone border
- Hover: card lifts slightly (y: -4px, Framer Motion), border turns ember

People:

1. Páll Á. Jónsson | Chairman VLÁ | laxa@asum.is | +354 858 6101
2. Sturla Birgisson | Managing Director Laxás ehf. | fishing@asum.is | +354 694 6311
3. Freyja Kjartansdóttir | Lodge Manager | fishing@asum.is | +354 862 0713

Portrait images: Use Unsplash placeholder faces:
https://randomuser.me/api/portraits/men/52.jpg
https://randomuser.me/api/portraits/men/31.jpg
https://randomuser.me/api/portraits/women/44.jpg

── SECTION 06: GALLERY ──
Three-tab filter: "The River" | "The Lodge" | "The Fishing"
Grid: 4-column masonry-style on desktop (CSS columns: 4, column-gap). Some images taller than others for editorial feel.
Images: Use these Unsplash IDs (Iceland/salmon/river):
photo-1506905925346-21bda4d32df4 (aerial Iceland river)
photo-1508193638397-1c4234db14d8 (Iceland landscape)
photo-1531366936337-7c912a4589a7 (fly fishing)
photo-1578662996442-48f60103fc96 (salmon close-up)
photo-1504280390367-361c6d9f38f4 (Icelandic wilderness)
photo-1519681393784-d120267933ba (dramatic Iceland sky)
photo-1501854140801-50d01698950b (Iceland aerial)
photo-1548425588-c1c6bb7d1c53 (river fishing)
Apply filter treatment. Hover: image scales 1.03, filter lifts to full color, overlay with "VIEW" text.
Framer Motion: staggered grid reveal on scroll.
Lightbox: clicking an image opens a simple full-screen overlay (Framer Motion AnimatePresence) with prev/next controls.

── SECTION 07: USEFUL LINKS / RESOURCES ──
Owner request: Add a links sidebar or section equivalent to current "Useful Links"
Layout: Horizontal cards or link list with icons
Links:

- "Fishing Statistics" → https://veiditolur.angling.is/veidisvaedi/laxa-a-asum (BarChart icon)
- "Science Report" → # (BookOpen icon)
- "Download Fishing Map" → # (MapTrifold icon)
- "The River" (overview anchor) (Waves icon)
- "The Lodge" (overview anchor) (House icon)
- "Location" → Google Maps link for Svínvetningabraut, 541 Blönduós (MapPin icon)
  Style: Horizontal scrollable strip on mobile, 3-column grid on desktop. Each item: parchment-light card, ember icon, stone-deep label. Hover: ember border.

── SECTION 08: GET IN TOUCH ──
Two-column layout: Left: form. Right: large editorial image (Unsplash Iceland lodge/nature).
Form fields (no form tag — use div+input for React):

- Name (text)
- Email (email)
- Phone (tel)
- Message (textarea)
- Submit button: full-width, ember background, "Send Enquiry →"
  Form handling: useState for all fields. onSubmit: POST to a Formspree endpoint (use https://formspree.io/f/placeholder as the action URL). Show success/error state with AnimatePresence.
  Left below form: contact info block:
  📞 694 6311
  ✉ fishing@asum.is
  📍 Svínvetningabraut, 541 Blönduós

Footer:
Three columns: Logo + tagline | Useful links list | About blurb
Bottom bar: "© 2025 Laxá á Ásum. All rights reserved." centered, bone/70 color.
Very thin ember top border on footer.

═══════════════════════════════════════ 5. ANIMATION SYSTEM (Framer Motion)
═══════════════════════════════════════
Create a reusable FadeUp component:
const FadeUp = ({ children, delay = 0 }) => (
<motion.div
initial={{ opacity: 0, y: 32 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} >
{children}
</motion.div>
)

Create a StaggerParent + StaggerChild pair for lists.
Image reveal: clip-path inset(0 0 100% 0) → inset(0 0 0% 0) on scroll.
Page transitions: wrap routes in AnimatePresence with a simple fade.

═══════════════════════════════════════ 6. RESPONSIVE BREAKPOINTS
═══════════════════════════════════════
Mobile-first. Key breakpoints: sm(640) md(768) lg(1024) xl(1280) 2xl(1536)

- Hero: full height, stacked text, smaller font
- Overview: tabs scroll horizontally on mobile
- Stats section: single column, chart shrinks
- Team: 1 col mobile, 3 col desktop
- Gallery: 2 col mobile, 4 col desktop
- Footer: stacked on mobile

═══════════════════════════════════════ 7. CONTENT — FULL COPY
═══════════════════════════════════════
[Embed ALL copy from the site text provided: River overview, Destination section, Team bios, all contact info. Use the exact Icelandic proper nouns — Laxárvatn, Húnaflói, Ásgarður, East-Húnavatnssýsla, etc.]

Hero tagline: "World-class salmon fishing, pristine nature, and refined lodge accommodations await."
River headline: "A River of Singular Reputation"
Team section headline: "The Guardians of the River"
Gallery headline: "Life on the River"
Contact headline: "Reserve Your Rods"

═══════════════════════════════════════ 8. PACKAGE.JSON DEPENDENCIES
═══════════════════════════════════════
{
"dependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.22.0",
"framer-motion": "^11.0.0",
"axios": "^1.6.0",
"@phosphor-icons/react": "^2.1.0",
"@fontsource/cormorant-garamond": "^5.0.0",
"@fontsource/dm-sans": "^5.0.0"
},
"devDependencies": {
"vite": "^5.0.0",
"@vitejs/plugin-react": "^4.0.0",
"tailwindcss": "^3.4.0",
"autoprefixer": "^10.4.0",
"postcss": "^8.4.0"
}
}

═══════════════════════════════════════ 9. OUTPUT FORMAT
═══════════════════════════════════════
Output the following files in order, each preceded by a // === FILENAME === comment:

1. package.json
2. vite.config.js
3. tailwind.config.js
4. postcss.config.js
5. index.html
6. src/index.css (global styles, noise overlay, custom scrollbar, CSS variables)
7. src/main.jsx
8. src/App.jsx
9. src/components/layout/Navbar.jsx
10. src/components/layout/Footer.jsx
11. src/components/ui/FadeUp.jsx (reusable animation wrapper)
12. src/hooks/useWeather.js
13. src/hooks/useFishingStats.js
14. src/components/sections/Hero.jsx
15. src/components/sections/Overview.jsx
16. src/components/sections/LiveStats.jsx
17. src/components/sections/WeatherWidget.jsx
18. src/components/sections/OurTeam.jsx
19. src/components/sections/Gallery.jsx
20. src/components/sections/UsefulLinks.jsx
21. src/components/sections/GetInTouch.jsx
22. src/pages/Home.jsx

Write clean, well-commented React. No TypeScript. No unnecessary complexity. Prioritize visual quality and editorial elegance over clever abstractions. Begin outputting code immediately with no preamble.
