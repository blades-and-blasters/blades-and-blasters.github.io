// =============================================================================
// GAME DATA — Blades & Blasters
// Blades & Blasters design system
// All game content is stored here. Edit this file to update the rulebook.
// =============================================================================

export type ClassAccent =
  | "blue"
  | "teal"
  | "red"
  | "amber"
  | "green"
  | "orange"
  | "cyan"
  | "yellow"
  | "purple"
  | "pink";

export interface ClassResource {
  name: string;
  description: string;
  maxValue?: number | string;
  recharge?: string;
}

export interface LevelFeature {
  level: number;
  name: string;
  description: string;
  type?: "passive" | "active" | "asi" | "subclass" | "resource";
  actionType?: "Action" | "Bonus Action" | "Reaction" | "Free Action";
  saveType?: string;
  duration?: string;
  trigger?: string;
  target?: string;
}

export interface MutagenicAbility {
  id: string;
  name: string;
  description: string;
  overload: string;
}

export interface SniperGadget {
  id: string;
  name: string;
  slots: number;
  uses?: number;
  actionType: "Action" | "Bonus Action" | "Reaction" | "Free Action";
  description: string;
}

export interface OperativeGadget {
  id: string;
  name: string;
  slots: number;
  uses?: string;
  actionType: "Action" | "Bonus Action" | "Reaction" | "Free Action";
  description: string;
}

export interface CommandoShot {
  id: string;
  name: string;
  cost: string;
  description: string;
  overcharge?: string;
}
export interface VanguardAbility {
  id: string;
  name: string;
  cost: string;
  actionType: "Action" | "Bonus Action" | "Reaction" | "Free Action";
  description: string;
  overcharge?: string;
}
export interface ScoundrelPresent {
  id: string;
  name: string;
  cost: string;
  description: string;
}
export interface MercenaryAbility {
  id: string;
  name: string;
  heatCost: number;
  description: string;
  tier50?: string;
  tier70?: string;
  noAction?: boolean;
}
export interface DroidChassis {
  id: string;
  name: string;
  hitDie: string;
  ac: number;
  size: string;
  movement: string;
  proficiency: string;
  stats: { str: number; dex: number; con: number; int: number; wis: number; cha: number };
}
export interface Subclass {
  id: string;
  name: string;
  parentClass: string;
  description: string;
  classResource?: ClassResource;
  features: LevelFeature[];
  /** Optional pool of selectable abilities (e.g. Alchemist mutagenic abilities) */
  mutagenicAbilities?: MutagenicAbility[];
  /** Sniper-exclusive gadgets with action economy */
  sniperGadgets?: SniperGadget[];
  /** Operative-exclusive gadgets with action economy */
  operativeGadgets?: OperativeGadget[];
  /** Commando selectable shots */
  commandoShots?: CommandoShot[];
  /** Vanguard selectable abilities */
  vanguardAbilities?: VanguardAbility[];
  /** Scoundrel selectable presents */
  scoundrelPresents?: ScoundrelPresent[];
  /** Mercenary selectable arsenal abilities */
  mercenaryAbilities?: MercenaryAbility[];
  /** Powertech droid chassis options */
  droidChassis?: DroidChassis[];
  /** Marauder selectable Channel Hatred abilities */
  marauderAbilities?: MarauderAbility[];
  /** Juggernaut selectable Channel Hatred abilities */
  juggernautAbilities?: JuggernautAbility[];
}

export interface MarauderAbility {
  id: string;
  name: string;
  rageCost: number;
  actionType: "Action" | "Bonus Action" | "Reaction" | "Free Action";
  description: string;
  overcharge?: string;
}
export interface JuggernautAbility {
  id: string;
  name: string;
  rageCost: number;
  actionType: "Action" | "Bonus Action" | "Reaction" | "Free Action";
  description: string;
  overcharge?: string;
}
export interface CharacterClass {
  id: string;
  name: string;
  accent: ClassAccent;
  tagline: string;
  description: string;
  hitDie: string;
  armorProficiencies: string[];
  weaponProficiencies: string[];
  savingThrows: string[];
  skills: {
    choose: number;
    from: string[];
  };
  spellcastingAbility?: string;
  resources: ClassResource[];
  features: LevelFeature[];
  subclasses: Subclass[];
}

export interface Stance {
  name: string;
  description: string;
}

export interface FightingStyle {
  id: string;
  name: string;
  description: string;
  availableTo: string[];
}

export const fightingStyles: FightingStyle[] = [
  {
    id: "blaster",
    name: "Blaster",
    description: "Gain +2 to attack rolls made with Blasters.",
    availableTo: ["Trooper", "Bounty Hunter"],
  },
  {
    id: "defense",
    name: "Defense",
    description: "Gain +1 AC.",
    availableTo: ["Trooper", "Bounty Hunter"],
  },
  {
    id: "heavy-weapon-fighting",
    name: "Heavy Weapon Fighting",
    description:
      "When rolling damage with a two-handed weapon, melee or ranged, you may reroll damage dice that roll a 1 or 2.",
    availableTo: ["Trooper", "Bounty Hunter"],
  },
  {
    id: "two-weapon-fighting",
    name: "Two-Weapon Fighting",
    description: "Add your ability modifier to the damage of the second attack.",
    availableTo: ["Trooper", "Bounty Hunter"],
  },
  {
    id: "close-quarters-shooter",
    name: "Close Quarters Shooter",
    description:
      "You do not suffer Disadvantage on ranged attacks while within 5ft of a hostile creature. Ignore Half Cover and Three-Quarters Cover within 15ft. Gain +1 to ranged attack rolls.",
    availableTo: ["Trooper", "Bounty Hunter"],
  },
  {
    id: "gadgeteer",
    name: "Gadgeteer",
    description: "Gain +2 to attack and damage rolls made with Gadgets.",
    availableTo: ["Bounty Hunter"],
  },
];

export type ForceAlignment = "light" | "dark" | "universal";

export interface ForceAbility {
  id: string;
  name: string;
  alignment: ForceAlignment;
  cost: string;
  actionType: string;
  range?: string;
  description: string;
  tags: string[];
  saveType?: string;
  duration?: string;
  target?: string;
  scaling?: string;
}

export interface Gadget {
  id: string;
  name: string;
  slots: number;
  uses: string;
  description: string;
  tags: string[];
  actionType?: "Action" | "Bonus Action" | "Reaction" | "Free Action" | "Passive";
  saveType?: string;
  area?: string;
  duration?: string;
}

