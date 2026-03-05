# TTRPG Rulebook — Design Brainstorm

<response>
<text>
## Idea A: "Imperial Archives" — Brutalist Data Terminal

**Design Movement:** Brutalist UI meets sci-fi data terminal (think Imperial military database)

**Core Principles:**
1. Raw, utilitarian information density — every pixel earns its place
2. Monospaced type mixed with sharp display headers for a "classified document" feel
3. Stark contrast: near-black backgrounds with amber/gold accent lines
4. Structural honesty — borders, rules, and grids are visible and intentional

**Color Philosophy:**
- Background: #0a0a0f (near-black with blue undertone)
- Primary text: #e8e0cc (aged parchment off-white)
- Accent: #c8922a (Imperial amber/gold — authority and power)
- Danger/Dark Side: #8b1a1a (deep crimson)
- Muted: #3a3a4a (dark slate for dividers)
Emotional intent: The user feels like they are accessing a restricted military database.

**Layout Paradigm:**
- Left sidebar (fixed, narrow) for navigation — like a file tree
- Main content area uses a two-column split: stat block on the left, description on the right
- Tables and ruled lines dominate; no rounded cards
- Section headers use full-width horizontal rules with uppercase labels

**Signature Elements:**
1. Amber horizontal scan-line animation on hover over rows
2. Monospaced "CLASSIFIED" / "LEVEL XX" stamps in the corner of ability blocks
3. Thin 1px border boxes with corner notches (like circuit diagrams)

**Interaction Philosophy:**
- Clicking a class name "loads" the file — subtle terminal-blink transition
- Hover states reveal amber underlines, not background fills
- Accordion-style subclass expansion with a mechanical "click" feel

**Animation:**
- Page transitions: fast horizontal wipe (left-to-right, 120ms)
- Hover: amber border-bottom slides in from left
- Accordion open: height expand with slight opacity fade

**Typography System:**
- Display: "Share Tech Mono" (monospaced, technical)
- Body: "IBM Plex Sans" (readable, authoritative)
- Accent labels: uppercase, 0.08em letter-spacing
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Idea B: "Jedi Codex" — Ink & Stone Editorial

**Design Movement:** Editorial print design meets ancient manuscript — like a Jedi holocron transcribed into a field manual

**Core Principles:**
1. Generous white space and deliberate column margins — reads like a well-typeset book
2. Serif display type for headings, clean sans-serif for body
3. Warm, aged paper tones with deep navy and gold accents
4. Sections feel like chapters — each with a distinct visual "chapter opener"

**Color Philosophy:**
- Background: #f5f0e8 (warm parchment)
- Primary text: #1a1a2e (deep navy-black)
- Accent: #b8860b (dark goldenrod — wisdom and tradition)
- Light Side: #2d5a8e (Jedi blue)
- Dark Side: #6b1a1a (Sith crimson)
- Muted: #8a8070 (warm grey)
Emotional intent: The reader feels like they are studying an ancient, respected text.

**Layout Paradigm:**
- Top navigation bar with chapter-style labels
- Content uses a wide single column with generous side margins (like a textbook)
- Pull-quotes and stat blocks float in the margin
- Class pages use a "chapter opener" with a large decorative initial cap

**Signature Elements:**
1. Decorative horizontal dividers styled as lightsaber blades (thin line with glow)
2. Ability blocks styled as "field notes" — slightly off-white cards with a ruled-line texture
3. Sidebar "margin notes" for GM tips and lore context

**Interaction Philosophy:**
- Navigation feels like turning pages — smooth, unhurried
- Hover reveals a subtle warm glow under links
- Subclass selection uses a tabbed interface styled as bookmarks

**Animation:**
- Page transitions: gentle fade (200ms)
- Hover: warm underline grows from center
- Card entrance: subtle upward drift + opacity

**Typography System:**
- Display: "Playfair Display" (elegant serif)
- Body: "Source Serif 4" (readable serif for long text)
- Labels/UI: "DM Sans" (clean, modern contrast)
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Idea C: "Holonet Terminal" — Dark Sci-Fi Dashboard

**Design Movement:** Dark mode sci-fi dashboard — like a ship's tactical computer or a Holonet intelligence terminal

**Core Principles:**
1. Dark background with luminous, glowing accents — information floats in darkness
2. Asymmetric sidebar navigation with icon + label pairs
3. Cards with subtle inner glow and colored left-border accents per class type
4. Data-dense but breathable — clear hierarchy through size and luminosity

**Color Philosophy:**
- Background: #0d1117 (deep space black)
- Surface: #161b22 (slightly lighter card surface)
- Primary text: #e6edf3 (cool white)
- Force/Blue accent: #58a6ff (electric blue — Force energy)
- Gold accent: #d29922 (amber — credits, Mandalorian)
- Green accent: #3fb950 (success, health)
- Red accent: #f85149 (danger, Dark Side)
- Border: #30363d (subtle dark border)
Emotional intent: The user feels like a skilled operative accessing a live intelligence feed.

**Layout Paradigm:**
- Fixed left sidebar (64px collapsed / 240px expanded) with icon navigation
- Main area uses a responsive card grid for class/ability overviews
- Detail pages use a split: left panel for stats/resources, right for ability descriptions
- Sticky section headers with a subtle frosted-glass blur

**Signature Elements:**
1. Colored left-border accent on each class card (unique color per class)
2. Resource bars (Focus, Energy, Heat) rendered as glowing progress bars
3. Ability cards with a faint radial gradient glow on hover

**Interaction Philosophy:**
- Sidebar collapses to icons on mobile; expands on desktop
- Ability cards flip or expand in-place to show full description
- Filter/search bar at the top of list pages

**Animation:**
- Page transitions: fade + slight scale (0.98 → 1.0, 150ms)
- Hover: card lifts with box-shadow increase and subtle glow
- Sidebar: smooth width transition (200ms ease)

**Typography System:**
- Display: "Rajdhani" (geometric, sci-fi feel without being unreadable)
- Body: "Inter" — wait, avoid Inter. Use "Nunito Sans" instead (friendly, readable)
- Code/stats: "JetBrains Mono" (for dice notation, numbers)
</text>
<probability>0.09</probability>
</response>

---

## Selected Design: Idea C — "Holonet Terminal"

**Rationale:** A dark sci-fi dashboard best serves a rulebook that needs to display dense, structured information (stat blocks, ability lists, resource systems) while remaining visually exciting. The sidebar navigation maps perfectly to the multi-section structure (Classes, Subclasses, Force Powers, Gadgets, etc.), and the colored accent system lets each class have a distinct visual identity without requiring images.
