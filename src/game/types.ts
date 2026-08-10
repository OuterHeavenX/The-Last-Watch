export type DamageType = 'physical' | 'fire' | 'holy' | 'arcane';
export type StarterJob = 'Soldier' | 'Archer' | 'Mage' | 'Cleric' | 'Scout' | 'Engineer' | 'Recruit';
export type Job = StarterJob | 'Knight' | 'Mercenary' | 'Ranger' | 'Marksman' | 'Elementalist' | 'Priest' | 'Rogue' | 'Tracker' | 'Artificer' | 'Siege Master';
export type Station = 'Gate' | 'Wall' | 'Archer Tower' | 'Mage Post' | 'Reserve';
export type EquipmentSlot = 'weapon' | 'head' | 'body' | 'hands' | 'boots' | 'accessory1' | 'accessory2' | 'relic';
export interface Equipment { id:string; name:string; slot:EquipmentSlot; attack?:number; armor?:number; range?:number; effect?:string; rarity:'Common'|'Fine'|'Rare'|'Epic'|'Legendary'|'Relic'; }
export interface Relationship { heroId:string; affinity:number; bond?:'Mentor'|'Companion'|'Rivalry'; }
export interface Injury { name:string; recoveryDays:number; penalty:string; }
export interface Hero { id:string; name:string; job:Job; level:number; xp:number; jp:number; hp:number; maxHp:number; attack:number; armor:number; range:number; cooldown:number; nextAttack:number; station:Station; weapon:string; equipment:Partial<Record<EquipmentSlot,string>>; learned:string[]; masteredJobs:Job[]; kills:number; nights:number; history:string[]; relationships:Relationship[]; injury?:Injury; downed?:boolean; }
export interface Enemy { id:string; kind:string; hp:number; maxHp:number; armor:number; speed:number; progress:number; damage:number; attackRate:number; nextAttack:number; flying?:boolean; resist?:DamageType; weak?:DamageType; reward:number; }
export interface Projectile { id:string; source:string; target:string; x:number; speed:number; damage:number; type:DamageType; pierce:number; }
export interface Defense { id:string; kind:'Crossbow Turret'|'Spike Trap'|'Ballista'|'Holy Ward'; position:number; range:number; cooldown:number; nextAttack:number; damage:number; type:DamageType; }
export interface Reward { gold:number; items:string[]; xp:number; jp:number; }
export interface NightResult { status:'running'|'victory'|'defeat'; integrity:number; reward?:Reward; }
export interface Settings { master:number; music:number; sfx:number; reducedMotion:boolean; autoPause:boolean; }
export interface SaveGame { saveVersion:2; day:number; night:number; gold:number; castleLevel:number; castleXp:number; integrity:number; heroes:Hero[]; defenses:Defense[]; inventory:string[]; bestiary:Record<string,number>; completedNights:number[]; history:string[]; settings:Settings; }
