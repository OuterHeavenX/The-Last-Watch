import type { Equipment, EquipmentSlot, Hero } from './types';

export const equipment:Record<string,Equipment> = {
  ashwood:{id:'ashwood',name:'Ashwood Longbow',slot:'weapon',attack:3,range:5,rarity:'Fine',effect:'A disciplined archer gains +5 range.'},
  ironSword:{id:'ironSword',name:'Iron Sword',slot:'weapon',attack:4,rarity:'Common'},
  mantle:{id:'mantle',name:'Hunter’s Mantle',slot:'body',armor:2,range:2,rarity:'Fine'},
  hauberk:{id:'hauberk',name:'Padded Hauberk',slot:'body',armor:4,rarity:'Common'},
  buckler:{id:'buckler',name:'Captain’s Iron Buckler',slot:'accessory1',armor:5,rarity:'Rare',effect:'Forged for the Grave Captain.'},
  moonpiercer:{id:'moonpiercer',name:'Moonpiercer Bow',slot:'weapon',attack:12,range:8,rarity:'Legendary',effect:'Piercing Arrow penetrates an additional target.'},
  wardenbone:{id:'wardenbone',name:'Wardenbone Relic',slot:'relic',attack:6,armor:6,rarity:'Relic',effect:'+20% resolve against bosses.'}
};
export const itemByName=(name:string)=>Object.values(equipment).find(i=>i.name===name);
export function equipItem(hero:Hero,item:Equipment){const oldId=hero.equipment[item.slot];const old=oldId?equipment[oldId]:undefined;if(old){hero.attack-=old.attack||0;hero.armor-=old.armor||0;hero.range-=old.range||0;}hero.equipment[item.slot]=item.id;hero.attack+=item.attack||0;hero.armor+=item.armor||0;hero.range+=item.range||0;if(item.slot==='weapon')hero.weapon=item.name;hero.history.push(`Day — Equipped ${item.name}.`);}
export const slots:EquipmentSlot[]=['weapon','head','body','hands','boots','accessory1','accessory2','relic'];
