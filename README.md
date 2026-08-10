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

## Progression milestone

- Original transparent Gothic pixel-art atlas integrated into hero rosters and Night battles
- Procedural offline Web Audio feedback for controls, victory, and defeat
- Save schema v2 with automatic migration from v1 and three manual slots
- Eight equipment slots with reversible attack, armor, and range modifiers
- Ten advanced Job promotions with level, JP, prerequisite, and injury requirements
- Recoverable 1–3 day injuries caused by real enemy attacks on stationed heroes
- Affinity, Mentor, Companion, and Rivalry relationship events recorded in character history
- Infirmary, Jobs, and expanded Settings screens
- Eleven deterministic regression tests

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