export interface Skill {
  name: string;
  ability: string;
  description: string;
  specialRule?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTSABER STANCES
// ─────────────────────────────────────────────────────────────────────────────
export const lightsaberStances: Stance[] = [
  {
    name: "Shii-Cho",
    description: "Gain +1 to Lightsaber attack and damage rolls.",
  },
  {
    name: "Makashi",
    description: "Gain +2 to Lightsaber attack rolls.",
  },
  {
    name: "Soresu",
    description: "Gain +1 to Dexterity saving throws.",
  },
  {
    name: "Ataru",
    description: "After landing a Lightsaber attack, gain 5ft of movement.",
  },
  {
    name: "Djem So",
    description: "Gain +2 to Lightsaber damage rolls.",
  },
  {
    name: "Niman",
    description: "Increase the range of your Force Abilities by 10ft.",
  },
  {
    name: "Vapaad",
    description:
      "Take −2 to Dexterity saving throws, but gain +2 to Lightsaber attack and damage rolls.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CLASSES
// ─────────────────────────────────────────────────────────────────────────────
export const classes: CharacterClass[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // JEDI KNIGHT
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "jedi-knight",
    name: "Jedi Knight",
    accent: "blue",
    tagline: "Warrior of the Force, defender of peace.",
    description:
      "The Jedi Knight is a martial Force-user who balances Lightsaber mastery with mastery of the Force. Through the accumulation of Focus, they achieve heightened states of combat awareness, reflecting the Jedi Code's philosophy of peace through inner stillness.",
    hitDie: "1d10",
    armorProficiencies: ["Light", "Medium"],
    weaponProficiencies: ["Lightsabers"],
    savingThrows: ["Dexterity", "Wisdom"],
    skills: {
      choose: 2,
      from: [
        "Athletics",
        "Deception",
        "Insight",
        "Intimidation",
        "Lore",
        "Perception",
        "Persuasion",
        "Piloting",
      ],
    },
    spellcastingAbility: "Wisdom",
    resources: [
      {
        name: "Focus",
        description:
          "Focus starts at 0 and can increase to a maximum of 100. Gain 20 Focus when you land a hit while below 50 Focus, or 10 Focus when you land a hit while at or above 50 Focus. You may exchange 20 Focus for one Force Point.",
        maxValue: 100,
        recharge: "Gained in combat",
      },
      {
        name: "Force Points",
        description:
          "Used to power Force Abilities. Gain 1 Force Point per level.",
        maxValue: "1 per level",
        recharge: "Long Rest",
      },
      {
        name: "Force Abilities Known",
        description: "Learn 1 Force Ability per level.",
        maxValue: "1 per level",
        recharge: "Permanent",
      },
    ],
    features: [
      {
        level: 1,
        name: "Lightsaber Stance",
        description:
          "Select a Lightsaber Stance to specialize in. Each stance provides a unique combat bonus. See the Stances page for all available stances.",
        type: "passive",
      },
      {
        level: 2,
        name: "Focus",
        description:
          "Focus starts at 0 and can increase to a maximum of 100. Gain 20 Focus when you land a hit while below 50 Focus, or 10 Focus when you land a hit while at or above 50 Focus. You may exchange 20 Focus for one Force Point.",
        type: "resource",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Choose a subclass: Sentinel or Guardian.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 5,
        name: "Extra Attack",
        description:
          "You can attack twice whenever you take the Attack action.",
        type: "passive",
      },
      {
        level: 6,
        name: "Emotion, yet Peace",
        description: "You are immune to the Frightened condition.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 10,
        name: "Ignorance, yet Knowledge",
        description:
          "Once per Long Rest, you may use a Force Ability costing up to 5 Force Points without spending any Force Points.",
        type: "active",
      },
      {
        level: 11,
        name: "Passion, yet Serenity",
        description:
          "Gain Advantage on all Wisdom saving throws.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "Chaos, yet Harmony",
        description:
          "Once per round, when you take damage from an enemy, gain 10 Focus.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "Death, yet the Force",
        description:
          "Once per Long Rest, when you are reduced to 0 HP, immediately regain HP equal to half your maximum HP and increase your Focus to 100.",
        type: "active",
      },
    ],
    subclasses: [
      {
        id: "sentinel",
        name: "Sentinel",
        parentClass: "jedi-knight",
        description:
          "Sentinels are mobile, aggressive combatants who leverage Focus to achieve extraordinary speed and offensive power. They excel at closing distance and maintaining relentless pressure.",
        features: [
          {
            level: 3,
            name: "Flow State",
            description:
              "When above 50 Focus, gain +1 to attack rolls and +1 to Dexterity saving throws. When above 70 Focus, gain +2 to attack rolls and +2 to Dexterity saving throws. When above 90 Focus, gain +3 to attack rolls and +3 to Dexterity saving throws.",
            type: "passive",
          },
          {
            level: 3,
            name: "Mobility Training",
            description: "Gain 10ft of movement. You may Disengage or Dash as a Bonus Action.",
            type: "passive",
          },
          {
            level: 3,
            name: "Agile Ward",
            description: "After moving at least 20ft, you may spend 10 Focus to activate Agile Ward until the start of your next turn. Whenever a blaster attack targets you during this time, make a Dexterity saving throw against the attack roll. On a success, deflect the attack. You may then make a Dexterity-based ranged attack against a target within the original weapon's range; on a hit, it takes the attack's original damage. Activating Agile Ward requires no Action.",
            type: "active",
          },
          {
            level: 3,
            name: "Dance of Blades",
            description: "As a Bonus Action, make one additional Lightsaber attack.",
            type: "active",
          },
          {
            level: 7,
            name: "Immobilizing Strikes",
            description:
              "When you hit an enemy with a Lightsaber attack, reduce its movement speed by 10ft until the start of your next turn. This effect cannot stack with itself.",
            type: "passive",
          },
          {
            level: 10,
            name: "Fluid Assault",
            description: "After hitting two different enemies with Lightsaber attacks, gain +1 to Dexterity saving throws until the start of your next turn.",
            type: "passive",
          },
          {
            level: 13,
            name: "Mobility Expertise",
            description:
              "If you move more than 20ft before attacking, deal an additional 1d8 damage with the first attack you make after moving.",
            type: "passive",
          },
        ],
      },
      {
        id: "guardian",
        name: "Guardian",
        parentClass: "jedi-knight",
        description:
          "Guardians are defensive specialists who use the Force to intercept and redirect attacks. Their mastery of reflection techniques makes them nearly impenetrable walls of protection.",
        features: [
          {
            level: 3,
            name: "Inner Stillness",
            description: "While above 50 Focus, when an attack targets you, make a Dexterity saving throw against the attack roll. On a success, deflect the attack. While above 70 Focus, gain +2 to this saving throw; while above 90 Focus, gain +4 instead. This applies to both ranged and melee attacks. After successfully deflecting an attack, you may use your Reaction to make one attack against a target in range.",
            type: "passive",
          },
          {
            level: 3,
            name: "Defensive Ward",
            description: "As an Action, create a 5ft-radius Defensive Ward until the start of your next turn. You may attempt to deflect any incoming projectile whose path passes within the Ward by making a Dexterity saving throw against its attack roll. On a success, the projectile is deflected. You may spend 15 Focus to reflect a deflected projectile, making a proficient Dexterity-based ranged attack against a target within the projectile's original range; on a hit, it deals the projectile's original damage. Each projectile you reflect grants 5 Focus.",
            type: "active",
          },
          {
            level: 7,
            name: "Perfect Riposte",
            description: "When you successfully deflect an attack from an enemy within range, you may use your Reaction to make one Lightsaber attack against that enemy.",
            type: "active",
          },
          {
            level: 10,
            name: "Improved Focus",
            description: "Whenever you gain Focus from reflecting an attack, gain an additional 3 Focus.",
            type: "passive",
          },
          {
            level: 13,
            name: "Heightened Guard",
            description: "Increase the radius of Defensive Ward to 10ft.",
            type: "passive",
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // JEDI CONSULAR
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "jedi-consular",
    name: "Jedi Consular",
    accent: "teal",
    tagline: "Master of the Force, voice of the Order.",
    description:
      "The Jedi Consular prioritizes Force mastery and diplomacy over raw combat. With twice the Force Points of a Knight and unique utility abilities, they shape the battlefield through the Force rather than the blade.",
    hitDie: "1d8",
    armorProficiencies: ["Light", "Medium"],
    weaponProficiencies: ["Lightsabers"],
    savingThrows: ["Dexterity", "Wisdom"],
    skills: {
      choose: 2,
      from: [
        "Athletics",
        "Deception",
        "Insight",
		"Stealth",
		"Sleight of Hand",
        "Intimidation",
        "Lore",
        "Perception",
        "Persuasion",
        "Piloting",
      ],
    },
    spellcastingAbility: "Wisdom",
    resources: [
      {
        name: "Force Points",
        description: "Gain 2 Force Points per level.",
        maxValue: "2 per level",
        recharge: "Long Rest",
      },
      {
        name: "Force Abilities Known",
        description: "Learn a number of Force Abilities equal to 2 + your Consular level.",
        maxValue: "2 + Consular level",
        recharge: "Permanent",
      },
    ],
    features: [
      {
        level: 1,
        name: "Lightsaber Stance",
        description:
          "Select a Lightsaber Stance to specialize in. Each stance provides a unique combat bonus. See the Stances page for all available stances.",
        type: "passive",
      },
      {
        level: 1,
        name: "Wise Negotiator",
        description: "You may use Wisdom instead of Charisma for Charisma skill checks.",
        type: "passive",
      },
      {
        level: 2,
        name: "Saber Ward",
        description: "As an Action, until the start of your next turn, you may attempt to deflect incoming blaster attacks by making a Dexterity saving throw against each attack roll. On a success, you take no damage from that attack.",
        type: "active",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Select a subclass: Shadow or Sage.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 5,
        name: "Synergy",
        description: "Each time you make an attack, you may use one Force Ability without using an Action or Bonus Action. This can occur once per attack.",
        type: "passive",
      },
      {
        level: 6,
        name: "There is no Emotion, There is Peace",
        description: "Choose a Force Ability and begin Concentrating. If you maintain Concentration until the start of your next turn, the ability activates without requiring an additional Action. When it activates, spend its Force Point cost and choose one: double its range; double one damage or healing roll; or add one additional target.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 10,
        name: "There is no Ignorance, There is Knowledge",
        description: "Spend 2 Force Points to gain Advantage on one skill check.",
        type: "active",
      },
      {
        level: 11,
        name: "There is no Passion, There is Serenity",
        description: "Gain Advantage on all Wisdom saving throws.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "There is no Chaos, There is Harmony",
        description: "Twice per Long Rest, when a creature within 60ft uses a Gadget or Force Ability, you may use your Reaction to attempt to negate it. For a Gadget, the creature makes an Intelligence check. For a Force Ability, it makes a check using its Force Ability modifier. Compare the result against your Wisdom check; if your result is higher, the Gadget or Force Ability has no effect.",
        type: "active",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "There is no Death, There is the Force",
        description: "You no longer age. At the start of each of your turns, regain HP equal to your Consular level. If you are at 0 HP, this healing can restore you only once per Long Rest.",
        type: "passive",
      },
    ],
    subclasses: [
      {
        id: "sage",
        name: "Sage",
        parentClass: "jedi-consular",
        description:
          "The Sage seeks perfect Balance between Lightsaber combat and Force use. Their power scales dramatically based on the Balance resource — extremes in either direction grant unique benefits, while the center offers regeneration and stability.",
        classResource: {
          name: "Balance",
          description: "Gain +10 Balance from Lightsaber strikes. Lose 5 Balance per Force Point spent. Balance ranges from 0 to 100 and begins at 50.",
          maxValue: 100,
          recharge: "Gained in combat",
        },
        features: [
          {
            level: 3,
            name: "Balance Thresholds",
            description:
              "86–100: Downgrade Lightsaber damage by two die sizes. Double targets and range of all Force Abilities, gain +3 to Force Ability modifier.\n\n71–85: Downgrade Lightsaber damage by one die size. Gain +2 to Force Ability modifier.\n\n56–70: Increase Force Ability damage by 1d6.\n\n45–55: Become Centered, gaining 1 Force Point per round while in combat.\n\n30–44: Deal an additional 1d4 damage on Lightsaber hits.\n\n15–29: Double the Force Point cost of all abilities. Gain +2 to hit with Lightsabers.\n\n0–14: Lose the ability to use Force Abilities. Gain +2 to Dexterity saving throws and Saber Ward for free. Gain +3 to hit and to damage for Lightsabers.",
            type: "passive",
          },
		  {
            level: 3,
            name: "One with the Force",
            description: "During a Short Rest, regain 1 Force Point for each Hit Die you spend. You may spend Hit Dice this way even while at full HP.",
            type: "passive",
          },
		  {
            level: 5,
            name: "Restorative Balance",
            description: "While below 40 Balance, gain Extra Attack but lose the effects of Synergy.",
            type: "passive",
          },
          {
            level: 7,
            name: "Meditative Healing",
            description: "While Centered, regain 1d8 HP at the start of each of your turns.",
            type: "passive",
          },
          {
            level: 10,
            name: "Balanced Spirit",
            description: "As a Free Action, toggle Balanced Spirit on or off. While active, lose 10 Balance per Force Point spent and gain 15 Balance when you hit with a Lightsaber attack, instead of the normal Balance changes.",
            type: "active",
          },
          {
            level: 13,
            name: "Harmonic Flow",
            description: "When you cross from 55 or lower Balance to above 55, reduce the Force Point cost of your next Force Ability by 2 (minimum 1). When you cross from 45 or higher Balance to below 45, your next Lightsaber damage roll deals an additional 1d8 damage.",
            type: "passive",
          },
        ],
      },
      {
        id: "shadow",
        name: "Shadow",
        parentClass: "jedi-consular",
        description:
          "Shadows are covert operatives who blend Force sensitivity with espionage techniques. They manage two opposing resources — Focus and Impulse — and must keep them balanced to remain at peak effectiveness.",
        classResource: {
          name: "Focus & Impulse",
          description: "After each Long Rest, start with 5 Focus and 5 Impulse. Whenever you spend Focus, gain an equal amount of Impulse, and whenever you spend Impulse, gain an equal amount of Focus. Reaching 0 Focus prevents you from using Force Points. Reaching 0 Impulse gives you Disadvantage on Lightsaber attacks.",
          maxValue: "Variable",
          recharge: "Long rest (or Short Rest at level 7)",
        },
        features: [
          {
            level: 3,
            name: "See the Unseen",
            description: "Gain Expertise in Perception and Investigation.",
            type: "passive",
          },
          {
            level: 3,
            name: "Walking the Edge",
            description: "While Focus and Impulse are equal, you are Centered and gain 10ft of movement. Reaching 0 Focus prevents you from using Force Points. Reaching 0 Impulse gives you Disadvantage on Lightsaber attacks.",
            type: "passive",
          },
          {
            level: 3,
            name: "Focus Abilities",
            description: "Blanken Mind (2 Focus): As an Action, alter a creature's memories from the past 15 minutes and prevent it from forming new memories for up to 15 minutes. The target may make a Wisdom saving throw to resist; on a Critical Failure, it becomes Mindbroken.\n\nCloak of Shadows (3 Focus): Become Invisible for one minute. Attacking or using an ability ends this effect.\n\nGhost (1 Focus): As a Bonus Action, for one minute you may move through enemy spaces without provoking Opportunity Attacks.\n\nDampened Field (1 Focus): As an Action, silence all sound within 5ft of you for one minute.\n\nShroud Minds (2 Focus): As an Action, up to three enemies within 10ft must make a Wisdom saving throw. On a failure, they become Confused for three turns. At the start of each of their turns, they may repeat the saving throw.",
            type: "active",
          },
          {
            level: 3,
            name: "Impulse Abilities",
            description: "Driven Strike (1 Impulse): Add 1d8 to the damage roll of your next attack.\n\nExplosive Movement (1 Impulse): As a Bonus Action, gain 30ft of movement.\n\nForceful Breach (1 Impulse): Add 1d6 to your next attack roll.\n\nBurst of Force (1 Impulse): Use your next Force Ability as a Bonus Action.\n\nOverwhelming Assault (3 Impulse): In place of one attack, make two attacks.\n\nYou may use multiple Impulse Abilities during the same turn, but only one Impulse Ability may modify a single attack.",
            type: "active",
          },
          {
            level: 7,
            name: "Stillness of Mind",
            description: "Reset your Focus and Impulse on a Short Rest instead of a Long Rest.",
            type: "passive",
          },
          {
            level: 10,
            name: "Island of Calm",
            description: "While Centered, gain +2 to saving throws, Force Ability modifier, and attack rolls. Increase your maximum Focus and Impulse to 16. After each rest, set them to 16 Focus and 0 Impulse, 0 Focus and 16 Impulse, or 8 Focus and 8 Impulse.",
            type: "passive",
          },
          {
            level: 13,
            name: "Split Focus",
            description: "While Impulse is greater than Focus, you may Concentrate on two abilities at the same time.",
            type: "passive",
          },
          {
            level: 13,
            name: "Unified Impulse",
            description: "While Focus is greater than Impulse, you may use Actions as Bonus Actions and Bonus Actions as Actions.",
            type: "passive",
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // TROOPER
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "trooper",
    name: "Trooper",
    accent: "cyan",
    tagline: "Soldier, survivor, weapon of war.",
description:
          "The Trooper is a heavily-armored combatant proficient with all weapons and armor. They rely on Energy Cells to power special shots and subclass abilities, and their Action Surge ability lets them push beyond normal limits in critical moments.",
    hitDie: "1d10",
    armorProficiencies: ["All"],
    weaponProficiencies: ["Non-Lightsabers"],
    savingThrows: ["Strength", "Constitution"],
    skills: {
      choose: 2,
      from: [
        "Animal Handling",
        "Athletics",
        "Lore",
        "Insight",
        "Intimidation",
        "Perception",
        "Survival",
      ],
    },
    resources: [
      {
        name: "Energy Cells",
        description: "Gain 2 Energy Cells per Trooper level. Regain all spent Energy Cells on a Short Rest.",
        maxValue: "2 per level",
        recharge: "Short Rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Fighting Style",
        description: "Choose one Fighting Style available to Troopers.",
        type: "passive",
      },
      {
        level: 2,
        name: "Action Surge",
        description: "Once per Short Rest, take one additional Action on your turn.",
        type: "active",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Pick a subclass: Commando or Vanguard.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 7,
        name: "Tricks of the Trade",
        description: "Gain 3 Gadget Slots and a Gadget Inventory of 3.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 9,
        name: "Indomitable",
        description: "When you fail a saving throw, you may reroll it and must use the new result. You may use this once per Long Rest, twice per Long Rest starting at level 12, and three times per Long Rest starting at level 17.",
        type: "active",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "Holo-Targeting",
        description: "When you hit a target with an attack, you and your allies gain +2 to attack rolls against that target until the start of your next turn. This effect does not stack with itself.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "Relentless Assault",
        description: "Gain an additional Action on each of your turns.",
        type: "passive",
      },
    ],
    subclasses: [
      {
        id: "commando",
        name: "Commando",
        parentClass: "trooper",
        description:
          "Commandos are offensive specialists who modify their blaster fire with specialized shots. Each shot has a standard mode and a more powerful Overcharge mode that costs additional Energy Cells.",
        features: [
          {
            level: 3,
            name: "Specialized Shots",
            description: "Select two Specialized Shots. Specialized Shots modify existing ranged weapon attacks and require no additional Action. Select two additional shots at levels 7, 10, and 15.",
            type: "active",
          },
          {
            level: 5,
            name: "Extra Attack",
            description: "You can attack twice whenever you take the Attack action.",
            type: "passive",
          },
		  {
			level: 7,
			name: "Additional Shots",
			description: "Select two additional Energy Cell Abilities",
			type: "passive",
		  },
          {
            level: 10,
            name: "Additional Shots",
			description: "Select two additional Energy Cell Abilities",
            type: "passive",
          },
          {
            level: 11,
            name: "Improved Extra Attack",
            description: "You can attack three times whenever you take the Attack action.",
            type: "passive",
          },
          {
            level: 15,
            name: "Additional Shots",
			description: "Select two additional Energy Cell Abilities",
            type: "passive",
          },
          {
            level: 18,
            name: "Superior Extra Attack",
            description: "You can attack four times whenever you take the Attack action.",
            type: "passive",
          },
        ],
        commandoShots: [
          { id: "explosive-shot", name: "Explosive Shot", cost: "2 EC", description: "Your ranged weapon attack deals an additional 1d6 damage in a 10ft radius around the target.", overcharge: "3 EC: Increase radius to 15ft; force primary target to pass Strength saving throw or be knocked prone." },
          { id: "full-auto", name: "Full Auto", cost: "2 EC", description: "Make one additional ranged weapon attack against a different enemy within range. On a hit, it deals half damage.", overcharge: "4 EC: Deal full damage." },
          { id: "emp-shot", name: "EMP Shot", cost: "2 EC", description: "Your ranged weapon attack also forces the target to make an Intelligence saving throw. On a failure, its weapon becomes Jammed until the start of your next turn. Vibroweapons deal half damage while Jammed; droids take an additional 1d6 damage.", overcharge: "5 EC: The Jammed condition lasts until the start of your second turn after this attack; droids take an additional 2d6 damage." },
          { id: "sensor-shot", name: "Sensor Shot", cost: "1 EC", description: "Fire a sensor at any point within range. You gain line of sight from that point; if attached to a creature, you can track its location." },
          { id: "piercing-shot", name: "Piercing Shot", cost: "2 EC", description: "Your ranged weapon attack may pierce through up to 5ft of cover or through one creature, destroying any cover it pierces. If you pierce a creature, the attack may hit both that creature and one target directly behind it.", overcharge: "3 EC: Pierce through 10ft." },
          { id: "shredding-shot", name: "Shredding Shot", cost: "3 EC", description: "Your ranged weapon attack reduces the target's AC by 2 until the start of your second turn after this attack. This effect does not stack with itself.", overcharge: "5 EC: Strip 3 AC." },
          { id: "barrage", name: "Barrage", cost: "6 EC", description: "Make one ranged weapon attack against each enemy in a 30ft cone.", overcharge: "12 EC: Add an additional attack to each enemy." },
          { id: "sonic-shot", name: "Sonic Shot", cost: "4 EC", description: "Each target in a 15ft cone must make a Strength saving throw. On a failure, it is pushed 10ft away from you." },
        ],
      },
      {
        id: "vanguard",
        name: "Vanguard",
        parentClass: "trooper",
        description:
          "Vanguards are defensive powerhouses who convert Shields into offensive weapons. They absorb punishment and turn it into devastating counterattacks.",
        features: [
          {
            level: 3,
            name: "Shield Charge",
            description: "Spend 2 Energy Cells to gain 10 Shields. Overcharge (4 EC): Gain 20 Shields.",
            type: "active",
          },
          {
            level: 3,
            name: "Reactive Armor",
            description: "When enemy damage removes all of your Shields, deal 2d6 damage to all creatures within 5ft. Voluntarily removing or spending your Shields does not trigger this effect.",
            type: "passive",
          },
          {
            level: 3,
            name: "Vanguard Abilities",
            description: "Select 2 of the following Energy Cell abilities. Gain additional Energy Cell abilities at levels 7, 9, and 13.",
            type: "active",
          },
          {
            level: 5,
            name: "Power Redistribution",
            description: "Once per turn after making an attack, you may use one Vanguard Ability without using its normal Action or Bonus Action. You still pay its Energy Cell cost. This does not apply to Overcharges.",
            type: "passive",
          },
          {
            level: 7,
            name: "Improved Shields",
            description: "Gain two additional Energy Cell abilities. Increase all Shields you gain by 5.",
            type: "passive",
          },
          {
            level: 9,
            name: "Enhanced Shields",
            description: "Gain two additional Energy Cell abilities. Increase all Shields you gain by an additional 10.",
            type: "passive",
          },
          {
            level: 11,
            name: "Extra Attack",
            description: "You can attack two times whenever you take the Attack action.",
            type: "passive",
          },
          {
            level: 13,
            name: "Superior Shields",
            description: "Gain two additional Energy Cell abilities. Increase all Shields you gain by an additional 10.",
            type: "passive",
          },
        ],
        vanguardAbilities: [
          { id: "riot-strike", name: "Riot Strike", cost: "2 EC", actionType: "Reaction", description: "If an enemy uses an ability or Gadget within 5ft of you, use your Reaction to make an attack. On a hit, the attack deals no damage, the ability or Gadget is negated, and you gain 10 Shields.", overcharge: "5 EC: Also stop the enemy from using any other abilities for the remainder of their turn." },
          { id: "harpoon", name: "Harpoon", cost: "2 EC", actionType: "Action", description: "A creature within 30ft must make a Strength saving throw. On a failure, pull it adjacent to you.", overcharge: "3 EC: Pull yourself to them, gaining 10 Shields." },
          { id: "explosive-pulse", name: "Explosive Pulse", cost: "2 EC", actionType: "Action", description: "Lose all of your Shields. Creatures within 5ft take damage equal to the Shields lost, with a Dexterity saving throw for half damage.", overcharge: "3 EC: Increase radius to 10ft." },
          { id: "leeching-blast", name: "Leeching Blast", cost: "5 EC", actionType: "Action", description: "Creatures in a 30ft cone make a Strength saving throw. On a failure, remove up to 20 Shields from each target; gain Shields equal to half the total removed.", overcharge: "8 EC: Gain the full amount stripped." },
          { id: "divert-energy", name: "Divert Energy", cost: "2 EC", actionType: "Bonus Action", description: "Lose 5 Shields and cause your next attack to deal an additional 10 damage.", overcharge: "4 EC: Leech 10 Shields." },
          { id: "neural-jolt", name: "Neural Jolt", cost: "3 EC", actionType: "Action", description: "Your next attack forces the target to make a Wisdom saving throw. On a failure, it must attack you on its next turn if able. If that attack misses, gain 10 Shields.", overcharge: "6 EC: Grant a 5ft radius to the effect." },
          { id: "ion-pulse", name: "Ion Pulse", cost: "2 EC", actionType: "Action", description: "Lose 10 Shields. All targets within 5ft must make an Intelligence saving throw. On a failure, their weapons become Jammed until the start of your next turn. Vibroweapons deal half damage while Jammed; droids take 1d6 damage.", overcharge: "6 EC: Increase radius to 10ft." },
          { id: "shield-pulse", name: "Shield Pulse", cost: "3 EC", actionType: "Action", description: "Lose all of your Shields. Allies within 30ft gain Half Cover for two turns.", overcharge: "5 EC: Grant 3/4ths cover." },
        ],
      },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  // SMUGGLERR
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "smuggler",
    name: "Smuggler",
    accent: "pink",
    tagline: "Fast hands, faster ship, fastest draw.",
    description:
      "The Smuggler is a charismatic rogue who relies on speed, cunning, and a constant flow of Energy. They shoot first, ask questions later, and always have an ace up their sleeve.",
    hitDie: "1d8",
    armorProficiencies: ["Light", "Medium"],
    weaponProficiencies: ["Non-Lightsabers"],
    savingThrows: ["Dexterity", "Constitution"],
    skills: {
      choose: 3,
      from: [
        "Persuasion",
        "Deception",
        "Piloting",
        "Technology",
        "Investigation",
        "Performance",
        "Sleight of Hand",
      ],
    },
    resources: [
      {
        name: "Energy",
        description: "Begin with 100 Energy. Regain 10 Energy at the start of each of your turns and 10 Energy whenever you hit with a non-ability attack.",
        maxValue: 100,
        recharge: "Passive regeneration",
      },
    ],
    features: [
      {
        level: 1,
        name: "Charming Rogue",
        description:
          "While unarmored, AC equals 10 + Dexterity modifier + Charisma modifier.",
        type: "passive",
      },
      {
        level: 2,
        name: "Quick Hands",
        description:
          "Gain +2 to Initiative rolls.",
        type: "passive",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Pick a Subclass: Gunslinger or Scoundrel.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 5,
        name: "Extra Attack",
        description: "You can attack twice whenever you take the Attack action.",
        type: "passive",
      },
      {
        level: 6,
        name: "You Shot First",
        description:
          "Gain Advantage on initiative rolls. Against any enemy that still beats you, gain Advantage on your first attack against them.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 10,
        name: "Quick Reflexes",
        description:
          "On any Dexterity saving throw against damage, take half damage on a failure and no damage on a success.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "Smuggler's Luck",
        description: "Twice per Long Rest, reroll any roll you make.",
        type: "active",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "Daredevil",
        description:
          "Smuggler's Luck applies to any roll made by any creature within 30ft of you. Additionally, you can now choose the roll, including 1 and 20.",
        type: "passive",
      },
    ],
    subclasses: [
      {
        id: "gunslinger",
        name: "Gunslinger",
        parentClass: "smuggler",
        description:
          "Gunslingers are lightning-fast duelists who turn every enemy attack into an opportunity to strike back. They specialize in dual-wielding and reactive combat.",
        features: [
          {
            level: 3,
            name: "Offhand Proficiency",
            description: "Add your Proficiency Bonus to attacks made with your offhand weapon.",
            type: "passive",
          },
          {
            level: 3,
            name: "Fastest Hand Alive",
            description: "When an enemy within 30ft makes an attack, you may use your Reaction and spend 20 Energy to make one attack with your main-hand weapon and one attack with your offhand weapon against that enemy.",
            type: "active",
          },
          {
            level: 3,
            name: "Quick Turnaround",
            description: "When an enemy misses you with an attack, you may spend 15 Energy to make one attack with your main-hand weapon against it. On a hit, gain +1 AC until the start of your next turn. This requires no Reaction and may be used alongside Fastest Hand Alive.",
            type: "active",
          },
          {
            level: 7,
            name: "Double Down",
            description: "When you hit with an attack, you may spend 10 Energy to choose one: deal an additional 1d6 damage, or reduce the target's movement speed by 10ft until the start of your next turn.",
            type: "active",
          },
          {
            level: 7,
            name: "Hair Trigger",
            description: "When an enemy makes an attack, you may use your Reaction and spend 20 Energy to impose Disadvantage on that attack. If it misses, make one attack with your main-hand weapon against that enemy. This may be used alongside Quick Turnaround, but not Fastest Hand Alive.",
            type: "active",
          },
          {
            level: 13,
            name: "Quick Reflexes",
            description: "Gain one additional Reaction each round.",
            type: "passive",
          },
        ],
      },
      {
        id: "scoundrel",
        name: "Scoundrel",
        parentClass: "smuggler",
        description:
          "Scoundrels are dirty fighters who plant explosive 'presents' on their enemies. Each present detonates when the target takes weapon damage, creating devastating chain reactions.",
        features: [

          {
            level: 3,
            name: "Present in Your Pocket",
            description: "In place of one melee attack, plant a Present on the target. When the target next takes weapon damage, you may detonate the Present, causing its listed effect.",
            type: "active",
          },
          {
            level: 7,
            name: "Spirit of Generosity",
            description: "A Present without a radius gains a 10ft radius and cannot affect you. If a Present already has a radius, double that radius instead.",
            type: "passive",
          },
          {
            level: 10,
            name: "A Little Extra for Everyone",
            description: "You may double a Present's damage by doubling its Energy cost. Alternatively, combine two different Presents, excluding their damage, by paying the sum of their Energy costs. Increase your maximum Energy to 150.",
            type: "passive",
          },
          {
            level: 13,
            name: "Quick Hands",
            description: "You may plant Presents as a Bonus Action.",
            type: "passive",
          },
        ],
        scoundrelPresents: [
          { id: "hot-potato", name: "Hot Potato", cost: "20 Energy", description: "Plant an incendiary bomb. Deals 2d6 damage and lights them on fire when detonated, dealing 1d4 damage per turn for two turns." },
          { id: "ticklestick", name: "Ticklestick", cost: "20 Energy", description: "Plant an ion charge. Deals 2d6 damage and forces an Intelligence saving throw or weapons are Jammed for one turn. Vibroweapons deal half damage; droids take double damage." },
          { id: "icecube", name: "Icecube", cost: "30 Energy", description: "Plant a cryobomb. Deals 2d6 damage and forces a Constitution saving throw or the target is Frozen in place (movement 0, all enemies gain Advantage on attacks against them)." },
          { id: "kick-up-the-ass", name: "Kick up the Ass", cost: "20 Energy", description: "Plant a concussion bomb. Deals 2d6 damage and propels them 5ft in a direction of your choosing." },
          { id: "light-of-my-life", name: "Light of my Life", cost: "20 Energy", description: "Plant a flashbang. Deals 1d8 damage and forces every creature except you within 10ft to pass a Constitution saving throw or be blinded for one turn." },
          { id: "greasy-fingers", name: "Greasy Fingers", cost: "20 Energy", description: "Plant a lubricant bomb. Deals zero damage, but spreads lubricant over a 10ft area. Every enemy in this area must pass a DC12 Dexterity saving throw or fall prone, and a DC14 Dexterity saving throw or drop whatever they are holding." },
          { id: "bouncing-betty", name: "Bouncing Betty", cost: "20 Energy", description: "Plant a repulsor bomb. Deals 1d6 damage and propels the target 10ft in the air. For the duration of the round, the target cannot benefit from cover, and takes fall damage upon landing." },
        ],
      },
    ],
  },
  // ───────────────────────────────────────────────────────────────────────────
  // AGENTT
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "agent",
    name: "Agent",
    accent: "green",
    tagline: "Unseen. Unheard. Unstoppable.",
    description:
      "The Agent is a master of stealth and gadgetry. Their Sneak Attack scales throughout their career, and their growing Gadget arsenal makes them the most versatile non-Force class in the game.",
    hitDie: "1d8",
    armorProficiencies: ["Light"],
    weaponProficiencies: ["Non-Lightsabers"],
    savingThrows: ["Dexterity", "Intelligence"],
    skills: {
      choose: 3,
      from: ["Any"],
    },
    resources: [
      {
        name: "Gadget Slots",
        description: "Gain 1 Gadget Slot per Agent level. Regain all Gadget uses on a Long Rest. You may change your equipped Gadgets between Long Rests as long as you do not exceed your available Gadget Slots.",
        maxValue: "1 per level",
        recharge: "Long Rest",
      },
      {
        name: "Gadget Inventory",
        description: "Your Gadget Inventory is equal to your Gadget Slots.",
        maxValue: "Equal to Gadget Slots",
        recharge: "Long Rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Sneak Attack",
        description: "When attacking an enemy who you have Advantage against, deal an additional 1d8 damage. Scales with level: 2d8 at level 3, 3d8 at level 5, 4d8 at level 7, 5d8 at level 9, 6d8 at level 11, 7d8 at level 13, 8d8 at level 15, and 9d8 at level 17. Applies to all instances of damage in an attack.",
        type: "passive",
      },
      {
        level: 2,
        name: "Camouflage Expert",
        description:
          "Gain Advantage on Stealth checks when you have had time to prepare a camouflage.",
        type: "passive",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Choose a Subclass: Operative or Sniper.",
        type: "subclass",
      },
	  {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 5,
        name: "Tactical Infiltrator",
        description: "You cannot be Surprised. At the start of combat, choose one enemy; that enemy has Disadvantage on its Initiative roll.",
        type: "passive",
      },
      {
        level: 6,
        name: "Silent Killer",
        description: "When you kill a target more than 10ft from any of its allies, make a Stealth check. On a success, the death does not alert others unless the body or other evidence is discovered.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 10,
        name: "Alpha Strike",
        description: "Once per Long Rest, when you attack an enemy that is unaware of your presence, the attack automatically hits and is a Critical Hit.",
        type: "active",
      },
      {
        level: 11,
        name: "Surgical Precision",
        description: "Your Sneak Attack damage ignores Resistances.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "Quick Reflexes",
        description: "Gain Advantage on attacks against targets that have not yet acted this round.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "Preternatural Targeting",
        description: "Whenever you deal damage with an attack or Gadget, use the maximum possible result of its damage dice.",
        type: "passive",
      },
    ],
    subclasses: [
      {
        id: "operative",
        name: "Operative",
        parentClass: "agent",
        description:
          "Operatives are intelligence specialists who double their gadget capacity and gain access to cutting-edge espionage tools. They are masters of infiltration and information gathering.",
        features: [
          {
            level: 3,
            name: "Experienced Killer",
            description: "Attacks you make with Advantage produce no noise.",
            type: "passive",
          },
          {
            level: 3,
            name: "Deep Pockets, Deeper Stores",
            description: "Double your Gadget Slots and Gadget Inventory. Gain access to the Operative-exclusive Gadgets listed below.",
            type: "passive",
          },
          {
            level: 7,
            name: "Expertise",
            description: "Gain Expertise in two skills of your choosing.",
            type: "passive",
          },
          {
            level: 9,
            name: "Efficient Power Sources",
            description:
              "For all battery-powered Gadgets, double their duration.",
            type: "passive",
          },
          {
            level: 13,
            name: "Faceless, Traceless",
            description: "When you take time to conceal your presence, you may hide all reasonably concealable signs of your passage, including visual, audible, physical, and electronic evidence.",
            type: "passive",
          },
        ],
        operativeGadgets: [
          { id: "personal-cloak", name: "Personal Cloak", slots: 3, actionType: "Action", description: "Become Invisible for up to one minute. Breaks upon attacking. Additional batteries cost 1 Gadget Slot each.", uses: "2" },
          { id: "pseudolarynx", name: "Pseudolarynx", slots: 1, actionType: "Free Action", description: "Perfectly mimic someone's voice after collecting a five-minute sample. Can only record one voice at a time.", uses: "Unlimited" },
          { id: "whisper-range-laser-mic", name: "Whisper-Range Laser Mic", slots: 1, actionType: "Action", description: "Detect surface vibrations on distant glass or walls and convert them into clear audio within 30ft.", uses: "Unlimited" },
          { id: "smart-dust-trackers", name: "Smart Dust Trackers", slots: 1, actionType: "Action", description: "Release microscopic adhesive particles that cling to a chosen target within 15ft and transmit a weak tracking signal for 1d4 hours.", uses: "3" },
          { id: "arc-projector", name: "Arc Projector", slots: 3, actionType: "Bonus Action", description: "Force a target within 15ft to make a Constitution saving throw. If they fail, they become Stunned for two turns. It may repeat its Constitution saving throw after the end of its first turn to attempt to break free. Additional batteries may be taken at 1 slot each.", uses: "2" },
          { id: "stun-drone", name: "Stun Drone", slots: 3, actionType: "Action", description: "Send out a stun drone to a location within 300ft. Any target who passes within 10ft of it must make a Constitution saving throw or be Stunned for one turn. It has 10 AC and 5 HP.", uses: "1" },
        ],
      },
      {
        id: "sniper",
        name: "Sniper",
        parentClass: "agent",
        description:
          "Snipers are long-range precision killers who can engage targets at extreme distances while remaining hidden. Their gadgets extend their reach and awareness far beyond normal limits.",
        features: [
          {
            level: 3,
            name: "Crack Shot",
            description:
              "Gain the ability to fire through the full range of your weapons without disadvantage.",
            type: "passive",
          },
          {
            level: 3,
            name: "Steady Aim",
            description: "If you do not move during your turn, gain +2 to your next ranged weapon attack roll.",
            type: "active",
          },
          {
            level: 3,
            name: "Sniper Gadgets",
            description:
              "Gain access to the following Sniper-exclusive gadgets: Targeting Visor, Adaptive Camouflage Cloak, Spotter Droid, and Wall-Penetrating Scanners.",
            type: "passive",
          },
          {
            level: 7,
            name: "Eagle Eyes",
            description: "Gain Advantage on visual Perception checks.",
            type: "passive",
          },
          {
            level: 7,
            name: "Sniper's Hide",
            description: "While Hidden and more than 60ft from a target, attacking it does not automatically reveal your position.",
            type: "passive",
          },
          {
            level: 9,
            name: "Trick Shot",
            description:
              "Gain the ability to bounce blaster bolts around cover, letting you take attacks against covered targets at Disadvantage so long as you can draw a projectile path from you to the target with one bounce. For the purposes of weapon range, you must trace the path the projectile follows.",
            type: "active",
          },
           {
            level: 13,
            name: "Overwatch",
            description:
              "As an Action, establish a 60-foot cone until the start of your next turn. When a creature moves within it, use your Reaction to make one weapon attack against that creature.",
            type: "active",
          },
        ],
        sniperGadgets: [
          {
            id: "targeting-visor",
            name: "Targeting Visor",
            slots: 1,
            actionType: "Bonus Action",
            description: "Analyze one target for weaknesses. Identify all Resistances and major skills, and gain +2 to attack rolls against that target for 1 day. Additional memory chips store 2 additional targets per Gadget Slot.",
          },
          {
            id: "adaptive-camouflage-cloak",
            name: "Adaptive Camouflage Cloak",
            slots: 2,
            actionType: "Action",
            description: "Cloak a 5×5 ft static position, making anyone inside invisible and permitting the user to shoot out. After every shot, roll a d20 — on 10 and below, the cloak fails. Can be used for four hours. Additional memory chips are 1 position/slot.",
          },
          {
            id: "spotter-droid",
            name: "Spotter Droid",
            slots: 2,
            actionType: "Action",
            description: "Launch a small spotter droid that can travel up to one mile from you (must remain in line of sight). Sends a live feed of its viewpoint directly to you.",
          },
          {
            id: "wall-penetrating-scanners",
            name: "Wall-Penetrating Scanners",
            slots: 3,
            actionType: "Action",
            description: "See through up to 15 ft of combined obstacles. Lasts one minute. Additional batteries are 1 minute/slot.",
          },
          {
            id: "reflective-micromirrors",
            name: "Reflective Micromirrors",
            slots: 1,
            uses: 10,
            actionType: "Action",
            description: "Place reflective micromirrors. These mirrors may be seen through their path, giving you vision up to 20ft away from the mirror. Each mirror extends this path. Additionally, when bouncing off of a mirror with Trick Shot, the blaster bolt gains an additional bounce.",
          },
        ],
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  // BOUNTY HUNTER
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "bounty-hunter",
    name: "Bounty Hunter",
    accent: "yellow",
    tagline: "The galaxy's most dangerous profession.",
    description:
      "The Bounty Hunter is a gadget-focused warrior who combines fighting styles with an ever-growing arsenal of technology. Their Companion Droid or Heat-based arsenal makes them uniquely adaptable to any situation.",
    hitDie: "1d8",
    armorProficiencies: ["Light", "Medium"],
    weaponProficiencies: ["Non-Lightsabers"],
    savingThrows: ["Dexterity", "Intelligence"],
    skills: {
      choose: 3,
      from: [
        "Athletics",
        "Insight",
        "Investigation",
        "Perception",
        "Piloting",
        "Stealth",
        "Survival",
        "Technology",
      ],
    },
    spellcastingAbility: "Dexterity",
    resources: [
      {
        name: "Gadget Slots",
        description: "Gain 1 Gadget Slot per Bounty Hunter level. Regain all Gadget uses on a Long Rest.",
        maxValue: "1 per level",
        recharge: "Long Rest",
      },
      {
        name: "Gadget Inventory",
        description: "Your Gadget Inventory is equal to your Gadget Slots.",
        maxValue: "Equal to level",
        recharge: "Long Rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Fighting Style",
        description: "Choose one Fighting Style available to Bounty Hunters.",
        type: "passive",
      },
      {
        level: 2,
        name: "Expert Hunter",
        description: "Gain Advantage on Survival and Investigation checks involving targets you are knowledgeable about.",
        type: "passive",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Choose a Subclass: Powertech or Mercenary.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 5,
        name: "Extra Attack",
        description: "You can attack twice whenever you take the Attack action.",
        type: "passive",
      },
      {
        level: 6,
        name: "Dead or Alive",
        description: "You may make nonlethal attacks with Blasters at their full range. When you reduce an enemy to 0 HP, you may immediately move up to half your movement speed.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
	  {
        level: 10,
        name: "Targeting Synchronization",
        description: "Once per turn, when attacking a target affected by one of your abilities or Gadgets, gain Advantage on your next attack against it.",
        type: "passive",
      },
      {
        level: 11,
        name: "Jack of all Trades",
        description: "Gain Proficiency in all other skills from the initial list.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
	    {
        level: 14,
        name: "Cantina Legend",
        description:
          "Once per Short Rest, choose one target who knows your reputation. As a Bonus Action, force them to make a Wisdom saving throw against your level plus your proficiency bonus. Upon failure, they become Frightened for one minute. After either succeeding on the saving throw or one minute, they become immune to this effect for 24 hours.",
        type: "active",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "You Know My Name",
        description:
          "Cantina Legend can be applied once per turn and no longer has limited charges. Gain Advantage against Frightened Targets.",
        type: "passive",
      },
    ],
    subclasses: [
      {
        id: "powertech",
        name: "Powertech",
        parentClass: "bounty-hunter",
        description:
          "Powertechs deploy a Companion Droid that fights alongside them, effectively doubling their gadget capacity and combat presence. The droid can be customized with different chassis and grows in power alongside its owner.",
        features: [
          {
            level: 3,
            name: "Companion Droid",
            description: "Double your Gadget Inventory. Gain a Companion Droid that you may command as a Bonus Action. When you command it, either you or the droid may activate one equipped Gadget as part of that Bonus Action. Your Companion Droid gains 1 Gadget Slot per Bounty Hunter level. It may carry a weapon for 3 Gadget Slots; only a Heavy Chassis may carry weapons with High Recoil. It may spend up to 3 Gadget Slots on armor plating, gaining +1 AC per slot. Choose two skill proficiencies for it. Whenever you gain an Ability Score Improvement, your Companion Droid gains one as well. Choose its chassis below.",
            type: "passive",
          },
          {
            level: 7,
            name: "Shielded Chassis",
            description: "At the start of each combat, a Light Chassis gains 12 Shields, a Medium Chassis gains 16 Shields, and a Heavy Chassis gains 20 Shields.",
            type: "passive",
          },
          {
            level: 9,
            name: "Droid Upgrades",
            description: "Light Droids may become Invisible for one minute once per Long Rest. Medium Droids gain Expertise in Technology. Heavy Droids gain +2 AC.",
            type: "passive",
          },
          {
            level: 13,
            name: "Enhanced Uplink",
            description: "You may control two Companion Droids. Both may be commanded with the same Bonus Action. Divide your available Gadget Slots between them as you choose.",
            type: "passive",
          },
        ],
        droidChassis: [
          {
            id: "light-chassis",
            name: "Light Chassis",
            hitDie: "1d6",
            ac: 12,
            size: "Tiny",
            proficiency: "Stealth",
            movement: "30ft fly speed or 15ft movement",
            stats: { str: 8, dex: 16, con: 10, int: 16, wis: 12, cha: 10 },
          },
          {
            id: "medium-chassis",
            name: "Medium Chassis",
            hitDie: "1d8",
            ac: 13,
            size: "Small",
            proficiency: "Technology",
            movement: "15ft fly speed or 5ft movement",
            stats: { str: 12, dex: 12, con: 14, int: 12, wis: 12, cha: 10 },
          },
          {
            id: "heavy-chassis",
            name: "Heavy Chassis",
            hitDie: "1d10",
            ac: 14,
            size: "Medium",
            proficiency: "Piloting",
            movement: "Standard",
            stats: { str: 16, dex: 8, con: 16, int: 12, wis: 10, cha: 10 },
          },
        ],
      },
      {
        id: "mercenary",
        name: "Mercenary",
        parentClass: "bounty-hunter",
        description:
          "Mercenaries are walking weapons platforms who generate Heat as they use their devastating arsenal. Managing Heat is critical — too much disables your abilities, but high Heat levels dramatically increase your damage output.",
        classResource: {
          name: "Heat",
          description:
            "At the start of each of your turns, vent 5 Heat. Maximum Heat is 100. Take 1d8 self-damage at the start of each of your turns while above 80 Heat, or 2d8 while above 90 Heat. At 100 Heat, your abilities are disabled until your Heat is reduced to 50 or lower.",
          maxValue: 100,
          recharge: "Passive venting (5/turn)",
        },
        features: [
          {
            level: 3,
            name: "Emergency Vent",
            description: "As an Action, once per Long Rest, vent 50 Heat and deal 2d6 damage to every creature within 10ft.",
            type: "active",
          },
          {
            level: 3,
            name: "Mercenary Arsenal",
            description: "Gain access to two of the following Heat-based abilities. These may be used as an Attack.",
            type: "active",
          },
          {
            level: 7,
            name: "Bacta Autoinjectors",
            description: "Gain Advantage on death saving throws.",
            type: "passive",
          },
          {
            level: 7,
            name: "Improved Arsenal",
            description: "Gain access to two more Heat-based Abilities. Increase each damage die used by your Arsenal Abilities by one step: d4 → d6 → d8 → d10 → d12 → 2d6.",
            type: "passive",
          },
          {
            level: 10,
            name: "Superior Arsenal",
            description: "Gain access to two more Heat-based Abilities. Heat-based ability damage is increased by 4.",
            type: "passive",
          },
          {
            level: 10,
            name: "Weaponized Venting",
            description: "Emergency Vent only damages enemies. Increase the damage of Emergency Vent to 4d6.",
            type: "passive",
          },
          {
            level: 13,
            name: "Enhanced Arsenal",
            description: "Gain access to two more Heat-based Abilities. For Heat-based Abilities, deal an additional damage die.",
            type: "passive",
          },
          {
            level: 13,
            name: "Reinforced Core",
            description: "Increase maximum Heat and Overheat threshold to 120. Self-damage thresholds increase by 10.",
            type: "passive",
          },
        ],
        mercenaryAbilities: [
          { id: "explosive-dart", name: "Explosive Dart", heatCost: 15, description: "Launch an Explosive Dart at a target within 30ft. This target must pass a Wisdom saving throw or be Frightened until the beginning of your next turn. After that turn, detonates for 1d12 damage in 5ft radius.", tier50: "2d8.", tier70: "2d12." },
          { id: "rocket-punch", name: "Rocket Punch", heatCost: 15, description: "Launch yourself at an enemy within 30ft. Make a contested Dexterity check. On a success, deal 1d8 damage; on a fail, do 0 damage.", tier50: "+1d4 in 5ft area along path.", tier70: "+1d8 in 10ft area around the target." },
          { id: "spare-tibanna-canister", name: "Spare Tibanna Canister", heatCost: 10, description: "Throw a canister up to 45ft, creating a 10ft cloud. The next ranged attack that passes through this cloud detonates it for 1d6 damage to all in area.", tier50: "2d6.", tier70: "15ft diameter." },
          { id: "ionic-tether", name: "Ionic Tether", heatCost: 15, description: "Make a proficient Dexterity-based ranged attack roll against a target within 30ft. On a hit, deal 1d8 damage and reduce their movement by 15ft until the start of your next turn.", tier50: "Movement reduced to 0.", tier70: "2d8 damage, and remove Reactions." },
          { id: "magnetic-imploder", name: "Magnetic Imploder", heatCost: 25, description: "Throw the imploder at a space within 30ft. Enemies within 10ft of the imploder must pass a Strength saving throw or be sucked to the center, dealing 2d6 damage, or half on a successful saving throw.", tier50: "2d10.", tier70: "15ft radius." },
          { id: "railgun", name: "Railgun", heatCost: 20, description: "Fire a bolt in a 5ft wide, 30ft long line, making a separate attack roll against each target in the line. Deals 1d10 damage per hit. The bolt stops when it misses or if it impacts into full cover.", tier50: "2d8.", tier70: "10ft wide." },
          { id: "fragmentation-flechette", name: "Fragmentation Flechette", heatCost: 15, description: "Make a ranged attack roll against a target within 60ft. On a hit, deal 1d8 damage to the primary target, then 1d6 to all creatures in a 15ft cone extending behind the primary target. Both primary and secondary targets may make a Dexterity saving throw to take half damage.", tier50: "1d12 primary, 1d10 secondary.", tier70: "30ft cone." },
          { id: "magnetic-exploder", name: "Magnetic Exploder", heatCost: 25, description: "Throw the exploder at a space within 30ft. Enemies within 10ft of the exploder must pass a Strength saving throw. On a failure, they are pushed 10ft away, dealing 2d6 damage, or half on a successful saving throw.", tier50: "2d10.", tier70: "15ft radius." },
          { id: "overdrive", name: "Overdrive", heatCost: 10, description: "Requires 50+ Heat. For two turns, add 1d8 to every damage instance caused by your Arsenal Abilities, and all abilities generate an additional 5 Heat. During this time, you may continue using abilities while Overheated and your Heat may exceed its normal maximum. Emergency Vent ends this effect immediately.", noAction: true },
        ],
      },
    ],
  },
  {
    id: "sith-warrior",
    name: "Sith Warrior",
    accent: "red",
    tagline: "Master of rage and dark power.",
    description: "The Sith Warrior channels raw hatred and dark side energy into devastating combat power. Through Rage and Channel Hatred, they become engines of destruction.",
    hitDie: "1d10",
    armorProficiencies: ["All"],
    weaponProficiencies: ["Lightsabers"],
    savingThrows: ["Strength", "Constitution"],
    skills: {
      choose: 2,
      from: ["Intimidation", "Athletics", "Insight", "Perception", "Survival", "Piloting"],
    },
    spellcastingAbility: "Strength",
    resources: [
      {
        name: "Force Points",
        description: "Used to power Force Abilities. Gain 1 Force Point per Sith Warrior Level.",
        maxValue: "1 per level",
        recharge: "Long Rest",
      },
      {
        name: "Rage",
        description: "Begin at 0 Rage. At the end of each of your turns, lose 10 Rage. Gain 20 Rage when you hit with a Lightsaber attack and 10 Rage when you are hit by an attack. Maximum Rage is 8 × your Constitution score.",
        maxValue: "8 × Constitution score",
        recharge: "Combat",
      },
      {
        name: "Channel Hatred",
        description: "Gain 1 Channel Hatred charge at levels 3, 5, 7, 9, 11, 13, 15, and 17. As a Bonus Action, expend 1 charge to begin Channeling Hatred for up to 1 minute. It ends early if you complete a turn without making an attack or taking damage.",
        maxValue: "8 charges",
        recharge: "Long Rest",
      },
      {
        name: "Force Abilities Known",
        description: "Learn 1 Force Ability per Sith Warrior Level.",
        maxValue: "1 per level",
        recharge: "Permanent",
      },
    ],
    features: [
      {
        level: 1,
        name: "Lightsaber Stance",
        description: "Choose a Lightsaber Stance.",
        type: "passive",
      },
      {
        level: 2,
        name: "Furious Assault",
        description: "After you Dash, you may spend 30 Rage to make one attack with Advantage.",
        type: "active",
      },
      {
        level: 2,
        name: "Contemptuous Reflection",
        description: "After hitting with a Lightsaber attack, until the start of your next turn you may use your Reaction when targeted by a blaster attack. Make a Dexterity saving throw against the attack roll. On a success, deflect the attack and take no damage.",
        type: "active",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Choose a subclass: Marauder or Juggernaut.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 6,
        name: "Unnatural Might",
        description: "Gain Advantage on Strength checks and Strength saving throws.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 10,
        name: "Unrelenting Hatred",
        description: "Gain an additional 5 Rage whenever you gain Rage from hitting or being hit. Channel Hatred may now persist through one turn in which you neither make an attack nor take damage.",
        type: "passive",
      },
      {
        level: 11,
        name: "Contemptuous Strikes",
        description: "Expand your critical strike range by 1.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "Eternal Rage",
        description: "When you reduce a creature to 0 HP, gain 40 Rage.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "Avatar of the Dark",
        description: "Once per Long Rest, for 1 minute, become an avatar of the Dark Side. Rage abilities cost no Rage, Rage no longer decays, and all Lightsaber attacks have Advantage and deal an additional 1d8 damage.",
        type: "active",
      },
    ],
    subclasses: [
      {
        id: "marauder",
        name: "Marauder",
        parentClass: "sith-warrior",
        description: "Marauders channel their hatred into relentless offensive power, gaining additional attacks and devastating abilities that trigger on critical strikes and killing blows.",
        features: [
          {
            level: 3,
            name: "Channel Hatred",
            description: "While Channeling Hatred, once per turn when you make an attack, make one additional attack. Increase your Critical Hit range by 1.",
            type: "passive",
          },
          {
            level: 3,
            name: "Hatred Abilities",
            description: "Select two Channel Hatred abilities.",
            type: "active",
          },
          {
            level: 7,
            name: "Additional Abilities",
            description: "Select two additional Channel Hatred abilities.",
            type: "passive",
          },
          {
            level: 10,
            name: "Additional Abilities",
            description: "Select two additional Channel Hatred abilities.",
            type: "passive",
          },
          {
            level: 15,
            name: "Additional Abilities",
            description: "Select two additional Channel Hatred abilities.",
            type: "passive",
          },
        ],
        marauderAbilities: [
          { id: "brutal-execution", name: "Brutal Execution", rageCost: 40, actionType: "Bonus Action", description: "When you land a Critical Hit or reduce a creature to 0 HP, all enemies within 10ft of you must succeed on a Wisdom saving throw or become Frightened for one turn." },
          { id: "frenzied-strike", name: "Frenzied Strike", rageCost: 40, actionType: "Bonus Action", description: "When you land a Critical Hit or reduce a creature to 0 HP, move up to 30ft without provoking Opportunity Attacks. Your next attack has Advantage." },
          { id: "bloodthirst", name: "Bloodthirst", rageCost: 40, actionType: "Bonus Action", description: "When you land a Critical Hit or reduce a creature to 0 HP, regain HP equal to half the damage rolled." },
          { id: "crippling-slash", name: "Crippling Slash", rageCost: 40, actionType: "Bonus Action", description: "On your next hit, reduce the target's movement speed to 0 for one turn and deal an additional 1d8 damage." },
          { id: "predation", name: "Predation", rageCost: 40, actionType: "Bonus Action", description: "When you land a Critical Hit or reduce a creature to 0 HP, your attacks deal an additional 1d8 damage for two turns." },
          { id: "whirling-frenzy", name: "Whirling Frenzy", rageCost: 60, actionType: "Action", description: "Make one Lightsaber attack against each enemy within 5ft of you." },
          { id: "cloak-of-pain", name: "Cloak of Pain", rageCost: 60, actionType: "Bonus Action", description: "For two turns, whenever you take damage, deal 1d6 damage to all enemies within 5ft of you." },
          { id: "undying-rage", name: "Undying Rage", rageCost: 110, actionType: "Reaction", description: "For two turns, you cannot be reduced below 1 HP." },
        ],
      },
      {
        id: "juggernaut",
        name: "Juggernaut",
        parentClass: "sith-warrior",
        description: "Juggernauts transform themselves into unstoppable forces of destruction, channeling hatred into defensive power and retaliatory strikes that punish those who dare challenge them.",
        features: [
          {
            level: 3,
            name: "Channel Hatred",
            description: "While Channeling Hatred, gain Resistance to all damage.",
            type: "passive",
          },
          {
            level: 3,
            name: "Hatred Abilities",
            description: "Select two Channel Hatred abilities.",
            type: "active",
          },
          {
            level: 7,
            name: "Additional Abilities",
            description: "Select two additional Channel Hatred abilities.",
            type: "passive",
          },
          {
            level: 10,
            name: "Additional Abilities",
            description: "Select two additional Channel Hatred abilities.",
            type: "passive",
          },
          {
            level: 15,
            name: "Additional Abilities",
            description: "Select two additional Channel Hatred abilities.",
            type: "passive",
          },
        ],
        juggernautAbilities: [
          { id: "pain-upon-pain", name: "Pain upon Pain", rageCost: 40, actionType: "Action", description: "Once per round, after taking damage equal to more than 1/10th of your maximum HP during that round, deal 1d8 damage to all enemies within 10ft of you." },
          { id: "master-of-terror", name: "Master of Terror", rageCost: 40, actionType: "Reaction", description: "When you take damage, force up to three enemies within 10ft to make a Wisdom saving throw. On a failure, they have Disadvantage on attacks against you until the start of your next turn." },
          { id: "contemptuous-taunt", name: "Contemptuous Taunt", rageCost: 40, actionType: "Action", description: "Force an enemy within 30ft to make a Wisdom saving throw. On a failure, until the end of its turn it must spend its full movement moving toward you and attack you when it reaches you." },
          { id: "implacable-advance", name: "Implacable Advance", rageCost: 60, actionType: "Bonus Action", description: "For one turn, your movement speed cannot be reduced, you ignore Difficult Terrain, and you cannot be knocked Prone. Make one Lightsaber attack against each enemy you pass within 5ft of." },
          { id: "spiteful-rebuke", name: "Spiteful Rebuke", rageCost: 60, actionType: "Reaction", description: "When you take damage, make one attack with Advantage." },
          { id: "crushing-blow", name: "Crushing Blow", rageCost: 80, actionType: "Bonus Action", description: "After hitting with a Lightsaber attack, deal an additional 2d8 damage and force the target to make a Constitution saving throw. On a failure, it becomes Stunned for two turns." },
          { id: "executioners-grip", name: "Executioner's Grip", rageCost: 100, actionType: "Action", description: "Brutally grip an enemy. It must make a Strength saving throw. On a failure, it becomes Grappled and Restrained and takes 2d6 damage at the end of each of its turns. As an Action, it may attempt to break free with an Athletics check. Until it breaks free or 1 minute passes, you may drag it freely without impeding your movement. When an enemy attacks you, you may use your Reaction to drag the gripped target into the attack. The attacker gains Advantage, and all damage is dealt to the gripped target instead." },
          { id: "overwhelming-hatred", name: "Overwhelming Hatred", rageCost: 100, actionType: "Bonus Action", description: "For two turns, your attacks deal an additional 1d8 damage. When you hit, push the target 15ft. If it collides with a solid object, it takes an additional 2d6 damage." },
        ],
      },
    ],
  },
  {
    id: "sith-inquisitor",
    name: "Sith Inquisitor",
    accent: "orange",
    tagline: "Power through passion, victory through pain.",
    description:
      "The Sith Inquisitor is a Force-wielding predator who weaponizes aggression itself. By embracing Recklessness — sacrificing defense for raw offensive power — they chain abilities together in a cascade of dark side destruction. The Sith Code is not merely a philosophy for the Inquisitor: it is a combat engine, each tenet unlocking a new tier of lethal capability.",
    hitDie: "1d8",
    armorProficiencies: ["Light", "Medium"],
    weaponProficiencies: ["Lightsabers"],
    savingThrows: ["Strength", "Dexterity"],
    skills: {
      choose: 2,
      from: [
        "Athletics",
        "Deception",
        "Insight",
        "Intimidation",
        "Lore",
        "Perception",
        "Persuasion",
        "Piloting",
      ],
    },
    spellcastingAbility: "Charisma",
    resources: [
      {
        name: "Force Points",
        description:
          "Gain 2 Force Points per level. Used to power Force Abilities.",
        maxValue: "2 per level",
        recharge: "Long Rest",
      },
      {
        name: "Force Abilities Known",
        description: "Learn 1 Force Ability per level.",
        maxValue: "1 per level",
        recharge: "Permanent",
      },
    ],
    features: [
      {
        level: 1,
        name: "Lightsaber Stance",
        description:
          "Select a Lightsaber Stance to specialize in. Each stance provides a unique combat bonus.",
        type: "passive",
      },
      {
        level: 2,
        name: "Recklessness",
        description: "Sacrifice 2 AC until the end of your next turn. Gain +2 to Force Ability attack rolls and +1 to Force Ability save DCs. If you use Recklessness again on the following turn, increase both the penalty and bonuses by the same amounts, stacking with each consecutive use.",
        type: "active",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Pick a subclass: Alchemist or Sorcerer.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 5,
        name: "Peace is a Lie, There is only Passion",
        description: "The first time each turn you deal Force Ability damage, gain +1 to Force Ability attack rolls and save DCs until the end of your next turn. This bonus stacks up to +2.",
        type: "passive",
      },
      {
        level: 6,
        name: "Through Passion, I Gain Strength",
        description: "Whenever you deal ability damage, choose one target you damaged with an ability on your previous turn. Deal additional damage to that target equal to half the highest single damage instance you dealt this turn, rounded down.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 9,
        name: "Through Strength, I Gain Power",
        description:
          "Upon killing a target, gain AC equal to 1/6th of their AC (rounded down) for two turns. May be triggered twice per Short Rest.",
        type: "active",
      },
      {
        level: 11,
        name: "Through Power, I Gain Victory",
        description: "Once per turn, when you use a Force Ability that costs 3 Force Points or fewer, you may use it without spending Force Points. It cannot benefit from Power Overcharge. This feature may trigger twice per Short Rest.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 14,
        name: "Through Victory, my Chains are Broken",
        description:
          "You no longer trigger attacks of opportunity. You may no longer be moved against your will by any means.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each. Also gain one Talent Point.",
        type: "asi",
      },
      {
        level: 18,
        name: "The Force shall Free Me",
        description: "When you die, transfer your soul into the nearest compatible body within one mile. The target makes a Wisdom saving throw against your normal Force Ability save DC. On a failure, you possess it, overwriting its soul and body with your own and gaining its current HP. On a success, you become a bodiless Force Ghost that may attempt to possess compatible bodies within one mile of your corpse or place of death. Your current Recklessness bonuses apply to the initial possession attempt.",
        type: "active",
      },
    ],
    subclasses: [
      {
        id: "alchemist",
        name: "Alchemist",
        parentClass: "sith-inquisitor",
        description:
          "The Alchemist bends the dark side of the Force into flesh itself, creating an Alchemical Horror — a monstrous familiar that grows more terrifying with each level. By selecting and overloading mutagenic abilities, the Alchemist shapes their Horror into a unique instrument of destruction.",
        features: [
          {
            level: 3,
            name: "Alchemical Horror",
            description:
              "Using the dark side of the Force, create an Alchemical Horror completely under your control that may be commanded as a Bonus Action. It has the following base stats: HP 1d12 per level, AC 12, STR 16, DEX 14, CON 16, WIS 6, INT 8, CHA 10. Upon creation, choose two Mutagenic Abilities from the pool below.",
            type: "active",
          },
          {
            level: 7,
            name: "Mutagenic Evolution I",
            description:
              "Gain two additional Mutagenic Abilities for your Horror. For either new ability option, you may instead choose a Mutagenic Overload for an existing ability.",
            type: "passive",
          },
          {
            level: 10,
            name: "Mutagenic Evolution II",
            description:
              "Gain three additional Mutagenic Abilities for your Horror. For any new ability option, you may instead choose a Mutagenic Overload for an existing ability.",
            type: "passive",
          },
          {
            level: 13,
            name: "Mutagenic Evolution III",
            description:
              "Gain four additional Mutagenic Abilities for your Horror. For any new ability option, you may instead choose a Mutagenic Overload for an existing ability.",
            type: "passive",
          },
        ],
        mutagenicAbilities: [
          {
            id: "rending-claws",
            name: "Rending Claws",
            description: "Grow claws capable of rending flesh and steel. Gain a 1d10 5ft melee attack.",
            overload: "Increase damage to 2d8.",
          },
          {
            id: "grasping-tendrils",
            name: "Grasping Tendrils",
            description: "Grow tendrils capable of lancing out. Gain a 1d8 20ft ranged attack. On a hit, the target must make a Strength or Dexterity saving throw (its choice) or become Grappled.",
            overload: "Increase damage to 2d6 and range to 30ft. The saving throw is made with Disadvantage.",
          },
          {
            id: "acid-spines",
            name: "Acid Spines",
            description: "Grow acidic spines capable of being launched through armor. Gain a 1d8 60ft ranged attack.",
            overload: "Increase damage to 2d8 and range to 75ft.",
          },
          {
            id: "weirdling",
            name: "Weirdling",
            description: "Gain the ability to channel your Force abilities through the Horror, enabling it to serve as the origin point for all abilities. All benefits from these abilities still apply to you, not the Horror.",
            overload: "Gain Advantage on all Force Ability attack rolls made through the Horror.",
          },
          {
            id: "flesh-bond",
            name: "Flesh-bond",
            description: "Gain the ability to transfer health between yourself and the Horror at a ratio of 4 HP lost for 1 HP transferred.",
            overload: "Change the ratio to 2 HP lost for 1 HP transferred.",
          },
          {
            id: "warped-presence",
            name: "Warped Presence",
            description: "Enemies have Disadvantage on all saving throws while within 5ft of the Horror.",
            overload: "Expand the range to 10ft.",
          },
          {
            id: "regenerative-tissue",
            name: "Regenerative Tissue",
            description: "The Horror heals 1d6 HP at the start of each of its turns.",
            overload: "Increase healing to 2d6.",
          },
          {
            id: "barbed-limbs",
            name: "Barbed Limbs",
            description: "Gain 30ft of climb speed and the ability to move on walls or ceilings without requiring any checks. Gain Advantage on Athletics checks to grapple.",
            overload: "Increase all movement and climb speed by an additional 30ft.",
          },
          {
            id: "petrifying-gaze",
            name: "Petrifying Gaze",
            description: "Enemies who begin their turn directly facing the Horror must make a Wisdom saving throw or have their movement speed halved, their AC reduced by 2, and have Disadvantage on Dexterity saving throws.",
            overload: "The Wisdom saving throw must be made with Disadvantage.",
          },
          {
            id: "tainted-slime",
            name: "Tainted Slime",
            description: "Enemies who begin their turn within 5ft of the Horror have their movement speed halved.",
            overload: "Expand the radius to 10ft.",
          },
          {
            id: "amorphous-form",
            name: "Amorphous Form",
            description: "The Horror may pass through any opening 1 inch in diameter and has Advantage on Athletics checks to break grapples.",
            overload: "The Horror may pass through openings 0.1 inches in diameter and can freely resize to Small or Large at will.",
          },
        ],
      },
      {
        id: "sorcerer",
        name: "Sorcerer",
        parentClass: "sith-inquisitor",
        description:
          "The Sorcerer amplifies the destructive potential of Force Lightning into a cascading storm of electricity. Through Recklessness, they push their Force Abilities beyond their limits — overcharging abilities, chaining lightning between targets, and ultimately unleashing a tempest that fills the battlefield.",
        features: [
          {
            level: 3,
            name: "Ionizing Potential",
            description:
              "Force Lightning gains an additional +2 damage. Critical Hits cause Force Lightning to bounce to another target within 60ft of the original target, making a new attack roll against them. Bounces do not apply Power Overcharge. This chain may continue indefinitely.",
            type: "passive",
          },
          {
            level: 3,
            name: "Unlimited Power",
            description:
              "While Recklessness is active, increase the Critical Hit range of all Force Abilities by 1 (e.g. crits on 19–20 instead of 20).",
            type: "passive",
          },
          {
            level: 3,
            name: "Power Overcharge",
            description:
              "Gain the ability to overcharge Force abilities. For each additional Force Point spent beyond the base cost, increase the ability's damage by 4. You may only Power Overcharge with up to your Proficiency Bonus number of Force Points.",
            type: "active",
          },
          {
            level: 7,
            name: "Power Overwhelming",
            description:
              "Once per Short Rest, after dealing Force Ability damage to a target, force them to make a Constitution saving throw or become Stunned until the end of their next turn.",
            type: "active",
          },
          {
            level: 10,
            name: "Overload",
            description:
              "Once per Long Rest, cast Force Lightning against every target within 10ft simultaneously.",
            type: "active",
          },
          {
            level: 13,
            name: "Lightning Storm",
            description:
              "Force Lightning now chains to two nearby targets on a Critical Hit instead of one. Increase the Critical Hit range of all Force Abilities by an additional 1.",
            type: "passive",
          },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FORCE ABILITIES
// ─────────────────────────────────────────────────────────────────────────────
export const forceAbilities: ForceAbility[] = [
  {
    id: "mind-trick",
    name: "Mind Trick",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Action",
    range: "Touch/Close",
    description: "The target makes a Wisdom saving throw. On a success, it becomes aware of your attempt. On a failure, you gain Advantage on Charisma checks against it.",
    tags: ["Mental", "Social"],
  },
  {
    id: "push-pull",
    name: "Push / Pull",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Action",
    range: "60ft",
    description: "Push or pull an object weighing up to 20 lbs up to 30ft. If the object impacts a creature, that creature must make a Strength saving throw or take 1d6 damage.",
    tags: ["Telekinesis", "Utility", "Damage", "Universal"],
  },
  {
    id: "force-leap",
    name: "Force Leap",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "Self",
    description: "Gain an additional 30ft of jump distance.",
    tags: ["Movement", "Utility", "Universal"],
  },
  {
    id: "force-shove",
    name: "Force Shove",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "Push or pull an object weighing up to 200 lbs or a Medium creature up to 15ft. If you target a creature, it must make a Strength saving throw. On a failure, it takes 6d6 damage and is moved 15ft. On a success, it takes half damage and is not moved.",
    tags: ["Telekinesis", "Damage"],
  },
  {
    id: "saber-throw",
    name: "Saber Throw",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Attack",
    range: "30ft",
    description: "Make a normal Lightsaber attack against a target within 30ft. If the attack misses, you may redirect the Lightsaber to a second target within range and make another attack. Afterward, the Lightsaber returns to your hand. These count as Lightsaber attacks for all rules and resource effects. A Versatile Lightsaber uses its one-handed damage die for these attacks.",
    tags: ["Attack", "Lightsaber", "Universal"],
  },
  {
    id: "force-healing",
    name: "Force Healing",
    alignment: "light",
    cost: "Variable Force Points",
    actionType: "Action",
    range: "Touch",
    description: "Touch a creature and spend any number of Force Points. The target regains 1d4 HP per Force Point spent.",
    tags: ["Healing", "Support"],
  },
  {
    id: "force-crush",
    name: "Force Crush",
    alignment: "light",
    cost: "4 Force Points",
    actionType: "Action",
    range: "Close",
    description: "Choose a creature and Concentrate until the start of your next turn. If you maintain Concentration, the target makes a Strength saving throw. On a failure, it takes 8d6 damage; on a success, it takes half damage.",
    tags: ["Telekinesis", "Damage", "Concentration"],
  },
  {
    id: "precognition",
    name: "Precognition",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Action",
    range: "Self",
    description:
      "Roll a d100, then ask the GM one question about the probable outcome of an action or event within the next 24 hours. The GM answers with a truthful vision that may be symbolic or incomplete, but the quality of which is heavily reliant on the result of the roll.",
    tags: ["Divination", "Utility"],
  },
  {
    id: "battle-precognition",
    name: "Battle Precognition",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "300ft",
    description:
      "Choose up to three visible creatures. The GM tells you their current intended movement, target, and Action for their next turn. Their intentions may change if circumstances materially change before they act.",
    tags: ["Divination", "Tactical"],
  },
  {
    id: "detect-emotion",
    name: "Detect Emotion",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "30ft",
    description: "Determine the emotional state of one creature within range.",
    tags: ["Sense", "Social"],
  },
  {
    id: "force-projection",
    name: "Force Projection",
    alignment: "light",
    cost: "Variable",
    actionType: "Action",
    range: "Variable",
    description:
      "1 FP: visible/audible illusion within 30 ft.\n2 FP: projection within 1 mile.\n3 FP: projection to a known location on the same planet.",
    tags: ["Illusion", "Utility"],
  },
  {
    id: "projectile-freezing",
    name: "Projectile Freezing",
    alignment: "universal",
    cost: "3 Force Points",
    actionType: "Action",
    range: "10ft radius",
    description: "For up to two turns while Concentrating, create a 10ft-radius zone centered on you. Projectiles entering the zone are suspended. When the effect ends, all suspended projectiles resume their paths.",
    tags: ["Defense", "Concentration", "Universal"],
  },
  {
    id: "battle-meditation",
    name: "Battle Meditation",
    alignment: "light",
    cost: "4 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "For one minute, allies within 30ft gain +2 AC and +2 to attack rolls.",
    tags: ["Support", "Buff", "Concentration"],
  },
  {
    id: "force-stasis",
    name: "Force Stasis",
    alignment: "light",
    cost: "3 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "Choose one creature or object within range for up to two turns. A creature makes a Strength saving throw when the ability is used and at the start of each of its turns. On a failure, it is Stunned until the start of its next turn. An affected object is suspended in place for the duration.",
    tags: ["Control", "Concentration"],
  },
  {
    id: "force-suspend",
    name: "Force Suspend",
    alignment: "light",
    cost: "5 Force Points",
    actionType: "Action",
    range: "15ft",
    description: "Choose up to three creatures within range for up to one minute while Concentrating. Each target makes a Strength saving throw when the ability is used and at the start of each of its turns. On a failure, it is Stunned until the start of its next turn.",
    tags: ["Control", "Concentration"],
  },
  {
    id: "force-barrier",
    name: "Force Barrier",
    alignment: "light",
    cost: "4 Force Points",
    actionType: "Action",
    range: "Self",
    description: "Project a curved Force barrier along the outer edge of a 15ft cone originating from you. The barrier blocks enemy movement and incoming enemy damage, while allowing allies and allied attacks to pass through. It lasts for 1 minute or until destroyed. The barrier has HP equal to your level × 5.",
    tags: ["Defense", "Concentration"],
  },
  {
    id: "induce-sleep",
    name: "Induce Sleep",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Action",
    range: "10ft",
    description:
      "Attempt to induce sleep in an enemy for 10 minutes. They may make a Wisdom saving throw to attempt to remain awake. Any damage, a loud noise, or an ally using the Help action will wake them up.",
    tags: ["Mental", "Control"],
  },
  {
    id: "mind-probe",
    name: "Mind Probe",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Action",
    range: "Touch",
    description:
      "Attempt to read the mind of a restrained, unconscious, or willing creature. After one minute, if the creature is not willing, make a contested Wisdom check against their Wisdom saving throw. On a success, read the creature's mind and learn one piece of information of your choosing. On a failure, be ejected from their mind and become unable to attempt to Mind Probe them for one day. If your target critically fails their saving throw, they become Mindbroken.",
    tags: ["Mental", "Information"],
  },
  {
    id: "energy-absorption",
    name: "Energy Absorption",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Reaction",
    range: "Self",
    description:
      "When you would take energy, lightning, or blaster damage, make a Wisdom saving throw against DC 10 or half the incoming damage, whichever is higher. On success, take no damage. On failure, take half damage.",
    tags: ["Defense", "Reaction", "Universal"],
  },
  {
    id: "guided-navigation",
    name: "Guided Navigation",
    alignment: "universal",
    cost: "3 Force Points",
    actionType: "Action",
    range: "Self",
    description: "Divine a path forward. Make a Wisdom check; on a success, learn the path toward your objective. When used for astrogation, you may identify and plot new hyperspace routes.",
    tags: ["Divination", "Utility", "Universal"],
  },
  // ── Dark Side ──────────────────────────────────────────────────────────────
  {
    id: "force-lightning",
    name: "Force Lightning",
    alignment: "dark",
    cost: "2 Force Points",
    actionType: "Action",
    range: "60ft",
    description:
      "Make an attack against a target within 60ft with lightning, dealing 3d10 lightning damage. The target may make a Dexterity saving throw; on a failed saving throw they cannot take Reactions until the start of their next turn.",
    tags: ["Damage", "Lightning", "Dark Side"],
  },
  {
    id: "dominate-will",
    name: "Dominate Will",
    alignment: "dark",
    cost: "5 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Attempt to control a creature within 30ft. The target must make a Wisdom saving throw or become controlled for up to one minute. The target may repeat the saving throw at the end of each of its turns. If they critically fail their saving throw, the target does not receive another saving throw until it takes damage, and they become Mindbroken.",
    tags: ["Mental", "Control", "Concentration", "Dark Side"],
  },
  {
    id: "force-scream",
    name: "Force Scream",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Action",
    range: "15ft cone",
    description:
      "Emit a terrifying scream in a 15ft cone. Creatures in the area take 3d8 psychic damage and must make a Constitution saving throw or become frightened until the end of their next turn.",
    tags: ["Damage", "Fear", "AOE", "Dark Side"],
  },
  {
    id: "burn-memory",
    name: "Burn Memory",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Assault a creature's mind within 30ft. The target takes 2d6 psychic damage and must make an Intelligence saving throw or have a single memory removed from their mind.",
    tags: ["Mental", "Damage", "Dark Side"],
  },
  {
    id: "thought-bomb",
    name: "Thought Bomb",
    alignment: "dark",
    cost: "6 Force Points",
    actionType: "Action",
    range: "15ft",
    description:
      "Target makes a Wisdom saving throw. On failure, implant a trigger phrase, concept, or sensory stimulus. For one hour, the first time that trigger occurs, the bomb detonates. Creatures within 20 ft make an Intelligence saving throw, taking 6d6 psychic damage on failure or half on success. The implanted target is aware something has entered its mind but does not know the trigger.",
    tags: ["Mental", "Damage", "AOE", "Dark Side"],
  },
  {
    id: "dread-mark",
    name: "Dread Mark",
    alignment: "dark",
    cost: "2 Force Points",
    actionType: "Bonus Action",
    range: "60ft",
    description: "Mark a creature within 60ft for one minute. The first time each turn you damage it, deal an additional 1d6 damage. Once during the duration, you may impose Disadvantage on any one saving throw the target makes. If the target dies while marked, all enemies within 10ft must make a Wisdom saving throw; on a failure, they become Frightened until the start of your next turn.",
    tags: ["Debuff", "Fear", "Dark Side"],
  },
  {
    id: "warp-flesh",
    name: "Warp Flesh",
    alignment: "dark",
    cost: "4 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Mutate a creature within 30ft. The target must make a Constitution saving throw or suffer one of the following effects of your choice for up to one minute: its speed becomes 0, it takes 2d6 damage at the start of each turn, or it has Disadvantage on attack rolls. The target may repeat the saving throw at the end of each turn.",
    tags: ["Control", "Debuff", "Concentration", "Dark Side"],
  },
  {
    id: "dark-infusion",
    name: "Dark Infusion",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Bonus Action",
    range: "30ft",
    description:
      "Empower a friendly creature within 30ft for one minute. The target gains +2 to attack rolls and damage rolls, but takes 1d6 damage at the end of each of its turns. This effect may be cancelled at any time.",
    tags: ["Buff", "Support", "Dark Side"],
  },
  {
    id: "viral-madness",
    name: "Viral Madness",
    alignment: "dark",
    cost: "5 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "A creature within 30ft makes a Wisdom saving throw. On a failure, it becomes Confused for up to one minute. At the end of each of its turns, it repeats the saving throw. On a failure, each creature within 10ft must make a Wisdom saving throw or become affected by Viral Madness. On a success, the creature is no longer Confused and becomes immune to Viral Madness for 1 hour.",
    tags: ["Mental", "Control", "Concentration", "AOE", "Dark Side"],
  },
  {
    id: "static-cage",
    name: "Static Cage",
    alignment: "dark",
    cost: "4 Force Points",
    actionType: "Action",
    range: "60ft",
    description:
      "Create a 10ft cube of crackling lightning within 60ft for up to one minute. Creatures in the area take 2d8 damage when the cage appears, and again if they attempt to leave the area or are displaced out of it. This damage may only occur once per turn. The area is difficult terrain.",
    tags: ["Lightning", "Control", "Concentration", "AOE", "Dark Side"],
  },
  {
    id: "force-choke",
    name: "Force Choke",
    alignment: "dark",
    cost: "4 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "Choose a creature within 30ft. It makes a Constitution saving throw. On a failure, it becomes Restrained for up to one minute, takes 3d8 force damage at the start of each of its turns, and cannot speak. As a Bonus Action, you may deal an additional 1d8 force damage to it. At the start of each of its turns, it repeats the saving throw, ending the effect on a success.",
    tags: ["Telekinesis", "Control", "Damage", "Concentration", "Dark Side"],
  },
  {
    id: "deceive-senses",
    name: "Deceive Senses",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Distort the perception of a creature within 30ft for up to one minute. The target must make a Wisdom saving throw or suffer one of the following effects of your choice: Disadvantage on attack rolls and no Reactions, is Frightened of a creature of your choice, or is Blinded. The target may repeat the saving throw at the end of each turn.",
    tags: ["Mental", "Debuff", "Concentration", "Dark Side"],
  },
  {
    id: "drain-life",
    name: "Drain Life",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Drain vitality from a creature within 30ft. The target takes 4d8 damage and you regain hit points equal to a quarter of the damage dealt. The target may make a Constitution saving throw for half damage; on a failed saving throw it has Disadvantage on its next attack roll.",
    tags: ["Damage", "Healing", "Necrotic", "Dark Side"],
  },
  {
    id: "force-tether",
    name: "Force Tether",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Bonus Action",
    range: "60ft",
    description: "Link two targets within 60ft for one minute. Voluntary or involuntary movement affecting one target affects the other equally. Movement caused by Force Tether cannot trigger Force Tether again.",
    tags: ["Control", "Concentration", "Light Side"],
  },
  {
    id: "force-burden",
    name: "Force Burden",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "30ft",
    description:
      "Select a target within 30ft. Its movement speed is reduced by half for one turn.",
    tags: ["Control", "Light Side"],
  },
  {
    id: "force-stabilize",
    name: "Force Stabilize",
    alignment: "light",
    cost: "3 Force Points",
    actionType: "Action",
    range: "60ft",
    description: "Choose a target within 60ft and Concentrate for up to six hours or until triggered. If its HP would be reduced to 0 or lower, it is instead reduced to 1 HP and cannot be reduced below 1 HP until the start of its next turn.",
    tags: ["Protection", "Healing", "Concentration", "Light Side"],
  },
  {
    id: "psychometry",
    name: "Psychometry",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "Touch",
    description:
      "Touch an object and read its emotional history.",
    tags: ["Utility", "Light Side"],
  },
  {
    id: "force-sanctuary",
    name: "Force Sanctuary",
    alignment: "light",
    cost: "3 Force Points",
    actionType: "Action",
    range: "15ft",
    description: "For one minute, allies within 15ft gain Advantage on saving throws.",
    tags: ["Protection", "Aura", "Concentration", "Light Side"],
  },
  {
    id: "shared-burden",
    name: "Shared Burden",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Reaction",
    range: "30ft",
    description: "When an ally within 30ft would take damage, use your Reaction to reduce that damage by half. You take damage of the same type equal to the amount prevented.",
    tags: ["Protection", "Reaction", "Light Side"],
  },

  {
    id: "life-sense",
    name: "Life Sense",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Action",
    range: "30ft",
    description: "For 1 minute, detect all living creatures within 30ft and know their location. This does not remove the effects of Invisibility.",
    tags: ["Detection", "Utility", "Universal"],
  },
  {
    id: "force-gust",
    name: "Force Gust",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Action",
    range: "15ft cone",
    description: "Create a 15ft cone that extinguishes flames, disperses smoke, and pushes unsecured objects up to 30ft away from you.",
    tags: ["Utility", "Control", "Universal"],
  },
  {
    id: "heightened-awareness",
    name: "Heightened Awareness",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Action",
    range: "Self",
    description: "For one minute, gain 15ft of Blindsense.",
    tags: ["Detection", "Utility", "Universal"],
  },
  // ── New Dark abilities ───────────────────────────────────────────────────
  {
    id: "force-torment",
    name: "Force Torment",
    alignment: "dark",
    cost: "2 Force Points",
    actionType: "Reaction",
    range: "30ft",
    description: "Choose a target within 30ft that is using an ability or Gadget. It makes a Wisdom saving throw. On a failure, it takes 2d6 damage.",
    tags: ["Damage", "Reaction", "Dark Side"],
  },
  {
    id: "feed-on-fear",
    name: "Feed on Fear",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Bonus Action",
    range: "30ft",
    description: "Choose a target within 30ft for one minute. Once per round when it fails a saving throw, regain 1d6 HP. If it dies during the duration, you may choose a new target within 30ft.",
    tags: ["Healing", "Debuff", "Dark Side"],
  },
  {
    id: "scar-soul",
    name: "Scar Soul",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "Choose a creature within 30ft. It makes a Constitution saving throw. On a failure, it cannot regain HP for one minute. At the start of each round, it repeats the saving throw, ending the effect on a success.",
    tags: ["Debuff", "Concentration", "Dark Side"],
  },
  {
    id: "raise-dead",
    name: "Raise Dead",
    alignment: "dark",
    cost: "5 Force Points",
    actionType: "Action",
    range: "30ft",
    description: "Choose a corpse within 30ft and raise it as a Reanimated Husk until it is destroyed or you complete your next Long Rest. You may control only one Husk at a time. It has HP equal to 5 × your level, AC 10, 20ft movement, and 10 in every ability score. Its attacks use your Force Ability modifier + Proficiency Bonus to hit and deal 1d8 + your Force Ability modifier damage. Commanding it requires a Bonus Action.",
    tags: ["Summon", "Dark Side"],
  },
  {
    id: "siphon-strength",
    name: "Siphon Strength",
    alignment: "dark",
    cost: "5 Force Points",
    actionType: "Action",
    range: "60ft",
    description: "Choose a target within 60ft. It makes a Wisdom saving throw. On a failure, reduce its Strength by 1d4 and increase your Strength by the same amount for one minute. This cannot reduce the target's Strength below 1.",
    tags: ["Debuff", "Dark Side"],
  },
  {
    id: "wither",
    name: "Wither",
    alignment: "dark",
    cost: "3 Force Points",
    actionType: "Action",
    range: "60ft",
    description: "Choose a target within 60ft. It makes a Constitution saving throw. On a failure, reduce its maximum HP by 5d6; on a success, reduce it by half that amount. This cannot reduce its maximum HP below 1. The reduction lasts until its next Long Rest.",
    tags: ["Debuff", "Dark Side"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GADGETS
// ─────────────────────────────────────────────────────────────────────────────
export const gadgets: Gadget[] = [
  {
    id: "flamethrower",
    name: "Flamethrower",
    slots: 1,
    uses: "2 uses",
    description:
      "create a 10ft diameter patch of fire on the ground (lasts 2 turns), or a 20x5ft wall within 60ft of you. Any enemy who starts their turn in this fire or passes through it takes 3d6 damage",
    tags: ["Damage", "Area"],
    actionType: "Action",
  },
  {
    id: "remote-bomb",
    name: "Remote Bomb",
    slots: 3,
    uses: "1 use",
    description: "Plant a bomb that becomes armed after 20 seconds. Once armed, you may detonate it at any time while within comms range or set a timer. Creatures in the blast make a Dexterity saving throw for half damage.",
    tags: ["Damage", "Area"],
    actionType: "Action",
  },
  {
    id: "auto-hacking-device",
    name: "Auto-Hacking Device",
    slots: 1,
    uses: "Unlimited",
    description:
      "Gain Advantage on all Technology rolls to hack devices.",
    tags: ["Utility", "Technology"],
    actionType: "Bonus Action",
  },
  {
    id: "jetpack",
    name: "Jetpack",
    slots: 2,
    uses: "3 uses",
    description: "Gain 45ft of flying speed for 1 round.",
    tags: ["Movement", "Utility"],
    actionType: "Bonus Action",
  },
  {
    id: "micro-missile-launcher",
    name: "Micro-Missile Launcher",
    slots: 1,
    uses: "1 base (2/slot extra)",
    description: "Launch a micro-missile up to 60ft, dealing 2d6 damage in a 10ft radius. Targets may make a Dexterity saving throw for half damage.",
    tags: ["Damage", "Area"],
    actionType: "Bonus Action",
  },
  {
    id: "macro-missile-launcher",
    name: "Macro-Missile Launcher",
    slots: 2,
    uses: "1 base (1/slot extra)",
    description: "Launch a macro-missile up to 60ft, dealing 4d6 damage in a 15ft radius. Targets may make a Dexterity saving throw for half damage.",
    tags: ["Damage", "Area"],
    actionType: "Bonus Action",
  },
  {
    id: "quick-seal-paste",
    name: "Quick-Seal Paste",
    slots: 1,
    uses: "1 use",
    description:
      "Fill a 5x5ft cube with quick-seal paste of similar strength to duracrete. Falls apart after one day.",
    tags: ["Utility", "Construction"],
    actionType: "Bonus Action",
  },
  {
    id: "grappling-hook",
    name: "Grappling Hook",
    slots: 1,
    uses: "5 uses/day",
    description:
      "Pull a Large or smaller creature up to 15 feet toward you, or launch a grappling hook up to 30ft to create a rope for climbing. A creature larger than you has Advantage on the Strength saving throw.",
    tags: ["Movement", "Utility"],
    actionType: "Bonus Action",
  },
  {
    id: "holo-decoy",
    name: "Holo-Decoy",
    slots: 1,
    uses: "1 use",
    description:
      "Create a holographic clone of a person capable of limited action and noise generation (but not movement). Lasts 5 minutes.",
    tags: ["Illusion", "Utility"],
    actionType: "Bonus Action",
  },
  {
    id: "web-launcher",
    name: "Web Launcher",
    slots: 1,
    uses: "1 use",
    description:
      "Launch a web, entangling all targets in a 10ft radius. All targets may make a Strength saving throw to break free, or free an entangled ally with the Help action, but cannot move until free.",
    tags: ["Control", "Area"],
    actionType: "Bonus Action",
  },
  {
    id: "tracking-beacon",
    name: "Tracking Beacon",
    slots: 2,
    uses: "1 use",
    description:
      "Attach a tracking beacon to a target or vehicle. Can track them anywhere within a hundred parsecs.",
    tags: ["Utility", "Surveillance"],
    actionType: "Bonus Action",
  },
  {
    id: "enhanced-sensor-suite",
    name: "Enhanced Sensor Suite",
    slots: 2,
    uses: "30 min (2/slot extra)",
    description: "Gain 60ft of Darkvision, the ability to see through up to 20ft of walls and through smoke, and Advantage on Perception checks for 30 minutes.",
    tags: ["Utility", "Vision", "Surveillance"],
    actionType: "Bonus Action",
  },
  {
    id: "ionic-pulsar",
    name: "Ionic Pulsar",
    slots: 3,
    uses: "1 use",
    description:
      "Throw a beacon up to 30ft. In a 15ft radius, deal 3d6 damage to all Droids unless they pass a Constitution saving throw. Destroy all non-hardened electronics in the area.",
    tags: ["Damage", "Anti-Droid", "Area"],
    actionType: "Bonus Action",
  },
  {
    id: "smoke-projector",
    name: "Smoke Projector",
    slots: 2,
    uses: "2 uses",
    description:
      "Create a 10x10ft cloud of multispectral smoke that cannot be seen through except by an Enhanced Sensor Suite that lasts for 6 turns.",
    tags: ["Utility", "Concealment"],
    actionType: "Bonus Action",
  },
  {
    id: "breaching-charge",
    name: "Breaching Charge",
    slots: 2,
    uses: "1 use",
    description:
      "Explosively destroy up to 5ft of wall or door, dealing 2d6 damage to all enemies in a 20ft cone behind the charge.",
    tags: ["Damage", "Utility"],
    actionType: "Bonus Action",
  },
  {
    id: "bio-signature-masker",
    name: "Bio-Signature Masker",
    slots: 1,
    uses: "30 min (2/slot extra)",
    description:
      "Gain the ability to mask your bio-signature, becoming invisible to bio-scans.",
    tags: ["Stealth", "Utility"],
    actionType: "Bonus Action",
  },
  {
    id: "repulsor-disc",
    name: "Repulsor Disc",
    slots: 1,
    uses: "1 use",
    description:
      "Gain the ability to lift a 1000lb object 5ft off the ground for one hour.",
    tags: ["Utility", "Telekinesis"],
    actionType: "Bonus Action",
  },
  {
    id: "miniature-cutting-torch",
    name: "Miniature Cutting Torch",
    slots: 1,
    uses: "5 uses",
    description:
      "Gain the ability to cut through fences, locks, and similarly-durable items over the course of thirty seconds.",
    tags: ["Utility", "Tool"],
    actionType: "Bonus Action",
  },
  {
    id: "signal-falsifier",
    name: "Signal Falsifier",
    slots: 1,
    uses: "1 use",
    description:
      "Gain the ability to spoof a known signal with an already-known message. In cases of substantial power mismatch, may require a signal booster.",
    tags: ["Utility", "Technology"],
    actionType: "Bonus Action",
  },
  {
    id: "jamming-beacon",
    name: "Jamming Beacon",
    slots: 2,
    uses: "2 uses",
    description:
      "Jam all comms and sensors within a 30ft radius.",
    tags: ["Utility", "Technology"],
    actionType: "Bonus Action",
  },
  {
    id: "phase-shift-lockpick",
    name: "Phase-Shift Lockpick",
    slots: 2,
    uses: "Unlimited",
    description:
      "Gain Advantage on Sleight of Hand rolls against physical locks.",
    tags: ["Utility", "Infiltration"],
    actionType: "Bonus Action",
  },
  {
    id: "slicer-spike",
    name: "Slicer Spike",
    slots: 2,
    uses: "1 use",
    description:
      "Place on a computer or data-carrying wire to give Advantage on Technology rolls to hack it, and allows for continued surveillance of the computer or wire for one week unless it is removed.",
    tags: ["Technology", "Surveillance"],
    actionType: "Bonus Action",
  },
  {
    id: "aural-dampener",
    name: "Aural Dampener",
    slots: 2,
    uses: "2 uses",
    description: "Silence all sound within a 30ft radius for five minutes.",
    tags: ["Utility", "Stealth"],
    actionType: "Bonus Action",
  },
  {
    id: "micro-tractor-beam",
    name: "Micro-Tractor Beam",
    slots: 1,
    uses: "3 uses",
    description: "Pull all objects weighing up to 20 lbs in a 15ft line toward you.",
    tags: ["Utility", "Telekinesis"],
    actionType: "Bonus Action",
  },
  {
    id: "carbonite-capsule",
    name: "Carbonite Capsule",
    slots: 2,
    uses: "1 use",
    description:
      "Throw a capsule 45ft, where it explodes into a 10ft radius cloud of freezing carbonite gas. Enemies take 1d8 damage and must pass a Strength saving throw or be frozen solid for two turns. Breaking the ice with kinetic damage deals an additional 1d8 damage.",
    tags: ["Damage", "Control", "Area"],
    actionType: "Action",
  },
  {
    id: "mag-boots",
    name: "Mag-Boots",
    slots: 1,
    uses: "Unlimited",
    description:
      "Gain the ability to stick to any metal surface, no matter its angle.",
    tags: ["Movement", "Utility"],
    actionType: "Passive",
  },
  {
    id: "grenade-launcher",
    name: "Grenade Launcher",
    slots: 2,
    uses: "Unlimited (requires grenades)",
    description:
      "When you would throw or place a grenade or mine, you may launch it up to 120 feet. This uses the grenade's normal action cost.",
    tags: ["Weapon", "Area"],
    actionType: "Passive",
  },
  {
    id: "welding-kit",
    name: "Welding Kit",
    slots: 1,
    uses: "Three uses",
    description:
      "Gain the ability to weld man-sized doors and other similarly-sized things.",
    tags: ["Utility", "Tool"],
    actionType: "Bonus Action",
  },
  {
    id: "electromagnetic-attractor",
    name: "Electromagnetic Attractor",
    slots: 2,
    uses: "Unlimited",
    description:
      "Gain two electromagnetic attractors, each of which may be placed as an Action. As another action, they may be enabled or disabled. As long as they are within 45ft of each other, the two objects they are attached to will pull towards each other with 500lbs of force each. If you target an enemy with this, you must make a proficient Dexterity-based melee attack roll to successfully plant it.",
    tags: ["Utility", "Control"],
    actionType: "Action",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  {
    name: "Athletics",
    ability: "Strength",
    description: "Covers physical feats of strength, including climbing, jumping, swimming, grappling, and other displays of raw power.",
  },
  {
    name: "Deception",
    ability: "Charisma",
    description: "Covers convincingly hiding the truth through lies, misdirection, disguise, or similar methods.",
  },
  {
    name: "Insight",
    ability: "Wisdom",
    description: "Covers reading a creature's intentions, detecting deception, and anticipating behavior.",
  },
  {
    name: "Intimidation",
    ability: "Charisma",
    description: "Covers influencing others through threats, hostile actions, or displays of force.",
  },
  {
    name: "Investigation",
    ability: "Intelligence",
    description: "Covers searching for clues and drawing conclusions from available evidence.",
  },
  {
    name: "Lore",
    ability: "Intelligence",
    description: "Covers knowledge of history, legends, cultures, organizations, and the wider lore of the galaxy.",
  },
  {
    name: "Medicine",
    ability: "Wisdom",
    description: "Covers stabilizing the dying, diagnosing illness or injury, and applying medical treatment.",
  },
  {
    name: "Perception",
    ability: "Intelligence",
    description: "Covers noticing details in your environment through your senses, including hidden creatures, distant sounds, and subtle changes.",
  },
  {
    name: "Performance",
    ability: "Charisma",
    description: "Covers entertaining an audience through music, dance, acting, storytelling, or other performances.",
  },
  {
    name: "Persuasion",
    ability: "Charisma",
    description: "Covers influencing others through tact, reason, social grace, or good faith.",
  },
  {
    name: "Piloting",
    ability: "Dexterity",
    description: "Covers operating vehicles and starships, including navigation, evasive maneuvers, combat flying, and maneuvering through hazardous environments such as asteroid fields.",
  },
  {
    name: "Sleight of Hand",
    ability: "Dexterity",
    description: "Covers tasks requiring manual dexterity, including picking pockets, planting items, and concealing objects.",
  },
  {
    name: "Stealth",
    ability: "Dexterity",
    description: "Covers concealing yourself, slipping past observers, and moving quietly.",
  },
  {
    name: "Survival",
    ability: "Wisdom",
    description: "Covers tracking, hunting, navigation through wilderness, predicting weather, and avoiding natural hazards.",
  },
  {
    name: "Technology",
    ability: "Intelligence",
    description: "Covers operating, repairing, and hacking technological devices, from slicing computer systems to jury-rigging machinery.",
  },
  {
    name: "Animal Handling",
    ability: "Wisdom",
    description: "Covers calming, controlling, and understanding animals and mounts.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONDITIONS & KEYWORDS
// ─────────────────────────────────────────────────────────────────────────────
export interface Condition {
  name: string;
  description: string;
}

export const conditions: Condition[] = [
  {
    name: "Confused",
    description: "On each of its turns, the target rolls a d10 to determine behavior: 1 — moves in a random direction; 2–6 — takes no action and uses all movement to move in a random direction; 7–8 — makes a melee attack against a randomly determined creature within reach, or does nothing if no creature is in reach; 9–10 — acts normally.",
  },
  {
    name: "Mindbroken",
    description: "The target's mind is damaged for 1d4 days. It has Disadvantage on Wisdom saving throws and cannot have its mind read.",
  },
  {
    name: "Frozen",
    description: "The target's movement speed becomes 0 and it cannot take Reactions until the start of its next turn.",
  },
  {
    name: "Slowed",
    description: "The target has −2 AC and cannot take Bonus Actions.",
  },
  {
    name: "Stunned",
    description: "The target cannot take Actions, Bonus Actions, Reactions, or movement. Attacks against it automatically hit.",
  },
  {
    name: "Frightened",
    description: "A Frightened creature has Disadvantage on ability checks and attack rolls while the source of its fear is within line of sight, and it cannot willingly move closer to the source of its fear.",
  },
  {
    name: "Jammed",
    description: "The affected target's electronic systems are disabled. A Jammed weapon cannot be used to attack: Blasters and Lightsabers cannot fire or strike, while Vibroweapons and Electroweapons deal half damage. A Jammed Droid, vehicle, Gadget, or electronic system cannot use electronic actions or abilities until the condition ends.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CORE RULES
// ─────────────────────────────────────────────────────────────────────────────
export const coreRules = [
  {
    title: "Resource Regeneration Timing",
    description: "Unless otherwise specified, all resource regeneration, venting, and passive gains occur at the end of a creature's turn.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPECIAL RULES
// ─────────────────────────────────────────────────────────────────────────────
export const specialRules = [
];

// ─────────────────────────────────────────────────────────────────────────────
// ACCENT COLOR UTILITIES
// ─────────────────────────────────────────────────────────────────────────────
export const accentColorMap: Record<ClassAccent, {
  text: string;
  border: string;
  bg: string;
  bgMuted: string;
  glow: string;
  badge: string;
}> = {
  blue: {
    text: "text-blue-400",
    border: "border-blue-400",
    bg: "bg-blue-400",
    bgMuted: "bg-blue-400/10",
    glow: "glow-blue",
    badge: "text-blue-400 border-blue-400/50 bg-blue-400/10",
  },
  teal: {
    text: "text-teal-400",
    border: "border-teal-400",
    bg: "bg-teal-400",
    bgMuted: "bg-teal-400/10",
    glow: "glow-teal",
    badge: "text-teal-400 border-teal-400/50 bg-teal-400/10",
  },
  red: {
    text: "text-red-400",
    border: "border-red-400",
    bg: "bg-red-400",
    bgMuted: "bg-red-400/10",
    glow: "glow-red",
    badge: "text-red-400 border-red-400/50 bg-red-400/10",
  },
  amber: {
    text: "text-amber-400",
    border: "border-amber-400",
    bg: "bg-amber-400",
    bgMuted: "bg-amber-400/10",
    glow: "glow-amber",
    badge: "text-amber-400 border-amber-400/50 bg-amber-400/10",
  },
  green: {
    text: "text-green-400",
    border: "border-green-400",
    bg: "bg-green-400",
    bgMuted: "bg-green-400/10",
    glow: "glow-green",
    badge: "text-green-400 border-green-400/50 bg-green-400/10",
  },
  orange: {
    text: "text-orange-400",
    border: "border-orange-400",
    bg: "bg-orange-400",
    bgMuted: "bg-orange-400/10",
    glow: "glow-orange",
    badge: "text-orange-400 border-orange-400/50 bg-orange-400/10",
  },
  cyan: {
    text: "text-cyan-400",
    border: "border-cyan-400",
    bg: "bg-cyan-400",
    bgMuted: "bg-cyan-400/10",
    glow: "glow-cyan",
    badge: "text-cyan-400 border-cyan-400/50 bg-cyan-400/10",
  },
  yellow: {
    text: "text-yellow-400",
    border: "border-yellow-400",
    bg: "bg-yellow-400",
    bgMuted: "bg-yellow-400/10",
    glow: "glow-yellow",
    badge: "text-yellow-400 border-yellow-400/50 bg-yellow-400/10",
  },
  purple: {
    text: "text-purple-400",
    border: "border-purple-400",
    bg: "bg-purple-400",
    bgMuted: "bg-purple-400/10",
    glow: "glow-purple",
    badge: "text-purple-400 border-purple-400/50 bg-purple-400/10",
  },
  pink: {
    text: "text-pink-400",
    border: "border-pink-400",
    bg: "bg-pink-400",
    bgMuted: "bg-pink-400/10",
    glow: "glow-pink",
    badge: "text-pink-400 border-pink-400/50 bg-pink-400/10",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// WEAPON PROPERTIES
// ─────────────────────────────────────────────────────────────────────────────
export interface WeaponProperty {
  name: string;
  description: string;
}

export const weaponProperties: WeaponProperty[] = [
  {
    name: "Versatile",
    description: "This weapon may be used with one or two hands. Its two-handed damage die is listed in parentheses.",
  },
  {
    name: "Melting",
    description: "Deals double damage to terrain and objects and grants +1 to attack rolls.",
  },
  {
    name: "Finesse",
    description: "This weapon uses Dexterity instead of Strength as its primary attribute.",
  },
  {
    name: "Double Strike",
    description: "This weapon may attack two different targets as part of the same attack, but cannot target the same creature twice.",
  },
  {
    name: "Luminous",
    description: "This weapon sheds dim light in a 15ft radius.",
  },
  {
    name: "Heavy",
    description: "This weapon requires at least 13 Strength to use proficiently.",
  },
  {
    name: "Reach",
    description: "Increase this weapon's melee range by 5ft.",
  },
  {
    name: "Two-Handed",
    description: "This weapon requires both hands to use.",
  },
  {
    name: "Light",
    description: "This weapon may be used as an offhand weapon.",
  },
  {
    name: "Clumsy",
    description: "Attacks made with this weapon have Disadvantage against targets within its minimum range.",
  },
  {
    name: "Disintegrator",
    description: "A creature killed by this weapon is disintegrated.",
  },
  {
    name: "High Recoil",
    description: "This weapon uses Strength instead of Dexterity as its primary attribute.",
  },
  {
    name: "Blast",
    description: "When this weapon hits, creatures within the listed radius take damage equal to half the damage dealt to the primary target.",
  },
  {
    name: "Spread Shot",
    description: "This weapon does not make normal weapon attacks. Instead, all creatures in the listed cone must make a Dexterity saving throw against the weapon's normal attack DC.",
  },
  {
    name: "Vibrocutter",
    description: "This weapon scores a Critical Hit on a roll of 19 or 20.",
  },
  {
    name: "Electrified",
    description: "When this weapon scores a Critical Hit, the target is Stunned until the start of your next turn.",
  },
  {
    name: "Electrowave",
    description: "When you attack, also make an attack against each target in the listed distance directly behind the primary target. This weapon is also Electrified.",
  },
  {
    name: "Loading",
    description: "After firing this weapon, reloading it requires a Bonus Action.",
  },
  {
    name: "Stun Rounds",
    description: "This weapon may make nonlethal attacks at half its normal range. These attacks deal normal damage, but a creature reduced to 0 HP is rendered Unconscious rather than killed.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// WEAPONS
// ─────────────────────────────────────────────────────────────────────────────
export type WeaponCategory = "lightsaber" | "blaster" | "vibroweapon";

export interface Weapon {
  id: string;
  name: string;
  category: WeaponCategory;
  damage: string;
  range?: string;
  properties: string[];
  notes?: string;
  price?: number;
}

export const weapons: Weapon[] = [
  // ── Lightsabers ──────────────────────────────────────────────────────────
  {
    id: "lightsaber",
    name: "Lightsaber",
    category: "lightsaber",
    damage: "1d8 (1d10 Versatile)",
    properties: ["Versatile", "Melting", "Finesse", "Luminous"],
    price: 9000,

  },

  {
    id: "saberstaff",
    name: "Saberstaff",
    category: "lightsaber",
    damage: "1d6",
    properties: ["Melting", "Finesse", "Luminous", "Double Strike"],
    price: 11000,

  },

  {
    id: "lightpike",
    name: "Lightpike",
    category: "lightsaber",
    damage: "1d10",
    properties: ["Melting", "Finesse", "Luminous", "Heavy", "Reach", "Two-Handed"],
    price: 10000,

  },

  {
    id: "shoto",
    name: "Shoto",
    category: "lightsaber",
    damage: "1d6",
    properties: ["Melting", "Finesse", "Luminous", "Light"],
    price: 7500,

  },

  {
    id: "crossguard-saber",
    name: "Crossguard Saber",
    category: "lightsaber",
    damage: "1d12",
    properties: ["Melting", "Luminous", "Heavy", "Two-Handed"],
    price: 12000,

  },

  // ── Blasters ─────────────────────────────────────────────────────────────
  {
      id: "blaster-pistol",
    name: "Blaster Pistol",
    category: "blaster",
    damage: "1d4",
    range: "30/60 ft",
    properties: ["Light", "Stun Rounds"],
    price: 3500,
  },
  {
    id: "shatter-pistol",
    name: "Shatter Pistol",
    category: "blaster",
    damage: "1d6",
    range: "15/30 ft",
    properties: ["Light"],
    price: 4000,
  },
  {
    id: "blaster-rifle",
    name: "Blaster Rifle",
    category: "blaster",
    damage: "1d8",
    range: "150/600 ft",
    properties: ["Stun Rounds"],
    price: 6000,
  },

  {
    id: "disruptor-rifle",
    name: "Disruptor Rifle",
    category: "blaster",
    damage: "1d12",
    range: "25/900 ft",
    properties: ["Clumsy", "Disintegrator"],
    notes: "Heavy long-range precision weapon.",
    price: 11000,

  },

    {
    id: "shard-cannon",
    name: "Shard Cannon",
    category: "blaster",
    damage: "1d10",
    range: "20/50 ft",
    properties: [],
    notes: "Shotgun-style weapon.",
    price: 5500,

  },

  {
    id: "blaster-cannon",
    name: "Blaster Cannon",
    category: "blaster",
    damage: "1d10",
    range: "150/600 ft",
    properties: ["High Recoil"],
    notes: "Medium machine gun equivalent.",
    price: 13000,

  },

  {
    id: "auto-grenade-launcher",
    name: "Automatic Grenade Launcher",
    category: "blaster",
    damage: "1d8",
    range: "60/100 ft",
    properties: ["Blast (5 ft)", "High Recoil"],
    price: 12000,

  },

  {
    id: "micro-grenade-launcher",
    name: "Micro-Grenade Launcher",
    category: "blaster",
    damage: "1d6",
    range: "50/80 ft",
    properties: ["Blast (5 ft)"],
    price: 7500,

  },

  {
    id: "sonic-cannon",
    name: "Sonic Cannon",
    category: "blaster",
    damage: "1d12",
    range: "20 ft",
    properties: ["High Recoil", "Spread Shot (20 ft)"],
    notes: "Giga-shotgun. Forces a saving throw rather than an attack roll.",
    price: 15000,

  },

  {
    id: "bowcaster",
    name: "Bowcaster",
    category: "blaster",
    damage: "2d8",
    range: "60/100 ft",
    properties: ["High Recoil", "Loading"],
    price: 14000,
  },
  // ── Vibroweapons ─────────────────────────────────────────────────────────
  {
    id: "vibroknife",
    name: "Vibroknife",
    category: "vibroweapon",
    damage: "1d6",
    properties: ["Finesse", "Light", "Vibrocutter"],
    price: 800,

  },

  {
    id: "vibroaxe",
    name: "Vibroaxe",
    category: "vibroweapon",
    damage: "1d12",
    properties: ["Heavy", "Two-Handed", "Vibrocutter"],
    price: 1800,

  },

  {
    id: "vibrosword",
    name: "Vibrosword",
    category: "vibroweapon",
    damage: "1d8 (1d10 Versatile)",
    properties: ["Versatile", "Vibrocutter"],
    price: 2200,

  },

  {
    id: "vibropike",
    name: "Vibropike",
    category: "vibroweapon",
    damage: "1d10",
    properties: ["Heavy", "Reach", "Two-Handed", "Vibrocutter"],
    price: 2500,

  },

  {
    id: "electrostaff",
    name: "Electrostaff",
    category: "vibroweapon",
    damage: "1d8",
    properties: ["Reach", "Electrified"],
    price: 3000,

  },

  {
    id: "electrohammer",
    name: "Electrohammer",
    category: "vibroweapon",
    damage: "1d10",
    properties: ["Electrowave (5 ft)"],
    price: 3800,

  },

  {
    id: "electrodagger",
    name: "Electrodagger",
    category: "vibroweapon",
    damage: "1d4",
    properties: ["Finesse", "Light", "Electrified"],
    price: 1200,

  },

  {
    id: "electrobaton",
    name: "Electrobaton",
    category: "vibroweapon",
    damage: "1d6",
    properties: ["Finesse", "Light", "Electrified"],
    price: 1500,

  },

];

// ─────────────────────────────────────────────────────────────────────────────
// ITEMS
// ─────────────────────────────────────────────────────────────────────────────
export interface Item {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
}

export const items: Item[] = [
  // ── Medical ──────────────────────────────────────────────────────────────
  {
    id: "bacta-patch",
    name: "Bacta Patch",
    category: "Medical",
    description: "Heals 2d4+2 HP.",
    price: 500,

  },

  {
    id: "bacta-autoinjector",
    name: "Bacta Autoinjector",
    category: "Medical",
    description: "Heals 4d4+4 HP.",
    price: 1500,

  },

  {
    id: "stim-injector",
    name: "Stim Injector",
    category: "Medical",
    description:
      "Heal 1d6 HP and gain an additional 10ft of movement and an additional Bonus Action for five turns. Each turn after the first, take 1d6 damage.",
    price: 2000,

  },

  {
    id: "medical-kit",
    name: "Medical Kit",
    category: "Medical",
    description:
      "A medical kit containing basic first aid supplies. Grants Advantage on Medicine checks.",
    price: 500,

  },

  // ── Grenades ─────────────────────────────────────────────────────────────
  {
    id: "thermal-detonator",
    name: "Thermal Detonator",
    category: "Grenade",
    description:
      "Deals 2d6+2 damage in a 10ft area.",
    price: 2500,

  },

  {
    id: "concussion-grenade",
    name: "Concussion Grenade",
    category: "Grenade",
    description:
      "Deals 2d4 damage in a 10ft area. Propels all hit targets 5ft away from the grenade.",
    price: 800,

  },

  {
    id: "ion-grenade",
    name: "Ion Grenade",
    category: "Grenade",
    description:
      "Deals 1d6 damage in a 10ft area. Deals double damage to Shields and droids.",
    price: 1000,

  },

  {
    id: "incendiary-grenade",
    name: "Incendiary Grenade",
    category: "Grenade",
    description:
      "Creates a 10ft-radius patch of fire that lasts for 3 turns. Creatures in the fire take 1d6 damage.",
    price: 1000,

  },

  {
    id: "smoke-grenade",
    name: "Smoke Grenade",
    category: "Grenade",
    description:
      "Creates a 10ft-radius smoke cloud that lasts for one turn. Normal vision is obscured, but advanced sensors are unaffected.",
    price: 500,

  },

  // ── Gear & Tools ─────────────────────────────────────────────────────────
  {
    id: "mechanic-kit",
    name: "Mechanic's Kit",
    category: "Tool",
    description:
      "A kit full of tools. Grants Advantage on Technology rolls to repair mechanical devices.",
    price: 2500,

  },

  {
    id: "thiefs-kit",
    name: "Thief's Kit",
    category: "Tool",
    description:
      "A kit full of lockpicks, shims, and all other devices needed to break into places. Grants Advantage on Sleight of Hand rolls to break into physically locked places.",
    price: 2500,

  },

  {
    id: "forgery-kit",
    name: "Forgery Kit",
    category: "Tool",
    description:
      "A kit full of makeup, wigs, and all other necessities for disguises. Grants Advantage on Deception checks to maintain a disguise.",
    price: 2500,

  },

  {
    id: "nvgs",
    name: "NVGs",
	category: "Tool",
    description: "Gain 60ft of Darkvision.",
    price: 2000,
  },
  
  {
    id: "rebreather",
    name: "Rebreather",
	category: "Tool",
    description:
      "Gain the ability to breathe in low or no-oxygen environments, including underwater and in space.",
	  price: 1500,
  },
  {
    id: "motion-sensor",
    name: "Motion Sensor",
    category: "Tool",
    description:
      "A motion sensor capable of detecting any motion within 30ft. Does not see through walls, and lasts for 8 hours once placed. May be configured for remote or direct warning.",
    price: 1500,

  },

  {
    id: "compact-comms-array",
    name: "Compact Comms Array",
    category: "Tool",
    description:
      "A backpack-sized comms array capable of reaching from surface to orbit on most planets and cutting through most jamming. May not work under heavy jamming or electromagnetic interference.",
    price: 7500,

  },

  {
    id: "portable-holoprojector",
    name: "Portable Holoprojector",
    category: "Tool",
    description:
      "A small, hand-sized holoprojector capable of configuration to display data or images in a 1ft cube.",
    price: 3000,

  },

  {
    id: "personal-locator-beacon",
    name: "Personal Locator Beacon",
    category: "Tool",
    description:
      "A locator beacon visible on all emergency comm systems, capable of broadcasting your location for 50 miles in all directions, including up.",
    price: 1200,

  },

  {
    id: "commlink",
    name: "Commlink",
    category: "Tool",
    description:
      "An earpiece capable of communication with other tuned-in comms systems. It may only transmit up to 25mi away, but more powerful transmitters may be received by it further, depending on the transmitter.",
    price: 1000,

  },

  {
    id: "firestarter",
    name: "Firestarter",
    category: "Tool",
    description:
      "A small tinderbox capable of lighting small fires on appropriate material.",
    price: 100,

  },

  {
    id: "binoculars",
    name: "Binoculars",
    category: "Tool",
    description: "Binoculars capable of 5x zoom.",
    price: 500,

  },

  {
    id: "flashlight",
    name: "Flashlight",
    category: "Tool",
    description: "Capable of creating a 30ft cone of light.",
    price: 300,

  },

  {
    id: "fibercord",
    name: "Fibercord (50ft)",
    category: "Tool",
    description:
      "50ft of fibercord rope. May be ripped with a DC 17 Strength check.",
    price: 300,

  },

  {
    id: "handcuffs",
    name: "Handcuffs",
    category: "Tool",
    description:
      "Metal handcuffs capable of holding two limbs together. May be broken with a DC 19 Strength check.",
    price: 500,

  },

  {
    id: "signal-flare",
    name: "Signal Flare",
    category: "Tool",
    description:
      "A flare that shoots up 50ft, creating a flare visible for up to five miles away.",
    price: 250,

  },

  // ── Survival & Misc ───────────────────────────────────────────────────────
  {
    id: "thermal-cloak",
    name: "Thermal Cloak",
    category: "Survival",
    description:
      "An insulated, heated cloak capable of keeping warm in extreme cold.",
    price: 800,

  },

  {
    id: "emergency-raft",
    name: "Emergency Raft",
    category: "Survival",
    description:
      "An inflatable raft capable of holding four people. This raft has 5 HP, but autoinflates.",
    price: 1200,

  },

  {
    id: "anti-grav-chute",
    name: "Anti-Grav Chute",
    category: "Survival",
    description:
      "A backpack-sized safety device allowing for the complete elimination of falling damage, no matter the height. May only be used once.",
    price: 2500,

  },

  {
    id: "null-g-maneuver-pack",
    name: "Null-G Maneuver Pack",
    category: "Survival",
    description:
      "A pack that grants 30ft of fly speed, but only in zero-G environments.",
    price: 4000,

  },

  {
    id: "goggles",
    name: "Goggles",
    category: "Survival",
    description:
      "Basic plastic goggles capable of keeping most things out of your eyes.",
    price: 200,

  },

  // ── Clothing ─────────────────────────────────────────────────────────────
  {
    id: "clothes-fine",
    name: "Clothes (Fine)",
    category: "Clothing",
    description: "Fine clothes, suitable for a formal event.",
    price: 1500,

  },

  {
    id: "clothes-normal",
    name: "Clothes (Normal)",
    category: "Clothing",
    description: "Normal clothes, suitable for daily use.",
    price: 500,

  },

  {
    id: "clothes-ragged",
    name: "Clothes (Ragged)",
    category: "Clothing",
    description: "Ragged clothes, suitable for those down on their luck.",
    price: 100,

  },

  // ── Illicit ───────────────────────────────────────────────────────────────
  {
    id: "spice",
    name: "Spice",
    category: "Illicit",
    description:
      "Illicit stimulants, highly prized on the black market.",
    price: 1000,

  },

];

// ─────────────────────────────────────────────────────────────────────────────
// ARMOR
// ─────────────────────────────────────────────────────────────────────────────
export type ArmorWeight = "Light" | "Medium" | "Heavy";

export interface Armor {
  id: string;
  name: string;
  weight: ArmorWeight;
  ac: string;
  stealthDisadvantage: boolean;
  notes?: string;
  price?: number;
}

export const armors: Armor[] = [
  // ── Light ─────────────────────────────────────────────────────────────────
  {
    id: "combat-suit",
    name: "Combat Suit",
    weight: "Light",
    ac: "11 + Dex",
    stealthDisadvantage: true,
    price: 1000,

  },

  {
    id: "fiber-armor",
    name: "Fiber Armor",
    weight: "Light",
    ac: "12 + Dex",
    stealthDisadvantage: false,
    price: 3000,

  },

  {
    id: "advanced-combat-suit",
    name: "Advanced Combat Suit",
    weight: "Light",
    ac: "13 + Dex",
    stealthDisadvantage: false,
    price: 8000,

  },

  // ── Medium ────────────────────────────────────────────────────────────────
  {
    id: "mesh-armor",
    name: "Mesh Armor",
    weight: "Medium",
    ac: "13 + Dex (max +2)",
    stealthDisadvantage: false,
    price: 4000,

  },

  {
    id: "weave-armor",
    name: "Weave Armor",
    weight: "Medium",
    ac: "14 + Dex (max +2)",
    stealthDisadvantage: false,
    price: 6000,

  },

  {
    id: "light-beskar-armor",
    name: "Light Beskar Armor",
    weight: "Medium",
    ac: "15 + Dex (max +2)",
    stealthDisadvantage: false,
    price: 9000,

  },

  // ── Heavy ─────────────────────────────────────────────────────────────────
  {
    id: "plastoid-armor",
    name: "Plastoid Armor",
    weight: "Heavy",
    ac: "15",
    stealthDisadvantage: true,
    price: 5500,

  },

  {
    id: "durasteel-armor",
    name: "Durasteel Armor",
    weight: "Heavy",
    ac: "17",
    stealthDisadvantage: true,
    price: 9000,

  },

  {
    id: "composite-durasteel-armor",
    name: "Composite Durasteel Armor",
    weight: "Heavy",
    ac: "18",
    stealthDisadvantage: true,
    price: 13000,

  },

  {
    id: "heavy-beskar-armor",
    name: "Heavy Beskar Armor",
    weight: "Heavy",
    ac: "19",
    stealthDisadvantage: true,
    price: 18000,

  },

];

// ─────────────────────────────────────────────────────────────────────────────
// CHANGELOG
// ─────────────────────────────────────────────────────────────────────────────
export type ChangelogCategory = string;

// ─────────────────────────────────────────────────────────────────────────────
// SUPPLIES
// ─────────────────────────────────────────────────────────────────────────────
export interface SuppliesSystem {
  description: string;
  maxCarried: number;
  shipStorage: number;
  resupplyNote: string;
}
export const suppliesSystem: SuppliesSystem = {
  description: "Supplies are consumed during Long Rests to gain the full benefits of the rest.",
  maxCarried: 5,
  shipStorage: 50,
  resupplyNote: "Supplies are automatically replenished when entering a port, city, or other major market.",
};

// ─────────────────────────────────────────────────────────────────────────────
// SHIPS
// ─────────────────────────────────────────────────────────────────────────────
export interface ShipStats {
  str: number;
  dex: number;
  con: number;
  int?: number;
}
export interface Ship {
  id: string;
  name: string;
  crew: string;
  moduleSlots: number;
  cost: number;
  stats: ShipStats;
  hp: number;
  ac: number;
  movement: number;
  maxWeapons: number;
  criticalThreshold: number;
  description: string;
  freeWeapon: string;
  includedModules?: string[];
}
export const ships: Ship[] = [
  { id: "fighter", name: "Fighter", crew: "1–2", moduleSlots: 2, cost: 125000, stats: { str: 8, dex: 16, con: 6, int: 10 }, hp: 40, ac: 16, movement: 100, maxWeapons: 2, criticalThreshold: 15, description: "A small 1–2 person starship equipped with a basic hyperdrive. Agile and fast, but fragile.", freeWeapon: "Light Turbolaser Battery — 0 credits, 1d4 damage, 25nmi range, DEX-based" },
  { id: "light-freighter", name: "Light Freighter", crew: "3–4", moduleSlots: 8, cost: 350000, stats: { str: 14, dex: 10, con: 12, int: 10 }, hp: 60, ac: 14, movement: 60, maxWeapons: 3, criticalThreshold: 20, description: "A 3–4 person starship equipped with a hyperdrive and substantial room for customization. Converting it into a dedicated combat ship requires significant modification.", freeWeapon: "Light Turbolaser Battery — 0 credits, 1d4 damage, 25nmi range, DEX-based" },
  { id: "corvette", name: "Corvette", crew: "3–4", moduleSlots: 5, cost: 600000, stats: { str: 12, dex: 14, con: 10, int: 10 }, hp: 70, ac: 15, movement: 60, maxWeapons: 4, criticalThreshold: 25, description: "A 3–4 person light military ship designed for patrol and low-intensity combat.", freeWeapon: "Light Turbolaser Battery — 0 credits, 1d4 damage, 25nmi range, DEX-based", includedModules: ["Turbolaser Battery or Ion Cannon", "Deflector Shields"] },
  { id: "heavy-freighter", name: "Heavy Freighter", crew: "5–6", moduleSlots: 16, cost: 900000, stats: { str: 16, dex: 8, con: 14, int: 8 }, hp: 100, ac: 12, movement: 40, maxWeapons: 5, criticalThreshold: 30, description: "A 5–6 person starship built for heavy cargo hauling and extensive customization.", freeWeapon: "Light Turbolaser Battery — 0 credits, 1d4 damage, 25nmi range, DEX-based" },
  { id: "frigate", name: "Frigate", crew: "5–6", moduleSlots: 12, cost: 1500000, stats: { str: 14, dex: 12, con: 12, int: 10 }, hp: 120, ac: 13, movement: 40, maxWeapons: 6, criticalThreshold: 35, description: "A 5–6 person military starship designed for long-range patrol and escort duty.", freeWeapon: "Light Turbolaser Battery — 0 credits, 1d4 damage, 25nmi range, DEX-based", includedModules: ["Two of: Turbolaser Battery, Ion Cannon, Concussion Missile Battery, Fighter Bay, or Sensor Suite", "Deflector Shields or ECM Suite"] },
];

export interface ShipModule {
  id: string;
  name: string;
  slots: number;
  cost: number;
  description: string;
}
export const shipModules: ShipModule[] = [
  { id: "light-missile-pod", name: "Light Missile Pod", slots: 1, cost: 60000, description: "Fires three missiles, each dealing 1d4+1 damage at 25nmi range. Each may be individually targeted. Takes one turn to reload." },
  { id: "turbolaser-battery", name: "Turbolaser Battery", slots: 1, cost: 45000, description: "1d8 damage, 100nmi range, STR-based." },
  { id: "ion-cannon", name: "Ion Cannon", slots: 1, cost: 50000, description: "1d4 damage, 50nmi range, STR-based. Deals 3x damage to Shields, and on a critical, cause a Systems Critical. After one day, this System Critical is automatically repaired." },
  { id: "concussion-missile-battery", name: "Concussion Missile Battery", slots: 1, cost: 60000, description: "1d12+4 damage, 30nmi range, DEX-based. Takes one turn to reload after firing." },
  { id: "fighter-bay", name: "Fighter Bay", slots: 1, cost: 20000, description: "Allows the ship to carry one fighter with it and deploy it as needed. May not be used on Fighters." },
  { id: "defensive-ecm", name: "Defensive ECM", slots: 1, cost: 100000, description: "Add +2 AC. May only install 2." },
  { id: "offensive-ecm", name: "Offensive ECM", slots: 2, cost: 100000, description: "Designate one enemy target at no action cost. Its weapon range is reduced by 20nmi. You may change the designated target at no action cost." },
  { id: "reinforced-hull", name: "Reinforced Hull", slots: 1, cost: 45000, description: "Adds 15 HP." },
  { id: "deflector-shields", name: "Deflector Shields", slots: 1, cost: 90000, description: "Adds 20 Shields. This regenerates after 6hrs." },
  { id: "extra-engines", name: "Extra Engines", slots: 2, cost: 80000, description: "Adds +10nmi movement." },
  { id: "smuggler-compartment", name: "Smuggler Compartment", slots: 1, cost: 30000, description: "Allows carrying of 5 tons of cargo or 5 people in a hidden compartment, shielded from scanners." },
  { id: "cargo-bay", name: "Cargo Bay", slots: 1, cost: 20000, description: "Allows carrying of 10 tons of cargo or 10 people." },
  { id: "tractor-beam", name: "Tractor Beam", slots: 4, cost: 220000, description: "Target a ship of your size or smaller within 10nmi and make a contested Strength check. On a success, the target's movement becomes 0, and you may pull it adjacent to your ship." },
  { id: "sensor-suite", name: "Sensor Suite", slots: 2, cost: 55000, description: "Add +2 to Perception checks." },
  { id: "interdictor-field", name: "Interdictor Field", slots: 12, cost: 3000000, description: "Blocks all hyperspace jump attempts in a 1000nmi radius." },
  { id: "repair-systems", name: "Repair Systems", slots: 3, cost: 160000, description: "Repairs 5 HP per day, up to three-quarters of the ship's maximum HP. It may also permanently repair one Systems Critical between port stops." },
  { id: "escape-pods", name: "Escape Pods", slots: 1, cost: 15000, description: "Upon ship destruction, allows all crew members to escape safely." },
  { id: "fire-control-system", name: "Fire Control System", slots: 1, cost: 100000, description: "Add +2 to weapon attacks." },
  { id: "brig", name: "Brig", slots: 1, cost: 18000, description: "Allows for the secure holding of 2 prisoners." },
  { id: "eva-locker", name: "EVA Locker", slots: 1, cost: 12000, description: "Allows for EVA excursions of all crewmembers." },
  { id: "meditation-chambers", name: "Meditation Chambers", slots: 2, cost: 120000, description: "Gain Advantage on all rolls made as part of Force Abilities while inside the Meditation Chambers." },
  { id: "security-systems", name: "Security Systems", slots: 2, cost: 60000, description: "Gain perfect knowledge of all enemy locations within the ship, and gain Advantage on all rolls during the first round of combat within your ship." },
  { id: "cloaking-module", name: "Cloaking Module", slots: 2, cost: 150000, description: "Gain the ability to become Invisible in space for 6 hours. All actions except for movement break this cloak. Cannot be used on anything larger than a Light Freighter or Corvette." },
  { id: "comms-jammer", name: "Comms Jammer", slots: 2, cost: 180000, description: "Block enemy communications within a 1000nmi radius. Active jamming reveals your own position." },
  { id: "hydroponics-bay", name: "Hydroponics Bay", slots: 2, cost: 35000, description: "Increase onboard Supplies by 30." },
  { id: "decoy-launcher", name: "Decoy Launcher", slots: 1, cost: 45000, description: "Launch a decoy to mimic your ship. Roll Dexterity against the target's Perception. On a success, all attacks and Concussion Missiles targeting your ship are diverted to the decoy unless the missiles were launched within 10nmi." },
  { id: "point-defense-battery", name: "Point-Defense Battery", slots: 1, cost: 65000, description: "Once per turn, target a single enemy missile attack and roll a Dexterity saving throw. If higher than the attack roll, negate the attack." },
];

export const shipRules = {
  moduleInstallation: "Installing or replacing a ship module requires 1 week of downtime and costs 20% of the incoming module's purchase price. A removed module must either be stored somewhere capable of holding it or abandoned.",
  repairs: "Ships do not regain HP from normal downtime unless they are in port or have Repair Systems. Systems Criticals can normally be permanently repaired only in port; Repair Systems may permanently repair one Systems Critical between port stops.",
  criticalRerolls: "If a Systems Critical cannot further affect the ship, reroll until a valid Systems Critical is generated. If no valid Systems Criticals remain, start a new Fire instead. Each Fire is tracked separately and begins at 1d6 damage.",
};

export interface SystemsCritical {
  roll: number;
  name: string;
  description: string;
}
export const systemsCriticals: SystemsCritical[] = [
  { roll: 1, name: "Disabled Engines", description: "You may no longer move at all. After one day, this automatically upgrades to Damaged Engines." },
  { roll: 2, name: "Disabled Weapons", description: "Roll among all your weapons, and disable the one selected." },
  { roll: 3, name: "Disabled Generators", description: "You can no longer gain Shields, and gain Disadvantage on Perception checks." },
  { roll: 4, name: "Disabled Comms", description: "You may no longer communicate externally." },
  { roll: 5, name: "Damaged Engines", description: "You now move at half speed." },
  { roll: 6, name: "Damaged Generators", description: "You now recharge Shields at half speed, and may only regenerate up to half of your normal maximum. Gain Disadvantage on Perception Checks." },
  { roll: 7, name: "Damaged Module", description: "Roll among all your modules, and disable the one selected. Anything stored in said module is destroyed." },
  { roll: 8, name: "Fire", description: "At the start of each of the ship's turns, each Fire deals its current damage. A new Fire begins at 1d6 damage. After taking the damage, make a Constitution saving throw with a DC equal to half the ship's Critical Damage Threshold. On a success, that Fire is extinguished. On a failure, increase that Fire's damage by 1d6 for its next turn. Track each Fire separately." },
];

export interface ChangelogChange {
  category: ChangelogCategory;
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  summary: string;
  changes: ChangelogChange[];
}

export const changelog: ChangelogEntry[] = [
  {
    version: "0.3.16",
    date: "2026-09-21",
    summary: "Completed the full rules consistency pass and incorporated the associated balance and ship-system updates.",
    changes: [
      { category: "Grammar & Consistency", description: "Grammar, capitalization, terminology, timing, and rules-consistency fixes across classes, subclasses, Force Abilities, Gadgets, skills, conditions, equipment, ship rules, and Talent Trees." },
      { category: "Class Progression", description: "Standardized Ability Score Improvement/Talent Point levels to 4, 8, 12, and 16; removed the unintended Trooper level 6 ASI and restored the missing Smuggler level 16 ASI." },
      { category: "Core Rules", description: "Resource regeneration, venting, and passive gains now default to the end of a creature's turn unless a rule specifies a different timing." },
      { category: "Force Abilities", description: "Force Stasis and Force Suspend now Stun creatures on failed saving throws; Dread Mark may impose Disadvantage on any one saving throw; Force Barrier was redefined as a curved 15ft barrier; Raise Dead received a complete Husk stat block; Siphon Strength can no longer reduce Strength below 1." },
      { category: "Equipment", description: "Sonic Cannon Spread Shot increased to 20ft. Grenades now use the shared 30ft throw/no-saving-throw baseline unless a grenade explicitly states otherwise. Enhanced Sensor Suite now sees through smoke and Aural Dampener uses a 30ft radius." },
      { category: "Powertech", description: "Only Heavy Companion Droid chassis may carry High Recoil weapons. Shielded Chassis now grants fixed Shields by chassis size. The Tier 4 Gadget-payoff talent now turns the first hit each turn against a Gadget-affected enemy into a Critical Hit." },
      { category: "Mercenary", description: "Heat venting and Heat self-damage now explicitly occur at the start of the Mercenary's turn; the Arsenal die-step progression is defined as d4 → d6 → d8 → d10 → d12 → 2d6; Overdrive adds 1d8 to every Arsenal Ability damage instance." },
      { category: "Talent Trees", description: "Applied the accepted mechanical updates to Guardian reflection talents, Shadow Impulse stacking, Commando Energy Cell economy, Vanguard defensive triggers, Gunslinger Reaction movement, Scoundrel Present specialization, Operative stealth scaling, Sniper targeting, Mercenary Heat control, Juggernaut movement resistance, Alchemist damage scaling, and Sorcerer area conversion." },
      { category: "Sniper", description: "Targeting Visor marks now last 1 day." },
      { category: "Ships", description: "Fighter Bay reduced to 20,000 credits; Cloaking Module changed to 2 slots and 150,000 credits; every ship now includes a free Light Turbolaser Battery; module swapping now requires one week and costs 20% of the incoming module; normal downtime repairs require port access unless Repair Systems applies; Fire Criticals now scale using half the ship's Critical Damage Threshold and escalate on failed saving throws; invalid Systems Criticals reroll or create a new Fire." },
    ],
  },
 {
    version: "0.3.15",
    date: "2026-09-05",
    summary: "First playtest balance passthrough.",
    changes: [
      { category: "Guardian", description: "Adjusted Defensive Ward to not cost focus to activate, but require Focus to deflect." },
      { category: "Force Abilities", description: "Normalized many ranges." },
	  { category: "Gadgets and Items", description: "Moved Rebreather and NVGs to Items" },
	  { category: "Gadgets", description: "Buffed Breaching Charge to 20ft" },
    ],
  },
  {
    version: "0.3.14",
    date: "2026-08-21",
    summary: "Refined Force Ability wording and Concentration tags, streamlined styles and skills pages, and updated equipment presentation and values.",
    changes: [
      { category: "Force Abilities", description: "Updated Force Crush, Battle Meditation, Energy Absorption, Dominate Will, Warp Flesh, Dark Infusion, Viral Madness, Static Cage, Force Choke, Deceive Senses, Drain Life, Force Tether, Force Stabilize, Force Sanctuary, Shared Burden, and Force Torment. Added Concentration tags where required." },
      { category: "Force Abilities", description: "Removed selected lower tag-filter options while retaining alignment controls and Concentration filtering." },
      { category: "Styles", description: "Renamed the Stances reference to Styles and removed class-selection blurbs from the Styles page." },
      { category: "Skills", description: "Removed the obsolete Perception special-rule data and UI." },
      { category: "Weapons", description: "Removed weapon subtext from presentation and changed Disruptor Rifle range to 25/900 ft." },
      { category: "Armor", description: "Moved Advanced Combat Suit below Fiber Armor; set it to 13 + Dex and 8,000 credits." },
      { category: "Rules", description: "Moved Resource Regeneration Timing into Core Mechanics." },
      { category: "General", description: "Removed all obsolete terminal labels and source references." },
    ],
  },
  {
    version: "0.3.13",
    date: "2026-08-13",
    summary: "Added collective roll rules.",
    changes: [
      { category: "Rules", description: "Added collective roll rules." },
    ],
  },
  {
    version: "0.3.12",
    date: "2026-08-13",
    summary: "Made minor balance tweaks.",
    changes: [
      { category: "Bounty Hunter", description: "Updated Dead or Alive to adjust for the addition of Stun Rounds." },
      { category: "Enemies", description: "Clone Shieldbearer Shield Generator is now limited to once per battle." },
      { category: "Operative", description: "Arc Projector allows a Constitution save at the end of the first turn to escape Stunned." },
    ],
  },
  {
    version: "0.3.11",
    date: "2026-08-12",
    summary: "Made minor balance tweaks.",
    changes: [
      { category: "Force Abilities", description: "Force Lightning is now an attack; Force Barrier health is reduced to 5 × Jedi level." },
      { category: "Guardian", description: "Perfect Riposte no longer consumes a reaction but may trigger only twice per turn." },
    ],
  },
  {
    version: "0.3.10",
    date: "2026-08-11",
    summary: "Corrected Jedi, Sith, Trooper, enemy, talent, condition, and Force Ability rules text for the current level-18 system.",
    changes: [
      { category: "Jedi Knight", description: "Chaos, yet Harmony now grants 10 Focus once per round when damaged; Emotion, yet Peace now grants immunity to the Frightened condition; Force Abilities Known corrected to a permanent 1-per-level resource." },
      { category: "Jedi Consular", description: "There is no Chaos, There is Harmony now uses Intelligence for Gadgets and Force Ability modifiers for Force Abilities. Standardized Force Ability terminology in Niman, Sage, Shadow, and Guardian content." },
      { category: "Sith Warrior", description: "Channel Hatred now includes its Bonus Action activation, one-minute duration, and early-end condition." },
      { category: "Mercenary", description: "Overdrive now references the dynamic Overheat threshold; Mercenary T3B now checks the Overheated state rather than a hardcoded Heat value." },
      { category: "Agent", description: "Sneak Attack progression now ends at 9d8 at level 17, matching the level-18 progression." },
      { category: "Scoundrel", description: "T4A now grants attack-roll Advantage and a damage reroll instead of invalid Advantage on damage rolls." },
      { category: "Force Abilities", description: "Raise Dead Husk attack and damage now use Force Ability modifier terminology consistently." },
      { category: "Enemies", description: "Expanded Jammed for electronic targets; capped Droideka shield regeneration; added Clone Trooper Thermal Detonator limit and ARC Trooper Ion Charge, Recon Sweep, and Fire Coordination clarifications." },
      { category: "Trooper", description: "Class overview now correctly identifies Energy Cells as powering special shots and subclass abilities." },
    ],
  },
  {
    version: "0.3.9",
    date: "2026-08-11",
    summary: "Data integrity and terminology correction pass for Force abilities, gadgets, Powertech, Mercenary, and weapon entries.",
    changes: [
      { category: "Schema", description: "Gadgets now support Passive action metadata; Operative gadgets now support optional uses metadata." },
      { category: "Force Abilities", description: "Energy Absorption is correctly classified as a Reaction. Force Stabilize wording and HP terminology corrected. Feed on Fear and Scar Soul now use HP terminology." },
      { category: "Sith Inquisitor", description: "Standardized player-facing spell terminology to Force Ability terminology across Sorcerer and Alchemist features." },
      { category: "Powertech", description: "Companion Droid skill proficiency now correctly references Lore instead of nonexistent History." },
      { category: "Gadgets", description: "Grenade Launcher is Passive; Welding Kit tags corrected to Utility and Tool." },
      { category: "Mercenary", description: "Level 10 and level 13 features reordered for correct progression display." },
      { category: "Weapons", description: "Disruptor Rifle stale development note replaced with player-facing precision weapon text." },
      { category: "Alchemist", description: "Grasping Tendrils now consistently uses a Strength or Dexterity saving throw, with Disadvantage on the Overload save." },
    ],
  },
  {
    version: "0.3.6",
    date: "2026-08-10",
    summary: "Comprehensive text fixes across all classes, gadgets, and Force abilities from the v0.3.5 change list.",
    changes: [
      { category: "Jedi Knight", description: "Mobility Expertise: extra damage now applies to first attack after moving only." },
      { category: "Jedi Consular", description: "There is No Emotion: rewritten to offer a choice (double range, double damage/healing, or add target). Cloak of Shadows: ends on attack or ability use. Shroud Minds: limited to 3 targets." },
      { category: "Smuggler", description: "Charming Rogue: AC formula now 10 + DEX + CHA." },
      { category: "Agent", description: "Overwatch: rewritten as 60-foot cone reaction." },
      { category: "Bounty Hunter", description: "Dead or Alive: killing blow grants half movement. Cantina Legend: target becomes immune for 24 hours after effect." },
      { category: "Bounty Hunter", description: "Companion Droid: gadget activation added to command Bonus Action. Uparmoring capped at 3 times." },
      { category: "Bounty Hunter", description: "Gadgeteer: Gadgets only (not abilities). Reinforced Core: threshold raised to 120. Magnetic Exploder: pushes 10ft." },
      { category: "Gadgets", description: "Flamethrower: fire patch lasts 2 turns. Grappling Hook: rewritten. Grenade Launcher: rewritten. Auto-Hacking and Phase-Shift Lockpick: presence clause removed." },
      { category: "Force Abilities", description: "Dominate Will: crit fail removes saves until damage taken. Thought Bomb: completely rewritten with trigger mechanic. Dread Mark: first damage per turn. Viral Madness: spread clause added. Force Choke: bonus action added." },
      { category: "Force Abilities", description: "Force Tether: self-trigger clause added. Force Stabilize: Concentration added, timing fixed. Shared Burden: damage type preserved. Feed on Fear: once-per-round cap. Raise Dead: new stat block." },
      { category: "Force Abilities", description: "Siphon Strength: 1d4 steal. Mind Probe: contested check, Mindbroken on crit fail. Energy Absorption: blaster damage added. Force Projection: FP tier system. Battle Precognition: rewritten." },
      { category: "Sith Inquisitor", description: "Recklessness: +2 spell attacks / +1 DC. Power Overcharge: capped at Proficiency Bonus FP. Ionizing Potential: bounces don't apply Power Overcharge. Through Power I Gain Victory: 3 FP cap, twice per Short Rest." },
      { category: "Talent Trees", description: "Mercenary T2 right: reroll one damage die. Powertech T4 right: first hit vs Frightened is a crit." },
    ],
  },
  {
    version: "0.3.5",
    date: "2026-08-10",
    summary: "Mass text fixes, 4 new Sith talent trees, Marauder/Juggernaut subtable extraction, 2 new Scoundrel Presents, new gadget, Ships & Modules system, Combat Rules page, Supplies rules, Concentration filter on Force Abilities, Gadgets page header update.",
    changes: [
      { category: "Jedi Knight", description: "Force Abilities Known resource added. Sith Warrior and Sith Inquisitor also gain Force Abilities Known resource." },
      { category: "Sentinel", description: "Fluid Assault: clarified 'Lasts for one turn'. Mobility Expertise: 'first attack' clarified." },
      { category: "Guardian", description: "Heightened Guard: corrected to 'Defensive Ward' (was 'Saber Ward')." },
      { category: "Jedi Consular", description: "There is no Emotion, There is Peace: replaced vague doubling with specific menu of effects." },
      { category: "Shadow", description: "Cloak of Shadows: attacking or using an ability ends it. Shroud Minds: now targets up to 3 enemies (not all). Shadow T3 right-hand talent: 'damage die' → 'die size'." },
      { category: "Trooper", description: "Vanguard Free Energy Cell Ability renamed Power Redistribution; clarified it does not apply Overcharges." },
      { category: "Smuggler", description: "Charming Rogue: rewritten as standard unarmored AC formula." },
      { category: "Gunslinger", description: "Quick Turnaround: now only main-hand attack, not both weapons." },
      { category: "Agent", description: "Overwatch: rewritten as 60ft cone Reaction attack." },
      { category: "Bounty Hunter", description: "Dead or Alive: killing blow grants half movement. Cantina Legend: target becomes immune for 24 hours after effect ends. Gadgeteer: now only applies to Gadgets, not Abilities." },
      { category: "Powertech", description: "Companion Droid: command Bonus Action now allows either you or the droid to activate a gadget; uparmoring capped at 3 times. Powertech T4 right-hand talent: first hit per turn only." },
      { category: "Mercenary", description: "Emergency Vent: now explicitly an Action. Reinforced Core: also increases Overheat threshold and self-damage thresholds. Overdrive: removed erroneous 'Generates 10 Heat'. Ionic Tether: movement reduction lasts until start of your next turn. Magnetic Imploder: clarified 10ft radius. Magnetic Exploder: clarified 10ft push. Explosive Dart: clarified Wisdom save. Mercenary T1/T2/T3 talent wording improved." },
      { category: "Sith Warrior", description: "Extra Attack (level 5) removed. Marauder and Juggernaut Channel Hatred abilities extracted into sub-arrays (pick 2 at level 3, +2 at levels 7/10/15). Marauder and Juggernaut talent trees added." },
      { category: "Sith Inquisitor", description: "Sorcerer: Recklessness stacking clarified; Power Overcharge cap increased; Ionizing Potential, Power Overwhelming, Through Power I Gain Victory descriptions updated. Alchemist and Sorcerer talent trees added." },
      { category: "Force Abilities", description: "Force Shove: damage increased and clarified. Force Lightning: save clarified (full damage on fail, half on success). Dominate Will: critical fail no longer grants infinite saves. Thought Bomb: complete rewrite with trigger mechanic. Dread Mark: damage now once per turn; one ability save at Disadvantage. Viral Madness: spread terminates on success. Static Cage: damage once per turn. Force Tether: loop prevention added. Wither: HP floor at 1, lasts until Long Rest. Raise Dead: stat block provided. Siphon Strength: steal 1d4 (was 2d4). Feed on Fear: heals once per round. Scar Soul: now requires Constitution save, Concentration. Force Sanctuary: Concentration added. Shared Burden: rewritten as damage reduction Reaction. Battle Meditation: now Concentration, affects 30ft. Induce Sleep: duration 10 minutes. Mind Probe: requires restrained/unconscious/willing target; full rewrite. Energy Absorption: rewritten with DC and half-damage on fail. Force Projection: tiered FP costs. Precognition: roll quality affects vision. Battle Precognition: intentions may change on material circumstances." },
      { category: "Gadgets", description: "Flamethrower: fire patch lasts 2 turns. Jetpack: duration 1 round. Grappling Hook: rewritten as pull mechanic. Web Launcher: targets cannot move until free. Smoke Projector: lasts 6 turns. Auto-Hacking Device: removed 'does not require presence'. Phase-Shift Lockpick: removed 'does not require presence'. Carbonite Capsule: now costs an Action. Grenade Launcher: clarified it uses grenade's action cost. Rebreather/NVGs/Mag-Boots: actionType changed to Passive. Micro/Macro-Missile: Dexterity save for half damage. Remote Bomb: Dexterity save for half damage. Welding Kit: tags corrected. Electromagnetic Attractor added (2 slots, Unlimited uses)." },
      { category: "Weapons", description: "Stun Rounds property added. Blaster Pistol and Blaster Rifle gain Stun Rounds property." },
      { category: "Scoundrel", description: "Two new Presents: Greasy Fingers (lubricant bomb, prone + drop) and Bouncing Betty (repulsor bomb, airborne for one round)." },
      { category: "Ships", description: "New Ships page: 5 ship classes (Fighter, Light Freighter, Corvette, Heavy Freighter, Frigate), 26 ship modules, 8 Systems Criticals, and Supplies rules." },
      { category: "Combat Rules", description: "New Combat Rules page: Cover, Environmental Destruction, Movement, Turn Structure, Attack Resolution, Terrain, Area Attacks, Line of Sight, Exposure, Death, Exhaustion, Initiative, Specific vs. General, Saving Throws, Damage, Healing, Concentration, Stacking Effects, Sizes." },
      { category: "Force Abilities", description: "Concentration Only toggle added to Force Abilities page filter bar." },
      { category: "Gadgets", description: "Gadgets page header updated with attack modifier formula (DEX + Proficiency) and equip/unequip rules." },
    ],
  },
  {
    version: "0.3.4",
    date: "2026-06-08",
    summary: "Mass class/subclass text fixes across all classes, Mercenary Arsenal restructure, 16 new Force Abilities, 2 new weapons, 1 new weapon property, and new Sniper gadget.",
    changes: [
      { category: "Jedi Knight", description: "ASI features now award 1 Talent Point. Lightsaber Stances level 1 description clarified." },
      { category: "Sentinel", description: "Flow State: clarified 'if you have moved' condition. Improved Focus (level 10): wording clarified. Mobility Expertise (level 13): wording clarified." },
      { category: "Jedi Consular", description: "Force Abilities Known resource added. Level 1 Lightsaber Stance description updated. Level 6, 10, 14 features clarified. ASI features now award 1 Talent Point." },
      { category: "Sage", description: "Level 5 Restorative Balance: clarified that it triggers on any Balance change, not just on landing attacks." },
      { category: "Shadow", description: "Walking the Edge, Shroud Minds, and Island of Calm descriptions clarified." },
      { category: "Trooper", description: "Commando Specialized Shots: clarified they activate as a bonus to an Attack. Extra Extra Attack renamed to Improved Extra Attack; Extra Extra Extra Attack renamed to Superior Extra Attack." },
      { category: "Vanguard", description: "Shield Charge: clarified as an Action. Vanguard Abilities and level-up features: 'abilities' replaced with 'Energy Cell abilities'. Riot Strike: cost changed to 2 EC (Reaction), added overcharge (5 EC)." },
      { category: "Smuggler", description: "Level 2 feature renamed from Hidden Stashes to Quick Hands (+2 Initiative)." },
      { category: "Gunslinger", description: "Quick Turnaround: clarified which attacks grant +1 AC. Double Down: clarified as a choice. Hair Trigger: clarified cannot be used with Fastest Hand Alive." },
      { category: "Scoundrel", description: "Removed Martial Weapon Access level 3 feature (now baseline)." },
      { category: "Agent", description: "Tactical Infiltrator (level 5): now forces one enemy to roll initiative with Disadvantage instead of simply granting Advantage." },
      { category: "Sniper", description: "Crack Shot: clarified 'your weapons'. Sniper's Hide: clarified 'while Hidden'. Trick Shot: added full bounce path rule. Added Reflective Micromirrors gadget (1 slot, 10 uses)." },
      { category: "Bounty Hunter", description: "Fighting Style: now references Stances page. Expert Hunter: 'a target' → 'targets'. Dead or Alive: clarified as normal ranged attacks. Cantina Legend: save DC now includes proficiency bonus. You Know My Name: no longer limited charges." },
      { category: "Powertech", description: "Companion Droid level 3: reformatted as multi-paragraph description. Enhanced Uplink: both droids may be commanded as a single Bonus Action." },
      { category: "Mercenary", description: "Arsenal restructured: start with 2 abilities, gain 2 more at levels 7, 10, and 13. Improved Venting removed; replaced with Improved/Superior/Enhanced Arsenal features. Reinforced Core moved to level 13." },
      { category: "Force Abilities", description: "Added 6 Light abilities: Force Tether, Force Burden, Force Stabilize, Psychometry, Force Sanctuary, Shared Burden." },
      { category: "Force Abilities", description: "Added 3 Neutral abilities: Life Sense, Force Gust, Heightened Awareness." },
      { category: "Force Abilities", description: "Added 7 Dark abilities: Force Torment, Feed on Fear, Scar Soul, Raise Dead, Siphon Strength, Wither." },
      { category: "Weapons", description: "Added Shatter Pistol (1d6, 15/30 ft, Light). Added Bowcaster (2d8, 60/100 ft, High Recoil, Loading). Added Loading weapon property." },
      { category: "Weapons", description: "Removed Simple/Martial weapon classification field from all weapons." },
    ],
  },
  {
    version: "0.3.3",
    date: "2026-05-17",
    summary: "Added 10 talent trees covering all subclasses. Added Trooper level 14 (Holo-Targeting) and level 18 (Relentless Assault) class features.",
    changes: [
      { category: "Talent Trees", description: "Added Sage tree (4 tiers): Balance-spectrum mastery, Centered bonuses, and extreme-state amplification." },
      { category: "Talent Trees", description: "Added Shadow tree (4 tiers): Focus vs Impulse duality — stealth/social/initiative vs lightsaber/intimidation/ability bonuses." },
      { category: "Talent Trees", description: "Added Commando tree (4 tiers): Energy Cell economy, Overcharge cover penetration, resistance shredding, and damage stacking." },
      { category: "Talent Trees", description: "Added Vanguard tree (4 tiers): Shields-gated AC/resistance, movement suppression, cover aura, and ranged opportunity attacks." },
      { category: "Talent Trees", description: "Added Gunslinger tree (4 tiers): Reaction lock, first-blood damage, additional reaction, and multi-hit bonuses." },
      { category: "Talent Trees", description: "Added Scoundrel tree (4 tiers): Single-target present focus, smoke screens, knockback, and Disadvantage exploitation." },
      { category: "Talent Trees", description: "Added Operative tree (4 tiers): Gadget uses, dice upgrades, Stealth expertise, bonus action Hide, and Ghost Protocol." },
      { category: "Talent Trees", description: "Added Sniper tree (4 tiers): Squad Optics, Target Lock tracking, Coordinated Fire, and Steady Aim Mastery." },
      { category: "Talent Trees", description: "Added Powertech tree (4 tiers): Droid AC/Help/Point Defense/Autonomous Unit, gadget vulnerability and suppression." },
      { category: "Talent Trees", description: "Added Mercenary tree (4 tiers): Emergency Vent reserves, Heat tolerance, Rapid Venting, and Meltdown Protocol." },
      { category: "Trooper", description: "Added level 14 class feature: Holo-Targeting — each attack grants all allies +2 to hit against that target for one turn." },
      { category: "Trooper", description: "Added level 18 class feature: Relentless Assault — gain an additional Action each turn." },
    ],
  },
  {
    version: "0.3.2",
    date: "2026-05-17",
    summary: "Replaced Feats system with Talent Trees. Added Sentinel and Guardian trees with 4 tiers and 2 talents per tier. Consular Balance wording and increment fixes applied.",
    changes: [
      { category: "Talent Trees", description: "Replaced Feats with Talent Trees system. Added Sentinel tree (4 tiers, 8 talents): mobility and lightsaber-pressure focused." },
      { category: "Talent Trees", description: "Added Guardian tree (4 tiers, 8 talents): defensive and ally-support focused." },
      { category: "Consular", description: "Fixed Balance description: starts at 50 (not undefined). Updated tier thresholds to use non-overlapping ranges (86–100, 71–85, 56–70, 45–55, 30–44, 15–29, 0–14). Centered state now explicitly named. Saber Ward granted at 0–14 instead of bolt-reflect wording." },
      { category: "Consular", description: "Fixed Shadow feature wording: 'below 40 Balance' (was 'below 40 Focus')." },
    ],
  },
  {
    version: "0.3.1",
    date: "2026-04-27",
    summary: "Extracted inline feature blobs into structured sub-arrays; gadget action economy now displayed.",
    changes: [
      { category: "Agent", description: "Operative subclass gadgets extracted into structured operativeGadgets array, displayed as individual cards on the subclass page." },
      { category: "Trooper", description: "Commando Specialized Shots extracted into commandoShots array with cost and overcharge fields." },
      { category: "Trooper", description: "Vanguard Abilities extracted into vanguardAbilities array with cost and action type fields." },
      { category: "Smuggler", description: "Scoundrel Presents extracted into scoundrelPresents array with cost fields." },
      { category: "Bounty Hunter", description: "Mercenary Arsenal extracted into mercenaryAbilities array with Heat cost and tier threshold fields." },
      { category: "Bounty Hunter", description: "Powertech Companion Droid chassis extracted into droidChassis array with full stat blocks." },
      { category: "UI", description: "Gadgets page now displays actionType badge (e.g. Bonus Action) on each gadget card." },
    ],
  },
  {
    version: "0.3.0",
    date: "2026-04-27",
    summary: "Major rules update: conditions, core clarifications, schema expansions, and multiple class fixes.",
    changes: [
      { category: "Rules", description: "Added Conditions section to Rules page: Confused, Mindbroken, Frozen, Slowed, Stunned, Frightened, Jammed — each with full definitions." },
      { category: "Rules", description: "Added Core Rules Clarifications section: resource regeneration timing, Rage maximum formula (8 × CON score), and saving throw bonus clarification." },
      { category: "Agent", description: "Sniper subclass gadgets (Targeting Visor, Adaptive Camouflage Cloak, Spotter Droid, Wall-Penetrating Scanners) extracted from inline text into a structured sniperGadgets array, now displayed as individual cards on the Sniper subclass page." },
      { category: "Gadgets", description: "All standard gadgets now carry actionType: Bonus Action in the data schema." },
      { category: "Weapons", description: "Removed Sniper Blaster (merged into Sniper Rifle). Renamed weapon proficiency groups from Simple/Martial/All but Lightsabers to Non-Lightsabers." },
      { category: "Trooper", description: "Vanguard level 11 Extra Attack corrected to three attacks." },
      { category: "Bounty Hunter", description: "Powertech Companion Droid: removed redundant base movement line, deduplicated command text. Mercenary Arsenal: clarified Ionic Tether (attack roll), Fragmentation Flechette (cone extends behind primary target), Railgun (stops on miss or full cover), Overdrive (overrides 100 Heat lockout)." },
      { category: "Schema", description: "Expanded LevelFeature, ForceAbility, and Gadget interfaces with new optional fields for richer data entry." },
    ],
  },
  {
    version: "0.2.9",
    date: "2026-04-26",
    summary: "Added credit prices to weapons, items, and armor.",
    changes: [
      { category: "Weapon", description: "Added credit prices to all 22 weapons (lightsabers, blasters, vibroweapons, electroweapons). Prices now display in the table and mobile cards." },
      { category: "Item", description: "Added credit prices to all items. Prices now display on each item card." },
      { category: "Armor", description: "Added credit prices to all 10 armor entries. Prices now display in the table and armor cards." },
    ],
  },
  {
    version: "0.2.8.1",
    date: "2026-03-30",
    summary: "Fixed GitHub Pages SPA routing — page refresh on non-home routes now works.",
    changes: [
      { category: "Infrastructure", description: "Fixed client/public/404.html: the redirect script had a hardcoded /home/ path check (a sandbox artifact) that prevented it from ever firing on the real domain. Replaced with a universal ?p= redirect that works on any host." },
      { category: "Infrastructure", description: "Fixed index.html path restoration script to prepend a leading / when restoring the route from the ?p= query param." },
    ],
  },
  {
    version: "0.2.8",
    date: "2026-03-27",
    summary: "Integrated updated gameData base (v0.2.7 playtesting pass).",
    changes: [
      { category: "Data", description: "Merged latest gameData base including Consular stealth proficiency, Agent AoE clarification, Powertech droid updates, Shadow Forceful Breach fix, Operative gadget updates, Welding Kit, Remote Bomb, Flamethrower rework, and Force Barrier clarification." },
    ],
  },
  {
    version: "0.2.6.2",
    date: "2026-03-23",
    summary: "Added alignment filter to Force Abilities page.",
    changes: [
      { category: "UI", description: "Force Abilities page: added All / Light Side / Dark Side / Universal filter row above the search bar. Filters stack with the existing tag and search filters." },
    ],
  },
  {
    version: "0.2.7",
    date: "2026-03-26",
    summary: "Added suggestions based off of playtesting.",
    changes: [
      { category: "Class", description: "Consular: Gave Consular Stealth and Sleight of Hand proficiency." },
      { category: "Class", description: "Agent: Clarified interaction between Sneak Attack and AoE attacks." },
      { category: "Subclass", description: "Powertech: Clarified droid action economy and droid destruction." },
      { category: "Subclass", description: "Powertech: Changed level 7 ability from shared optics to a droid shield." },
      { category: "Subclass", description: "Shadow: Made Forceful Breach affect attacks, not damage, to differentiate from Driven Strike." },
      { category: "Subclass", description: "Operative: Clarified gadget action economy, removed Bioanalyzer and Portable Background Noise Generator for Arc Projector and Stun Drone." },
      { category: "Gadget", description: "Added Welding Kit to gadgets." },
      { category: "Gadget", description: "Changed Flamethrower to create a patch of fire, rather than a single attack." },
      { category: "Gadget", description: "Added Remote Bomb." },
      { category: "Force Ability", description: "Clarified Force Barrier size." },
      
    ],
  },
  {
    version: "0.2.6.1",
    date: "2026-03-23",
    summary: "Added alignment badges (Light Side / Dark Side / Universal) to all Force abilities.",
    changes: [
      { category: "Force Ability", description: "Added ForceAlignment type (light | dark | universal) and alignment field to the ForceAbility interface." },
      { category: "Force Ability", description: "Populated alignment on all 32 Force abilities: 14 Light Side, 13 Dark Side, 6 Universal." },
      { category: "UI", description: "Force Abilities page now displays a colored alignment badge (sky blue = Light Side, red = Dark Side, slate = Universal) alongside the action type and cost on each ability card." },
    ],
  },
  {
    version: "0.2.6",
    date: "2026-03-23",
    summary: "Added 13 dark side Force abilities and marked 6 abilities as Universal.",
    changes: [
      { category: "Force Ability", description: "Added 13 dark side abilities: Force Lightning, Dominate Will, Force Scream, Burn Memory, Thought Bomb, Dread Mark, Warp Flesh, Dark Infusion, Viral Madness, Static Cage, Force Choke, Deceive Senses, and Drain Life. All tagged Dark Side." },
      { category: "Force Ability", description: "Marked Push / Pull, Force Leap, Saber Throw, Projectile Freezing, Energy Absorption, and Guided Navigation as Universal (accessible to all alignments)." },
    ],
  },
  {
    version: "0.2.5.2",
    date: "2026-03-23",
    summary: "Fixed page refresh white-screen on GitHub Pages for all non-root routes.",
    changes: [
      { category: "Infrastructure", description: "Added 404.html with GitHub Pages SPA redirect trick: deep-route refreshes now encode the path and redirect to index.html instead of showing a blank page." },
      { category: "Infrastructure", description: "Added path-restoration script to index.html so React Router receives the correct route before mounting." },
    ],
  },
  {
    version: "0.2.5.1",
    date: "2026-03-23",
    summary: "Restructured Alchemist Mutagenic Abilities into a dedicated data array.",
    changes: [
      { category: "Subclass", description: "Alchemist: Added MutagenicAbility interface (id, name, description, overload) and moved all 11 Mutagenic Abilities out of the Alchemical Horror description string into a structured mutagenicAbilities array on the subclass." },
      { category: "Subclass", description: "Alchemist: Extended the Subclass interface with an optional mutagenicAbilities field for future subclasses that use selectable ability pools." },
    ],
  },
  {
    version: "0.2.5",
    date: "2026-03-23",
    summary: "Completed Sith Inquisitor with full class features and both subclasses.",
    changes: [
      { category: "Class", description: "Sith Inquisitor: Filled in all proficiencies, saving throws, skill choices, spellcasting ability, and Force Points resource." },
      { category: "Class", description: "Sith Inquisitor: Added all 12 class features across levels 1\u201318 (Lightsaber Stance, Recklessness, Subclass, 4\u00d7 ASI, Peace is a Lie, Through Passion I Gain Strength, Through Strength I Gain Power, Through Power I Gain Victory, Through Victory my Chains are Broken, The Force shall Free Me)." },
      { category: "Subclass", description: "Alchemist: Added Alchemical Horror with all 11 Mutagenic Abilities and Overloads, plus Mutagenic Evolution features at levels 7, 10, and 13." },
      { category: "Subclass", description: "Sorcerer: Added Ionizing Potential, Unlimited Power, and Power Overcharge at level 3; Power Overwhelming at level 7; Overload at level 10; Lightning Storm at level 13." },
    ],
  },
{
    version: "0.2.4.1",
    date: "2026-03-16",
    summary: "Gave Agent their proper ASIs.",
    changes: [
      { category: "Class", description: "Gave Agent a level 4 ASI." },
    ],
  },
{
    version: "0.2.4",
    date: "2026-03-13",
    summary: "Adjusted subclasses based off of beta testing, times two.",
    changes: [
      { category: "Class", description: "Adjusted Knight early focus gain and removed Focus loss on damage to make opening fights feel better." },
      { category: "Subclass", description: "Sage: Adjusted low balance to give extra attack and lose Force free action usage to prioritize rubber-banding." },
      { category: "Subclass", description: "Sage: Gave limited ability to regenerate Force Points off of Short Rests based off of hit dice usage to allow for more freedom while forcing costs." },
	  { category: "Force Ability", description: "Nerfed Force Crush to require one turn of channeling to compensate for the ridiculous damage."},
	  { category: "Force Ability", description: "Nerfed Battle Precognition from all enemies to three enemies to save DM sanity."},
	  { category: "Force Ability", description: "Clarified Saber Throw."},
    ],
  },
  {
    version: "0.2.3.1",
    date: "2026-03-09",
    summary: "Adjusted subclasses based off of beta testing. ",
    changes: [
      { category: "Subclass", description: "Scoundrel: Gave the ability to combine Present effects at level 13." },
      { category: "Class", description: "Consular: Now have attack + force ability at level 5, not extra attack." },
	  { category: "Class", description: "Consular: Gave the ability to enhance abilities via Concentration."},
    ],
  },
  {
    version: "0.2.3",
    date: "2026-03-09",
    summary: "Gave Force Ability knowledge to Consular and nsul.",
    changes: [
      { category: "Class", description: "Knight: Gave 1 Force Ability known per level." },
      { category: "Class", description: "Consular: Gave 1 Force Ability known per level." },
    ],
  },
  {
    version: "0.2.2",
    date: "2026-03-07",
    summary: "Completed Juggernaut subclass with all 12 abilities and level-based bonuses.",
    changes: [
      { category: "Subclass", description: "Juggernaut: Added Channel Hatred passive with damage resistance." },
      { category: "Subclass", description: "Juggernaut: Added 9 Channel Hatred abilities (Pain upon Pain, Master of Terror, Contemptuous Taunt, Implacable Advance, Spiteful Rebuke, Crushing Blow, Executioner's Grip, Overwhelming Hatred)." },
      { category: "Subclass", description: "Juggernaut: Added level-based bonuses (Pain is Fuel at 7, Inescapable Doom at 10, Pain is Power at 13)." },
    ],
  },
  {
    version: "0.2.1",
    date: "2026-03-05",
    summary: "Completed Marauder subclass with all 12 abilities and level-based bonuses.",
    changes: [
      { category: "Subclass", description: "Marauder: Added Channel Hatred passive with free extra attack and expanded critical range." },
      { category: "Subclass", description: "Marauder: Added 8 Channel Hatred abilities (Brutal Execution, Frenzied Strike, Bloodthirst, Crippling Slash, Predation, Whirling Frenzy, Cloak of Pain, Undying Rage)." },
      { category: "Subclass", description: "Marauder: Added level-based bonuses (Overpowering Hatred at 7, Unrelenting Hatred at 10, Unending Hatred at 13)." },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-03-05",
    summary: "Added Sith classes. Sith Warrior fully implemented with Marauder subclass skeleton.",
    changes: [
      { category: "Class", description: "Added Sith Warrior class with Rage, Channel Hatred, and Force Points resources." },
      { category: "Class", description: "Added Sith Inquisitor class skeleton with Alchemist and Sorcerer subclass skeletons." },
      { category: "Subclass", description: "Added Marauder subclass skeleton for Sith Warrior." },
      { category: "Subclass", description: "Renamed Assassin to Alchemist for Sith Inquisitor." },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-03-02",
    summary: "Initial rulebook release. All core classes, subclasses, force abilities, gadgets, weapons, items, and armor published.",
    changes: [
      { category: "General", description: "Published initial rulebook with all 6 classes and 12 subclasses." },
      { category: "General", description: "Added 20 Force Abilities, 29 Gadgets, 17 Weapon Properties, and full Weapons, Items, and Armor tables." },
      { category: "Rule", description: "Established core rules clarifications." },
      { category: "Stance", description: "Published 7 Lightsaber Stances and 6 Fighting Styles." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TALENT TREES
// ─────────────────────────────────────────────────────────────────────────────
export interface Talent {
  id: string;
  name: string;
  description: string;
}

export interface TalentTier {
  tier: number;
  /** Two talents to choose from at this tier */
  options: [Talent, Talent];
}

export interface TalentTree {
  id: string;
  name: string;
  /** Short flavour description of the tree's playstyle */
  description: string;
  /** Accent color key matching ClassAccent for styling */
  accent: string;
  tiers: TalentTier[];
}

export const talentTrees: TalentTree[] = [
  {
    id: "sentinel",
    name: "Sentinel",
    description: "A mobile duelist who harries enemies with relentless lightsaber pressure, controlling space through superior footwork and Force-enhanced speed.",
    accent: "blue",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "sentinel-t1-a",
            name: "",
            description: "Gain 10ft of movement.",
          },
          {
            id: "sentinel-t1-b",
            name: "",
            description: "After you hit with a Lightsaber attack, the target cannot take Reactions until the start of your next turn.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "sentinel-t2-a",
            name: "",
            description: "You may Disengage and Dash simultaneously as a Bonus Action.",
          },
          {
            id: "sentinel-t2-b",
            name: "",
            description: "If you move at least 30ft during your turn, gain +2 to Dexterity saving throws until the start of your next turn.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "sentinel-t3-a",
            name: "",
            description: "After landing a Lightsaber attack, gain 5ft of movement.",
          },
          {
            id: "sentinel-t3-b",
            name: "",
            description: "After making two Lightsaber attacks during the same turn, gain +2 to Dexterity saving throws until the start of your next turn.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "sentinel-t4-a",
            name: "",
            description: "Learn Force Leap if you do not already know it. It costs 0 Force Points, uses a Free Action, and may be used once per turn.",
          },
          {
            id: "sentinel-t4-b",
            name: "",
            description: "Gain +1 AC for every 20ft you move during your turn, lasting until the start of your next turn.",
          },
        ],
      },
    ],
  },
  {
    id: "guardian",
    name: "Guardian",
    description: "A stalwart defender who anchors the battlefield, protecting allies through deflection mastery, auras of resolve, and the indomitable presence of a true Jedi shield.",
    accent: "indigo",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "guardian-t1-a",
            name: "",
            description: "If you do not move during your turn, gain Defensive Ward for free until the start of your next turn.",
          },
          {
            id: "guardian-t1-b",
            name: "",
            description: "After you deflect a blaster attack, make a DC 18 Wisdom check. On a success, allies within 15ft gain +2 to attack rolls until the start of your next turn. This effect does not stack with itself.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "guardian-t2-a",
            name: "",
            description: "When Perfect Riposte triggers, you may use Saber Throw in place of its normal Lightsaber attack. This uses the same Reaction.",
          },
          {
            id: "guardian-t2-b",
            name: "",
            description: "After you hit a target with a Lightsaber attack, it has Disadvantage on attacks against creatures other than you until the start of your next turn.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "guardian-t3-a",
            name: "",
            description: "Perfect Riposte no longer requires a Reaction and may trigger up to twice per turn.",
          },
          {
            id: "guardian-t3-b",
            name: "",
            description: "After you use a Force Ability, allies within 15ft gain +2 to the saving throw DCs of their abilities until the start of your next turn.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "guardian-t4-a",
            name: "",
            description: "You may use your normal deflection and reflection rules against Gadget attacks and other targeted ability attacks that make attack rolls, in addition to blaster attacks.",
          },
          {
            id: "guardian-t4-b",
            name: "",
            description: "Learn Battle Meditation if you do not already know it. You may use it as a Bonus Action.",
          },
        ],
      },
    ],
  },
  {
    id: "sage",
    name: "Sage",
    description: "A Force philosopher who masters the Balance spectrum, drawing power from both extremes while seeking the clarity of the Centered state.",
    accent: "teal",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "sage-t1-a",
            name: "",
            description: "While Centered and in combat, gain 1 additional Force Point at the start of each of your turns.",
          },
          {
            id: "sage-t1-b",
            name: "",
            description: "The first time each turn you move out of Centered, retain the bonuses and penalties of your previous Balance tier until the start of your next turn.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "sage-t2-a",
            name: "",
            description: "While Centered, when you roll damage, you may reroll the damage dice and use either result.",
          },
          {
            id: "sage-t2-b",
            name: "",
            description: "At 56–70 Balance, the additional Force Ability damage becomes 1d8 instead of 1d6. At 30–44 Balance, the additional Lightsaber damage becomes 1d6 instead of 1d4.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "sage-t3-a",
            name: "",
            description: "While Centered, gain +2 AC.",
          },
          {
            id: "sage-t3-b",
            name: "",
            description: "While above 70 Balance, double the range of your Force Abilities. While below 30 Balance, increase your melee range by 5ft.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "sage-t4-a",
            name: "",
            description: "Force Abilities that normally require an Action may instead be used as a Bonus Action.",
          },
          {
            id: "sage-t4-b",
            name: "",
            description: "Double all bonuses granted by non-Centered Balance states.",
          },
        ],
      },
    ],
  },
  {
    id: "shadow",
    name: "Shadow",
    description: "A dual-natured Force user who draws power from the tension between Focus and Impulse, excelling in either disciplined calm or aggressive momentum.",
    accent: "purple",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "shadow-t1-a",
            name: "",
            description: "While Focus is greater than or equal to Impulse, gain +2 to Stealth checks.",
          },
          {
            id: "shadow-t1-b",
            name: "",
            description: "While Impulse is greater than Focus, gain +2 to Lightsaber attack rolls.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "shadow-t2-a",
            name: "",
            description: "While Focus is greater than or equal to Impulse, gain Advantage on Persuasion checks.",
          },
          {
            id: "shadow-t2-b",
            name: "",
            description: "While Impulse is greater than Focus, gain Advantage on Intimidation checks.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "shadow-t3-a",
            name: "",
            description: "While Focus is greater than or equal to Impulse, gain Advantage on Initiative rolls.",
          },
          {
            id: "shadow-t3-b",
            name: "",
            description: "While Impulse is greater than Focus, Driven Strike uses 1d12 and Forceful Breach uses 1d10.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "shadow-t4-a",
            name: "",
            description: "While Focus is greater than or equal to Impulse, Cloak of Shadows costs 1 Focus and may be used as a Bonus Action.",
          },
          {
            id: "shadow-t4-b",
            name: "",
            description: "While Impulse is greater than Focus, up to two Impulse Abilities may modify the same attack.",
          },
        ],
      },
    ],
  },
  {
    id: "commando",
    name: "Commando",
    description: "An Energy Cell specialist who optimises their shot economy, punishes enemies through cover, and chains Overcharge effects into devastating barrages.",
    accent: "cyan",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "commando-t1-a",
            name: "",
            description: "The first Energy Cell ability you use each turn costs 1 fewer Energy Cell (minimum 1). This does not apply to Overcharges.",
          },
          {
            id: "commando-t1-b",
            name: "",
            description: "Overcharged shots ignore Half Cover and treat Three-Quarters Cover as Half Cover.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "commando-t2-a",
            name: "",
            description: "When you score a Critical Hit with an attack, regain 1 Energy Cell.",
          },
          {
            id: "commando-t2-b",
            name: "",
            description: "Overcharged shots ignore all Resistances.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "commando-t3-a",
            name: "",
            description: "The first Overcharged shot you use each turn costs 2 fewer Energy Cells (minimum 2).",
          },
          {
            id: "commando-t3-b",
            name: "",
            description: "Each Overcharged shot you use grants +2 damage to all targets of your future Overcharged shots until the end of your next turn. This stacks up to five times. Using another Overcharged shot before the duration ends refreshes the duration of all stacks.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "commando-t4-a",
            name: "",
            description: "Once per turn, when you hit with an attack that does not spend Energy Cells, regain 1 Energy Cell.",
          },
          {
            id: "commando-t4-b",
            name: "",
            description: "Each target hit by an Overcharged shot takes an additional 1d8 damage.",
          },
        ],
      },
    ],
  },
  {
    id: "vanguard",
    name: "Vanguard",
    description: "A living fortress who weaponises their Shields pool, turning punishment absorbed into offensive pressure and battlefield control.",
    accent: "sky",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "vanguard-t1-a",
            name: "",
            description: "While you have any Shields, gain +2 AC.",
          },
          {
            id: "vanguard-t1-b",
            name: "",
            description: "When you damage or target an enemy with an Energy Cell ability, reduce its movement speed by 10ft until the start of your next turn.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "vanguard-t2-a",
            name: "",
            description: "When enemy damage reduces your Shields to 0, halve any overflow damage and halve all further incoming damage until the start of your next turn.",
          },
          {
            id: "vanguard-t2-b",
            name: "",
            description: "Whenever you hit a target, you may push it 5ft if it is no more than two size categories larger than you.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "vanguard-t3-a",
            name: "",
            description: "While you have any Shields, allies within 10ft gain Half Cover. While Shield Pulse is active, they instead gain Three-Quarters Cover.",
          },
          {
            id: "vanguard-t3-b",
            name: "",
            description: "When an enemy attacks you, it must make a Constitution saving throw. On a failure, its movement speed is halved until the start of its next turn.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "vanguard-t4-a",
            name: "",
            description: "While you have any Shields, gain Resistance to all damage.",
          },
          {
            id: "vanguard-t4-b",
            name: "",
            description: "You may make ranged Opportunity Attacks when an enemy crosses from within 10ft of you to beyond 10ft of you.",
          },
        ],
      },
    ],
  },
  {
    id: "gunslinger",
    name: "Gunslinger",
    description: "A reactive duelist who punishes enemies for acting out of turn, chains reaction attacks into mobility, and rewards initiative with bonus damage.",
    accent: "pink",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "gunslinger-t1-a",
            name: "",
            description: "When you hit with a Reaction attack, the target cannot take Reactions or Bonus Actions for the rest of its turn.",
          },
          {
            id: "gunslinger-t1-b",
            name: "",
            description: "Against a target that has not yet acted this round, your weapon attacks deal an additional 1d6 damage. This does not apply to Reaction attacks.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "gunslinger-t2-a",
            name: "",
            description: "After making a Reaction attack, you may move 5ft without provoking Opportunity Attacks.",
          },
          {
            id: "gunslinger-t2-b",
            name: "",
            description: "After your first attack against a target during a turn, each additional attack against that target deals +2 damage.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "gunslinger-t3-a",
            name: "",
            description: "Gain one additional Reaction each round.",
          },
          {
            id: "gunslinger-t3-b",
            name: "",
            description: "Your first hit each round deals an additional 1d8 damage.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "gunslinger-t4-a",
            name: "",
            description: "Gain +2 to all attack and damage rolls made as part of a Reaction.",
          },
          {
            id: "gunslinger-t4-b",
            name: "",
            description: "After your first attack against a target during a turn, each additional attack against that target gains +2 to the attack roll.",
          },
        ],
      },
    ],
  },
  {
    id: "scoundrel",
    name: "Scoundrel",
    description: "A trap-setter who specialises in single-target present detonations, controlling the battlefield with smoke, debuffs, and precision explosive placement.",
    accent: "rose",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "scoundrel-t1-a",
            name: "",
            description: "You may remove all splash radius from a Present, making it affect only one target. If you do, add one additional damage die of the same size as the Present's normal damage die.",
          },
          {
            id: "scoundrel-t1-b",
            name: "",
            description: "Targets damaged by your Presents lose 10ft of movement speed until the start of your next turn.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "scoundrel-t2-a",
            name: "",
            description: "If a Present detonation damages only one target, that target has Disadvantage on all saving throws until the start of your next turn.",
          },
          {
            id: "scoundrel-t2-b",
            name: "",
            description: "Targets hit by your Presents suffer −2 to their next attack roll.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "scoundrel-t3-a",
            name: "",
            description: "If a Present damages only one target, you may push that target 10ft.",
          },
          {
            id: "scoundrel-t3-b",
            name: "",
            description: "After detonating a Present, your threat range for imposing Disadvantage on ranged attackers increases to 15ft until the start of your next turn.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "scoundrel-t4-a",
            name: "",
            description: "If you detonate a Present that affects only one target during your turn, gain Advantage on attack rolls against that target until the start of your next turn. When rolling damage against that target, you may reroll the damage roll and use either result.",
          },
          {
            id: "scoundrel-t4-b",
            name: "",
            description: "When you detonate a Present, you may also create a 10ft-radius smoke cloud that lasts for two turns.",
          },
        ],
      },
    ],
  },
  {
    id: "operative",
    name: "Operative",
    description: "A gadget-focused infiltrator who amplifies every piece of technology they carry, strikes from the shadows, and maintains concealment through superior technique.",
    accent: "green",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "operative-t1-a",
            name: "",
            description: "Operative-specific Gadgets gain +1 use. All Gadget uses refresh on a Long Rest.",
          },
          {
            id: "operative-t1-b",
            name: "",
            description: "Gain Expertise in Stealth, doubling your Proficiency Bonus on Stealth checks.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "operative-t2-a",
            name: "",
            description: "Increase all Gadget damage dice by one step.",
          },
          {
            id: "operative-t2-b",
            name: "",
            description: "You may Hide as a Bonus Action. If you are behind Three-Quarters Cover or Full Cover, gain Advantage on the check.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "operative-t3-a",
            name: "",
            description: "After damaging a target with a Gadget, it must make a Constitution saving throw. On a failure, gain Advantage on all attacks against it until the start of your next turn.",
          },
          {
            id: "operative-t3-b",
            name: "",
            description: "You may use Intelligence instead of Charisma for Deception checks.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "operative-t4-a",
            name: "",
            description: "Gain one additional Bonus Action.",
          },
          {
            id: "operative-t4-b",
            name: "",
            description: "After attacking while Hidden, make a Stealth check. On a success, remain Hidden and increase the DC of checks to detect you by 2. Each further success increases the DC by an additional 2. On a failure, you are detected and the DC resets.",
          },
        ],
      },
    ],
  },
  {
    id: "sniper",
    name: "Sniper",
    description: "A long-range specialist who turns Targeting Visor into a force-multiplier for the whole squad, punishes impaired targets, and maximises the power of Steady Aim.",
    accent: "lime",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "sniper-t1-a",
            name: "",
            description: "Gain Targeting Visor without requiring a Gadget Slot, along with one additional memory chip. Additional memory chips still require Gadget Slots. You may grant the benefits of Targeting Visor to up to two allies within 200ft.",
          },
          {
            id: "sniper-t1-b",
            name: "",
            description: "While Steady Aim is active, your attacks ignore Half Cover.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "sniper-t2-a",
            name: "",
            description: "You always know the location of targets studied by Targeting Visor while they remain within 900ft. This lasts for 10 minutes.",
          },
          {
            id: "sniper-t2-b",
            name: "",
            description: "When you hit a target, reduce its movement speed by 10ft until the start of your next turn.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "sniper-t3-a",
            name: "",
            description: "As an Action, grant Advantage to all allies within 50ft against targets marked by Targeting Visor for one turn.",
          },
          {
            id: "sniper-t3-b",
            name: "",
            description: "Gain Advantage on attack rolls against targets with reduced movement speed.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "sniper-t4-a",
            name: "",
            description: "Targeting Visor also reveals the target's abilities, current HP, armor, weapons, and ability scores. Double all combat bonuses granted by Targeting Visor.",
          },
          {
            id: "sniper-t4-b",
            name: "",
            description: "Double the attack-roll bonus granted by Steady Aim. While Steady Aim is active, your attacks may pass through up to 5ft of solid material.",
          },
        ],
      },
    ],
  },
  {
    id: "powertech",
    name: "Powertech",
    description: "A droid commander who enhances their Companion Droid into a combat asset, amplifies gadget effectiveness, and punishes enemies who show fear.",
    accent: "yellow",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "powertech-t1-a",
            name: "",
            description: "Your Companion Droid gains +2 AC.",
          },
          {
            id: "powertech-t1-b",
            name: "",
            description: "After you personally use a Gadget, reduce the next instance of damage you take before the start of your next turn by your Proficiency Bonus. Gadgets used by your Companion Droid do not trigger this effect.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "powertech-t2-a",
            name: "",
            description: "Your Companion Droid gains the Help Action, which it may use on its turn to grant Advantage on an ally's next attack roll or ability check.",
          },
          {
            id: "powertech-t2-b",
            name: "",
            description: "Gain +2 to attack and damage rolls against enemies currently affected by a Gadget.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "powertech-t3-a",
            name: "",
            description: "If your Companion Droid is carrying a weapon, it may use its Reaction to fire at an incoming projectile within the weapon's range. Treat the projectile as AC 12. On a hit, the projectile is destroyed and its attack is negated.",
          },
          {
            id: "powertech-t3-b",
            name: "",
            description: "Enemies have Disadvantage on saving throws against your Gadgets.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "powertech-t4-a",
            name: "",
            description: "Your Companion Droid rolls its own Initiative and may act on its turn without requiring your Bonus Action to command it.",
          },
          {
            id: "powertech-t4-b",
            name: "",
            description: "The first time each turn you hit an enemy affected by a Gadget, the attack is a Critical Hit.",
          },
        ],
      },
    ],
  },
  {
    id: "mercenary",
    name: "Mercenary",
    description: "A Heat-management specialist who pushes their arsenal to the limit, thriving in the danger zone above 80 Heat and turning Overheat from a liability into a weapon.",
    accent: "orange",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "mercenary-t1-a",
            name: "",
            description: "Gain one additional use of Emergency Vent per Long Rest.",
          },
          {
            id: "mercenary-t1-b",
            name: "",
            description: "While above 80 Heat, gain +2 to Arsenal Ability attack rolls.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "mercenary-t2-a",
            name: "",
            description: "Increase all of your self-damage Heat thresholds by 10.",
          },
          {
            id: "mercenary-t2-b",
            name: "",
            description: "While above 80 Heat, whenever you use an Arsenal Ability, you may reroll one of its damage dice and use either result.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "mercenary-t3-a",
            name: "",
            description: "While above 80 Heat, you may double your passive Heat venting rate.",
          },
          {
            id: "mercenary-t3-b",
            name: "",
            description: "While Overheated, gain one additional attack on each of your turns.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "mercenary-t4-a",
            name: "",
            description: "Emergency Vent refreshes on a Short Rest instead of a Long Rest.",
          },
          {
            id: "mercenary-t4-b",
            name: "",
            description: "Overheating no longer disables your abilities. While Overheated, take 4d8 damage at the start of each of your turns and add one additional damage die to all Arsenal Abilities. Your Heat may increase beyond its normal maximum until vented or otherwise reduced.",
          },
        ],
      },
    ],
  },
  {
    id: "marauder",
    name: "Marauder",
    description: "A relentless Sith warrior who feeds on carnage, building momentum through kills and unleashing devastating power while Channeling Hatred.",
    accent: "red",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "marauder-t1-a",
            name: "",
            description: "When you reduce a creature to 0 HP, gain an additional 15 Rage.",
          },
          {
            id: "marauder-t1-b",
            name: "",
            description: "While Channeling Hatred, Rage abilities cost 10 less Rage.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "marauder-t2-a",
            name: "",
            description: "When you reduce a creature to 0 HP, increase your Critical Hit range by 1 for two turns. Further kills refresh the duration.",
          },
          {
            id: "marauder-t2-b",
            name: "",
            description: "While Channeling Hatred, your damage ignores all Resistances.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "marauder-t3-a",
            name: "",
            description: "When you reduce a creature to 0 HP, deal double damage to Shields until the end of your next turn.",
          },
          {
            id: "marauder-t3-b",
            name: "",
            description: "While Channeling Hatred, increase your melee range by 5ft.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "marauder-t4-a",
            name: "",
            description: "When you reduce a creature to 0 HP, all enemies within 10ft of you take damage equal to your level.",
          },
          {
            id: "marauder-t4-b",
            name: "",
            description: "While Channeling Hatred, your Lightsaber attacks deal +1 damage for each enemy within 10ft of you.",
          },
        ],
      },
    ],
  },
  {
    id: "juggernaut",
    name: "Juggernaut",
    description: "An unstoppable Sith juggernaut who grows more dangerous as enemies strike it, shrugging off punishment and retaliating with overwhelming force.",
    accent: "orange",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "juggernaut-t1-a",
            name: "",
            description: "Reduce the first instance of damage you take each turn by 1d6.",
          },
          {
            id: "juggernaut-t1-b",
            name: "",
            description: "Each time you take damage, increase all damage you deal by 1 until the end of your next turn.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "juggernaut-t2-a",
            name: "",
            description: "While Channeling Hatred, reduce damage you take from area-of-effect abilities, items, and Gadgets by 1d6.",
          },
          {
            id: "juggernaut-t2-b",
            name: "",
            description: "Gain an additional 5 Rage each time you are hit.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "juggernaut-t3-a",
            name: "",
            description: "While Channeling Hatred, treat Critical Hits against you as normal hits.",
          },
          {
            id: "juggernaut-t3-b",
            name: "",
            description: "If at least two attacks target you during a turn, gain Extra Attack for one round.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "juggernaut-t4-a",
            name: "",
            description: "While Channeling Hatred, you ignore Difficult Terrain and gain Advantage on saving throws against effects that would alter your movement. If a movement-altering effect does not allow a saving throw, you are immune to that effect.",
          },
          {
            id: "juggernaut-t4-b",
            name: "",
            description: "After taking damage, all of your abilities and Lightsaber attacks also affect all valid targets within 5ft of the primary target until the end of your next turn.",
          },
        ],
      },
    ],
  },
  {
    id: "alchemist",
    name: "Alchemist",
    description: "A Sith Alchemist who pushes the boundaries of mutation, enhancing both themselves and their Alchemical Horror to terrifying extremes.",
    accent: "green",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "alchemist-t1-a",
            name: "",
            description: "Whenever your Alchemical Horror gains Mutagenic Abilities from Mutagenic Evolution, you gain half as many, rounded down, to apply to yourself. You may choose Mutagenic Overloads for your own Mutagenic Abilities, but you cannot choose Weirdling. Recklessness also applies to attack rolls made with your Mutagenic Abilities.",
          },
          {
            id: "alchemist-t1-b",
            name: "",
            description: "Your Alchemical Horror gains +10ft movement speed.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "alchemist-t2-a",
            name: "",
            description: "Your Mutagenic Abilities deal an additional 1d8 damage.",
          },
          {
            id: "alchemist-t2-b",
            name: "",
            description: "Your Alchemical Horror adds an additional 1d6 damage to every damage instance it causes.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "alchemist-t3-a",
            name: "",
            description: "Gain +2 to Intimidation checks for each Mutagenic Ability you have selected for yourself.",
          },
          {
            id: "alchemist-t3-b",
            name: "",
            description: "Your Alchemical Horror gains Extra Attack.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "alchemist-t4-a",
            name: "",
            description: "While in combat, regain 2d8 HP at the start of each of your turns.",
          },
          {
            id: "alchemist-t4-b",
            name: "",
            description: "When your Alchemical Horror reduces an enemy to 0 HP, it gains one additional Action. This can occur only once per turn.",
          },
        ],
      },
    ],
  },
  {
    id: "sorcerer",
    name: "Sorcerer",
    description: "A Sith Sorcerer who bends the Force to its breaking point, amplifying Power Overcharge to devastating effect and reshaping the very nature of their abilities.",
    accent: "purple",
    tiers: [
      {
        tier: 1,
        options: [
          {
            id: "sorcerer-t1-a",
            name: "",
            description: "Increase the damage granted by each Force Point spent on Power Overcharge by 1.",
          },
          {
            id: "sorcerer-t1-b",
            name: "",
            description: "Increase the range of all Force Abilities by 15ft.",
          },
        ],
      },
      {
        tier: 2,
        options: [
          {
            id: "sorcerer-t2-a",
            name: "",
            description: "Force Ability attack rolls benefiting from Power Overcharge increase their Critical Hit range by 1.",
          },
          {
            id: "sorcerer-t2-b",
            name: "",
            description: "Your Force Abilities ignore Half Cover and treat Three-Quarters Cover as Half Cover.",
          },
        ],
      },
      {
        tier: 3,
        options: [
          {
            id: "sorcerer-t3-a",
            name: "",
            description: "When you spend at least 4 Force Points on Power Overcharge, affected enemies must make a Constitution saving throw. On a failure, they are Stunned until the start of your next turn.",
          },
          {
            id: "sorcerer-t3-b",
            name: "",
            description: "Once per effect, when a creature succeeds on a saving throw to end one of your effects, force it to reroll the saving throw and use the new result.",
          },
        ],
      },
      {
        tier: 4,
        options: [
          {
            id: "sorcerer-t4-a",
            name: "",
            description: "You may spend up to 2 additional Force Points on Power Overcharge beyond your normal Proficiency Bonus limit. For each Force Point spent beyond that limit, take 1d8 damage after the ability resolves. This damage cannot be reduced or prevented.",
          },
          {
            id: "sorcerer-t4-b",
            name: "",
            description: "Twice per Long Rest, when using a Force Ability, you may change its area: single-target abilities become a 5ft-wide line with a length equal to the ability's normal range; cones become circles with a radius equal to half the cone's range, centered at a point within 60ft; circles become cones with a range equal to twice the circle's radius.",
          },
        ],
      },
    ],
  },
];

