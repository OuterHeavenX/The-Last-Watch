import type { Hero, SaveGame } from './types';
const pairs=[['isabel','mira','Mentor'],['garrick','aurelia','Companion'],['corvin','elian','Rivalry'],['toma','mira','Companion']] as const;
export function resolveRelationshipEvent(game:SaveGame){
  const [a,b,bond]=pairs[Math.max(0,game.night-2)%pairs.length];
  const left=game.heroes.find(h=>h.id===a),right=game.heroes.find(h=>h.id===b);
  if(!left||!right)return;
  const update=(from:Hero,to:Hero)=>{let r=from.relationships.find(x=>x.heroId===to.id);if(!r){r={heroId:to.id,affinity:0};from.relationships.push(r);}r.affinity=Math.min(100,r.affinity+8);if(r.affinity>=24)r.bond=bond;};
  update(left,right);update(right,left);
  const line=`Day ${game.day} — ${left.name} and ${right.name} grew closer (${bond}).`;
  left.history.push(line);right.history.push(line);game.history.push(line);
}
