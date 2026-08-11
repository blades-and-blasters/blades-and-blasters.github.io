// =============================================================================
// CharacterCreationPage.tsx — Character Creation guide
// =============================================================================

import { UserPlus } from "lucide-react";

const ABILITY_SCORES = [
  { score: "6–7", mod: "−2" },
  { score: "8–9", mod: "−1" },
  { score: "10–11", mod: "+0" },
  { score: "12–13", mod: "+1" },
  { score: "14–15", mod: "+2" },
  { score: "16–17", mod: "+3" },
  { score: "18–19", mod: "+4" },
  { score: "20–21", mod: "+5" },
];

const PROFICIENCY_BONUS = [
  { levels: "1–4", bonus: "+2" },
  { levels: "5–8", bonus: "+3" },
  { levels: "9–12", bonus: "+4" },
  { levels: "13–16", bonus: "+5" },
  { levels: "17–18", bonus: "+6" },
];

const SKILLS = [
  { ability: "Strength", skills: ["Athletics"] },
  { ability: "Dexterity", skills: ["Piloting", "Sleight of Hand", "Stealth"] },
  { ability: "Intelligence", skills: ["Investigation", "Lore", "Perception", "Technology"] },
  { ability: "Wisdom", skills: ["Animal Handling", "Insight", "Medicine", "Survival"] },
  { ability: "Charisma", skills: ["Deception", "Intimidation", "Performance", "Persuasion"] },
];

const STARTING_EQUIPMENT: { cls: string; items: string[]; note: string }[] = [
  {
    cls: "Jedi Knight",
    items: [
      "1 Lightsaber",
      "1 set of Mesh Armor",
      "1 Field Kit",
      "Choose one: Binoculars or a Medical Kit",
    ],
    note: "The Jedi Knight begins well equipped for frontline combat, with medium armor and a standard Lightsaber. Your final choice gives you either greater battlefield awareness or basic medical support.",
  },
  {
    cls: "Jedi Consular",
    items: [
      "1 Lightsaber",
      "1 set of Advanced Combat Suit armor",
      "1 Field Kit",
      "Choose one: Portable Holoprojector or Medical Kit",
    ],
    note: "The Jedi Consular begins more lightly equipped than the Jedi Knight, reflecting their greater emphasis on Force abilities, diplomacy, and utility.",
  },
  {
    cls: "Trooper",
    items: [
      "1 set of Plastoid Armor",
      "1 Vibroknife",
      "1 Field Kit",
      "Choose one: Blaster Rifle or Shard Cannon",
      "Choose one: Concussion Grenade, Ion Grenade, or Smoke Grenade",
    ],
    note: "The Blaster Rifle favors long-range combat, while the Shard Cannon favors close-range fighting. Your grenade choice gives you damage/displacement, anti-droid capability, or battlefield concealment.",
  },
  {
    cls: "Smuggler",
    items: [
      "2 Blaster Pistols",
      "1 Vibroknife",
      "1 Portable Holoprojector",
      "1 Field Kit",
      "Choose one: Thief's Kit or Forgery Kit",
    ],
    note: "Smugglers begin without armor, allowing them to immediately benefit from Charming Rogue. The second Blaster Pistol allows two-weapon combat from the start. Choose a Thief's Kit for breaking in, or a Forgery Kit for walking through the front door under a different name.",
  },
  {
    cls: "Agent",
    items: [
      "1 set of Advanced Combat Suit armor",
      "1 Blaster Pistol",
      "1 Vibroknife",
      "1 Field Kit",
      "Choose one: Thief's Kit, Forgery Kit, or Mechanic's Kit",
      "Starting Gadgets (via Gadget Slots — no credit cost)",
    ],
    note: "The Agent's equipment provides a basic combat loadout while allowing their tools and Gadgets to define their particular method of infiltration.",
  },
  {
    cls: "Bounty Hunter",
    items: [
      "1 set of Mesh Armor",
      "1 Blaster Pistol",
      "1 pair of Handcuffs",
      "1 pair of Binoculars",
      "1 Field Kit",
      "Choose one: Blaster Rifle or Shard Cannon",
      "Starting Gadgets (via Gadget Slots — no credit cost)",
    ],
    note: "The Blaster Rifle favors hunters who engage their quarry at range, while the Shard Cannon is better suited for close pursuit and aggressive captures.",
  },
  {
    cls: "Sith Warrior",
    items: [
      "1 set of Plastoid Armor",
      "1 Field Kit",
      "Choose one: Lightsaber or Crossguard Saber",
    ],
    note: "The standard Lightsaber provides greater flexibility, while the Crossguard Saber sacrifices that flexibility in exchange for heavier two-handed damage.",
  },
  {
    cls: "Sith Inquisitor",
    items: [
      "1 set of Combat Suit armor",
      "1 Lightsaber",
      "1 Field Kit",
      "Choose one: Portable Holoprojector or Forgery Kit",
    ],
    note: "The Sith Inquisitor begins with lighter protection than the Sith Warrior, relying more heavily on Force abilities and offensive power. The Portable Holoprojector provides general utility, while the Forgery Kit favors manipulation and infiltration.",
  },
];

