export interface TutorialStep { title:string; body:string; tip:string; target?:string; }
export const tutorialSteps:TutorialStep[]=[
  {title:'Welcome, Commander',body:'You do not control a walking hero. Your power is preparation: train people, equip them, assign their posts, and decide when Gravenhold is ready.',tip:'The Day phase has no timer.'},
  {title:'Prepare the Watch',body:'The War Room shows the coming threat, fortress defenses, and every hero station. Assign ranged heroes high and sturdy defenders near the Gate.',tip:'Preparation matters more than reflexes.',target:'.war-grid'},
  {title:'Grow Your Heroes',body:'Barracks shows stats and history. Training spends JP on real abilities. Jobs unlock promotions. Armory equipment changes combat values immediately.',tip:'XP raises levels. JP buys disciplines.',target:'.game-shell>nav'},
  {title:'Begin the Night',body:'When assignments and defenses are ready, Begin Night. The game autosaves first, so defeat never erases your campaign.',tip:'You choose when the Day ends.',target:'.begin'},
  {title:'Read the Battlefield',body:'Health bars show survival. Gold damage means a weakness was exploited. Armored, flying, magical, elite, and boss enemies use distinct markers.',tip:'Tap any unit to inspect it.'},
  {title:'Commander Abilities',body:'Rally refreshes hero attacks. Emergency Repair restores Integrity. Holy Flare punishes undead. Each is limited, so timing matters.',tip:'Pause and 1×/2× speed are always available.',target:'.night-controls'},
  {title:'Survival, Not Permadeath',body:'A hero at zero HP is downed and receives a recoverable injury. The Infirmary shows recovery time. Auto-pause can stop the battle when someone falls.',tip:'Retreat and recovery systems are forgiving by design.'},
  {title:'One More Night',body:'Victories grant XP, JP, gold, loot, Bestiary research, relationships, and Castle XP. Every system feeds the next defensive plan.',tip:'You can replay this guide anytime with the floating ? button.'}
];
