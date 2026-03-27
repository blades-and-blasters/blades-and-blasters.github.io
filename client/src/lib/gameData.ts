// =============================================================================
// GAME DATA — Blades & Blasters
// Holonet Terminal design system
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
}

export interface MutagenicAbility {
  id: string;
  name: string;
  description: string;
  overload: string;
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
    description: "Gain +2 to Blaster attacks.",
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
    description: "Two-handed weapons (melee and ranged) can reroll 1s and 2s for damage.",
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
      "No disadvantage on ranged attacks within 5ft of a hostile creature. Ignore half and three-quarters cover within 30ft. +1 to ranged attack rolls.",
    availableTo: ["Trooper", "Bounty Hunter"],
  },
  {
    id: "gadgeteer",
    name: "Gadgeteer",
    description: "Gain +2 to hit and to damage from Gadgets and Abilities.",
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
}

export interface Gadget {
  id: string;
  name: string;
  slots: number;
  uses: string;
  description: string;
  tags: string[];
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
    description: "Add +1 to Lightsaber attacks and damage.",
  },
  {
    name: "Makashi",
    description: "Add +2 to Lightsaber attacks.",
  },
  {
    name: "Soresu",
    description: "Add +1 to Dexterity Saves.",
  },
  {
    name: "Ataru",
    description: "Hits allow a free additional 5ft of movement.",
  },
  {
    name: "Djem So",
    description: "Add +2 to Lightsaber damage.",
  },
  {
    name: "Niman",
    description: "Extends the range of Force Powers by 5ft.",
  },
  {
    name: "Vapaad",
    description: "-2 to Dexterity Saves, but +2 to Lightsaber attacks and damage.",
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
      "The Jedi Knight is a martial Force-user who balances lightsaber mastery with Force ability. Through the accumulation of Focus, they achieve heightened states of combat awareness, reflecting the Jedi Code's philosophy of peace through inner stillness.",
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
          "Starts at 0, increases up to 100. Gain 20 Focus upon landing a hit while below 50 Focus, and 10 Focus upon landing a hit while at or above 50 focus. May exchange 20 Focus for one Force Point.",
        maxValue: 100,
        recharge: "Gained in combat",
      },
      {
        name: "Force Points",
        description:
          "Used to power Force abilities. Gain 1 per level.",
        maxValue: "1 per level",
        recharge: "Long rest",
      },
	  {
		name: "Force Abilities Known",
        description:
          "Used to power Force abilities. Gain 1 per level.",
        maxValue: "1 per level",
        recharge: "Long rest",
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
        name: "Focus",
        description:
          "Gain access to Focus. Gain 10 Focus upon landing a hit, and lose 5 Focus upon being damaged. May exchange 20 Focus for one Force Point.",
        type: "resource",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Pick a subclass: Sentinel or Guardian.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
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
        name: "Emotion, yet Peace",
        description: "Gain Resistance to being Charmed and Feared.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 10,
        name: "Ignorance, yet Knowledge",
        description:
          "Once per long rest, spend up to 5 Force Points on an ability for free.",
        type: "active",
      },
      {
        level: 11,
        name: "Passion, yet Serenity",
        description:
          "Gain Resistance to all forms of mental contamination, be it physical or mystical.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 14,
        name: "Chaos, yet Harmony",
        description: "Become unable to lose Focus due to being damaged.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 18,
        name: "Death, yet the Force",
        description:
          "Once per long rest, upon receiving fatal damage, restore half your HP and regain 100 Focus.",
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
              "When above 50 Focus, gain +1 to hit and +1 AC. When above 70 Focus, gain +2 to hit and +2 AC. When above 90 Focus, gain +3 to hit and +3 AC.",
            type: "passive",
          },
          {
            level: 3,
            name: "Mobility Training",
            description:
              "Gain an additional 10ft of movement, and gain Disengage and Dash as bonus actions.",
            type: "passive",
          },
          {
            level: 3,
            name: "Agile Ward",
            description:
              "After moving at least 20ft, use 10 Focus to gain the ability to reflect blaster bolts at you for one turn. Against each incoming blaster bolt, make a Dexterity save — if it is higher than the attack roll, reflect the bolt. Make an attack roll against the target that shot you to attempt to reflect it back into them. Does not require an action.",
            type: "active",
          },
          {
            level: 3,
            name: "Dance of Blades",
            description: "As a bonus action, make another lightsaber attack.",
            type: "active",
          },
          {
            level: 7,
            name: "Immobilizing Strikes",
            description:
              "Hits reduce enemy movement by 10ft for one turn. Cannot stack with itself.",
            type: "passive",
          },
          {
            level: 10,
            name: "Improved Focus",
            description: "Gain an additional 5 Focus per strike.",
            type: "passive",
          },
          {
            level: 13,
            name: "Mobility Expertise",
            description:
              "Disengage and Dash become free actions. Gain another 10ft of movement.",
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
            description:
              "When above 50 Focus, against any incoming attack, make a Dexterity save. If it is higher than the attack roll, reflect the attack. When above 70 Focus, gain +2 to this Dexterity save. When above 90 Focus, gain +4 to this Dexterity save. Applies to both ranged and melee attacks. By using a reaction, aim the reflection, making an attack against a target in range.",
            type: "passive",
          },
          {
            level: 3,
            name: "Defensive Ward",
            description:
              "Use 10 Focus to gain the ability to reflect blaster bolts that travel within 5ft of you for one turn. Each reflected bolt, whether by this or another source of reflection, grants 5 Focus. Costs an action.",
            type: "active",
          },
          {
            level: 7,
            name: "Perfect Riposte",
            description:
              "As a reaction, when deflecting an attack, if the enemy is in range, make an attack against them.",
            type: "active",
          },
          {
            level: 10,
            name: "Improved Focus",
            description: "Gain an additional 3 Focus per reflection.",
            type: "passive",
          },
          {
            level: 13,
            name: "Heightened Guard",
            description: "Increases the area of Saber Ward to a 10ft radius.",
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
        recharge: "Long rest",
      },
	  {
		name: "Force Abilities Known",
        description:
          "Used to power Force abilities. Gain 1 per level.",
        maxValue: "1 per level",
        recharge: "Long rest",
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
        level: 1,
        name: "Wise Negotiator",
        description:
          "Gain the ability to use Wisdom for Charisma skill checks.",
        type: "passive",
      },
      {
        level: 2,
        name: "Saber Ward",
        description:
          "Spend an action to reflect blaster bolts incoming at you, making a Dexterity save against the attack roll. If you succeed, take no damage.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 5,
        name: "Synergy",
        description: "When you attack, you may use a Force Ability for no action cost.",
        type: "passive",
      },
      {
        level: 6,
        name: "There is no Emotion, There is Peace",
        description: "By Concentrating for one round, gain the ability to double the effect, capacity, and damage of any Force Ability. For abilities that require saving throws, gain Advantage on them if beneficial, or force Disadvantage if forcing it upon an enemy.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 10,
        name: "There is no Ignorance, There is Knowledge",
        description:
          "Spend 2 Force Points to gain advantage on any skill check.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 14,
        name: "There is no Chaos, There is Harmony",
        description:
          "Twice per long rest, quench any area of effect ability or gadget.",
        type: "active",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 18,
        name: "There is no Death, There is the Force",
        description:
          "You no longer age. Each turn, regenerate your Consular level in HP. If you're at zero health, this can activate once per long rest.",
        type: "passive",
      },
    ],
    subclasses: [
      {
        id: "sage",
        name: "Sage",
        parentClass: "jedi-consular",
        description:
          "The Sage seeks perfect Balance between lightsaber combat and Force use. Their power scales dramatically based on the Balance resource — extremes in either direction grant unique benefits, while the center offers regeneration and stability.",
        classResource: {
          name: "Balance",
          description:
            "Gain +10 Balance from lightsaber strikes. Gain -5 Balance per Force Point spent. Balance ranges from 0 to 100 and determines your combat style.",
          maxValue: 100,
          recharge: "Gained in combat",
        },
        features: [
          {
            level: 3,
            name: "Balance Thresholds",
            description:
              "85–100: Downgrade Lightsaber damage by two die sizes. Double targets and range of all Force abilities, gain +3 to Spellcasting Modifier.\n\n70–85: Downgrade Lightsaber damage by one die size. Gain +2 to Spellcasting Modifier.\n\n55–70: Increase Force ability damage by 1d6.\n\n45–55: Gain 1 Force Point per round while in combat.\n\n30–45: Deal an additional 1d4 damage on Lightsaber hits.\n\n15–30: Double the Force Point cost of all abilities. Gain +2 to hit with Lightsabers.\n\n0–15: Lose the ability to use Force abilities. Gain +2 to Dexterity saves and the ability to reflect blaster bolts. Gain +3 to hit and to damage for Lightsabers.",
            type: "passive",
          },
		  {
            level: 3,
            name: "One with the Force",
            description:
              "During a Short Rest, gain the ability to recover 1 Force Point per hit dice spent. You may use hit dice even when at full health for this.",
            type: "passive",
          },
		  {
            level: 5,
            name: "Restorative Balance",
            description:
              "When starting your turn below 40 Focus, gain Extra Attack, but lose the ability to cast Force Abilities for no action cost after attacking.",
            type: "passive",
          },
          {
            level: 7,
            name: "Meditative Healing",
            description:
              "When starting your turn between 45 and 55 Balance, regain 1d8 HP per turn.",
            type: "passive",
          },
          {
            level: 10,
            name: "Balanced Spirit",
            description:
              "Gain the ability to gain -10 Balance per Force Point spent, or +15 Balance per lightsaber strike. This may be toggled on and off.",
            type: "active",
          },
          {
            level: 13,
            name: "Harmonic Flow",
            description:
              "When increasing Balance above 55, reduce the Force Point cost of your next ability by 2 (minimum 1). When decreasing Balance below 45, add 1d8 to your next damage roll.",
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
          description:
            "After each Long Rest, start with 5 of each. Each used point of Focus grants one point of Impulse, and vice versa. Reaching 0 Focus blocks Force Point usage. Reaching 0 Impulse grants Disadvantage on all attacks.",
          maxValue: "Variable",
          recharge: "Long rest (or short rest at level 7)",
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
            description:
              "Starting your turn with equal Focus and Impulse grants Centered, giving +10ft of movement. Reaching 0 Focus blocks your ability to use Force Points. Reaching 0 Impulse grants you Disadvantage on all attacks.",
            type: "passive",
          },
          {
            level: 3,
            name: "Focus Abilities",
            description:
              "Blanken Mind (2 Focus): As an action, lance into someone's mind, selectively editing the past 15 minutes of memories and eliminating their ability to form new memories for up to fifteen minutes. Wisdom save resists; critical failure causes Mindbroken.\n\nCloak of Shadows (3 Focus): Become Invisible for one minute.\n\nGhost (1 Focus): As a Bonus Action, gain the ability to pass through enemy space for one minute without drawing attacks of opportunity.\n\nDampened Field (1 Focus): As an action, remove all noise in a 5ft area around yourself for one minute.\n\nShroud Minds (2 Focus): As an action, Confuse all enemies in a 15ft radius. Wisdom save resists.",
            type: "active",
          },
          {
            level: 3,
            name: "Impulse Abilities",
            description:
              "Driven Strike (1 Impulse): Add 1d8 to your next attack.\n\nExplosive Movement (1 Impulse): As a bonus action, gain an additional 30ft of movement.\n\nForceful Breach (1 Impulse): Add 1d6 to your next attack roll.\n\nBurst of Force (1 Impulse): Use your next Force Power as a Bonus Action.\n\nOverwhelming Assault (3 Impulse): As an attack, attack twice.",
            type: "active",
          },
          {
            level: 7,
            name: "Stillness of Mind",
            description:
              "Reset Focus and Impulse on short rest, instead of long rest.",
            type: "passive",
          },
          {
            level: 10,
            name: "Island of Calm",
            description:
              "When Centered, gain +2 to Saving Throws, Spellcasting Modifier, and Attacks. After each rest, set Focus and Impulse to 10 each.",
            type: "passive",
          },
          {
            level: 13,
            name: "Split Focus",
            description:
              "If Impulse is greater than Focus, gain the ability to concentrate on two abilities at a time.",
            type: "passive",
          },
          {
            level: 13,
            name: "Unified Impulse",
            description:
              "If Focus is greater than Impulse, gain the ability to use Actions for Bonus Actions and vice versa.",
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
      "The Trooper is a heavily-armored combatant proficient with all weapons and armor. They rely on Energy Cells to power special shots and gadgets, and their Action Surge ability lets them push beyond normal limits in critical moments.",
    hitDie: "1d10",
    armorProficiencies: ["All"],
    weaponProficiencies: ["All but Lightsabers"],
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
        description: "Gain 2 per level. Restore on short rest.",
        maxValue: "2 per level",
        recharge: "Short rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Fighting Style",
        description:
          "Choose a Fighting Style:\n\nBlaster: +2 to Blaster attacks.\n\nDefense: +1 AC.\n\nHeavy Weapon Fighting: Two-handed weapons (melee and ranged) can reroll 1s and 2s for damage.\n\nTwo-weapon Fighting: Add your ability modifier to the damage of the second attack.\n\nClose Quarters Shooter: No disadvantage on ranged attacks within 5ft of a hostile creature. Ignore half and three-quarters cover within 30ft. +1 to ranged attack rolls.",
        type: "passive",
      },
      {
        level: 2,
        name: "Action Surge",
        description:
          "Once per short rest, take one additional action on your turn.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
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
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 7,
        name: "Tricks of the Trade",
        description:
          "Gain 3 Gadget Slots and 3 Gadget Inventory.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 9,
        name: "Indomitable",
        description:
          "You can reroll a saving throw that you fail. If you do so, you must use the new roll. Once per long rest. Usable twice from level 12, three times from level 17.",
        type: "active",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
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
            description:
              "Select two of the following shots. Gain additional shots at levels 10 and 15.\n\nExplosive Shot (2 EC): Deal an additional 1d6 damage in a 10ft radius. Overcharge (3 EC): Increase radius to 15ft, force primary target to pass Strength save or be knocked prone.\n\nFull Auto (2 EC): Make an attack on an additional enemy within range, dealing half damage. Overcharge (4 EC): Deal full damage.\n\nEMP Shot (2 EC): Force enemy to pass an Intelligence Save or have their weapon jammed for one turn. Vibroweapons deal half damage; droids take +1d6. Overcharge (5 EC): Double jam duration, droids take 2d6.\n\nSensor Shot (1 EC): Fire a shot attaching a sensor to any spot within range. Gain line of sight from this point; if targeted at an enemy, track their location.\n\nPiercing Shot (2 EC): Pierce through 5ft of cover or a single enemy, destroying cover. Overcharge (3 EC): Pierce through 10ft.\n\nShredding Shot (3 EC): Strip 2 AC from the target for 2 turns. Overcharge (5 EC): Strip 3 AC.\n\nBarrage (6 EC): Attack every enemy in a 30ft cone. Overcharge (12 EC): Add an additional attack to each enemy.\n\nSonic Shot (4 EC): Force every target in a 15ft cone to make a Strength save or be thrown back 10ft.",
            type: "active",
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
            name: "Extra Extra Attack",
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
            name: "Extra Extra Extra Attack",
            description: "You can attack four times whenever you take the Attack action.",
            type: "passive",
          },
        ],
      },
      {
        id: "vanguard",
        name: "Vanguard",
        parentClass: "trooper",
        description:
          "Vanguards are defensive powerhouses who convert Temporary HP into offensive weapons. They absorb punishment and turn it into devastating counterattacks.",
        features: [
          {
            level: 3,
            name: "Shield Charge",
            description:
              "Use 2 Energy Cells to grant yourself 10 temporary HP. Overcharge (4 EC): Grant yourself 20 temporary HP.",
            type: "active",
          },
          {
            level: 3,
            name: "Reactive Armor",
            description:
              "Upon losing all Temporary HP to enemy action, deal 2d6 damage to all creatures within 5ft.",
            type: "passive",
          },
          {
            level: 3,
            name: "Vanguard Abilities",
            description:
              "Select 2 of the following abilities. Gain additional abilities at levels 7, 9, and 13.\n\nRiot Strike (Reaction): If an enemy casts an ability within 5ft of you, make an attack. If it hits, deal no damage but negate the ability and gain 10 Temporary HP.\n\nHarpoon (2 EC): Attempt to harpoon an enemy within 30ft, forcing a Strength save or being dragged to your position. Overcharge (3 EC): Pull yourself to them, gaining 10 temporary HP.\n\nExplosive Pulse (2 EC): Detonate all temporary HP, forcing all creatures within 5ft to take that much damage. Dexterity save for half. Overcharge (3 EC): Increase radius to 10ft.\n\nLeeching Blast (5 EC): Force all enemies in a 30ft cone to pass a Strength save or have up to 20 of their temporary HP stripped; you gain half. Overcharge (8 EC): Gain the full amount stripped.\n\nDivert Energy (2 EC): Leech 5 temporary HP from yourself and deal twice that on your next attack. Overcharge (4 EC): Leech 10 temporary HP.\n\nNeural Jolt (3 EC): Your next attack forces a Wisdom save or the enemy must attack you next turn. If they miss, gain 10 Temporary HP. Overcharge (6 EC): Grant a 5ft radius to the effect.\n\nIon Pulse (2 EC): Overcharge your shields, stripping 10 Temporary HP from you and causing all targets in 5ft to make an Intelligence save or have all weapons jammed for 1 turn. Vibroweapons deal half damage; droids take 1d6. Overcharge (6 EC): Increase radius to 10ft.\n\nShield Pulse (3 EC): Strip yourself of all Temporary HP and give all allies within 30ft the benefits of half cover for two turns. Overcharge (5 EC): Grant 3/4ths cover.",
            type: "active",
          },
          {
            level: 5,
            name: "Free Energy Cell Ability",
            description:
              "Gain the ability to use one Energy Cell ability for free after making an attack. Can only occur once per turn.",
            type: "passive",
          },
          {
            level: 7,
            name: "Improved Temporary HP",
            description:
              "Gain two additional abilities. Increase all temporary HP gains by 5.",
            type: "passive",
          },
          {
            level: 9,
            name: "Enhanced Temporary HP",
            description:
              "Gain two additional abilities. Increase all temporary HP gains by another 10.",
            type: "passive",
          },
          {
            level: 11,
            name: "Extra Attack",
            description: "You can attack twice whenever you take the Attack action.",
            type: "passive",
          },
          {
            level: 13,
            name: "Superior Temporary HP",
            description:
              "Gain two additional abilities. Increase all temporary HP gains by another 10.",
            type: "passive",
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SMUGGLER
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
    weaponProficiencies: ["Simple Weapons"],
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
        description:
          "Begin with 100. Regenerate 10 per turn. Landing non-ability attacks grants 10 Energy per hit.",
        maxValue: 100,
        recharge: "Passive regeneration",
      },
    ],
    features: [
      {
        level: 1,
        name: "Charming Rogue",
        description:
          "If you aren't wearing armor, add your Charisma modifier to your AC.",
        type: "passive",
      },
      {
        level: 2,
        name: "Hidden Stashes",
        description:
          "Gain the ability to hide up to 5lbs on your person and up to 20lbs on a vehicle.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 14,
        name: "Smuggler's Luck",
        description: "Twice per long rest, reroll any roll you've made.",
        type: "active",
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
            description:
              "Weapon attacks with your offhand weapon apply your Proficiency bonus.",
            type: "passive",
          },
          {
            level: 3,
            name: "Fastest Hand Alive",
            description:
              "As a reaction, whenever an enemy within 30ft attacks against any target, make an attack with your main and offhand weapons against them. Costs 20 Energy.",
            type: "active",
          },
          {
            level: 3,
            name: "Quick Turnaround",
            description:
              "Whenever an enemy misses you with an attack, make an attack with your main and offhand weapons against them. Gain +1 AC for each attack that hits. Costs 15 Energy. Does not cost a reaction. May be used in conjunction with Fastest Hand Alive.",
            type: "active",
          },
          {
            level: 7,
            name: "Double Down",
            description:
              "When landing an attack, choose to either deal an additional 1d6 damage or reduce their movement by 10ft until the end of their next turn. Costs 10 Energy.",
            type: "active",
          },
          {
            level: 7,
            name: "Hair Trigger",
            description:
              "When an enemy attacks, as a reaction, impose disadvantage on them. If they miss, make a main hand attack against them. Can be used in conjunction with Quick Turnaround. Costs 20 Energy.",
            type: "active",
          },
          {
            level: 13,
            name: "Quick Reflexes",
            description: "Gain an additional reaction.",
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
            name: "Martial Weapon Access",
            description: "Gain access to Martial weapons.",
            type: "passive",
          },
          {
            level: 3,
            name: "Present in Your Pocket",
            description:
              "As a melee attack, plant a 'present' on your target. Presents may be detonated by dealing any weapon damage.\n\nHot Potato (20 Energy): Plant an incendiary bomb. Deals 2d6 damage and lights them on fire when detonated, dealing 1d4 damage per turn for two turns.\n\nTicklestick (20 Energy): Plant an ion charge. Deals 2d6 damage and forces an Intelligence save or weapons are jammed for one turn. Vibroweapons deal half damage; droids take double damage.\n\nIcecube (30 Energy): Plant a cryobomb. Deals 2d6 damage and forces a Constitution save or the target is frozen in place (movement 0, all enemies gain Advantage on attacks against them).\n\nKick up the Ass (20 Energy): Plant a concussion bomb. Deals 2d6 damage and propels them 5ft in a direction of your choosing.\n\nLight of my Life (20 Energy): Plant a flashbang. Deals 1d8 damage and forces every creature except you within 10ft to pass a Constitution save or be blinded for one turn.",
            type: "active",
          },
          {
            level: 7,
            name: "Spirit of Generosity",
            description:
              "Every 'present' without a radius now has a 10ft radius and cannot affect you. Presents with ranges instead have their ranges doubled.",
            type: "passive",
          },
          {
            level: 10,
            name: "A Little Extra for Everyone",
            description:
              "Presents can have their damage doubled by doubling the energy cost. Alternatively, combine the effects of two different Presents(but not the damage) by adding both Presents' Energy costs together. Increase Energy total to 150.",
            type: "passive",
          },
          {
            level: 13,
            name: "Quick Hands",
            description: "Gain the ability to attach Presents as a bonus action.",
            type: "passive",
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // AGENT
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
    weaponProficiencies: ["All but Lightsabers"],
    savingThrows: ["Dexterity", "Intelligence"],
    skills: {
      choose: 3,
      from: ["Any"],
    },
    resources: [
      {
        name: "Gadget Slots",
        description:
          "Gain one per level. Gadgets refresh upon long rest and may be freely chosen between so long as slots permit.",
        maxValue: "1 per level",
        recharge: "Long rest",
      },
      {
        name: "Gadget Inventory",
        description:
          "You may store equal to your number of Gadgets on your ship or in a safehouse.",
        maxValue: "Equal to Gadget Slots",
        recharge: "Long rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Sneak Attack",
        description:
          "When attacking an enemy who you have Advantage against, deal an additional 1d8 damage. Scales with level: 2d8 at level 3, 3d8 at level 5, 4d8 at level 7, 5d8 at level 9, 6d8 at level 11, 7d8 at level 13, 8d8 at level 15, 9d8 at level 17, 10d8 at level 19. Applies to all instances of damage in an attack.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 5,
        name: "Tactical Infiltrator",
        description:
          "You cannot be surprised, and you gain Advantage on initiative rolls.",
        type: "passive",
      },
      {
        level: 6,
        name: "Silent Killer",
        description:
          "When you kill a target more than 10ft away from one of their allies, roll a Stealth check. If you pass, their death will not alert someone unless discovered.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 10,
        name: "Alpha Strike",
        description:
          "Once per Long Rest, when attacking an enemy who is unaware of your presence, automatically deal a Critical Strike.",
        type: "active",
      },
      {
        level: 11,
        name: "Surgical Precision",
        description:
          "Ignore all Resistances on attacks where you apply Sneak Attack.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 14,
        name: "Quick Reflexes",
        description:
          "When acting against any target who has not taken their turn yet, gain Advantage.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 18,
        name: "Preternatural Targeting",
        description:
          "Always deal maximum damage with all attacks and gadgets.",
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
            description: "When attacking with Advantage, make no noise.",
            type: "passive",
          },
          {
            level: 3,
            name: "Deep Pockets, Deeper Stores",
            description:
"Double your number of Gadget Slots and inventoried gadgets. Gain access to the following Gadgets:\n\nPersonal Cloak (3 Slots, 2 uses): As an action, become Invisible for up to one minute. Breaks upon attacking. Additional batteries cost 1/Gadget Slot.\n\nPseudolarynx (1 Slot, unlimited): As a free action, perfectly mimic someone's voice after collecting a five-minute sample. Can only record one voice at a time.\n\nWhisper-Range Laser Mic (1 Slot, unlimited): As an action, detect surface vibrations on distant glass or walls and convert them into clear audio within 30ft.\n\nSmart Dust Trackers (1 Slot, 3 uses): As an action, release microscopic adhesive particles that cling to a chosen target within 15ft and transmit a weak tracking signal for 1d4 hours.\n\Arc Projector (3 Slots, 2 uses): As an bonus action, force a target within 15ft to make a Constitution save. If they fail, they become Stunned for two turns. Additional batteries may be taken at 1/slot .\n\nStun Drone(3 Slots, 1 use): As an action, send out a stun drone to a location within 300ft. Any target who passes within 10ft of it must make a Constitution save or be stunned for one turn. It has 10 AC and 5 HP. ",            type: "passive",
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
            description:
              "When activating a gadget, remove all telltale concealable traces of its presence.",
            type: "passive",
          },
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
              "Gain the ability to fire through the full range of the weapon without disadvantage.",
            type: "passive",
          },
          {
            level: 3,
            name: "Steady Aim",
            description:
              "Gain the ability to sacrifice all movement for +2 to hit on your next attack.",
            type: "active",
          },
          {
            level: 3,
            name: "Sniper Gadgets",
            description:
              "Gain access to the following gadgets:\n\nAdaptive Camouflage Cloak (2 Slots): Cloak a 5x5 static position, making anyone inside invisible and permitting the user to shoot out. After every shot, roll a D20 — on 10 and below, the cloak fails. Can be used for four hours. Additional memory chips are 1 position/slot.\n\nTargeting Visor (1 Slot): Analyze one target for weaknesses. Identify all resistances, major skills, and gain +2 to hit against them. Additional memory chips are 2 targets/slot.\n\nSpotter Droid: Launch a small spotter droid that can travel up to one mile from you (must remain in line of sight). Sends a live feed of its viewpoint directly to you.\n\nWall-Penetrating Scanners (3 Slots): See through up to 15ft of combined obstacles. Lasts one minute. Additional batteries are 1 minute/slot.",
            type: "passive",
          },
          {
            level: 7,
            name: "Eagle Eyes",
            description:
              "Gain Advantage on all visual Perception checks within physical vision range.",
            type: "passive",
          },
          {
            level: 7,
            name: "Sniper's Hide",
            description:
              "When firing at greater than 60ft while unspotted, after every shot, make a Stealth check. If it succeeds, remain hidden and add 2 to the DC of subsequent Stealth checks.",
            type: "passive",
          },
          {
            level: 9,
            name: "Trick Shot",
            description:
              "Gain the ability to bounce blaster bolts around cover, letting you take attacks against covered targets at Disadvantage.",
            type: "active",
          },
          {
            level: 13,
            name: "Overwatch",
            description:
              "As an action, specify a cone the size of your weapon range. Make an attack against every enemy who moves in it on their turn.",
            type: "active",
          },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
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
    weaponProficiencies: ["All but Lightsabers"],
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
    resources: [
      {
        name: "Gadget Slots",
        description:
          "Gain one per level. Gadgets refresh upon long rest and may be freely chosen between so long as slots permit.",
        maxValue: "1 per level",
        recharge: "Long rest",
      },
      {
        name: "Gadget Inventory",
        description:
          "You may store equal to your level of Gadgets on your ship or in a safehouse.",
        maxValue: "Equal to level",
        recharge: "Long rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Fighting Style",
        description:
          "Choose a Fighting Style:\n\nBlaster: Gain +2 to Blaster attacks.\n\nDefense: Gain +1 AC.\n\nGadgeteer: Gain +2 to hit and to damage from Gadgets and Abilities.\n\nHeavy Weapon Fighting: Two-handed weapons can reroll 1s and 2s for damage.\n\nTwo-weapon Fighting: Add your ability modifier to the damage of the second attack.\n\nClose Quarters Shooter: No disadvantage on ranged attacks within 5ft of a hostile creature. +1 to ranged attack rolls.",
        type: "passive",
      },
      {
        level: 2,
        name: "Expert Hunter",
        description:
          "Gain Advantage on Survival, Investigation, and Perception checks related to a target that you are knowledgeable of.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
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
        description: "Gain the ability to make non-lethal Blaster attacks.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
	  {
        level: 10,
        name: "Targeting Synchronization",
        description:
        "Once per turn, against any target affected by one of your abilities or gadgets, gain Advantage on your next attack.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
	    {
        level: 14,
        name: "Cantina Legend",
        description:
          "Once per short rest, choose one target who knows your reputation. As a bonus action, force them to make a Wisdom save against your level. Upon failure, they become Frightened for one minute. ",
        type: "active",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 18,
        name: "You Know My Name",
        description:
          "Cantina Legend can be applied once per turn. Gain Advantage against Frightened Targets.",
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
            description:
              "Gain a Companion Droid. Movement: 30ft. May be commanded on a Bonus Action. Gadget Slots: One per level (in addition to personal gadget slots). Double your Gadget Inventory. Can carry a weapon in 3 Gadget Slots. After destruction, may be repaired or replaced with one week of effort. Gain Proficiency in 2 of: Technology, Piloting, Stealth, History, Medicine, Perception. Gains Ability Score Increases at the same rate as you. May be uparmored at 1 Gadget Slot per AC. May be commanded once per Bonus Action.\n\nChoose a Chassis:\n\nLight Chassis: 1d6 HP/level, AC 12, Proficiency in Stealth, 30ft fly speed or 15ft movement. Tiny creature. STR 8 / DEX 16 / CON 10 / INT 16 / WIS 12 / CHA 10.\n\nMedium Chassis: 1d8 HP/level, AC 13, Proficiency in Technology, 15ft fly speed or 5ft movement. Small creature. STR 12 / DEX 12 / CON 14 / INT 12 / WIS 12 / CHA 10.\n\nHeavy Chassis: 1d10 HP/level, AC 14, Proficiency in Piloting. Medium creature. STR 16 / DEX 8 / CON 16 / INT 12 / WIS 10 / CHA 10.",
            type: "passive",
          },
          {
            level: 7,
            name: "Shielded Chassis",
            description:
              "Droids gain temporary health equal to two of the droid's hit die.",
            type: "passive",
          },
          {
            level: 9,
            name: "Droid Upgrades",
            description:
              "Light Droids gain the ability to go Invisible for one minute per Long Rest.\n\nMedium Droids gain Expertise on Technology checks.\n\nHeavy Droids gain +2 AC and may carry a weapon for free.",
            type: "passive",
          },
          {
            level: 13,
            name: "Enhanced Uplink",
            description:
              "Gain the ability to control two droids. Gadget Slots are split between the droids according to your preference.",
            type: "passive",
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
            "Vents at a rate of 5/turn. Maximum of 100. Deals 1d8 self-damage when above 80 Heat and 2d8 above 90 Heat. Disables all abilities when at 100, until cooled down to at least 50.",
          maxValue: 100,
          recharge: "Passive venting (5/turn)",
        },
        features: [
          {
            level: 3,
            name: "Emergency Vent",
            description:
              "Once per Long Rest, vent 50 Heat, dealing 2d6 damage to every creature within 10ft.",
            type: "active",
          },
          {
            level: 3,
            name: "Mercenary Arsenal",
            description:
              "Gain access to the following Heat-based abilities. Each scales with current Heat level:\n\nExplosive Dart (15 Heat): Launch an Explosive Dart at a target within 30ft. Wisdom save or Frightened for one turn. After one turn, detonates for 1d12 damage in 5ft radius. Above 50 Heat: 2d8. Above 70 Heat: 2d12.\n\nRocket Punch (15 Heat): Launch yourself at an enemy within 30ft. Contested Dexterity check — success: 1d8 damage; fail: no damage. Above 50 Heat: +1d4 in 5ft area along path. Above 70 Heat: +1d8 in 5ft area.\n\nSpare Tibanna Canister (10 Heat): Throw a canister up to 45ft, creating a 10ft cloud. Next blaster bolt through the cloud detonates it for 1d6 damage to all in area. Above 50 Heat: 2d6. Above 70 Heat: 15ft diameter.\n\nIonic Tether (15 Heat): Launch a charged cable at an enemy within 30ft. Hit: 1d8 damage, -15ft movement. Above 50 Heat: movement reduced to 0. Above 70 Heat: 2d8 damage, remove reactions.\n\nMagnetic Imploder (25 Heat): Launch within 30ft. Enemies in range pass Strength save or be sucked to center. 2d6 damage (halved on save). Above 50 Heat: 2d10. Above 70 Heat: 15ft radius.\n\nRailgun (20 Heat): Attack every enemy in a 5ft wide, 30ft long line until it fails to penetrate. 1d10 damage. Above 50 Heat: 2d8. Above 70 Heat: 10ft wide.\n\nFragmentation Flechette (15 Heat): Ranged attack at a target within 60ft. 1d8 damage, then 1d6 to all in 15ft cone behind them. Above 50 Heat: 1d12 primary, 1d10 secondary. Above 70 Heat: 30ft cone.\n\nMagnetic Exploder (25 Heat): Launch within 30ft, 10ft radius. Enemies pass Strength save or be pushed away. 2d6 damage (halved on save). Above 50 Heat: 2d10. Above 70 Heat: 15ft radius.\n\nOverdrive (requires 50+ Heat, generates 10 Heat): Increase all ability damage by 1d8. All abilities generate +5 Heat. Lasts 2 turns. Enables ability usage at 100 Heat but allows Heat to build past 100. Emergency Vent ends this immediately. No action required.",
            type: "active",
          },
          {
            level: 7,
            name: "Bacta Autoinjectors",
            description: "Gain Advantage on Death Saves.",
            type: "passive",
          },
          {
            level: 7,
            name: "Improved Venting",
            description: "Increase passive Heat venting to 8 per turn.",
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
            name: "Reinforced Core",
            description: "Increase your maximum Heat to 120.",
            type: "passive",
          },
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
        description: "Used to power Force abilities. Gain 1 per level.",
        maxValue: "1 per level",
        recharge: "Long rest",
      },
      {
        name: "Rage",
        description: "Begins at zero. Lose 10 per turn, gain 20 per Lightsaber hit, or 10 per hit taken. Maximum capacity is 8 * your Constitution.",
        maxValue: "8 * Constitution modifier",
        recharge: "Combat",
      },
      {
        name: "Channel Hatred",
        description: "Gain 1 charge at level 3, 5, 7, 9, 11, 13, 15, 17.",
        maxValue: "8 charges",
        recharge: "Long rest",
      },
    ],
    features: [
      {
        level: 1,
        name: "Lightsaber Stance",
        description: "Select a Lightsaber Stance to specialize in.",
        type: "passive",
      },
      {
        level: 2,
        name: "Furious Assault",
        description: "After Dashing, gain the ability to make one attack at Advantage. Costs 30 Rage.",
        type: "active",
      },
      {
        level: 2,
        name: "Contemptuous Reflection",
        description: "After landing a lightsaber strike, gain the ability to deflect a blaster bolt by making a Dexterity save. Costs a reaction.",
        type: "active",
      },
      {
        level: 3,
        name: "Subclass",
        description: "Pick a subclass: Marauder or Juggernaut.",
        type: "subclass",
      },
      {
        level: 4,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each.",
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
        name: "Unnatural Might",
        description: "Gain Advantage on Strength checks and saves.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 10,
        name: "Unrelenting Hatred",
        description: "Increase Rage gain by 5 per hit given and received. Allow Channel Hatred to last a single turn without dealing or receiving damage.",
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
        description: "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 14,
        name: "Eternal Rage",
        description: "Landing a killing blow on any creature grants 40 Rage.",
        type: "passive",
      },
      {
        level: 16,
        name: "Ability Score Improvement",
        description: "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 18,
        name: "Avatar of the Dark",
        description: "Once per long rest, for one minute, become an avatar of the Dark Side. All Rage abilities are free, it no longer decays, and all lightsaber attacks gain Advantage and deal +1d8 damage.",
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
            description: "Channel your hatred into your body, strengthening and speeding up your blows. Once per turn when you attack, attack again for free. Additionally, increase your critical range by one.",
            type: "passive",
          },
          {
            level: 3,
            name: "Brutal Execution",
            description: "When landing a critical strike or a killing blow, all enemies in a 10ft radius of you must pass a Wisdom save or be Frightened for one turn. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Frenzied Strike",
            description: "When landing a critical strike or killing blow, move up to 30ft without triggering opportunity attacks. Your next attack will be at Advantage. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Bloodthirst",
            description: "When landing a critical strike or killing blow, heal for half the damage you dealt. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Crippling Slash",
            description: "Upon your next hit, reduce enemy movement speed to zero for one turn and deal an additional 1d8 damage. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Predation",
            description: "For the next two turns, gain an additional action. Costs 80 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Whirling Frenzy",
            description: "Make a melee attack against every target within 10ft of you. Costs 100 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Cloak of Pain",
            description: "Every enemy within 10ft of you must pass a Wisdom saving throw. If they fail, then the next time you are damaged, deal equal damage to all enemies who failed.",
            type: "active",
          },
          {
            level: 3,
            name: "Undying Rage",
            description: "The next time you take lethal damage, instead go to 1hp. Until the end of your next turn, you cannot be reduced below 1hp. Costs 110 Rage.",
            type: "active",
          },
          {
            level: 7,
            name: "Overpowering Hatred",
            description: "Upon spending at least 80 Rage in one turn while Channeling Hatred, gain an additional 1d8 damage on your next attack.",
            type: "passive",
          },
          {
            level: 10,
            name: "Unrelenting Hatred",
            description: "Upon spending at least 100 Rage in one turn while Channeling Hatred, gain Advantage on your next attack.",
            type: "passive",
          },
          {
            level: 13,
            name: "Unending Hatred",
            description: "Upon spending at least 120 Rage in one turn while Channeling Hatred, gain an additional attack for your next turn.",
            type: "passive",
          },
        ]
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
            description: "Channel your hatred into your body, strengthening your sinews and bone. Gain Resistance to all damage.",
            type: "passive",
          },
          {
            level: 3,
            name: "Pain upon Pain",
            description: "After taking more than 1/10th of your maximum HP in a single turn, deal 1d8 damage in a 10ft radius. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Master of Terror",
            description: "As a reaction, when you take damage, force three enemies within 10ft to pass a Wisdom save or have disadvantage when attacking you. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Contemptuous Taunt",
            description: "Force an enemy within 30ft to make a Wisdom save. If they fail, they must spend their full movement moving towards you, and must attack you when they reach you. Costs 40 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Implacable Advance",
            description: "For one turn, your advance cannot be stopped. Your movement speed cannot be reduced, you ignore difficult terrain, and you cannot be knocked prone. Make a lightsaber attack against every single enemy you pass within 5ft of. Costs 60 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Spiteful Rebuke",
            description: "When you take damage, immediately lash out in return. As a reaction, make an attack at advantage. Costs 60 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Crushing Blow",
            description: "After landing a lightsaber attack, overpower your enemy. Deal an additional 2d8 damage and force them to make a Constitution save. If they fail, they become stunned for two turns. Costs 80 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Executioner's Grip",
            description: "After hitting an enemy, brutally grip them. They must make a Strength save. If they fail, they become Grappled, Restrained, and lose 2d6 HP per turn. They may attempt to break out with an Athletics check each turn. Until they do, or a minute passes, you may drag them freely without impeding your movement. If an enemy makes an attack against you, you may use a reaction to drag your gripped target in the way of the attack. The enemy gains advantage, and all damage taken is directed towards your gripped target. Costs 100 Rage.",
            type: "active",
          },
          {
            level: 3,
            name: "Overwhelming Hatred",
            description: "For the next two turns, your attacks deal an additional 1d8 damage. Upon hitting, the target will be pushed back 15ft. If they collide with a solid object, they will take an additional 2d6 damage. Costs 100 Rage.",
            type: "active",
          },
          {
            level: 7,
            name: "Pain is Fuel",
            description: "Gain an additional 5 Rage per instance of damage taken.",
            type: "passive",
          },
          {
            level: 10,
            name: "Inescapable Doom",
            description: "Enemies cannot disengage from you.",
            type: "passive",
          },
          {
            level: 13,
            name: "Pain is Power",
            description: "Upon dropping to 0 HP while Channeling Hatred, instead drop to 1hp. Channel Hatred immediately ends.",
            type: "passive",
          },
        ]
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
          "Gain 2 Force Points per level. Used to power Force abilities.",
        maxValue: "2 per level",
        recharge: "Long rest",
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
        description:
          "Sacrifice 2 AC until the end of your next turn. Gain +2 to spell save DC and spell attack rolls. If Recklessness is used again on the following turn, increase all costs and gains by 2 (−4 AC, +4 to DC and rolls), stacking with each consecutive use.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 5,
        name: "Peace is a Lie, There is only Passion",
        description:
          "Upon entering combat, gain Force Points equal to half your level (rounded down).",
        type: "passive",
      },
      {
        level: 6,
        name: "Through Passion, I Gain Strength",
        description:
          "Upon dealing ability damage, deal half that damage (rounded down) to a target you damaged with an ability on your next turn. If you dealt ability damage to multiple targets, use the highest damage instance.",
        type: "passive",
      },
      {
        level: 8,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 9,
        name: "Through Strength, I Gain Power",
        description:
          "Upon killing a target, gain AC equal to 1/6th of their AC (rounded down) for two turns. May be triggered twice per short rest.",
        type: "active",
      },
      {
        level: 11,
        name: "Through Power, I Gain Victory",
        description:
          "Upon killing a target, gain the ability to cast one Force ability without consuming an action or any Force Points. May only trigger once per turn.",
        type: "passive",
      },
      {
        level: 12,
        name: "Ability Score Improvement",
        description:
          "Increase one ability score by 2, or two ability scores by 1 each.",
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
          "Increase one ability score by 2, or two ability scores by 1 each.",
        type: "asi",
      },
      {
        level: 18,
        name: "The Force shall Free Me",
        description:
          "Upon dying, transfer your soul into the nearest compatible body within one mile, forcing them to make a Wisdom saving throw. On a failure, possess them — overwriting their soul and body with your own and gaining all of their current hit points. On a success, become a bodiless Force Ghost that may attempt to possess any compatible body within one mile of your corpse or place of death. Your current Recklessness bonuses apply to your initial possession attempt.",
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
              "Using the dark side of the Force, create an Alchemical Horror completely under your control that may be commanded as a bonus action. It has the following base stats: HP 1d12 per level, AC 12, STR 16, DEX 14, CON 16, WIS 6, INT 8, CHA 10. Upon creation, choose two Mutagenic Abilities from the pool below.",
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
            description: "Grow tendrils capable of lancing out. Gain a 1d8 20ft ranged attack. On a hit, the target must pass an Athletics or Acrobatics check or become Grappled.",
            overload: "Increase damage to 2d6 and range to 30ft. The saving throw must be made at disadvantage.",
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
            description: "Gain the ability to channel your Force abilities through the Horror, enabling it to serve as the origin point for all abilities.",
            overload: "Gain Advantage on all spell attack rolls cast through the Horror.",
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
            description: "Enemies who begin their turn directly facing the Horror must make a Wisdom save or have their movement speed halved, their AC reduced by 2, and have Disadvantage on Dexterity saves.",
            overload: "The Wisdom save must be made at disadvantage.",
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
          "The Sorcerer amplifies the destructive potential of Force Lightning into a cascading storm of electricity. Through Recklessness, they push their spells beyond their limits — overcharging abilities, chaining lightning between targets, and ultimately unleashing a tempest that fills the battlefield.",
        features: [
          {
            level: 3,
            name: "Ionizing Potential",
            description:
              "Force Lightning gains an additional +2 damage. Critical Hits cause Force Lightning to bounce to another target within 60ft of the original target, making a new attack roll against them. This chain may continue indefinitely.",
            type: "passive",
          },
          {
            level: 3,
            name: "Unlimited Power",
            description:
              "While Recklessness is active, increase the critical hit range of all spells by 1 (e.g. crits on 19–20 instead of 20).",
            type: "passive",
          },
          {
            level: 3,
            name: "Power Overcharge",
            description:
              "Gain the ability to overcharge Force abilities. For each additional Force Point spent beyond the base cost, increase the ability's damage by 4.",
            type: "active",
          },
          {
            level: 7,
            name: "Power Overwhelming",
            description:
              "Once per turn, after dealing spell damage to a target, force them to make a Constitution saving throw or become Stunned until the end of their next turn.",
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
              "Force Lightning now chains to two nearby targets on a Critical Hit instead of one. Increase the critical hit range of all spells by an additional 1.",
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
    description:
      "Force the target to make a Wisdom saving throw. If they pass, they become aware of your attempt. If they fail, you gain advantage on Charisma checks against them.",
    tags: ["Mental", "Social"],
  },
  {
    id: "push-pull",
    name: "Push / Pull",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Action",
    range: "30ft",
    description:
      "Push or pull an object 20lbs or less up to 30ft. If this impacts an enemy, they must make a Strength save or take 1d6 damage.",
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
    range: "15ft",
    description:
      "Push or pull an object 200lbs or a Medium creature up to 15ft. If this impacts an enemy, they must make a Strength save. On a failure, they take 3d6 damage. On a success, they take half. Creatures that you move may make a Strength save to avoid being moved. If they fail and are shoved into a hard object, they take 3d6 damage.",
    tags: ["Telekinesis", "Damage"],
  },
  {
    id: "saber-throw",
    name: "Saber Throw",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Attack",
    range: "30ft",
    description:
      "Throw your lightsaber, making a normal attack within 30ft range. If this misses your first target, you may redirect it onto a second target, making another attack. If this misses, your saber returns to your hand. For the purposes of class resources, counts as a lightsaber attack. If wielding a Versatile weapon, use the one-handed damage numbers.",
    tags: ["Attack", "Lightsaber", "Universal"],
  },
  {
    id: "force-healing",
    name: "Force Healing",
    alignment: "light",
    cost: "Variable Force Points",
    actionType: "Action",
    range: "Touch",
    description:
      "Spend any number of Force Points to heal a target you're touching. Heals 1d4 per Force Point.",
    tags: ["Healing", "Support"],
  },
  {
    id: "force-crush",
    name: "Force Crush",
    alignment: "light",
    cost: "4 Force Points",
    actionType: "Action",
    range: "Close",
    description:
      "Concentrate for one turn. At the beginning of your next turn, grab and crush an enemy, dealing 8d6 damage. On a successful Strength save, deal half damage.",
    tags: ["Telekinesis", "Damage"],
  },
  {
    id: "precognition",
    name: "Precognition",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Action",
    range: "Self",
    description:
      "Roll a d100 to attempt to divine the future. Success varies based on the roll.",
    tags: ["Divination", "Utility"],
  },
  {
    id: "battle-precognition",
    name: "Battle Precognition",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "Battlefield",
    description:
      "Determine what three enemies on the battlefield are going to do in the next round.",
    tags: ["Divination", "Tactical"],
  },
  {
    id: "detect-emotion",
    name: "Detect Emotion",
    alignment: "light",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "30ft",
    description:
      "Determine the emotional state of any creature within 30ft.",
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
      "Project a Force illusion or presence. Exact effects determined by the GM.",
    tags: ["Illusion", "Utility"],
  },
  {
    id: "projectile-freezing",
    name: "Projectile Freezing",
    alignment: "universal",
    cost: "3 Force Points",
    actionType: "Action",
    range: "10ft radius",
    description:
      "Create a zone within 10ft of you for two turns where all projectiles are stopped. After the duration ends or concentration breaks, all projectiles resume their paths.",
    tags: ["Defense", "Concentration", "Universal"],
  },
  {
    id: "battle-meditation",
    name: "Battle Meditation",
    alignment: "light",
    cost: "4 Force Points",
    actionType: "Action",
    range: "Allies",
    description:
      "Increase the AC, Attack rolls, and damage of all allies by 2.",
    tags: ["Support", "Buff"],
  },
  {
    id: "force-stasis",
    name: "Force Stasis",
    alignment: "light",
    cost: "3 Force Points",
    actionType: "Action",
    range: "Close",
    description:
      "Place an object or person in Stasis for two turns. People may make a Strength save to break free and are Slowed, while objects are completely stopped.",
    tags: ["Control", "Concentration"],
  },
  {
    id: "force-suspend",
    name: "Force Suspend",
    alignment: "light",
    cost: "5 Force Points",
    actionType: "Action",
    range: "Close",
    description:
      "Suspend up to three targets for one minute or until your concentration breaks. Suspended targets cannot move, attack, or use items. Every turn (including initially), they may make a Strength save to attempt to break free.",
    tags: ["Control", "Concentration"],
  },
  {
    id: "force-barrier",
    name: "Force Barrier",
    alignment: "light",
    cost: "4 Force Points",
    actionType: "Action",
    range: "Self",
    description:
      "Project a shield in a 15ft arc around you that blocks all incoming enemy damage and movement, while permitting allies to fire back. Lasts one minute or until concentration break. This shield has HP equal to your Jedi level × 10.",
    tags: ["Defense", "Concentration"],
  },
  {
    id: "induce-sleep",
    name: "Induce Sleep",
    alignment: "light",
    cost: "2 Force Points",
    actionType: "Action",
    range: "Close",
    description:
      "Attempt to induce sleep in an enemy. They may make a Wisdom save to attempt to remain awake, and any damage or an ally using the Help action will wake them up.",
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
      "Attempt to read the mind of an enemy. They may make a Wisdom save to attempt to resist you. If they critically fail their save, their mind becomes shattered, reducing them to a drooling husk. Shattered minds will not reveal further information.",
    tags: ["Mental", "Information"],
  },
  {
    id: "energy-absorption",
    name: "Energy Absorption",
    alignment: "universal",
    cost: "1 Force Point",
    actionType: "Bonus Action",
    range: "Self",
    description:
      "Hold out your hand and attempt to absorb incoming energy. For each instance of energy, make a Wisdom saving throw, increased by +1 for each previous instance.",
    tags: ["Defense", "Reaction", "Universal"],
  },
  {
    id: "guided-navigation",
    name: "Guided Navigation",
    alignment: "universal",
    cost: "3 Force Points",
    actionType: "Action",
    range: "Self",
    description:
      "Attempt to divine the path forwards. Make a Wisdom check, and on a success, gain knowledge of the path towards your objective. When used for astrogation, gain the ability to identify and plot new hyperspace paths.",
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
      "Strike a target within 60ft with lightning, dealing 3d10 lightning damage. The target may make a Dexterity save; on a failed save they cannot take reactions until the start of their next turn.",
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
      "Attempt to control a creature within 30ft. The target must make a Wisdom save or become controlled for up to one minute (concentration). The target may repeat the save at the end of each of its turns. If they critically fail their save, they become Mindbroken, allowing you to puppet them freely until they die but becoming completely incapable of any action outside of your control.",
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
      "Emit a terrifying scream in a 15ft cone. Creatures in the area take 3d8 psychic damage and must make a Constitution save or become frightened until the end of their next turn.",
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
      "Assault a creature's mind within 30ft. The target takes 2d6 psychic damage and must make an Intelligence save or have a single memory removed from their mind.",
    tags: ["Mental", "Damage", "Dark Side"],
  },
  {
    id: "thought-bomb",
    name: "Thought Bomb",
    alignment: "dark",
    cost: "6 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Plant a thought bomb in a target. When they think the specified thought, this bomb detonates, dealing 6d6 damage in a 30ft radius.",
    tags: ["Mental", "Damage", "AOE", "Dark Side"],
  },
  {
    id: "dread-mark",
    name: "Dread Mark",
    alignment: "dark",
    cost: "2 Force Points",
    actionType: "Bonus Action",
    range: "60ft",
    description:
      "Mark a creature within 60ft for one minute. You deal an additional 1d6 damage to the target, and it has disadvantage on saving throws against your abilities. If the target dies while marked, all enemies within 10ft must pass a Wisdom save or become Frightened for 1 turn.",
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
      "Mutate a creature within 30ft. The target must make a Constitution save or suffer one of the following effects of your choice for up to one minute (concentration): its speed becomes 0, it takes 2d6 damage at the start of each turn, or it has disadvantage on attack rolls. The target may repeat the save at the end of each turn.",
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
      "Empower a creature within 30ft for one minute. The target gains +2 to attack rolls and damage rolls, but takes 1d6 damage at the end of each of its turns.",
    tags: ["Buff", "Support", "Dark Side"],
  },
  {
    id: "viral-madness",
    name: "Viral Madness",
    alignment: "dark",
    cost: "5 Force Points",
    actionType: "Action",
    range: "30ft",
    description:
      "Infect a creature within 30ft with madness for up to one minute (concentration). The target must make a Wisdom save or become confused. At the end of each of its turns, creatures within 10ft of it must also make a Wisdom save or become affected.",
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
      "Create a 10ft cube of crackling lightning within 60ft for up to one minute (concentration). Creatures in the area take 2d8 damage when the cage appears, and again if they attempt to leave the area. The area is difficult terrain.",
    tags: ["Lightning", "Control", "Concentration", "AOE", "Dark Side"],
  },
  {
    id: "force-choke",
    name: "Force Choke",
    alignment: "dark",
    cost: "4 Force Points",
    actionType: "Action",
    range: "60ft",
    description:
      "Target a creature within 60ft. The target must make a Constitution save or become restrained for up to one minute (concentration), taking 3d8 force damage at the start of each of its turns and being unable to speak. As a bonus action, you may deal an additional 1d8 force damage. The target may repeat the save at the end of each turn.",
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
      "Distort the perception of a creature within 30ft for up to one minute (concentration). The target must make a Wisdom save or suffer one of the following effects of your choice: disadvantage on attack rolls and no reactions, is frightened of a creature of your choice, or is effectively blinded. The target may repeat the save at the end of each turn.",
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
      "Drain vitality from a creature within 30ft. The target takes 4d8 necrotic damage and you regain hit points equal to a quarter of the damage dealt. The target may make a Constitution save for half damage; on a failed save it has disadvantage on its next attack roll.",
    tags: ["Damage", "Healing", "Necrotic", "Dark Side"],
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
      "As an action, create a 10ft diameter patch of fire on the ground, or a 20x5ft wall within 60ft of you. Any enemy who starts their turn in this fire or passes through it takes 3d6 damage",
    tags: ["Damage", "Area"],
  },
  {
    id: "remote-bomb",
    name: "Remote Bomb",
    slots: 3,
    uses: "1 use",
    description:
      "As an action, plant a bomb that becomes armed after twenty seconds. After it becomes armed, you may detonate it at any time, so long as you are within comms range of it, or you may set a timer to detonate it. Any target within 30ft takes 8d6 damage.",
    tags: ["Damage", "Area"],
  },
  {
    id: "auto-hacking-device",
    name: "Auto-Hacking Device",
    slots: 1,
    uses: "Unlimited",
    description:
      "Gain Advantage on all Technology rolls to hack devices. Does not require your physical presence to hack.",
    tags: ["Utility", "Technology"],
  },
  {
    id: "jetpack",
    name: "Jetpack",
    slots: 2,
    uses: "3 uses",
    description: "Gain 45ft of flying speed.",
    tags: ["Movement", "Utility"],
  },
  {
    id: "micro-missile-launcher",
    name: "Micro-Missile Launcher",
    slots: 1,
    uses: "1 base (2/slot extra)",
    description:
      "Launch a micro-missile up to 60ft, dealing 2d6 damage in a 10ft radius.",
    tags: ["Damage", "Area"],
  },
  {
    id: "macro-missile-launcher",
    name: "Macro-Missile Launcher",
    slots: 2,
    uses: "1 base (1/slot extra)",
    description:
      "Launch a macro-missile up to 60ft, dealing 4d6 damage in a 15ft radius.",
    tags: ["Damage", "Area"],
  },
  {
    id: "quick-seal-paste",
    name: "Quick-Seal Paste",
    slots: 1,
    uses: "1 use",
    description:
      "Fill a 5x5ft cube with quick-seal paste of similar strength to duracrete. Falls apart after one day.",
    tags: ["Utility", "Construction"],
  },
  {
    id: "grappling-hook",
    name: "Grappling Hook",
    slots: 1,
    uses: "5 uses/day",
    description:
      "Launch a grappling hook up to 30ft, creating a rope for creatures to climb. If used on an enemy, they must pass a Strength saving throw or be pulled to you.",
    tags: ["Movement", "Utility"],
  },
  {
    id: "holo-decoy",
    name: "Holo-Decoy",
    slots: 1,
    uses: "1 use",
    description:
      "Create a holographic clone of a person capable of limited action and noise generation (but not movement). Lasts 5 minutes.",
    tags: ["Illusion", "Utility"],
  },
  {
    id: "web-launcher",
    name: "Web Launcher",
    slots: 1,
    uses: "1 use",
    description:
      "Launch a web, entangling all targets in a 10ft radius. All targets may make a Strength save to break free, or free an entangled ally with the Help action.",
    tags: ["Control", "Area"],
  },
  {
    id: "rebreather",
    name: "Rebreather",
    slots: 1,
    uses: "Unlimited",
    description:
      "Gain the ability to breathe in low or no-oxygen environments, including underwater and in space.",
    tags: ["Survival", "Utility"],
  },
  {
    id: "holdout-blaster",
    name: "Holdout Blaster",
    slots: 1,
    uses: "Unlimited",
    description:
      "Gain a hidden blaster compartment and one Blaster Pistol that cannot be detected by standard scans.",
    tags: ["Weapon", "Concealment"],
  },
  {
    id: "tracking-beacon",
    name: "Tracking Beacon",
    slots: 2,
    uses: "1 use",
    description:
      "Attach a tracking beacon to a target or vehicle. Can track them anywhere within a hundred parsecs.",
    tags: ["Utility", "Surveillance"],
  },
  {
    id: "nvgs",
    name: "NVGs",
    slots: 1,
    uses: "Unlimited",
    description: "Gain 60ft of Darkvision.",
    tags: ["Utility", "Vision"],
  },
  {
    id: "enhanced-sensor-suite",
    name: "Enhanced Sensor Suite",
    slots: 2,
    uses: "30 min (2/slot extra)",
    description:
      "Gain 60ft of Darkvision, the ability to see through walls for 20ft, and Advantage on Perception checks. Lasts 30 minutes.",
    tags: ["Utility", "Vision", "Surveillance"],
  },
  {
    id: "ionic-pulsar",
    name: "Ionic Pulsar",
    slots: 3,
    uses: "1 use",
    description:
      "Throw a beacon up to 30ft. In a 15ft radius, deal 3d6 damage to all Droids unless they pass a Constitution save. Destroy all non-hardened electronics in the area.",
    tags: ["Damage", "Anti-Droid", "Area"],
  },
  {
    id: "smoke-projector",
    name: "Smoke Projector",
    slots: 2,
    uses: "2 uses",
    description:
      "Create a 10x10ft cloud of multispectral smoke that cannot be seen through except by an Enhanced Sensor Suite.",
    tags: ["Utility", "Concealment"],
  },
  {
    id: "breaching-charge",
    name: "Breaching Charge",
    slots: 2,
    uses: "1 use",
    description:
      "Explosively destroy up to 5ft of wall or door, dealing 2d6 damage to all enemies in a 10ft cone behind the charge.",
    tags: ["Damage", "Utility"],
  },
  {
    id: "bio-signature-masker",
    name: "Bio-Signature Masker",
    slots: 1,
    uses: "30 min (2/slot extra)",
    description:
      "Gain the ability to mask your bio-signature, becoming invisible to bio-scans.",
    tags: ["Stealth", "Utility"],
  },
  {
    id: "repulsor-disc",
    name: "Repulsor Disc",
    slots: 1,
    uses: "1 use",
    description:
      "Gain the ability to lift a 1000lb object 5ft off the ground for one hour.",
    tags: ["Utility", "Telekinesis"],
  },
  {
    id: "miniature-cutting-torch",
    name: "Miniature Cutting Torch",
    slots: 1,
    uses: "5 uses",
    description:
      "Gain the ability to cut through fences, locks, and similarly-durable items over the course of thirty seconds.",
    tags: ["Utility", "Tool"],
  },
  {
    id: "signal-falsifier",
    name: "Signal Falsifier",
    slots: 1,
    uses: "1 use",
    description:
      "Gain the ability to spoof a known signal with an already-known message. In cases of substantial power mismatch, may require a signal booster.",
    tags: ["Utility", "Technology"],
  },
  {
    id: "jamming-beacon",
    name: "Jamming Beacon",
    slots: 2,
    uses: "2 uses",
    description:
      "Jam all comms and sensors within a 30ft radius.",
    tags: ["Utility", "Technology"],
  },
  {
    id: "phase-shift-lockpick",
    name: "Phase-Shift Lockpick",
    slots: 2,
    uses: "Unlimited",
    description:
      "Gain Advantage on Sleight of Hand rolls against physical locks. Does not require your presence to pick the lock.",
    tags: ["Utility", "Infiltration"],
  },
  {
    id: "slicer-spike",
    name: "Slicer Spike",
    slots: 2,
    uses: "1 use",
    description:
      "Place on a computer or data-carrying wire to give Advantage on Technology rolls to hack it, and allows for continued surveillance of the computer or wire for one week unless it is removed.",
    tags: ["Technology", "Surveillance"],
  },
  {
    id: "aural-dampener",
    name: "Aural Dampener",
    slots: 2,
    uses: "2 uses",
    description: "Silence all sound in a 30ft area for five minutes.",
    tags: ["Utility", "Stealth"],
  },
  {
    id: "micro-tractor-beam",
    name: "Micro-Tractor Beam",
    slots: 1,
    uses: "3 uses",
    description:
      "Pull all objects in a 15ft line towards you with 20lbs of force.",
    tags: ["Utility", "Telekinesis"],
  },
  {
    id: "carbonite-capsule",
    name: "Carbonite Capsule",
    slots: 2,
    uses: "1 use",
    description:
      "Throw a capsule 45ft, where it explodes into a 10ft radius cloud of freezing carbonite gas. Enemies take 1d8 damage and must pass a Strength save or be frozen solid for two turns. Breaking the ice with kinetic damage deals an additional 1d8 damage.",
    tags: ["Damage", "Control", "Area"],
  },
  {
    id: "mag-boots",
    name: "Mag-Boots",
    slots: 1,
    uses: "Unlimited",
    description:
      "Gain the ability to stick to any metal surface, no matter its angle.",
    tags: ["Movement", "Utility"],
  },
  {
    id: "grenade-launcher",
    name: "Grenade Launcher",
    slots: 2,
    uses: "Unlimited (requires grenades)",
    description:
      "Gain the ability to shoot grenades and mines up to 120ft.",
    tags: ["Weapon", "Area"],
  },
  {
    id: "welding-kit",
    name: "Welding Kit",
    slots: 1,
    uses: "Three uses",
    description:
      "Gain the ability to weld man-sized doors and other similarly-sized things.",
    tags: ["Weapon", "Area"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  {
    name: "Athletics",
    ability: "Strength",
    description:
      "Covers physical feats of strength: climbing, jumping, swimming, grappling, and other feats of raw power.",
  },
  {
    name: "Deception",
    ability: "Charisma",
    description:
      "The ability to convincingly hide the truth, whether through misdirection, disguise, or outright lies.",
  },
  {
    name: "Insight",
    ability: "Wisdom",
    description:
      "The ability to determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move.",
  },
  {
    name: "Intimidation",
    ability: "Charisma",
    description:
      "Influencing someone through overt threats, hostile actions, and physical violence.",
  },
  {
    name: "Investigation",
    ability: "Intelligence",
    description:
      "Searching for clues and making deductions based on those clues. Looking for hidden objects, deducing from available evidence.",
  },
  {
    name: "Lore",
    ability: "Intelligence",
    description:
      "Knowledge of history, legends, and the lore of the galaxy — from ancient Jedi texts to Imperial regulations.",
  },
  {
    name: "Medicine",
    ability: "Wisdom",
    description:
      "Stabilizing a dying companion or diagnosing an illness. Applying first aid and medical knowledge.",
  },
  {
    name: "Perception",
    ability: "Intelligence",
    description:
      "Noticing things in your environment using your senses. Spot hidden enemies, hear distant sounds, or notice subtle details. Special Rule: Perception is Intelligence-based.",
    specialRule: "Intelligence-based (not Wisdom)",
  },
  {
    name: "Performance",
    ability: "Charisma",
    description:
      "Entertaining an audience through music, dance, acting, storytelling, or other forms of performance.",
  },
  {
    name: "Persuasion",
    ability: "Charisma",
    description:
      "Influencing someone or a group of people with tact, social graces, or good nature.",
  },
  {
    name: "Piloting",
    ability: "Dexterity",
    description:
      "Operating vehicles and starships, from speeder bikes to capital ships. Includes evasive maneuvers and combat flying.",
  },
  {
    name: "Sleight of Hand",
    ability: "Dexterity",
    description:
      "Performing tasks requiring manual dexterity: picking pockets, planting items, concealing objects on your person.",
  },
  {
    name: "Stealth",
    ability: "Dexterity",
    description:
      "Concealing yourself from enemies, slipping past guards, and moving without making a sound.",
  },
  {
    name: "Survival",
    ability: "Wisdom",
    description:
      "Following tracks, hunting game, guiding your group through frozen wastelands, identifying signs of nearby creatures, predicting weather, and avoiding natural hazards.",
  },
  {
    name: "Technology",
    ability: "Intelligence",
    description:
      "Operating, repairing, and hacking technological devices. From slicing into computer systems to jury-rigging a hyperdrive.",
  },
  {
    name: "Animal Handling",
    ability: "Wisdom",
    description:
      "Calming down a domesticated animal, keeping a mount from getting spooked, or intuiting an animal's intentions.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPECIAL RULES
// ─────────────────────────────────────────────────────────────────────────────
export const specialRules = [
  {
    title: "Perception is Intelligence-Based",
    description:
      "Unlike many systems, Perception checks in this game use Intelligence as the governing ability score, not Wisdom. This reflects the analytical nature of noticing and processing environmental details.",
  },
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
    description:
      "Is most commonly used in one hand, but may be used with both hands for increased damage, as indicated by the die size next to it. 1d8(1d10 Versatile) means 1d8 damage with one hand and 1d10 with two.",
  },
  {
    name: "Melting",
    description:
      "Is superheated, causing extreme damage via thermal conduction. Deals double damage to terrain and objects and grants +1 to hit.",
  },
  {
    name: "Finesse",
    description:
      "This weapon uses Dexterity as its primary attribute, rather than Strength.",
  },
  {
    name: "Double Strike",
    description:
      "This weapon may attack two targets at once, but not the same target twice in a single attack action.",
  },
  {
    name: "Luminous",
    description:
      "This weapon is a light source, lighting a 15ft radius with a dim glow.",
  },
  {
    name: "Heavy",
    description:
      "This weapon is unusually heavy, requiring at least 13 Strength to use proficiently.",
  },
  {
    name: "Reach",
    description:
      "This weapon has additional reach, extending attack range by 5ft.",
  },
  {
    name: "Two-Handed",
    description: "This weapon requires both hands to use.",
  },
  {
    name: "Light",
    description:
      "This weapon is very light, allowing for it to be used in an off-hand role.",
  },
  {
    name: "Clumsy",
    description:
      "This weapon is awkward to use up close. It attacks normally up to its full range, but at disadvantage within its minimum range.",
  },
  {
    name: "Disintegrator",
    description:
      "This weapon disintegrates targets it destroys, rather than simply leaving their bodies.",
  },
  {
    name: "High Recoil",
    description:
      "This weapon uses Strength as its primary attribute, not Dexterity.",
  },
  {
    name: "Blast",
    description:
      "This weapon has a blast radius. If it hits its target, it deals an additional 1/2 damage to all enemies in the specified radius.",
  },
  {
    name: "Spread Shot",
    description:
      "This weapon does not use normal weapon attacks — rather, it forces all enemies in the specified cone to make a saving throw against the attack's primary attribute.",
  },
  {
    name: "Vibrocutter",
    description:
      "This weapon chews through its targets, consistently dealing heavy damage. Crit on 19 and 20.",
  },
  {
    name: "Electrified",
    description:
      "This weapon is electrified, gaining a chance to stun enemies. On crits, stun your target for one turn.",
  },
  {
    name: "Electrowave",
    description:
      "This weapon releases an electric wave the specified distance to behind the target. Make an attack against all targets within the range when you attack. Is also Electrified.",
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
  classification?: "Simple" | "Martial";
  damage: string;
  range?: string;
  properties: string[];
  notes?: string;
}

export const weapons: Weapon[] = [
  // ── Lightsabers ──────────────────────────────────────────────────────────
  {
    id: "lightsaber",
    name: "Lightsaber",
    category: "lightsaber",
    damage: "1d8 (1d10 Versatile)",
    properties: ["Versatile", "Melting", "Finesse", "Luminous"],
  },
  {
    id: "saberstaff",
    name: "Saberstaff",
    category: "lightsaber",
    damage: "1d6",
    properties: ["Melting", "Finesse", "Luminous", "Double Strike"],
  },
  {
    id: "lightpike",
    name: "Lightpike",
    category: "lightsaber",
    damage: "1d10",
    properties: ["Melting", "Finesse", "Luminous", "Heavy", "Reach", "Two-Handed"],
  },
  {
    id: "shoto",
    name: "Shoto",
    category: "lightsaber",
    damage: "1d6",
    properties: ["Melting", "Finesse", "Luminous", "Light"],
  },
  {
    id: "crossguard-saber",
    name: "Crossguard Saber",
    category: "lightsaber",
    damage: "1d12",
    properties: ["Melting", "Luminous", "Heavy", "Two-Handed"],
  },
  // ── Blasters ─────────────────────────────────────────────────────────────
  {
    id: "blaster-pistol",
    name: "Blaster Pistol",
    category: "blaster",
    classification: "Simple",
    damage: "1d4",
    range: "30/60 ft",
    properties: ["Light"],
  },
  {
    id: "blaster-rifle",
    name: "Blaster Rifle",
    category: "blaster",
    classification: "Martial",
    damage: "1d8",
    range: "150/600 ft",
    properties: [],
  },
  {
    id: "disruptor-rifle",
    name: "Disruptor Rifle",
    category: "blaster",
    damage: "1d12",
    range: "100/900 ft",
    properties: ["Clumsy", "Disintegrator"],
    notes: "Big sniper — may be merged with Sniper Blaster in a future update.",
  },
  {
    id: "sniper-blaster",
    name: "Sniper Blaster",
    category: "blaster",
    damage: "—",
    properties: [],
    notes: "Stats to be filled in.",
  },
  {
    id: "shard-cannon",
    name: "Shard Cannon",
    category: "blaster",
    damage: "1d10",
    range: "20/50 ft",
    properties: [],
    notes: "Shotgun-style weapon.",
  },
  {
    id: "blaster-cannon",
    name: "Blaster Cannon",
    category: "blaster",
    damage: "1d10",
    range: "150/600 ft",
    properties: ["High Recoil"],
    notes: "Medium machine gun equivalent.",
  },
  {
    id: "auto-grenade-launcher",
    name: "Automatic Grenade Launcher",
    category: "blaster",
    damage: "1d8",
    range: "60/100 ft",
    properties: ["Blast (5 ft)", "High Recoil"],
  },
  {
    id: "micro-grenade-launcher",
    name: "Micro-Grenade Launcher",
    category: "blaster",
    damage: "1d6",
    range: "50/80 ft",
    properties: ["Blast (5 ft)"],
  },
  {
    id: "sonic-cannon",
    name: "Sonic Cannon",
    category: "blaster",
    damage: "1d12",
    range: "20 ft",
    properties: ["High Recoil", "Spread Shot (10 ft)"],
    notes: "Giga-shotgun. Forces a saving throw rather than an attack roll.",
  },
  // ── Vibroweapons ─────────────────────────────────────────────────────────
  {
    id: "vibroknife",
    name: "Vibroknife",
    category: "vibroweapon",
    classification: "Simple",
    damage: "1d4",
    properties: ["Finesse", "Light", "Vibrocutter"],
  },
  {
    id: "vibroaxe",
    name: "Vibroaxe",
    category: "vibroweapon",
    classification: "Martial",
    damage: "1d12",
    properties: ["Heavy", "Two-Handed", "Vibrocutter"],
  },
  {
    id: "vibrosword",
    name: "Vibrosword",
    category: "vibroweapon",
    classification: "Martial",
    damage: "1d8 (1d10 Versatile)",
    properties: ["Versatile", "Vibrocutter"],
  },
  {
    id: "vibropike",
    name: "Vibropike",
    category: "vibroweapon",
    classification: "Martial",
    damage: "1d10",
    properties: ["Heavy", "Reach", "Two-Handed", "Vibrocutter"],
  },
  {
    id: "electrostaff",
    name: "Electrostaff",
    category: "vibroweapon",
    classification: "Martial",
    damage: "1d8",
    properties: ["Reach", "Electrified"],
  },
  {
    id: "electrohammer",
    name: "Electrohammer",
    category: "vibroweapon",
    classification: "Martial",
    damage: "1d10",
    properties: ["Electrowave (5 ft)"],
  },
  {
    id: "electrodagger",
    name: "Electrodagger",
    category: "vibroweapon",
    damage: "1d4",
    properties: ["Finesse", "Light", "Electrified"],
  },
  {
    id: "electrobaton",
    name: "Electrobaton",
    category: "vibroweapon",
    classification: "Martial",
    damage: "1d6",
    properties: ["Finesse", "Light", "Electrified"],
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
}

export const items: Item[] = [
  // ── Medical ──────────────────────────────────────────────────────────────
  {
    id: "bacta-patch",
    name: "Bacta Patch",
    category: "Medical",
    description: "Heals 2d4+2 HP.",
  },
  {
    id: "bacta-autoinjector",
    name: "Bacta Autoinjector",
    category: "Medical",
    description: "Heals 4d4+4 HP.",
  },
  {
    id: "stim-injector",
    name: "Stim Injector",
    category: "Medical",
    description:
      "Heal 1d6 HP and gain an additional 10ft of movement and an additional bonus action for five turns. Each turn after the first, take 1d6 damage.",
  },
  {
    id: "medical-kit",
    name: "Medical Kit",
    category: "Medical",
    description:
      "A medical kit containing basic first aid supplies. Grants Advantage on Medicine checks.",
  },
  // ── Grenades ─────────────────────────────────────────────────────────────
  {
    id: "thermal-detonator",
    name: "Thermal Detonator",
    category: "Grenade",
    description:
      "Deals 2d6+2 damage in a 10ft area. Can be thrown 30ft.",
  },
  {
    id: "concussion-grenade",
    name: "Concussion Grenade",
    category: "Grenade",
    description:
      "Deals 2d4 damage in a 10ft area. Propels all hit targets 5ft away from the grenade. Can be thrown 30ft.",
  },
  {
    id: "ion-grenade",
    name: "Ion Grenade",
    category: "Grenade",
    description:
      "Deals 1d6 damage in a 10ft area. Deals double damage to temporary HP and droids. Can be thrown 30ft.",
  },
  {
    id: "incendiary-grenade",
    name: "Incendiary Grenade",
    category: "Grenade",
    description:
      "Creates a 10ft patch of fire that lasts for 3 turns. Deals 1d6 damage to every target in the fire. Can be thrown 30ft.",
  },
  {
    id: "smoke-grenade",
    name: "Smoke Grenade",
    category: "Grenade",
    description:
      "Creates a 10ft smoke cloud that lasts for 1 turn, completely obscuring vision, but not more advanced sensors. Can be thrown 30ft.",
  },
  // ── Gear & Tools ─────────────────────────────────────────────────────────
  {
    id: "mechanic-kit",
    name: "Mechanic's Kit",
    category: "Tool",
    description:
      "A kit full of tools. Grants Advantage on Technology rolls to repair mechanical devices.",
  },
  {
    id: "thiefs-kit",
    name: "Thief's Kit",
    category: "Tool",
    description:
      "A kit full of lockpicks, shims, and all other devices needed to break into places. Grants Advantage on Sleight of Hand rolls to break into physically locked places.",
  },
  {
    id: "forgery-kit",
    name: "Forgery Kit",
    category: "Tool",
    description:
      "A kit full of makeup, wigs, and all other necessities for disguises. Grants Advantage on Deception checks to maintain a disguise.",
  },
  {
    id: "motion-sensor",
    name: "Motion Sensor",
    category: "Tool",
    description:
      "A motion sensor capable of detecting any motion within 30ft. Does not see through walls, and lasts for 8 hours once placed. May be configured for remote or direct warning.",
  },
  {
    id: "compact-comms-array",
    name: "Compact Comms Array",
    category: "Tool",
    description:
      "A backpack-sized comms array capable of reaching from surface to orbit on most planets and cutting through most jamming. May not work under heavy jamming or electromagnetic interference.",
  },
  {
    id: "portable-holoprojector",
    name: "Portable Holoprojector",
    category: "Tool",
    description:
      "A small, hand-sized holoprojector capable of configuration to display data or images in a 1ft cube.",
  },
  {
    id: "personal-locator-beacon",
    name: "Personal Locator Beacon",
    category: "Tool",
    description:
      "A locator beacon visible on all emergency comm systems, capable of broadcasting your location for 50 miles in all directions, including up.",
  },
  {
    id: "commlink",
    name: "Commlink",
    category: "Tool",
    description:
      "An earpiece capable of communication with other tuned-in comms systems. It may only transmit up to 25mi away, but more powerful transmitters may be received by it further, depending on the transmitter.",
  },
  {
    id: "firestarter",
    name: "Firestarter",
    category: "Tool",
    description:
      "A small tinderbox capable of lighting small fires on appropriate material.",
  },
  {
    id: "binoculars",
    name: "Binoculars",
    category: "Tool",
    description: "Binoculars capable of 5x zoom.",
  },
  {
    id: "flashlight",
    name: "Flashlight",
    category: "Tool",
    description: "Capable of creating a 30ft cone of light.",
  },
  {
    id: "fibercord",
    name: "Fibercord (50ft)",
    category: "Tool",
    description:
      "50ft of fibercord rope. May be ripped with a DC 17 Strength check.",
  },
  {
    id: "handcuffs",
    name: "Handcuffs",
    category: "Tool",
    description:
      "Metal handcuffs capable of holding two limbs together. May be broken with a DC 19 Strength check.",
  },
  {
    id: "signal-flare",
    name: "Signal Flare",
    category: "Tool",
    description:
      "A flare that shoots up 50ft, creating a flare visible for up to five miles away.",
  },
  // ── Survival & Misc ───────────────────────────────────────────────────────
  {
    id: "thermal-cloak",
    name: "Thermal Cloak",
    category: "Survival",
    description:
      "An insulated, heated cloak capable of keeping warm in extreme cold.",
  },
  {
    id: "emergency-raft",
    name: "Emergency Raft",
    category: "Survival",
    description:
      "An inflatable raft capable of holding four people. This raft has 5 HP, but autoinflates.",
  },
  {
    id: "anti-grav-chute",
    name: "Anti-Grav Chute",
    category: "Survival",
    description:
      "A backpack-sized safety device allowing for the complete elimination of falling damage, no matter the height. May only be used once.",
  },
  {
    id: "null-g-maneuver-pack",
    name: "Null-G Maneuver Pack",
    category: "Survival",
    description:
      "A pack that grants 30ft of fly speed, but only in zero-G environments.",
  },
  {
    id: "goggles",
    name: "Goggles",
    category: "Survival",
    description:
      "Basic plastic goggles capable of keeping most things out of your eyes.",
  },
  // ── Clothing ─────────────────────────────────────────────────────────────
  {
    id: "clothes-fine",
    name: "Clothes (Fine)",
    category: "Clothing",
    description: "Fine clothes, suitable for a formal event.",
  },
  {
    id: "clothes-normal",
    name: "Clothes (Normal)",
    category: "Clothing",
    description: "Normal clothes, suitable for daily use.",
  },
  {
    id: "clothes-ragged",
    name: "Clothes (Ragged)",
    category: "Clothing",
    description: "Ragged clothes, suitable for those down on their luck.",
  },
  // ── Illicit ───────────────────────────────────────────────────────────────
  {
    id: "spice",
    name: "Spice",
    category: "Illicit",
    description:
      "Illicit stimulants, highly prized on the black market.",
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
}

export const armors: Armor[] = [
  // ── Light ─────────────────────────────────────────────────────────────────
  {
    id: "combat-suit",
    name: "Combat Suit",
    weight: "Light",
    ac: "11 + Dex",
    stealthDisadvantage: true,
  },
  {
    id: "advanced-combat-suit",
    name: "Advanced Combat Suit",
    weight: "Light",
    ac: "11 + Dex",
    stealthDisadvantage: false,
  },
  {
    id: "fiber-armor",
    name: "Fiber Armor",
    weight: "Light",
    ac: "12 + Dex",
    stealthDisadvantage: false,
  },
  // ── Medium ────────────────────────────────────────────────────────────────
  {
    id: "mesh-armor",
    name: "Mesh Armor",
    weight: "Medium",
    ac: "13 + Dex (max 2)",
    stealthDisadvantage: false,
  },
  {
    id: "weave-armor",
    name: "Weave Armor",
    weight: "Medium",
    ac: "14 + Dex (max 2)",
    stealthDisadvantage: false,
  },
  {
    id: "light-beskar-armor",
    name: "Light Beskar Armor",
    weight: "Medium",
    ac: "15 + Dex (max 2)",
    stealthDisadvantage: false,
  },
  // ── Heavy ─────────────────────────────────────────────────────────────────
  {
    id: "plastoid-armor",
    name: "Plastoid Armor",
    weight: "Heavy",
    ac: "15",
    stealthDisadvantage: true,
  },
  {
    id: "durasteel-armor",
    name: "Durasteel Armor",
    weight: "Heavy",
    ac: "17",
    stealthDisadvantage: true,
  },
  {
    id: "composite-durasteel-armor",
    name: "Composite Durasteel Armor",
    weight: "Heavy",
    ac: "18",
    stealthDisadvantage: true,
  },
  {
    id: "heavy-beskar-armor",
    name: "Heavy Beskar Armor",
    weight: "Heavy",
    ac: "19",
    stealthDisadvantage: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CHANGELOG
// ─────────────────────────────────────────────────────────────────────────────
export type ChangelogCategory =
  | "Class"
  | "Subclass"
  | "Force Ability"
  | "Gadget"
  | "Weapon"
  | "Item"
  | "Armor"
  | "Rule"
  | "Skill"
  | "Stance"
  | "General";

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
      { category: "Subclass", description: "Sage: Gave limited ability to regenerate Force Points off of short rests based off of hit dice usage to allow for more freedom while forcing costs." },
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
      { category: "Rule", description: "Established core rules including Perception as an Intelligence-based skill." },
      { category: "Stance", description: "Published 7 Lightsaber Stances and 6 Fighting Styles." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FEATS
// ─────────────────────────────────────────────────────────────────────────────
export type FeatCategory =
  | "Combat"
  | "Force"
  | "Utility"
  | "Social"
  | "Technical";

export interface FeatPrerequisite {
  description: string;
}

export interface Feat {
  id: string;
  name: string;
  category: FeatCategory;
  description: string;
  prerequisites?: FeatPrerequisite[];
  /** Optional mechanical benefit summary (e.g. "+1 to Strength, max 20") */
  benefit?: string;
}

export const feats: Feat[] = [
  // TODO: add feats here
];
