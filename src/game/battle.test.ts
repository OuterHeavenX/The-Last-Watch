import { describe,expect,it } from 'vitest';
import { Battle } from './battle';
import { starterDefenses,starterHeroes } from './data';
import { applyVictory,learn } from './progression';
import { newGame,validate } from './save';

describe('deterministic defense simulation',()=>{
  it('moves actual enemies, targets in range, launches projectiles and deals armor-aware damage',()=>{const b=new Battle(1,starterHeroes(),starterDefenses(),42);while(b.time<1.05)b.step(.05);expect(b.enemies.length).toBe(1);const start=b.enemies[0].progress;b.step(.1);expect(b.enemies[0].progress).toBeGreaterThan(start);while(b.time<8)b.step(.05);expect(b.projectiles.length+b.enemies.filter(e=>e.hp<e.maxHp).length).toBeGreaterThan(0);});
  it('same seed produces equivalent Night 1 results',()=>{const a=new Battle(1,starterHeroes(),starterDefenses(),77).run();const b=new Battle(1,starterHeroes(),starterDefenses(),77).run();expect(b).toEqual(a);expect(a.status).toBe('victory');expect(a.reward?.jp).toBe(10);});
  it('supports functional piercing, elemental skills and job-point spending',()=>{const heroes=starterHeroes();const isabel=heroes[1];expect(learn(isabel,'Piercing Arrow')).toBe(true);expect(isabel.jp).toBe(5);expect(isabel.learned).toContain('Piercing Arrow');});
  it('awards XP, JP, loot and history exactly once',()=>{const g=newGame(),r={gold:40,items:['Test Relic'],xp:120,jp:10};expect(applyVictory(g,r)).toBe(true);const gold=g.gold;g.night=1;expect(applyVictory(g,r)).toBe(false);expect(g.gold).toBe(gold);expect(g.inventory).toContain('Test Relic');expect(g.heroes[0].level).toBe(2);});
  it('damages fortress and can lose a night',()=>{const b=new Battle(10,[],[],1);const r=b.run();expect(r.status).toBe('defeat');expect(r.integrity).toBe(0);});
  it('unlocks Castle Level 2 after the boss reward',()=>{const g=newGame();g.night=10;applyVictory(g,{gold:200,items:['Wardenbone Relic'],xp:100,jp:20});expect(g.castleLevel).toBe(2);expect(g.completedNights).toContain(10);});
  it('validates the versioned save schema',()=>{expect(validate(newGame())).toBe(true);expect(validate({saveVersion:0,heroes:[]})).toBe(false);});
});
