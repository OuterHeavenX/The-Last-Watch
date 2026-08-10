export type DamageType = 'physical' | 'fire' | 'holy' | 'arcane';
export type Job = 'Soldier' | 'Archer' | 'Mage' | 'Cleric' | 'Scout' | 'Engineer' | 'Recruit';
export type Station = 'Gate' | 'Wall' | 'Archer Tower' | 'Mage Post' | 'Reserve';
export interface Hero { id:string; name:string; job:Job; level:number; xp:number; jp:number; hp:number; maxHp:number; attack:number; armor:number; range:number; cooldown:number; nextAttack:number; station:Station; weapon:string; learned:string[]; kills:number; nights:number; history:string[]; downed?:boolean; }
export interface Enemy { id:string; kind:string; hp:number; maxHp:number; armor:number; speed:number; progress:number; damage:number; attackRate:number; nextAttack:number; flying?:boolean; resist?:DamageType; weak?:DamageType; reward:number; }
export interface Projectile { id:string; source:string; target:string; x:number; speed:number; damage:number; type:DamageType; pierce:number; }
export interface Defense { id:string; kind:'Crossbow Turret'|'Spike Trap'|'Ballista'|'Holy Ward'; position:number; range:number; cooldown:number; nextAttack:number; damage:number; type:DamageType; }
export interface Reward { gold:number; items:string[]; xp:number; jp:number; }
export interface NightResult { status:'running'|'victory'|'defeat'; integrity:number; reward?:Reward; }
export interface SaveGame { saveVersion:1; day:number; night:number; gold:number; castleLevel:number; castleXp:number; integrity:number; heroes:Hero[]; defenses:Defense[]; inventory:string[]; bestiary:Record<string,number>; completedNights:number[]; history:string[]; }
