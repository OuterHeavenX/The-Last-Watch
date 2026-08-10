# The Last Watch

A browser-first gothic tower-defense RPG. Command Gravenhold; there is no directly controlled player character.

## Version 0.1 — The First Watch

- Seven persistent heroes with levels, XP, JP, equipment, skills, stations, kills, and personal history
- Ten data-driven Nights with eight enemy classes, an elite Grave Captain, and The Bone Warden boss
- Deterministic fixed-step simulation with route movement, range targeting, cooldowns, armor, damage types, projectile piercing, flying filters, defenses, and fortress damage
- Day management screens for the War Room, Barracks, Armory, Training Hall, Bestiary, and Chronicle
- Crossbow Turret, Spike Trap, buildable Ballista, and Holy Ward
- Commander actions, pause, 1×/2× speed, victory/defeat recovery, loot, and Castle Level 2
- Versioned local saves with autosave and a manual slot
- Responsive touch controls and no joystick or directly controlled character

## Local development

```sh
npm install
npm run dev
```

Production validation:

```sh
npm test
npm run build
npm run preview
```

The normal browser entry point is `/index.html`; Vite writes the production site to `/dist`.

GitHub Pages is deployed by `.github/workflows/pages.yml`. The workflow runs the headless simulation tests, builds the site, and fails if `dist/index.html` is absent.
