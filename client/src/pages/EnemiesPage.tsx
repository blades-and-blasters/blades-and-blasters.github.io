// =============================================================================
// EnemiesPage.tsx — Enemy stat blocks, traits, and faction doctrines
// =============================================================================

import { useState } from "react";
import { Skull, Search, BookOpen } from "lucide-react";
import { enemies, enemyTraits, type Enemy } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const FACTIONS = ["Droid Forces", "Clones", "Force Users"] as const;
type FactionOrTraits = (typeof FACTIONS)[number] | "Traits";

const FACTION_COLORS: Record<string, string> = {
  "Droid Forces": "text-amber-400 border-amber-400/40 bg-amber-400/10",
  "Clones": "text-sky-400 border-sky-400/40 bg-sky-400/10",
  "Force Users": "text-purple-400 border-purple-400/40 bg-purple-400/10",
  "Traits": "text-slate-400 border-slate-400/40 bg-slate-400/10",
};

const FACTION_ACTIVE: Record<string, string> = {
  "Droid Forces": "border-amber-400/60 bg-amber-400/20 text-amber-300",
  "Clones": "border-sky-400/60 bg-sky-400/20 text-sky-300",
  "Force Users": "border-purple-400/60 bg-purple-400/20 text-purple-300",
  "Traits": "border-slate-400/60 bg-slate-400/20 text-slate-300",
};

const TRAIT_COLORS: Record<string, string> = {
  Boss: "text-red-400 border-red-400/40 bg-red-400/10",
  Commander: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  Commando: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  Droid: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  Clone: "text-sky-400 border-sky-400/40 bg-sky-400/10",
  Jedi: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  Sith: "text-red-400 border-red-400/40 bg-red-400/10",
  Fast: "text-green-400 border-green-400/40 bg-green-400/10",
};

const FACTION_DOCTRINES: Record<string, { title: string; paragraphs: string[] }> = {
  "Droid Forces": {
    title: "Droid Doctrine",
    paragraphs: [
      "The droid forces of the galaxy fundamentally rely on mass, mass, and more mass. An individual B1 battle droid is comparable to a barely-trained militia, at best. Ten billion B1 battle droids, attacking every second of every day for months on end, guided at the platoon level by tactical droids and the strategic level by super tactical droids, combined with the immense power of B2 battle droids, droidekas, and spider droids, however, is a very, very different beast.",
      "On a micro level, the core assumption of any droid force is that they will show up with many, many more droids than their opponents have troops, and this is a very realistic assumption. Any engagement will be composed primarily of B1s, which may be led by a tactical droid. More advanced droid types are much rarer, and are primarily used only for their designed missions — commando droids for stealth missions, spider droids and B2s for heavy assault, and droidekas as mobile heavy firepower.",
      "The first priority of any engagement against droids must be the elimination of the tactical droid, if it is present — it is a major force multiplier, and will act according to this, doing its best to stay alive over attempting to shoot by itself. After that, many tactical options open up, as the tactical intelligence of the droids correspondingly decreases.",
    ],
  },
  "Clones": {
    title: "Clone Doctrine",
    paragraphs: [
      "While the clones are mass-produced in the cloning facilities of Kamino, they are still highly-trained, well-equipped soldiers. In combat, they rely on a backbone of troopers, supported by additional assets — heavy gunners to pin enemies down, combat engineers to destroy structures and clustered enemies alike, shieldbearers to lead from the front, and sharpshooters to provide accurate, targeted fire, all guided by sergeants.",
      "ARC troopers are rarely present on the frontlines — instead, they are most commonly deployed deep behind enemy lines, performing sabotage and reconnaissance to enable the rest of the clones.",
      "Should a target be deemed of sufficient priority, then the commandos will be sent in. The assassination of a key target behind enemy lines, the destruction of a vital factory, the sabotage of a starship yard — a single squad of four commandos is a force capable of shaping wars, and they are employed as such.",
    ],
  },
  "Force Users": {
    title: "Force User Doctrine",
    paragraphs: [
      "Force users are among the most dangerous individual combatants in the galaxy. Their ability to deflect blaster fire, move with superhuman speed, and manipulate the battlefield with the Force makes them a priority target — and a priority threat.",
      "Engaging a Force user in direct combat without preparation is rarely advisable. Coordinated fire from multiple angles, area denial, and disrupting their concentration are the most effective approaches.",
    ],
  },
};

