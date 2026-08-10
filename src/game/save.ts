import { starterDefenses, starterHeroes } from './data';
import type { Hero, SaveGame } from './types';
export const SAVE_KEY='the-last-watch.autosave.v2';
const OLD_KEY='the-last-watch.autosave.v1';
export const newGame=():SaveGame=>({saveVersion:2,day:1,night:1,gold:120,castleLevel:1,castleXp:0,integrity:100,heroes:starterHeroes(),defenses:starterDefenses(),inventory:['Ashwood Longbow','Iron Sword','Hunter’s Mantle','Padded Hauberk'],bestiary:{},completedNights:[],history:['Day 1 — The Commander arrived at ruined Gravenhold.'],settings:{master:.8,music:.55,sfx:.75,reducedMotion:false,autoPause:true,tutorialComplete:false}});
const migrateHero=(h:Partial<Hero>):Hero=>({...starterHeroes().find(x=>x.id===h.id)!,...h,equipment:h.equipment||{},masteredJobs:h.masteredJobs||[],relationships:h.relationships||[]});
export function migrate(x:any):SaveGame|null {if(!x||typeof x!=='object'||!Array.isArray(x.heroes)||!Array.isArray(x.completedNights))return null;if(x.saveVersion===2)return{...x,settings:{master:.8,music:.55,sfx:.75,reducedMotion:false,autoPause:true,tutorialComplete:false,...x.settings}} as SaveGame;if(x.saveVersion===1)return{...x,saveVersion:2,heroes:x.heroes.map(migrateHero),settings:{master:.8,music:.55,sfx:.75,reducedMotion:false,autoPause:true,tutorialComplete:false}};return null;}
export const validate=(x:unknown):x is SaveGame=>migrate(x)?.saveVersion===2;
export const saveGame=(game:SaveGame,slot='autosave')=>localStorage.setItem(slot==='autosave'?SAVE_KEY:`the-last-watch.${slot}.v2`,JSON.stringify(game));
export const loadGame=(slot='autosave'):SaveGame|null=>{try{const key=slot==='autosave'?SAVE_KEY:`the-last-watch.${slot}.v2`;let raw=localStorage.getItem(key);if(!raw&&slot==='autosave')raw=localStorage.getItem(OLD_KEY);if(!raw)return null;const game=migrate(JSON.parse(raw));if(game&&slot==='autosave')saveGame(game);return game;}catch{return null;}};
