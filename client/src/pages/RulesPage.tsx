// =============================================================================
// RulesPage.tsx — Special rules, core mechanics, and errata
// =============================================================================

import { BookOpen, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface RuleSection {
  title: string;
  content: string;
  type: "rule" | "mechanic" | "note";
}

const coreMechanics: RuleSection[] = [
  {
    title: "Ability Score Improvement (ASI)",
    type: "mechanic",
    content:
      "When you gain an ASI, you may increase one ability score by 2, or two ability scores by 1 each. No ability score can exceed 20 through this method unless a feature explicitly states otherwise.",
  },
  {
    title: "Advantage and Disadvantage",
    type: "mechanic",
    content:
      "When you have Advantage on a roll, roll 2d20 and take the higher result. When you have Disadvantage, roll 2d20 and take the lower result. If you have both Advantage and Disadvantage, they cancel out and you roll normally, regardless of how many sources of each you have.",
  },
  {
    title: "Force Points",
    type: "mechanic",
    content:
      "Force Points are the primary resource for Force abilities. Jedi Knights gain 1 per level; Jedi Consulars gain 2 per level. Force Points refresh on a long rest. Some subclass features (e.g., Sage's Balance, Knight's Focus) allow exchange or generation of Force Points in combat.",
  },
  {
    title: "Energy Cells",
    type: "mechanic",
    content:
      "Energy Cells are the Trooper's class resource. Gain 2 per level. They restore on a short rest. Energy Cells power both standard shots and the more powerful Overcharge versions of those shots.",
  },
  {
    title: "Gadget Slots and Inventory",
    type: "mechanic",
    content:
      "Gadget Slots determine how many gadgets you can carry on your person. Gadget Inventory is the total number of gadgets you can store (on your ship or in a safehouse). Gadgets refresh on a long rest and may be freely swapped between inventory and active slots during a rest.",
  },
  {
    title: "Temporary HP",
    type: "mechanic",
    content:
      "Temporary HP is a buffer of hit points that absorbs damage before your regular HP. Temporary HP does not stack — if you gain temporary HP while you already have some, take whichever amount is higher. Temporary HP is lost first when you take damage.",
  },
  {
    title: "Concentration",
    type: "mechanic",
    content:
      "Some Force abilities require Concentration. You can only concentrate on one ability at a time (unless a feature like Shadow's Split Focus says otherwise). Taking damage while concentrating requires a Constitution saving throw (DC 10 or half the damage taken, whichever is higher) to maintain concentration.",
  },
  {
    title: "Short Rest vs. Long Rest",
    type: "mechanic",
    content:
      "A short rest is a period of at least one hour during which you do nothing more strenuous than eating, drinking, reading, and tending to wounds. A long rest is a period of at least 8 hours of sleep or light activity. Most class resources refresh on a long rest unless otherwise stated.",
  },
  {
    title: "Critical Hits",
    type: "mechanic",
    content:
      "When you roll a 20 on an attack roll, you score a critical hit. Roll all damage dice twice and add them together, then add any relevant modifiers. Some features (like the Agent's Alpha Strike) can force a critical hit under specific conditions.",
  },
  {
    title: "Saving Throws",
    type: "mechanic",
    content:
      "When a feature calls for a saving throw, the DC is typically 8 + your proficiency bonus + your relevant ability modifier (e.g., Spellcasting Modifier for Force abilities). The target rolls a d20 and adds their relevant ability modifier and proficiency (if proficient).",
  },
];

const specialRules: RuleSection[] = [
  {
    title: "Perception is Intelligence-Based",
    type: "rule",
    content:
      "Unlike many systems, Perception checks in this game use Intelligence as the governing ability score, not Wisdom. This applies to all Perception checks across all classes, including passive Perception.",
  },
  {
    title: "Overcharge Abilities",
    type: "rule",
    content:
      "Many Commando shots and Vanguard abilities have an Overcharge option. Overcharge costs more Energy Cells but provides a significantly stronger effect. You must declare whether you are using the standard or Overcharge version before making any rolls.",
  },
  {
    title: "Heat Management (Mercenary)",
    type: "rule",
    content:
      "Heat vents passively at 5 per turn (8 at level 7). When above 80 Heat, the Mercenary takes 1d8 self-damage per turn. Above 90 Heat, this increases to 2d8. At exactly 100 Heat, all abilities are disabled until Heat drops to 50 or below. Overdrive allows ability usage past 100 but lets Heat build beyond the cap.",
  },
  {
    title: "Balance (Sage)",
    type: "rule",
    content:
      "Balance starts at an undefined value and changes based on actions: +10 per lightsaber strike, -5 per Force Point spent. The Balance value determines which threshold tier the Sage is in, each granting different bonuses and penalties. The Sage should track their Balance carefully each turn.",
  },
  {
    title: "Focus and Impulse (Shadow)",
    type: "rule",
    content:
      "Focus and Impulse are mirror resources. Spending Focus generates Impulse, and spending Impulse generates Focus. Starting each long rest at 5 each, they must be kept roughly equal to maintain the Centered state. Reaching 0 in either resource imposes a significant penalty.",
  },
  {
    title: "Presents (Scoundrel)",
    type: "rule",
    content:
      "Presents are planted via a melee attack and detonate when the target takes any weapon damage. A target can only have one present planted on them at a time. The Scoundrel is immune to their own presents' damage. At level 7, presents without a radius gain a 10ft radius.",
  },
  {
    title: "Companion Droid (Powertech)",
    type: "rule",
    content:
      "The Companion Droid acts on its own initiative. It gains Ability Score Increases at the same rate as its owner. It can be commanded once per Bonus Action. The droid's Gadget Slots are separate from the Powertech's personal slots. At level 13, a second droid can be controlled.",
  },
  {
    title: "Non-Lethal Attacks (Bounty Hunter)",
    type: "rule",
    content:
      "When using Dead or Alive, the Bounty Hunter can declare an attack non-lethal before rolling. If the attack would reduce the target to 0 HP, the target is instead knocked unconscious and stable. This applies only to Blaster attacks.",
  },
];

const notes: RuleSection[] = [
  {
    title: "Incomplete Entries",
    type: "note",
    content:
      "Some class features are marked with '///' in the source material, indicating they are not yet finalized. These will be filled in as the ruleset is developed. Affected entries: Trooper levels 5, 11, and 18.",
  },
  {
    title: "Bounty Hunter Level 14",
    type: "note",
    content:
      "The Bounty Hunter's level 14 feature (Cantina Legend) appears to be incomplete in the source material. The full description will be added when finalized.",
  },
];

function RuleCard({ rule }: { rule: RuleSection }) {
  const colors = {
    rule: { badge: "text-blue-400 border-blue-400/40 bg-blue-400/10", icon: <Info size={14} className="text-blue-400" /> },
    mechanic: { badge: "text-green-400 border-green-400/40 bg-green-400/10", icon: <BookOpen size={14} className="text-green-400" /> },
    note: { badge: "text-amber-400 border-amber-400/40 bg-amber-400/10", icon: <AlertCircle size={14} className="text-amber-400" /> },
  };
  const style = colors[rule.type];

  return (
    <div className="glass-card rounded-lg p-5 border border-border/50">
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h3 className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              {rule.title}
            </h3>
            <span className={cn("ability-tag", style.badge)}>
              {rule.type}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {rule.content}
          </p>
        </div>
      </div>
    </div>
  );
}

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
          Core mechanics, special rules, and design notes for the system. This page covers universal rules that apply across all classes.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Special Rules */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Special Rules
        </h2>
        <div className="space-y-3">
          {specialRules.map((rule) => (
            <RuleCard key={rule.title} rule={rule} />
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
            <RuleCard key={rule.title} rule={rule} />
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Design Notes
        </h2>
        <div className="space-y-3">
          {notes.map((rule) => (
            <RuleCard key={rule.title} rule={rule} />
          ))}
        </div>
      </div>
    </div>
  );
}