function Section({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-baseline gap-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>
        {number && <span className="text-muted-foreground text-lg mono">{number}.</span>}
        {title}
      </h2>
      {children}
    </section>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-blue-400/40 pl-4 py-1 text-sm text-muted-foreground italic my-3">
      {children}
    </div>
  );
}

export default function CharacterCreationPage() {
  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-blue-400 border-blue-400/40 bg-blue-400/10">Guide</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Character Creation
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Creating a character in Blades &amp; Blasters is a straightforward process. Your Class determines most of your character's mechanical foundation, while your Ability Scores, skills, equipment, and other choices determine how you approach the galaxy.
        </p>
        <p className="text-muted-foreground mt-2 text-sm">Characters normally begin at Level 1, unless the GM decides otherwise.</p>
        <div className="section-divider mt-5" />
      </div>

      {/* Step 1 — Ability Scores */}
      <Section number="1" title="Roll Your Ability Scores">
        <p className="text-muted-foreground mb-4">Every character has six Ability Scores:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          {[
            { name: "Strength", desc: "Physical power and brute force." },
            { name: "Dexterity", desc: "Speed, reflexes, coordination, and precision." },
            { name: "Constitution", desc: "Toughness, endurance, and physical resilience." },
            { name: "Intelligence", desc: "Reasoning, technical knowledge, investigation, and awareness." },
            { name: "Wisdom", desc: "Intuition, discipline, medical knowledge, and insight." },
            { name: "Charisma", desc: "Confidence, deception, persuasion, intimidation, and force of personality." },
          ].map(({ name, desc }) => (
            <div key={name} className="glass-card rounded-lg p-3 border border-border/50">
              <div className="font-semibold text-foreground text-sm">{name}</div>
              <div className="text-xs text-muted-foreground">{desc}</div>
            </div>
          ))}
        </div>
        <div className="glass-card rounded-lg p-4 border border-border/50 mb-4">
          <p className="text-sm text-foreground font-semibold mb-1">Rolling Method</p>
          <p className="text-sm text-muted-foreground">Roll 4d6 and discard the lowest die. Add the remaining three dice together. Repeat six times, then assign the six results to your Ability Scores however you choose.</p>
        </div>
        <Note>Check your intended Class before assigning your scores. Different Classes benefit heavily from different Ability Scores, particularly Force-using Classes whose Force abilities are governed by a specific Ability Score.</Note>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>Ability Modifiers</h3>
        <p className="text-sm text-muted-foreground mb-3">To determine an Ability Modifier, subtract 10 from the Ability Score, divide the result by 2, and round down.</p>
        <div className="grid grid-cols-4 gap-1 max-w-xs">
          <div className="text-xs font-semibold text-muted-foreground col-span-2 pb-1">Score</div>
          <div className="text-xs font-semibold text-muted-foreground col-span-2 pb-1">Modifier</div>
          {ABILITY_SCORES.map(({ score, mod }) => (
            <>
              <div key={score + "s"} className="text-sm text-foreground col-span-2 mono py-0.5">{score}</div>
              <div key={score + "m"} className={`text-sm col-span-2 mono py-0.5 ${mod.startsWith("+") ? "text-green-400" : mod === "+0" ? "text-muted-foreground" : "text-red-400"}`}>{mod}</div>
            </>
          ))}
        </div>
      </Section>

      {/* Step 2 — Class */}
      <Section number="2" title="Choose a Class">
        <p className="text-muted-foreground mb-3">Your Class determines your:</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4 ml-2">
          {["Hit Die", "Armor Proficiencies", "Weapon Proficiencies", "Saving Throw Proficiencies", "Available Skill Proficiencies", "Class Resources", "Level 1 Features", "Future Class and Subclass Features"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Note>Read through the first few levels of a Class before making your choice. Classes that appear to occupy similar roles may play very differently because of their resources and abilities.</Note>
        <p className="text-sm text-muted-foreground mt-3">At Level 3, your Class allows you to choose a Subclass, which further specializes your character.</p>
      </Section>

      {/* Step 3 — Proficiency Bonus */}
      <Section number="3" title="Record Your Proficiency Bonus">
        <p className="text-sm text-muted-foreground mb-4">Every character has a Proficiency Bonus determined by their total character level. Add it whenever a rule says you are Proficient with the roll being made.</p>
        <div className="grid grid-cols-2 gap-1 max-w-xs mb-4">
          <div className="text-xs font-semibold text-muted-foreground pb-1">Levels</div>
          <div className="text-xs font-semibold text-muted-foreground pb-1">Bonus</div>
          {PROFICIENCY_BONUS.map(({ levels, bonus }) => (
            <>
              <div key={levels + "l"} className="text-sm text-foreground mono py-0.5">{levels}</div>
              <div key={levels + "b"} className="text-sm text-green-400 mono py-0.5">{bonus}</div>
            </>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">This commonly applies to: weapon attacks (if proficient), Saving Throws granted by your Class, Proficient skills, Force and Gadget attacks, and Class features that specifically use your Proficiency Bonus.</p>
        <Note>Your Proficiency Bonus is added once to a roll unless a rule specifically states otherwise.</Note>
      </Section>

      {/* Step 4 — Hit Points */}
      <Section number="4" title="Determine Your Hit Points">
        <p className="text-sm text-muted-foreground mb-3">At Level 1, your maximum HP equals the highest possible result of your Class's Hit Die + your Constitution modifier.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          <div className="glass-card rounded-lg p-3 border border-border/50 text-sm">
            <span className="font-semibold text-foreground">d8 Hit Die:</span>
            <span className="text-muted-foreground"> 8 + Constitution modifier at Level 1; 5 + Con mod per level after.</span>
          </div>
          <div className="glass-card rounded-lg p-3 border border-border/50 text-sm">
            <span className="font-semibold text-foreground">d10 Hit Die:</span>
            <span className="text-muted-foreground"> 10 + Constitution modifier at Level 1; 6 + Con mod per level after.</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">When you gain a level after Level 1, either roll your Hit Die or take its rounded-up average, then add your Constitution modifier.</p>
        <Note>If your Constitution modifier changes later, adjust your maximum HP as though you had possessed the new modifier at every level.</Note>
      </Section>

      {/* Step 5 — Movement */}
      <Section number="5" title="Record Your Movement Speed">
        <p className="text-sm text-muted-foreground mb-2">Characters have a default Movement Speed of <span className="text-foreground font-semibold">30 feet</span>. During your turn you may move up to your Movement Speed, split before, between, and after your actions as normal.</p>
        <p className="text-sm text-muted-foreground">Record 30 ft as your Movement Speed during character creation unless another feature changes it.</p>
      </Section>

      {/* Step 6 — Skills */}
      <Section number="6" title="Choose Your Skills">
        <p className="text-sm text-muted-foreground mb-4">Your Class tells you how many Skill Proficiencies you receive and which skills you may choose from. When Proficient in a skill, add your Proficiency Bonus to checks with that skill.</p>
        <div className="space-y-3 mb-3">
          {SKILLS.map(({ ability, skills }) => (
            <div key={ability} className="glass-card rounded-lg p-3 border border-border/50">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{ability}</div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span key={s} className="ability-tag text-xs text-foreground/80 border-border">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">Some Class features may allow you to use a different Ability Score for particular skill checks.</p>
      </Section>

      {/* Step 7 — Proficiencies */}
      <Section number="7" title="Record Your Proficiencies">
        <p className="text-sm text-muted-foreground">Your Class grants proficiency with certain armor, weapons, and Saving Throws. When making a Saving Throw in which your Class grants proficiency, add your Proficiency Bonus in addition to the relevant Ability Modifier. Weapon and armor proficiencies determine what equipment your character is trained to use effectively.</p>
      </Section>

      {/* Step 8 — Resources */}
      <Section number="8" title="Record Your Class Resources">
        <p className="text-sm text-muted-foreground mb-3">Each Class has one or more resources used to power its abilities. Record any resources your Class receives at your current level, including their maximum values and how they are recovered.</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["Force Points", "Focus", "Energy Cells", "Energy", "Gadget Slots", "Gadget Inventory", "Rage", "Channel Hatred"].map((r) => (
            <span key={r} className="ability-tag text-xs text-blue-400 border-blue-400/40 bg-blue-400/10">{r}</span>
          ))}
        </div>
        <Note>Some resources are gained only after reaching a particular level. You do not need to track a resource until you gain the feature that uses it.</Note>
      </Section>

      {/* Step 9 — Level 1 Choices */}
      <Section number="9" title="Make Your Level 1 Choices">
        <p className="text-sm text-muted-foreground mb-3">Apply every feature your Class grants at Level 1. If one of those features requires you to make a choice, make that choice now.</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2 mb-3">
          <li>Force-wielding Classes commonly begin by selecting a Lightsaber Stance.</li>
          <li>Troopers and Bounty Hunters select a Fighting Style.</li>
          <li>If your Class knows Force Abilities at Level 1, choose your starting Force Abilities.</li>
        </ul>
        <Note>You do not select your Subclass until Level 3, and you cannot select Talents until you have gained the necessary Talent Points.</Note>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>Gadgets</h3>
        <p className="text-sm text-muted-foreground mb-2">Gadgets are not purchased with credits. If your Class grants Gadget Slots, choose any Gadgets you are eligible to equip up to your available Gadget Slots. A Gadget's number of Slots represents how much of your available Gadget capacity it occupies, not its monetary value.</p>
      </Section>

      {/* Starting Equipment */}
      <Section title="Starting Equipment">
        <p className="text-sm text-muted-foreground mb-2">At Level 1, your Class grants you a Starting Equipment package. You do not need to purchase this equipment.</p>

        <div className="glass-card rounded-lg p-4 border border-border/50 mb-5">
          <div className="font-semibold text-foreground mb-2">Field Kit</div>
          <p className="text-sm text-muted-foreground mb-2">Every character begins with a basic Field Kit containing:</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5 ml-2">
            <li>1 Commlink</li>
            <li>1 Flashlight</li>
            <li>50 ft of Fibercord</li>
            <li>1 Bacta Patch</li>
            <li>1 set of Normal Clothes</li>
          </ul>
          <Note>The Field Kit is shorthand for these individual items — it is not a single item.</Note>
        </div>

        <div className="space-y-3">
          {STARTING_EQUIPMENT.map(({ cls, items, note }) => (
            <div key={cls} className="glass-card rounded-lg p-4 border border-border/50">
              <div className="font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>{cls}</div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5 ml-2 mb-2">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="text-xs text-muted-foreground italic">{note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Starting Credits */}
      <Section title="Starting Credits">
        <div className="glass-card rounded-lg p-4 border border-border/50 mb-3">
          <div className="text-2xl font-bold text-yellow-400 mono mb-1">1,500 cr</div>
          <p className="text-sm text-muted-foreground">Every Level 1 character begins with 1,500 credits in addition to their Starting Equipment package. These credits may be spent before the campaign begins or saved for later.</p>
        </div>
        <Note>Gadgets cannot be purchased with credits. The equipment provided by your Class's Starting Equipment package does not reduce your starting credits.</Note>
      </Section>

      {/* Starting Ship */}
      <Section title="Starting Ship">
        <p className="text-sm text-muted-foreground mb-2">At the GM's discretion, the party may begin the campaign with a bare Light Freighter. This ship belongs to the party as a whole and begins with only its standard chassis — no additional purchased Modules unless the GM decides otherwise.</p>
        <Note>Providing a starting ship is entirely optional. Some campaigns may begin with the characters already owning a battered freighter, while others may make acquiring a ship an early goal or adventure reward.</Note>
      </Section>

      {/* Finishing */}
      <Section title="Finishing Your Character">
        <p className="text-sm text-muted-foreground mb-3">Once your major choices are complete, fill out the remaining values on your character sheet:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-4">
          {["Current & Maximum HP", "Armor Class", "Initiative", "Movement Speed", "Proficiency Bonus", "Ability Scores & Modifiers", "Saving Throw Proficiencies", "Skill Proficiencies", "Weapon Attacks & Damage", "Class Resources", "Force Abilities", "Gadgets", "Class Features", "Starting Equipment", "Credits"].map((item) => (
            <div key={item} className="text-xs text-muted-foreground glass-card rounded p-2 border border-border/30">{item}</div>
          ))}
        </div>
      </Section>

      {/* Starting Above Level 1 */}
      <Section title="Starting Above Level 1">
        <p className="text-sm text-muted-foreground mb-3">If a campaign begins above Level 1, create your character normally and then advance one level at a time until reaching the campaign's starting level.</p>
        <p className="text-sm text-muted-foreground mb-2">At each level:</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2 mb-3">
          <li>Increase your maximum HP by rolling your Hit Die or taking its rounded-up average, then adding your Constitution modifier.</li>
          <li>Gain any new Class features and resources.</li>
          <li>Learn any additional Force Abilities, Gadgets, or other selectable abilities.</li>
          <li>Choose your Subclass when you reach Level 3.</li>
          <li>Apply every Ability Score Improvement you would have received.</li>
          <li>Gain any Talent Points from those ASIs and spend them on eligible Talents.</li>
        </ul>
        <Note>Characters beginning above Level 1 still receive their Class's normal Starting Equipment package. The GM may additionally provide extra credits, weapons, armor, or an appropriate ship for the campaign's starting level.</Note>
      </Section>
    </div>
  );
}
