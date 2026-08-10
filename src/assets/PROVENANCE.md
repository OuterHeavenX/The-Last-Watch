# Asset provenance

## `last-watch-atlas.png`

- Created specifically for The Last Watch on 2026-08-09 with OpenAI's built-in image generation tool.
- Source prompt: original Gothic pixel-art atlas containing the seven Gravenhold defenders, six standard monsters, the Grave Captain, Bone Warden, and four fortress defenses on a flat magenta chroma-key background.
- The chroma-key background was removed locally with the Codex image-generation skill's `remove_chroma_key.py` helper. The shipped PNG is project-owned, transparent, and has no external runtime dependency.

## Audio

All current sound effects are synthesized at runtime by `src/core/AudioManager.ts` with the Web Audio API. No recorded or third-party audio files are distributed.