// =============================================================================
// ENEMIES
// =============================================================================

export interface EnemyAction {
  name: string;
  type: "action" | "bonus" | "reaction" | "passive";
  description: string;
}

export interface Enemy {
  id: string;
  name: string;
  faction: string;
  size: string;
  ac: number;
  hp: number;
  shields?: number;
  speed: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  traits: string[];
  actions: EnemyAction[];
  tactics: string;
  doctrineNote?: string;
}

export const enemies: Enemy[] = [
  // ── DROID FORCES ────────────────────────────────────────────────────────────
  {
    id: "b1-battle-droid",
    name: "B1 Battle Droid",
    faction: "Droid Forces",
    size: "Medium",
    ac: 12,
    hp: 8,
    speed: "30ft",
    str: 8, dex: 10, con: 10, int: 8, wis: 8, cha: 6,
    traits: ["Droid"],
    actions: [
      {
        name: "Blaster Rifle",
        type: "action",
        description: "Ranged Weapon Attack. +3 to hit, 150/600ft range, 1d8+1 damage.",
      },
    ],
    tactics: "B1 Droids form firing lines and concentrate on one target. They rarely seek cover unless commanded.",
  },
  {
    id: "b2-super-battle-droid",
    name: "B2 Super Battle Droid",
    faction: "Droid Forces",
    size: "Medium",
    ac: 15,
    hp: 28,
    speed: "25ft",
    str: 16, dex: 10, con: 16, int: 8, wis: 8, cha: 6,
    traits: ["Droid"],
    actions: [
      {
        name: "Arm Cannon",
        type: "action",
        description: "Ranged Weapon Attack. +4 to hit, 100/400ft range, 1d10+3 damage.",
      },
      {
        name: "Wrist Rocket",
        type: "action",
        description: "Choose a point within 60 feet. Creatures within 10 feet make a DC 12 Dexterity save, taking 2d6 damage on failure or half on success. Once per combat.",
      },
    ],
    tactics: "B2s advance directly towards targets, firing all the while. Against clustered targets, they will fire their wrist rockets.",
  },
  {
    id: "t1-tactical-droid",
    name: "T-1 Tactical Droid",
    faction: "Droid Forces",
    size: "Medium",
    ac: 13,
    hp: 20,
    speed: "30ft",
    str: 10, dex: 14, con: 10, int: 16, wis: 10, cha: 8,
    traits: ["Droid", "Commander"],
    actions: [
      {
        name: "Networked Leader",
        type: "passive",
        description: "All friendly Droids within 60ft gain +4 Intelligence and act more intelligently — seeking cover, flanking, using grenades to flush enemies from cover, suppressing, and such. Destruction of the Networked Leader will stun all networked droids for 1 turn.",
      },
      {
        name: "Blaster Pistol",
        type: "action",
        description: "Ranged Weapon Attack. +3 to hit, 30/60ft, 1d4+2 damage.",
      },
      {
        name: "Fire!",
        type: "action",
        description: "Command up to three friendly droids within 60ft to immediately fire upon a target. This does not interfere with their turns, and they are free to fire again on their turns.",
      },
      {
        name: "Analyze Weakness",
        type: "action",
        description: "Analyze a target for weakness. All friendly droids within 60ft gain +2 to weapon attacks against this target while the Tactical Droid is alive.",
      },
    ],
    tactics: "The Tactical Droid stays in the back, behind cover, while networking with and supporting its troops. It will only properly engage in combat as a last resort — its best tools are the droids around it, rather than its pistol.",
  },
  {
    id: "bx-commando-droid",
    name: "BX Commando Droid",
    faction: "Droid Forces",
    size: "Medium",
    ac: 17,
    hp: 52,
    speed: "40ft",
    str: 14, dex: 18, con: 14, int: 14, wis: 14, cha: 10,
    traits: ["Droid", "Commando"],
    actions: [
      {
        name: "Infiltration Programming",
        type: "passive",
        description: "+7 to Stealth, +5 to Perception, and may perfectly imitate any heard voice. Gains Advantage against any creature that has not yet acted in combat.",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Blaster Carbine",
        type: "action",
        description: "Ranged Weapon Attack. 60/240ft, +6 to hit, 1d6+4 damage.",
      },
      {
        name: "Vibrosword",
        type: "action",
        description: "Melee Weapon Attack. 5ft range, +6 to hit, 1d8+4 damage. Vibrocutter.",
      },
      {
        name: "Dodge",
        type: "reaction",
        description: "Gain +3 AC against an incoming attack that would hit. If this causes it to miss, the Commando Droid may move 5ft in any direction.",
      },
    ],
    tactics: "Commando Droids are assassins, striking from surprise, and using stealth and deception to gain advantage. They use both melee and ranged combat freely, and may be equipped with different equipment depending on the mission.",
  },
  {
    id: "droideka",
    name: "Droideka",
    faction: "Droid Forces",
    size: "Large",
    ac: 15,
    hp: 42,
    shields: 20,
    speed: "20ft",
    str: 18, dex: 16, con: 12, int: 8, wis: 8, cha: 6,
    traits: ["Droid"],
    actions: [
      {
        name: "Deflector Shield",
        type: "passive",
        description: "Begins combat with 20 Shields. If not damaged for 2 turns, regenerates 1d8 Shields per turn, up to a maximum of 20 Shields.",
      },
      {
        name: "Stable Firing Position",
        type: "passive",
        description: "If the Droideka has not moved on its turn, it gains +1 to Ranged Weapon Attacks.",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Twin Blasters",
        type: "action",
        description: "Ranged Weapon Attack. +6 to hit, range 100/400 feet. Hit: 1d10 + 4 damage.",
      },
      {
        name: "Wheel Mode",
        type: "bonus",
        description: "Until the beginning of its next turn, speed becomes 60ft and AC becomes 17, but it cannot attack or use Reactions. All attacks while in Wheel Mode bypass its Shields.",
      },
    ],
    tactics: "Droidekas roll into advantageous positions, deploy their shields, and hold narrow approaches with concentrated fire.",
  },
  {
    id: "dwarf-spider-droid",
    name: "Dwarf Spider Droid",
    faction: "Droid Forces",
    size: "Large",
    ac: 16,
    hp: 60,
    speed: "25ft",
    str: 18, dex: 10, con: 18, int: 8, wis: 8, cha: 6,
    traits: ["Droid"],
    actions: [
      {
        name: "Four-legged Stability",
        type: "passive",
        description: "Advantage on checks and saves made to resist forced movement or being knocked down.",
      },
      {
        name: "Blaster Cannon",
        type: "action",
        description: "Ranged Weapon Attack. +6 to hit, range 150/600 feet. Hit: 1d10 + 4 damage. Blast 5.",
      },
      {
        name: "Stomp",
        type: "action",
        description: "Melee Weapon Attack. +6 to hit, reach 5 feet. Hit: 2d6 + 4 damage. The target must pass a DC 14 Strength save or become Slowed until the end of its next turn.",
      },
    ],
    tactics: "Spider Droids occupy open ground and fire into clustered enemies. They stomp anyone who moves underneath their weapons.",
  },
  {
    id: "magnaguard",
    name: "MagnaGuard",
    faction: "Droid Forces",
    size: "Medium",
    ac: 18,
    hp: 60,
    speed: "35ft",
    str: 18, dex: 16, con: 16, int: 12, wis: 10, cha: 6,
    traits: ["Droid"],
    actions: [
      {
        name: "Unyielding",
        type: "passive",
        description: "Once per combat, upon being reduced to 0 HP, the MagnaGuard is instead reduced to 1 HP.",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Electrostaff",
        type: "action",
        description: "Melee Weapon Attack. +7 to hit, reach 10 feet. Hit: 1d10 + 4 damage. Electrified.",
      },
      {
        name: "Bodyguard",
        type: "reaction",
        description: "When an adjacent ally is targeted by an attack, the MagnaGuard may impose Disadvantage on that attack.",
      },
    ],
    tactics: "MagnaGuards remain adjacent to their assigned leader and prevent melee attackers from reaching it.",
  },
  {
    id: "st-x-super-tactical-droid",
    name: "ST-X Super Tactical Droid",
    faction: "Droid Forces",
    size: "Medium",
    ac: 16,
    hp: 120,
    speed: "30ft",
    str: 12, dex: 16, con: 16, int: 20, wis: 16, cha: 16,
    traits: ["Droid", "Commander", "Boss"],
    actions: [
      {
        name: "Networked General",
        type: "passive",
        description: "All friendly Droids within 300ft gain +8 Intelligence, +1 AC, +1 on Attack rolls, and act more intelligently. Destruction of the Networked General stuns all networked droids for 2 turns.",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Advanced Blaster Carbine",
        type: "action",
        description: "Ranged Weapon Attack. +7 to hit, range 150/600 feet. Hit: 1d8 + 4 damage.",
      },
      {
        name: "Fire Everything!",
        type: "action",
        description: "Up to six Networked Droids within 300 feet may use their Reactions to make one weapon attack against a designated target. Cannot be used again until the end of the ST-X's next turn.",
      },
      {
        name: "Analyze Vulnerabilities",
        type: "action",
        description: "Choose up to three enemies within 300 feet. Until the start of the ST-X's next turn, Networked Droids gain +2 on weapon attacks against them and ignore half cover.",
      },
      {
        name: "Call Artillery",
        type: "action",
        description: "Fire an artillery barrage from off the map. Specify six 10ft radius circles within 300ft. After one turn, artillery lands on these spaces, dealing 10d6 damage to all targets in the area.",
      },
      {
        name: "Emergency Reinforcements",
        type: "action",
        description: "Summon either four B1 Battle Droids or a single MagnaGuard onto any open space within 300ft. Four turn cooldown.",
      },
      {
        name: "Tactical Override",
        type: "reaction",
        description: "When an allied Droid within 60 feet misses an attack, the Super Tactical Droid may add +4 to the roll, potentially turning it into a hit.",
      },
    ],
    tactics: "The Super Tactical Droid is a theater-level tactician, commanding from secure headquarters and bunkers. Its primary battlefield utility is the extreme improvements it can make in otherwise-weak droids. Its most basic retinue is six B1s, two B2s, and a MagnaGuard.",
    doctrineNote: "The droid forces of the galaxy fundamentally rely on mass, mass, and more mass. An individual B1 battle droid is comparable to a barely-trained militia, at best. Ten billion B1 battle droids, attacking every second of every day for months on end, guided at the platoon level by tactical droids and the strategic level by super tactical droids, combined with the immense power of B2 battle droids, droidekas, and spider droids, however, is a very, very different beast.\n\nThe first priority of any engagement against droids must be the elimination of the tactical droid, if present — it is a major force multiplier, and will act accordingly, doing its best to stay alive over attempting to shoot by itself.",
  },

  // ── CLONES ──────────────────────────────────────────────────────────────────
  {
    id: "clone-trooper",
    name: "Clone Trooper",
    faction: "Clones",
    size: "Medium",
    ac: 15,
    hp: 22,
    speed: "30ft",
    str: 14, dex: 14, con: 14, int: 12, wis: 12, cha: 10,
    traits: ["Clone"],
    actions: [
      {
        name: "Blaster Rifle",
        type: "action",
        description: "Ranged Weapon Attack. +4 to hit, range 150/600 feet. Hit: 1d8 + 2 damage.",
      },
      {
        name: "Thermal Detonator",
        type: "action",
        description: "Once per combat. Choose a point within 30 feet. After one turn, the Thermal Detonator explodes, dealing 4d6 damage in a 10ft radius.",
      },
    ],
    tactics: "Clone Troopers are the most basic unit of clone armies, but are no less lethal for this. Capable of advanced tactics, cover, flanking, and the usage of thermal detonators to displace enemies, even the most basic trooper is a lethal threat.",
  },
  {
    id: "clone-sergeant",
    name: "Clone Sergeant",
    faction: "Clones",
    size: "Medium",
    ac: 15,
    hp: 30,
    speed: "30ft",
    str: 14, dex: 14, con: 14, int: 14, wis: 14, cha: 12,
    traits: ["Clone", "Commander"],
    actions: [
      {
        name: "Blaster Rifle",
        type: "action",
        description: "Ranged Weapon Attack. +4 to hit, range 150/600 feet. Hit: 1d8 + 2 damage.",
      },
      {
        name: "Inspire",
        type: "action",
        description: "All friendly clones within 60ft gain Advantage on Wisdom saves and +2 to attack for 3 turns. If the Clone Sergeant dies, these advantages immediately cease and the affected clones instead gain Disadvantage on Wisdom saves for 3 turns.",
      },
      {
        name: "Hold the Line!",
        type: "reaction",
        description: "Whenever an allied clone within 60ft takes damage, the Clone Sergeant may reduce this damage by 1d6.",
      },
    ],
    tactics: "Sergeants are the heart of their squads, inspiring them to better action and providing overall direction, but are not as essential for basic function — each clone is more than independent enough to act without one.",
  },
  {
    id: "clone-heavy-gunner",
    name: "Clone Heavy Gunner",
    faction: "Clones",
    size: "Medium",
    ac: 16,
    hp: 35,
    speed: "25ft",
    str: 16, dex: 12, con: 14, int: 12, wis: 12, cha: 10,
    traits: ["Clone"],
    actions: [
      {
        name: "Heavy Weapon Platform",
        type: "passive",
        description: "Advantage on saves and checks made to resist forced movement while wielding its cannon.",
      },
      {
        name: "Suppressing Fire",
        type: "passive",
        description: "All enemies targeted by this creature must make a DC 14 Wisdom save or lose half their movement for one turn.",
      },
      {
        name: "Blaster Cannon",
        type: "action",
        description: "Ranged Weapon Attack. +5 to hit, range 150/600 feet. Hit: 1d10 + 3 damage.",
      },
    ],
    tactics: "Heavy Gunners both deal heavy damage to enemies and suppress them, leaving them more vulnerable to grenades, flanking, and other troopers.",
  },
  {
    id: "clone-sharpshooter",
    name: "Clone Sharpshooter",
    faction: "Clones",
    size: "Medium",
    ac: 14,
    hp: 24,
    speed: "30ft",
    str: 10, dex: 18, con: 12, int: 12, wis: 12, cha: 10,
    traits: ["Clone"],
    actions: [
      {
        name: "Camouflaged Position",
        type: "passive",
        description: "If the Sharpshooter has not moved since the beginning of its previous turn, it does not automatically reveal its position upon firing. Instead, it makes a contested Stealth check against the opponent's Perception. On a success, only the general direction is revealed. On a failure, the precise location is revealed.",
      },
      {
        name: "Disruptor Rifle",
        type: "action",
        description: "Ranged Weapon Attack. +6 to hit, range 300/900 feet. Hit: 1d10 + 4 damage.",
      },
      {
        name: "Aim",
        type: "bonus",
        description: "If the Sharpshooter has not moved this turn, it gains +2 on its next Disruptor Rifle attack. That attack scores a critical hit on a 19 or 20.",
      },
    ],
    tactics: "Sharpshooters begin combat at extreme range, attack officers and support characters, and relocate when discovered.",
  },
  {
    id: "clone-shieldbearer",
    name: "Clone Shieldbearer",
    faction: "Clones",
    size: "Medium",
    ac: 18,
    hp: 42,
    speed: "25ft",
    str: 16, dex: 10, con: 18, int: 12, wis: 12, cha: 10,
    traits: ["Clone"],
    actions: [
      {
        name: "Riot Shield",
        type: "passive",
        description: "Serves as half cover for a single friendly hiding behind it. Upon losing 20 HP, the shield is destroyed — the Shieldbearer loses 4 AC, gains 10ft movement, and may no longer serve as cover. Even if healed, the shield is not repaired.",
      },
      {
        name: "Blaster Pistol",
        type: "action",
        description: "Ranged Weapon Attack. +2 to hit, range 30/60 feet. Hit: 1d4 damage.",
      },
      {
        name: "Shield Generator",
        type: "action",
        description: "Grant all allies within 30ft 15 Shields. If the Shieldbearer dies, all of this Shields is immediately lost. Cannot be used if the riot shield is destroyed. May only be used once per battle.",
      },
    ],
    tactics: "Shieldbearers are the defensive bulwark of the clone forces, able to tank the most punishing fire without flinching — at least unless their shields are destroyed. They provide valuable shields to all allies around them.",
  },
  {
    id: "clone-combat-engineer",
    name: "Clone Combat Engineer",
    faction: "Clones",
    size: "Medium",
    ac: 14,
    hp: 25,
    speed: "25ft",
    str: 14, dex: 12, con: 14, int: 12, wis: 12, cha: 10,
    traits: ["Clone"],
    actions: [
      {
        name: "Blast Padding",
        type: "passive",
        description: "Against any area-of-effect damage, the Combat Engineer takes half damage. If they would have taken half damage from a successful save, they instead take no damage.",
      },
      {
        name: "RPS-6 (Concussive Rockets)",
        type: "action",
        description: "Ranged Weapon Attack. +2 to hit, range 100/300 feet. Hit: 1d10+2 damage. Blast 10.",
      },
      {
        name: "RPS-6 (Homing Rockets)",
        type: "action",
        description: "Ranged Weapon Attack. +6 to hit, range 200/400 feet. Hit: 1d8 damage.",
      },
    ],
    tactics: "Combat Engineers use their rocket launchers to devastate enemy armor, strongpoints, and clustered troops, or switch to homing rockets to target particularly agile foes.",
  },
  {
    id: "arc-trooper",
    name: "ARC Trooper",
    faction: "Clones",
    size: "Medium",
    ac: 17,
    hp: 60,
    speed: "35ft",
    str: 16, dex: 18, con: 16, int: 16, wis: 14, cha: 14,
    traits: ["Clone", "Commando"],
    actions: [
      {
        name: "Recon Specialist",
        type: "passive",
        description: "+6 to Piloting, Perception, and Stealth rolls. Gains Advantage against any creature that has not yet acted in combat.",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Mission Loadout",
        type: "passive",
        description: "At the start of combat, pick one: Demolitions (two Thermal Detonators), Infiltration (one Smoke Projector + Enhanced Sensor Suite), or Forward Observer (Recon Sweep + Fire Coordination).",
      },
      {
        name: "Thermal Detonator (Demolitions)",
        type: "action",
        description: "Choose a point within 30 feet. After one turn, explodes for 4d6 damage in a 10ft radius.",
      },
      {
        name: "Smoke Projector (Infiltration)",
        type: "action",
        description: "Create a 10×10ft cloud of multispectral smoke within 60ft that cannot be seen through except by an Enhanced Sensor Suite. Lasts 2 turns.",
      },
      {
        name: "Blaster Rifle",
        type: "action",
        description: "Ranged Weapon Attack. 150/600 feet, +6 to hit, 1d8+4 damage.",
      },
      {
        name: "Ion Charge",
        type: "action",
        description: "Once per combat. Choose a Droid, vehicle, weapon, Gadget, or electronic system within 30 feet. DC 14 Constitution save — on failure: 2d8 damage and the target becomes Jammed until the end of its next turn. On success: half damage, no other effect.",
      },
      {
        name: "Enhanced Sensor Suite (Infiltration)",
        type: "bonus",
        description: "Gain 60ft Darkvision, see through walls and multispectral smoke for 20ft, and Advantage on Perception checks. Lasts one minute.",
      },
      {
        name: "Recon Sweep (Forward Observer)",
        type: "bonus",
        description: "Select a 30ft radius within 120ft. All creatures, Gadgets, and traps in that area are highlighted for the ARC Trooper for 3 turns.",
      },
      {
        name: "Fire Coordination (Forward Observer)",
        type: "bonus",
        description: "Select one target scanned by Recon Sweep. All allied Clones within 120ft gain +2 to attack rolls against that target for 2 turns.",
      },
    ],
    tactics: "ARC Troopers are a team, first and foremost. Infiltrators use smoke to blind and obscure enemies, while Demolitionists destroy them and Forward Observers provide covering fire and coordination.",
    doctrineNote: "ARC troopers are rarely present on the frontlines — instead, they are most commonly deployed deep behind enemy lines, performing sabotage and reconnaissance to enable the rest of the clones.",
  },
  {
    id: "clone-commando",
    name: "Clone Commando",
    faction: "Clones",
    size: "Medium",
    ac: 19,
    hp: 70,
    speed: "40ft",
    str: 18, dex: 18, con: 18, int: 16, wis: 18, cha: 14,
    traits: ["Clone", "Commando", "Boss"],
    actions: [
      {
        name: "Modular Weapons Systems",
        type: "passive",
        description: "May switch between blaster rifle, sniper rifle, and grenade launcher as a free action.",
      },
      {
        name: "Deep Pockets",
        type: "passive",
        description: "Carries three of the following (multiple copies allowed): Bacta Spray (4d8 heal, Bonus Action), Frag Grenade (3d6 in 10ft, DC16 Dex save for half), Ion Grenade (2d6 in 10ft, doubled vs droids, DC16 Int save or Jammed), Stun Grenade (DC16 Con save or Stunned), Micromine (4d8, DC18 Dex save for half), Dampener Aerosol (10ft cube halves blaster damage, 2 turns, Bonus Action), Kinetic Pulse (20ft cone, DC16 Str save or thrown 20ft + prone).",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "DC-17m ICWS (Blaster)",
        type: "action",
        description: "Ranged Weapon Attack. 80/200 feet. +7 to hit, 1d8+5 damage. May be used twice per Attack action.",
      },
      {
        name: "DC-17m ICWS (Sniper)",
        type: "action",
        description: "Ranged Weapon Attack. 300/900 feet. +7 to hit, 2d12+6 damage.",
      },
      {
        name: "DC-17m ICWS (Grenade Launcher)",
        type: "action",
        description: "Ranged Weapon Attack. 60/100 feet. +5 to hit, 2d6+3 damage. Blast 5.",
      },
      {
        name: "Integrated Vibroblade",
        type: "action",
        description: "Melee Weapon Attack. 5 feet. +7 to hit, 1d10+5 damage. May be used twice per Attack action.",
      },
      {
        name: "ACPA Shotgun",
        type: "action",
        description: "Ranged Weapon Attack. 20/40 feet. +7 to hit, 1d12+5 damage. May be used twice per Attack action.",
      },
    ],
    tactics: "A squad of four clone commandos is, pound for pound, the single most lethal fighting force in the galaxy. They shape the battlefield before ever being seen, and are not afraid to deceive, trick, and outmaneuver their enemies with any and all tools available.",
    doctrineNote: "Should a target be deemed of sufficient priority, the commandos will be sent in. The assassination of a key target behind enemy lines, the destruction of a vital factory, the sabotage of a starship yard — a single squad of four commandos is a force capable of shaping wars.",
  },

  // ── FORCE USERS ─────────────────────────────────────────────────────────────
  {
    id: "sith-assassin",
    name: "Sith Assassin",
    faction: "Force Users",
    size: "Medium",
    ac: 18,
    hp: 110,
    speed: "40ft",
    str: 14, dex: 20, con: 16, int: 14, wis: 12, cha: 8,
    traits: ["Sith", "Boss", "Fast"],
    actions: [
      {
        name: "Predatory Opening",
        type: "passive",
        description: "Gains Advantage on initiative rolls and crits on 19–20.",
      },
      {
        name: "Cull the Weak",
        type: "passive",
        description: "After reducing an enemy to 0 HP or landing a critical strike, choose one: Brutal Execution (enemies within 10ft DC 16 Wisdom save or Frightened until end of next turn), Frenzied Strike (move 30ft without opportunity attacks, next Lightsaber attack has Advantage), or Bloodthirst (regain HP equal to half the triggering attack's damage).",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Lightsaber",
        type: "action",
        description: "Melee Weapon Attack. +9 to hit, reach 5 feet. Hit: 1d8 + 5 damage. Melting.",
      },
      {
        name: "Crippling Slash",
        type: "action",
        description: "Make one Lightsaber attack. On a hit, deals an additional 1d8 damage and the target's speed becomes 0 until the end of its next turn. Once per round.",
      },
      {
        name: "Force Shroud",
        type: "action",
        description: "Become Invisible for one minute. The effect ends immediately after attacking, dealing damage, or using another ability. Once per combat.",
      },
      {
        name: "Mark for Death",
        type: "bonus",
        description: "Choose one creature within 60 feet. Until the beginning of the Assassin's next turn, it has Advantage on its first attack against that creature, but attacks against other creatures have Disadvantage.",
      },
      {
        name: "Contemptuous Reflection",
        type: "reaction",
        description: "When targeted by a Blaster attack after landing a Lightsaber attack since the end of its previous turn, roll 1d20 + 9. If the result equals or exceeds the attack roll, the Assassin takes no damage.",
      },
    ],
    tactics: "The Sith Assassin begins combat from stealth, aimed specifically at killing its target. If forced into a confrontation, it will attempt to kill the weakest opponent before moving on. If pinned down, it will use Force Shroud to reposition.",
  },
  {
    id: "jedi-knight-enemy",
    name: "Jedi Knight",
    faction: "Force Users",
    size: "Medium",
    ac: 18,
    hp: 110,
    speed: "35ft",
    str: 14, dex: 18, con: 14, int: 12, wis: 18, cha: 14,
    traits: ["Jedi", "Boss", "Fast"],
    actions: [
      {
        name: "Inspiring Presence",
        type: "passive",
        description: "All allied creatures within 60ft gain +1 to attack rolls and +2 to all saving throws.",
      },
      {
        name: "Extra Attack",
        type: "passive",
        description: "This creature may attack twice per action.",
      },
      {
        name: "Lightsaber",
        type: "action",
        description: "Melee Weapon Attack. +9 to hit, reach 5 feet. Hit: 1d8 + 5 damage. Melting.",
      },
      {
        name: "Force Shove",
        type: "action",
        description: "Two uses per combat. One creature within 30 feet makes a DC 16 Strength save. On failure: 4d6 damage and pushed up to 15 feet. On success: half damage and not moved.",
      },
      {
        name: "Force Leap",
        type: "bonus",
        description: "Leap up to 20ft in the air. Does not consume movement.",
      },
      {
        name: "Saber Ward",
        type: "reaction",
        description: "When targeted by a Blaster attack, roll 1d20 + 8. If the result equals or exceeds the attack roll, the Jedi takes no damage and may make a reflected attack against a creature within the original weapon's range: +9 to hit, 1d8 + 5 damage.",
      },
    ],
    tactics: "The Jedi Knight is a vanguard for its allies, aggressively pushing forwards and disrupting the enemy with Force Shove and reflected blaster bolts.",
  },
];

// =============================================================================
// ENEMY TRAITS
// =============================================================================

export interface EnemyTrait {
  id: string;
  name: string;
  description: string;
}

export const enemyTraits: EnemyTrait[] = [
  {
    id: "droid",
    name: "Droid",
    description: "This creature is a droid, and thus is immune to poison and anything that affects flesh specifically.",
  },
  {
    id: "clone",
    name: "Clone",
    description: "This creature is a clone, and thus greatly prefers to fight alongside its brethren. Gain +2 to Wisdom saves while another Clone is within 10ft.",
  },
  {
    id: "commando",
    name: "Commando",
    description: "This creature is a special forces operative, and is typically found away from the front lines, doing high-value tasks like sabotage.",
  },
  {
    id: "boss",
    name: "Boss",
    description: "This creature is an extremely dangerous target, requiring very experienced and well-prepared teams to even think of fighting. It gains +4 to all saving throws.",
  },
  {
    id: "fast",
    name: "Fast",
    description: "This creature is extremely fast, and is able to act more frequently than others. It rolls initiative twice, and acts fully on both of its turns per round.",
  },
  {
    id: "commander",
    name: "Commander",
    description: "This creature commands and buffs others of its kind, increasing their combat effectiveness.",
  },
];
