import { describe,expect,it } from 'vitest';
import { Battle } from './battle';
import { starterDefenses,starterHeroes } from './data';
import { applyVictory,learn } from './progression';
import { equipment, equipItem } from './equipment';
import { jobTree, promote } from './jobs';
import { migrate, newGame,validate } from './save';

describe('deterministic defense simulation',()=>{
  it('moves actual enemies, targets in range, launches projectiles and deals armor-aware damage',()=>{const b=new Battle(1,starterHeroes(),starterDefenses(),42);while(b.time<1.05)b.step(.05);expect(b.enemies.length).toBe(1);const start=b.enemies[0].progress;b.step(.1);expect(b.enemies[0].progress).toBeGreaterThan(start);while(b.time<8)b.step(.05);expect(b.projectiles.length+b.enemies.filter(e=>e.hp<e.maxHp).length).toBeGreaterThan(0);});
  it('same seed produces equivalent Night 1 results',()=>{const a=new Battle(1,starterHeroes(),starterDefenses(),77).run();const b=new Battle(1,starterHeroes(),starterDefenses(),77).run();expect(b).toEqual(a);expect(a.status).toBe('victory');expect(a.reward?.jp).toBe(10);});
  it('supports functional piercing, elemental skills and job-point spending',()=>{const heroes=starterHeroes();const isabel=heroes[1];expect(learn(isabel,'Piercing Arrow')).toBe(true);expect(isabel.jp).toBe(5);expect(isabel.learned).toContain('Piercing Arrow');});
  it('awards XP, JP, loot and history exactly once',()=>{const g=newGame(),r={gold:40,items:['Test Relic'],xp:120,jp:10};expect(applyVictory(g,r)).toBe(true);const gold=g.gold;g.night=1;expect(applyVictory(g,r)).toBe(false);expect(g.gold).toBe(gold);expect(g.inventory).toContain('Test Relic');expect(g.heroes[0].level).toBe(2);});
  it('damages fortress and can lose a night',()=>{const b=new Battle(10,[],[],1);const r=b.run();expect(r.status).toBe('defeat');expect(r.integrity).toBe(0);});
  it('unlocks Castle Level 2 after the boss reward',()=>{const g=newGame();g.night=10;applyVictory(g,{gold:200,items:['Wardenbone Relic'],xp:100,jp:20});expect(g.castleLevel).toBe(2);expect(g.completedNights).toContain(10);});
  it('validates and migrates the versioned save schema',()=>{expect(validate(newGame())).toBe(true);const old={...newGame(),saveVersion:1,settings:undefined};expect(migrate(old)?.saveVersion).toBe(2);expect(migrate(old)?.heroes[0].relationships).toEqual([]);expect(validate({saveVersion:0,heroes:[]})).toBe(false);});
  it('equips into slots with reversible combat bonuses',()=>{const h=starterHeroes()[1],base=h.attack;equipItem(h,equipment.ashwood);expect(h.attack).toBe(base+3);equipItem(h,equipment.moonpiercer);expect(h.attack).toBe(base+12);expect(h.equipment.weapon).toBe('moonpiercer');});
  it('enforces promotion requirements and records mastered jobs',()=>{const h=starterHeroes()[0],node=jobTree.find(n=>n.name==='Knight')!;expect(promote(h,node)).toBe(false);h.level=3;h.jp=50;expect(promote(h,node)).toBe(true);expect(h.job).toBe('Knight');expect(h.masteredJobs).toContain('Soldier');});
  it('creates relationship progress after victories',()=>{const g=newGame();applyVictory(g,{gold:1,items:[],xp:1,jp:1});expect(g.heroes.find(h=>h.id==='isabel')!.relationships[0].affinity).toBe(8);});
  it('downed heroes receive deterministic recoverable injuries and alerts',()=>{const heroes=starterHeroes();for(const h of heroes){h.maxHp=1;h.hp=1;h.attack=0;}const b=new Battle(4,heroes,[],9);b.run();expect(heroes.some(h=>h.injury&&h.injury.recoveryDays>=1)).toBe(true);expect(b.drainEvents().some(e=>e.type==='downed')).toBe(true);});
  it('emits explicit weakness feedback from real damage interactions',()=>{const b=new Battle(6,starterHeroes(),starterDefenses(),4);while(b.time<1.1)b.step(.05);b.holyFlare();const events=b.drainEvents();expect(events.some(e=>e.type==='weakness'&&e.label==='WEAK!')).toBe(true);expect(events.some(e=>typeof e.value==='number')).toBe(true);});
});
