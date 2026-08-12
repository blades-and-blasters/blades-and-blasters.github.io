// =============================================================================
// RulesPage.tsx — Core mechanics, conditions, combat rules, and clarifications
// =============================================================================

import { BookOpen, AlertCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { conditions, coreRules } from "@/lib/gameData";

interface RuleSection {
  title: string;
  content: string;
}

const coreMechanics: RuleSection[] = [
  {
    title: "Ability Score Improvement (ASI)",
    content:
      "When you gain an ASI, you may increase one ability score by 2, or two ability scores by 1 each. No ability score can exceed 20 through this method unless a feature explicitly states otherwise.",
  },
  {
    title: "Advantage and Disadvantage",
    content:
      "When you have Advantage on a roll, roll 2d20 and take the higher result. When you have Disadvantage, roll 2d20 and take the lower result. If you have both Advantage and Disadvantage, they cancel out and you roll normally, regardless of how many sources of each you have.",
  },
  {
    title: "Gadget Slots and Inventory",
    content:
      "Gadget Slots determine how many gadgets you can carry on your person. Gadget Inventory is the total number of gadgets you can store (on your ship or in a safehouse). Gadgets refresh on a long rest and may be freely swapped between inventory and active slots during a rest.",
  },
  {
    title: "Short Rest vs. Long Rest",
    content:
      "A short rest is a period of at least one hour during which you do nothing more strenuous than eating, drinking, reading, and tending to wounds. A long rest is a period of at least 8 hours of sleep or light activity. Most class resources refresh on a long rest unless otherwise stated.",
  },
];

interface CombatSection {
  id: string;
  title: string;
  content: string;
}

const combatRules: CombatSection[] = [
  {
    id: "cover",
    title: "Cover",
    content: `In general, combat should revolve heavily around cover and displacement. Only two forms of cover exist — half cover and three-quarters cover.

Half cover covers you partially, or provides concealment. A car you're hiding behind, or a bush, provides half cover in different ways — but in either case you are less likely to be hit. Half cover provides +2 to AC and saving throws against area effects.

Three-Quarters cover is solid objects that you can hide the vast majority of your body behind — the corner of a building, a structural pillar, etc. Three-Quarters cover provides +4 to AC and saving throws against area effects.`,
  },
  {
    id: "environmental-destruction",
    title: "Environmental Destruction",
    content: `Many objects rapidly lose structural integrity when faced with grenades, rockets, lightsabers, and blasters. The precise durability of various objects is up to the GM to determine, but a general rule of thumb is that a single grenade or rocket should destroy most half cover, and two should destroy most three-quarters cover.

Creativity, both on the GM's part and on the party's part, is highly rewarded — if an approach is hard for you to think of, it's also probably hard for creatures in-universe to think of, and that might lead to unexpected benefits — but also unexpected consequences.`,
  },
  {
    id: "movement",
    title: "Movement in Combat",
    content: `Each creature has a movement speed that they can move each turn. Dashing doubles movement speed at the cost of your action. Moving through Difficult Terrain costs two feet of movement for every actual foot moved.

Movement is not risk-free. If you're engaged in melee, leaving an enemy's range without Disengaging will trigger an Opportunity Attack — a free melee attack against you as a reaction.

If a creature is forced to move (such as by Force Shove), it doesn't trigger opportunity attacks, and its movement terminates upon impacting a suitable surface.

You may move through the space of allied creatures, but can't end your turn there. Enemy and neutral creatures will not permit this unless you are at least two sizes bigger than them.`,
  },
  {
    id: "turn-structure",
    title: "Turn Structure",
    content: `Each creature has four types of actions: movement, actions, bonus actions, and reactions. By default every creature has one action, one bonus action, and one reaction.

Movement may be split up between your actions however you'd like. Bonus actions are quick things — using a bacta hypospray, pressing a button, drawing a weapon. Actions are the meat of your turn — firing your weapon, swinging your lightsaber, throwing a grenade.

Reactions may only happen outside of your turn, and refresh at the beginning of your next turn. They include opportunity attacks, deflecting blaster bolts, and similar effects.

You may also Ready actions — declare a trigger, and choose to delay your action until that trigger happens, then use your reaction to act.

Some abilities require an Attack to trigger rather than an Action. If you have Extra Attack, you may substitute one or more of your extra attacks for this ability.`,
  },
  {
    id: "attack-resolution",
    title: "Attack Resolution",
    content: `To make an attack, roll 1d20 + your attack modifier. If the result equals or exceeds the target's AC, the attack hits. On a hit, roll the weapon or ability's damage.

A natural 1 always misses regardless of modifiers. A natural 20 always hits regardless of AC.

On a critical hit (normally a 20, but may be expanded by certain abilities), roll all damage dice twice and add both results together.

Making a ranged attack while an enemy is able to make melee attacks against you forces you to roll at disadvantage.

Weapons have specified ranges. A blaster rifle with 150/600ft range fires normally within 150ft, and with disadvantage out to 600ft.`,
  },
  {
    id: "terrain",
    title: "Terrain",
    content: `Standing above your enemies is generally a good idea. For any creature with a 5ft or greater elevation advantage above their opponent, they gain +1 to hit and +10ft range for all ranged attacks, abilities, gadgets, and so on. This does not stack.

Falling from elevated terrain deals 1d6 damage for each 10 feet fallen, and requires a DC12 Dexterity save (increasing by 2 every 10 feet) to avoid falling prone.

Melee attacks against Prone creatures have advantage, and standing up from prone takes 10ft of movement.`,
  },
  {
    id: "area-attacks",
    title: "Area Attacks",
    content: `If an ability specifies a radius, draw a circle with that radius centered on the source. A grenade explodes in a 10ft radius — draw a 10ft radius circle around the grenade and apply the effect to all targets within.

A cone extends the listed distance from its origin and is equally wide at its farthest edge. A 30-foot cone extends 30 feet and is 30 feet wide at its far edge.

A line is a 5ft wide line extending directly from source to target, affecting everything within.

Unless specifically stated otherwise, all area abilities affect all creatures within them, whether friend or foe.

If any portion of a creature's occupied space lies within an area, the creature is affected.`,
  },
  {
    id: "line-of-sight",
    title: "Line of Sight",
    content: `You cannot directly engage enemies who are not within your line of sight. If any corner of your model is targetable, all of you is treated as if it is — though cover may still apply.`,
  },
  {
    id: "exposure",
    title: "Exposure",
    content: `If you enter an enemy's line of sight at any point during your turn, that enemy remembers the position from which you were exposed until the start of your next turn.

Until then, that enemy may make ranged attacks against you using one position you occupied while you were within its line of sight, even if you have since moved out of sight.

Determine range and cover from that exposed position, not your current position. The attack represents the enemy firing while you were moving through the open, even though the roll is resolved later.

An enemy cannot use an exposed position it never had line of sight to.`,
  },
  {
    id: "death",
    title: "Death",
    content: `Two death mechanics trigger upon reaching 0 HP. Most NPCs (battle droids, random militiamen) die immediately. Important NPCs and player characters instead roll death saving throws — each turn, roll a d20. 10 and above is a success, 9 and below is a failure. Three successes mean the creature stabilizes and recovers to 1 HP in one hour. Three failures means death. 1s count as 2 failures, and 20s restore you to 1 HP.

If restored to consciousness by any means, gather a single point of Exhaustion, stacking until you rest.

Creatures may also choose to make non-lethal melee attacks (but not ranged). Declare it beforehand — instead of causing enemies to bleed out, they are knocked safely unconscious and regain consciousness in one hour. This does not incur Exhaustion.

Taking any damage while at 0 HP adds one death save.`,
  },
  {
    id: "exhaustion",
    title: "Exhaustion",
    content: `For each stack of exhaustion, gain −2 to all dice rolled. Long Resting removes two stacks of exhaustion per night.`,
  },
  {
    id: "initiative",
    title: "Initiative",
    content: `At the start of combat, each participating creature rolls 1d20 + Dex. All rolls are listed top to bottom, and combat proceeds in that order. Ties are broken by highest Dex score, then alphabetically.

All creatures roll one initiative roll, but some (such as certain bosses) may roll more than one, gaining multiple turns per round.

If one party achieves surprise on the other, the surprised creatures completely skip their first turn and cannot react at all until the second round of combat.`,
  },
  {
    id: "specific-vs-general",
    title: "Specific vs. General Rules",
    content: `When two rules come into conflict, the more specific rule always wins.`,
  },
  {
    id: "saving-throws",
    title: "Saving Throws",
    content: `When the situation calls for a saving throw, roll a d20 + the relevant saving throw modifier. If the result meets or exceeds the save DC, you succeed. Natural 1s automatically fail regardless of modifier, and natural 20s automatically succeed regardless of DC.

Save DCs are equal to 8 + Proficiency Bonus + relevant ability modifier.

In most cases, the effect will specify what a successful save grants. If it does not, a successful save means you suffer nothing from the effect.`,
  },
  {
    id: "damage",
    title: "Damage",
    content: `Damage reduces HP by the specified amount. Temporary HP is layered on top of HP and is depleted first. Temporary HP sources only add to Temporary HP, and healing only adds to HP.

Resistance causes the target to take half damage from the specified source. Immunity causes them to take none at all.`,
  },
  {
    id: "healing",
    title: "Healing",
    content: `Healing restores HP up to your maximum, but does not overflow. Healing a creature at 0 HP immediately restores consciousness and ends its death saves.`,
  },
  {
    id: "concentration",
    title: "Concentration",
    content: `You may concentrate on only one ability at a time. Concentrating may be ended at any time by the ability user's will, by the duration running out, by another Concentration ability being used, by falling unconscious, or by incoming damage.

Every time you take damage while Concentrating, roll a Constitution saving throw. The DC is equal to 10 or half of the incoming damage, whichever is higher.`,
  },
  {
    id: "stacking-effects",
    title: "Stacking Effects",
    content: `Identical effects from the same source don't overlap. If you use two flamethrowers on an area, you don't double the passive burn damage.`,
  },
  {
    id: "sizes",
    title: "Sizes",
    content: `Tiny creatures are less than 1×1ft
Small creatures are less than 3×3ft
Medium creatures are less than 5×5ft
Large creatures are less than 10×10ft
Huge creatures are less than 15×15ft`,
  },
];

export default function RulesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-orange-400 border-orange-400/40 bg-orange-400/10">
            Rules
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Rules Reference
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Core mechanics, conditions, and combat rules for the system.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Core Rules Clarifications */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Core Rules Clarifications
        </h2>
        <div className="space-y-3">
          {coreRules.map((rule) => (
            <div key={rule.title} className="glass-card rounded-lg p-5 border border-border/50">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <Zap size={14} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      {rule.title}
                    </h3>
                    <span className="ability-tag text-purple-400 border-purple-400/40 bg-purple-400/10">
                      clarification
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Conditions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {conditions.map((condition) => (
            <div key={condition.name} className="glass-card rounded-lg p-5 border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle size={14} className="text-red-400 shrink-0" />
                <h3 className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {condition.name}
                </h3>
                <span className="ability-tag text-red-400 border-red-400/40 bg-red-400/10 ml-auto">
                  condition
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {condition.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Mechanics */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Core Mechanics
        </h2>
        <div className="space-y-3">
          {coreMechanics.map((rule) => (
            <div key={rule.title} className="glass-card rounded-lg p-5 border border-border/50">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <BookOpen size={14} className="text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      {rule.title}
                    </h3>
                    <span className={cn("ability-tag text-green-400 border-green-400/40 bg-green-400/10")}>
                      mechanic
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rule.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Combat Rules */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Combat Rules
        </h2>
        {/* Quick Nav */}
        <div className="flex flex-wrap gap-2 mb-6">
          {combatRules.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="ability-tag text-muted-foreground border-border/50 hover:text-foreground hover:border-border transition-colors cursor-pointer"
            >
              {section.title}
            </a>
          ))}
        </div>
        <div className="space-y-4">
          {combatRules.map((section) => (
            <div key={section.id} id={section.id} className="glass-card rounded-xl p-5 border border-border/50">
              <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {section.title}
              </h3>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
