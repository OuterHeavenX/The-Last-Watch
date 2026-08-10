import type { Hero, Job } from './types';
export interface JobNode { name:Job; from:Job; level:number; cost:number; description:string; }
export const jobTree:JobNode[]=[
  {name:'Knight',from:'Soldier',level:3,cost:50,description:'Heavy defender with superior armor.'},{name:'Mercenary',from:'Soldier',level:3,cost:50,description:'Aggressive front-line specialist.'},
  {name:'Ranger',from:'Archer',level:3,cost:50,description:'Mobile monster hunter.'},{name:'Marksman',from:'Archer',level:3,cost:50,description:'Long-range precision specialist.'},
  {name:'Elementalist',from:'Mage',level:3,cost:50,description:'Exploits elemental weaknesses.'},{name:'Priest',from:'Cleric',level:3,cost:50,description:'Holy support and ward master.'},
  {name:'Rogue',from:'Scout',level:3,cost:50,description:'Fast critical striker.'},{name:'Tracker',from:'Scout',level:3,cost:50,description:'Forecast and bestiary expert.'},
  {name:'Artificer',from:'Engineer',level:3,cost:50,description:'Arcane mechanism specialist.'},{name:'Siege Master',from:'Engineer',level:3,cost:50,description:'Improves ballista defenses.'}
];
export function canPromote(hero:Hero,node:JobNode){return hero.job===node.from&&hero.level>=node.level&&hero.jp>=node.cost&&!hero.injury;}
export function promote(hero:Hero,node:JobNode){if(!canPromote(hero,node))return false;hero.jp-=node.cost;if(!hero.masteredJobs.includes(hero.job))hero.masteredJobs.push(hero.job);hero.job=node.name;hero.history.push(`Day — Promoted to ${node.name}.`);return true;}