function StatBlock({ enemy }: { enemy: Enemy }) {
  const [expanded, setExpanded] = useState(false);

  const passives = enemy.actions.filter((a) => a.type === "passive");
  const actions = enemy.actions.filter((a) => a.type === "action");
  const bonuses = enemy.actions.filter((a) => a.type === "bonus");
  const reactions = enemy.actions.filter((a) => a.type === "reaction");

  return (
    <div className="glass-card rounded-lg border border-border/50 overflow-hidden">
      <button
        className="w-full text-left p-4 hover:bg-white/5 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <Skull size={14} className="text-muted-foreground shrink-0" />
              <h3 className="text-base font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {enemy.name}
              </h3>
              <span className="text-xs text-muted-foreground">{enemy.size}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {enemy.traits.map((t) => (
                <span key={t} className={cn("ability-tag text-[10px]", TRAIT_COLORS[t] ?? "text-slate-400 border-slate-400/40 bg-slate-400/10")}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3 text-xs text-muted-foreground shrink-0 mono">
            <span><span className="text-foreground/60">AC</span> {enemy.ac}</span>
            <span><span className="text-foreground/60">HP</span> {enemy.hp}{enemy.tempHp ? <span className="text-sky-400"> (+{enemy.tempHp})</span> : null}</span>
            <span><span className="text-foreground/60">Spd</span> {enemy.speed}</span>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border/30 p-4 space-y-4">
          <div className="grid grid-cols-6 gap-1 text-center">
            {(["STR", "DEX", "CON", "INT", "WIS", "CHA"] as const).map((stat) => {
              const val = { STR: enemy.str, DEX: enemy.dex, CON: enemy.con, INT: enemy.int, WIS: enemy.wis, CHA: enemy.cha }[stat];
              const mod = Math.floor((val - 10) / 2);
              return (
                <div key={stat} className="bg-white/5 rounded p-1.5">
                  <div className="text-[10px] text-muted-foreground mono">{stat}</div>
                  <div className="text-sm font-bold text-foreground">{val}</div>
                  <div className="text-[10px] text-muted-foreground">{mod >= 0 ? "+" : ""}{mod}</div>
                </div>
              );
            })}
          </div>

          {passives.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Passives</div>
              <div className="space-y-2">
                {passives.map((a) => (
                  <div key={a.name} className="text-sm">
                    <span className="font-semibold text-foreground">{a.name}. </span>
                    <span className="text-muted-foreground">{a.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {actions.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Actions</div>
              <div className="space-y-2">
                {actions.map((a) => (
                  <div key={a.name} className="text-sm">
                    <span className="font-semibold text-foreground">{a.name}. </span>
                    <span className="text-muted-foreground">{a.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bonuses.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Bonus Actions</div>
              <div className="space-y-2">
                {bonuses.map((a) => (
                  <div key={a.name} className="text-sm">
                    <span className="font-semibold text-foreground">{a.name}. </span>
                    <span className="text-muted-foreground">{a.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {reactions.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Reactions</div>
              <div className="space-y-2">
                {reactions.map((a) => (
                  <div key={a.name} className="text-sm">
                    <span className="font-semibold text-foreground">{a.name}. </span>
                    <span className="text-muted-foreground">{a.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Tactics</div>
            <p className="text-sm text-muted-foreground italic">{enemy.tactics}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EnemiesPage() {
  const [activeTab, setActiveTab] = useState<FactionOrTraits>("Droid Forces");
  const [search, setSearch] = useState("");

  const tabs: FactionOrTraits[] = [...FACTIONS, "Traits"];

  const filtered = activeTab !== "Traits"
    ? enemies.filter((e) => {
        const matchFaction = e.faction === activeTab;
        const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase()) || e.traits.some((t) => t.toLowerCase().includes(search.toLowerCase()));
        return matchFaction && matchSearch;
      })
    : [];

  const doctrine = activeTab !== "Traits" ? FACTION_DOCTRINES[activeTab] : null;

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-red-400 border-red-400/40 bg-red-400/10">Enemies</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Enemy Compendium
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Stat blocks for common enemies organized by faction, plus trait definitions. Click any entry to expand its full stat block.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setSearch(""); }}
            className={cn(
              "ability-tag cursor-pointer transition-colors text-sm px-3 py-1",
              activeTab === tab
                ? FACTION_ACTIVE[tab]
                : "text-muted-foreground border-border hover:text-foreground"
            )}
          >
            {tab}
            {tab !== "Traits" && (
              <span className="ml-1.5 text-xs opacity-60">
                ({enemies.filter((e) => e.faction === tab).length})
              </span>
            )}
            {tab === "Traits" && (
              <span className="ml-1.5 text-xs opacity-60">({enemyTraits.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* Traits tab */}
      {activeTab === "Traits" && (
        <div className="space-y-3">
          {enemyTraits.map((trait) => (
            <div key={trait.id} className="glass-card rounded-lg border border-border/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={cn("ability-tag text-xs font-semibold", TRAIT_COLORS[trait.name] ?? "text-slate-400 border-slate-400/40 bg-slate-400/10")}>
                  {trait.name}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{trait.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Faction tab */}
      {activeTab !== "Traits" && (
        <>
          {/* Search */}
          <div className="relative mb-5">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search enemies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          <div className="text-xs text-muted-foreground mb-4 mono">
            {filtered.length} / {enemies.filter((e) => e.faction === activeTab).length} enemies
          </div>

          <div className="space-y-3 mb-8">
            {filtered.map((enemy) => (
              <StatBlock key={enemy.id} enemy={enemy} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground mb-8">
              No enemies match your search.
            </div>
          )}

          {/* Doctrine */}
          {doctrine && (
            <div className="glass-card rounded-xl border border-border/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-muted-foreground" />
                <h2 className="text-lg font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {doctrine.title}
                </h2>
              </div>
              <div className="space-y-3">
                {doctrine.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
