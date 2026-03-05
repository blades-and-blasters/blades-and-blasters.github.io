# Blades & Blasters

A comprehensive, interactive rulebook for the **Blades & Blasters** TTRPG system. Built with React, TypeScript, and Tailwind CSS with a dark sci-fi "Holonet Terminal" aesthetic.

## Features

- **6 Base Classes** — Jedi Knight, Jedi Consular, Trooper, Smuggler, Agent, Bounty Hunter
- **12 Subclasses** — Each with unique features and progression
- **20 Force Abilities** — Filterable by tag and action type
- **29 Gadgets** — Organized by category and slot cost
- **Weapons & Armor** — Lightsabers, blasters, vibroweapons, and full armor tiers
- **Skills & Stances** — 16 skills and 7 lightsaber stances + 6 fighting styles
- **Changelog** — Track ruleset updates and version history
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Dark Sci-Fi Theme** — Glowing accents, monospace typography, tactical dashboard layout

## Quick Start

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:3000
```

### Build for Production

```bash
pnpm build
```

Output is in the `dist/` folder.

### Preview Production Build

```bash
pnpm preview
```

---

## Project Structure

```
client/
  src/
    lib/gameData.ts          ← All game content (classes, abilities, gadgets, etc.)
    pages/                   ← Page components (Classes, Skills, Weapons, etc.)
    components/Layout.tsx    ← Sidebar navigation
    index.css               ← Global theme and design tokens
  index.html               ← HTML entry point
server/
  index.ts                 ← Express server (static file serving)
package.json              ← Dependencies and scripts
vite.config.ts            ← Vite build configuration
```

---

## Editing Content

All game content is stored in a single file: **`client/src/lib/gameData.ts`**

### Adding a New Class

```typescript
export const classes: Class[] = [
  // ... existing classes ...
  {
    id: "your-class-id",
    name: "Your Class Name",
    accent: "blue", // Color theme
    tagline: "Short description",
    description: "Longer description...",
    hitDie: "1d8",
    armorProficiencies: ["Light", "Medium"],
    weaponProficiencies: ["Simple Weapons"],
    savingThrows: ["Dexterity", "Intelligence"],
    skills: {
      choose: 2,
      from: ["Skill1", "Skill2", "Skill3"],
    },
    resources: [
      {
        name: "Resource Name",
        description: "How it works",
        maxValue: "10 per level",
        recharge: "Short rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Feature Name",
        description: "What it does",
        type: "passive", // or "active"
      },
    ],
    subclasses: [
      // Subclass IDs go here
    ],
  },
];
```

### Adding a New Ability or Gadget

Similar structure — just add an object to the `forceAbilities` or `gadgets` array.

### Adding a Changelog Entry

```typescript
export const changelog: ChangelogEntry[] = [
  {
    version: "0.2.0",
    date: "2026-03-10",
    summary: "Balance patch and new content",
    changes: [
      { category: "Class", description: "Trooper: Extra Attack moved to level 4" },
      { category: "Gadget", description: "Added Jetpack gadget" },
    ],
  },
  // ... existing entries ...
];
```

---

## Deployment

### GitHub Pages (Recommended)

See **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** for step-by-step instructions.

Quick summary:
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages in Settings
4. Site deploys automatically on every push

### Other Hosts

This is a static React site. You can deploy to:

- **Netlify** — Drag-and-drop the `dist/` folder
- **Vercel** — Connect your GitHub repo
- **Cloudflare Pages** — Connect your GitHub repo
- **Any static host** — Upload the `dist/` folder

---

## Design System

The site uses a **dark sci-fi "Holonet Terminal"** aesthetic:

- **Colors** — Deep space dark background with luminous glowing accents
- **Typography** — Rajdhani (headers), Nunito Sans (body), JetBrains Mono (data)
- **Class Colors** — Each class has a unique accent color (blue, teal, red, amber, green, orange)
- **Components** — Glass-morphism cards, glowing borders, smooth transitions

Edit `client/src/index.css` to customize colors, fonts, and spacing.

---

## Technologies

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Utility-first styling
- **Wouter** — Client-side routing
- **Vite** — Build tool
- **Lucide React** — Icons

---

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | TypeScript type checking |
| `pnpm format` | Format code with Prettier |

---

## License

MIT

---

## Contributing

To update the rulebook:

1. Edit `client/src/lib/gameData.ts` to add or modify content
2. Or edit page files in `client/src/pages/` to change layouts
3. Test locally with `pnpm dev`
4. Commit and push to deploy automatically

---

## Support

For issues or questions:

1. Check the [GitHub Issues](https://github.com/YOUR_USERNAME/blades-and-blasters/issues)
2. Review the [GITHUB_SETUP.md](./GITHUB_SETUP.md) for deployment help
3. Check the [Vite docs](https://vitejs.dev) for build configuration

---

**Blades & Blasters** — A Star Wars-inspired TTRPG rulebook. May the Force be with you.
