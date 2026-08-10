import { starterDefenses, starterHeroes } from './data';
import type { SaveGame } from './types';
export const SAVE_KEY='the-last-watch.autosave.v1';
export const newGame=():SaveGame=>({saveVersion:1,day:1,night:1,gold:120,castleLevel:1,castleXp:0,integrity:100,heroes:starterHeroes(),defenses:starterDefenses(),inventory:['Ashwood Longbow','Iron Sword','Hunter’s Mantle','Padded Hauberk'],bestiary:{},completedNights:[],history:['Day 1 — The Commander arrived at ruined Gravenhold.']});
export const validate=(x:unknown):x is SaveGame=>!!x&&typeof x==='object'&&(x as SaveGame).saveVersion===1&&Array.isArray((x as SaveGame).heroes)&&Array.isArray((x as SaveGame).completedNights);
export const saveGame=(game:SaveGame,slot='autosave')=>localStorage.setItem(slot==='autosave'?SAVE_KEY:`the-last-watch.${slot}.v1`,JSON.stringify(game));
export const loadGame=(slot='autosave'):SaveGame|null=>{try{const raw=localStorage.getItem(slot==='autosave'?SAVE_KEY:`the-last-watch.${slot}.v1`);if(!raw)return null;const parsed=JSON.parse(raw);return validate(parsed)?parsed:null;}catch{return null;}};
