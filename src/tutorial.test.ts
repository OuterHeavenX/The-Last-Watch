import { readFileSync } from 'node:fs';
import { describe,expect,it } from 'vitest';
import { tutorialSteps } from './ui/tutorial';

describe('beginner guidance and combat clarity',()=>{
  const main=readFileSync(new URL('./main.ts',import.meta.url),'utf8');
  it('provides a replayable eight-step beginner tutorial',()=>{expect(tutorialSteps).toHaveLength(8);expect(tutorialSteps[0].body).toContain('do not control a walking hero');expect(main).toContain('aria-label="How to Play"');expect(main).toContain("showTutorial(0)");});
  it('renders selectable units, tactical inspection, health, traits and alerts',()=>{for(const marker of ['unit-hp','trait-badge','battle-inspector','battle-alerts','target-line'])expect(main).toContain(marker);});
});
