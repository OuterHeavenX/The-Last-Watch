import type { Defense, Hero, Job, Station } from './types';

const hero = (id:string,name:string,job:Job,station:Station,hp:number,attack:number,armor:number,range:number,cooldown:number,weapon:string):Hero => ({id,name,job,station,level:1,xp:0,jp:30,hp,maxHp:hp,attack,armor,range,cooldown,nextAttack:0,weapon,learned:[],kills:0,nights:0,history:['Day 1 — Answered the call of Gravenhold.']});
export const starterHeroes = ():Hero[] => [
  hero('garrick','Garrick Hale','Soldier','Gate',180,24,9,7,1.25,'Watchman’s Sword'),
  hero('isabel','Isabel Voss','Archer','Archer Tower',110,22,3,42,1.15,'Ashwood Longbow'),
  hero('elian','Elian Marrow','Mage','Mage Post',90,28,2,36,1.7,'Ember Rod'),
  hero('aurelia','Sister Aurelia','Cleric','Wall',105,18,4,31,1.45,'Silver Censer'),
  hero('corvin','Corvin Reeve','Scout','Wall',120,19,4,27,.9,'Briar Knives'),
  hero('toma','Toma Venn','Engineer','Reserve',135,17,6,24,1.1,'Gearspanner'),
  hero('mira','Mira Sol','Recruit','Reserve',145,16,6,8,1.05,'Militia Spear')
];
export const starterDefenses = ():Defense[] => [
  {id:'crossbow',kind:'Crossbow Turret',position:58,range:28,cooldown:1.6,nextAttack:0,damage:17,type:'physical'},
  {id:'spikes',kind:'Spike Trap',position:72,range:3,cooldown:1,nextAttack:0,damage:24,type:'physical'}
];
export const abilities:Record<Job,{name:string,cost:number,description:string}[]> = {
  Soldier:[{name:'Guard',cost:20,description:'+3 armor at the Gate'}], Archer:[{name:'Piercing Arrow',cost:25,description:'Projectiles pierce 1 target'}], Mage:[{name:'Fire',cost:20,description:'Fire damage exploits Wretches'}], Cleric:[{name:'Holy Bolt',cost:20,description:'Holy damage exploits Shades'}], Scout:[{name:'Eagle Eye',cost:20,description:'+8 range'}], Engineer:[{name:'Field Repair',cost:20,description:'Improves Emergency Repair'}], Recruit:[{name:'Determination',cost:15,description:'+4 attack'}]
};
export const nightNames = ['The First Watch','Teeth in the Dark','Wings over Gravenhold','Iron at the Gate','The Grave Captain','Whispers Without Bodies','The Broken Host','The Fog Night','The Long Assault','The Bone Warden'];
export const enemyCatalog = {
  wretch:{kind:'Grave Wretch',hp:42,armor:1,speed:4.5,damage:7,attackRate:1.4,reward:4,weak:'fire'},
  hound:{kind:'Briar Hound',hp:30,armor:0,speed:8,damage:6,attackRate:1,reward:5},
  bat:{kind:'Moon Bat',hp:25,armor:0,speed:7,damage:5,attackRate:1.2,reward:5,flying:true},
  knight:{kind:'Rust Knight',hp:115,armor:12,speed:2.5,damage:15,attackRate:2,reward:12},
  shade:{kind:'Hollow Shade',hp:60,armor:2,speed:4,damage:9,attackRate:1.5,reward:9,resist:'physical',weak:'holy'},
  priest:{kind:'Grave Priest',hp:72,armor:4,speed:3,damage:12,attackRate:1.8,reward:13},
  captain:{kind:'Grave Captain',hp:320,armor:10,speed:2.2,damage:20,attackRate:1.5,reward:50},
  boss:{kind:'The Bone Warden',hp:900,armor:14,speed:1.7,damage:28,attackRate:1.25,reward:200}
} as const;
export const wavesFor = (night:number):Array<{at:number;type:keyof typeof enemyCatalog;count:number;gap:number}> => {
  const table = [
    [{at:1,type:'wretch',count:8,gap:1.2}],
    [{at:1,type:'wretch',count:8,gap:1},{at:5,type:'hound',count:5,gap:1.3}],
    [{at:1,type:'wretch',count:8,gap:1},{at:4,type:'bat',count:7,gap:1}],
    [{at:1,type:'knight',count:4,gap:2},{at:3,type:'hound',count:8,gap:.8}],
    [{at:1,type:'wretch',count:12,gap:.7},{at:8,type:'captain',count:1,gap:1}],
    [{at:1,type:'shade',count:10,gap:1.1},{at:5,type:'priest',count:3,gap:2}],
    [{at:1,type:'wretch',count:12,gap:.6},{at:3,type:'bat',count:8,gap:.9},{at:7,type:'knight',count:5,gap:1.4}],
    [{at:1,type:'shade',count:12,gap:.8},{at:5,type:'hound',count:12,gap:.6}],
    [{at:1,type:'wretch',count:20,gap:.45},{at:4,type:'knight',count:8,gap:1},{at:8,type:'priest',count:5,gap:1}],
    [{at:1,type:'wretch',count:15,gap:.5},{at:4,type:'shade',count:8,gap:.8},{at:10,type:'boss',count:1,gap:1}]
  ] as Array<Array<{at:number;type:keyof typeof enemyCatalog;count:number;gap:number}>>;
  return table[Math.min(9,Math.max(0,night-1))];
};
