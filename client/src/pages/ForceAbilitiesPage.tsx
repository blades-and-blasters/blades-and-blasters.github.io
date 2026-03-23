// =============================================================================
// ForceAbilitiesPage.tsx — All Force abilities with filtering
// =============================================================================

import { useState } from "react";
import { Zap, Search } from "lucide-react";
import { forceAbilities, ForceAlignment } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const allTags = Array.from(
  new Set(forceAbilities.flatMap((a) => a.tags))
).sort();

const actionTypeColors: Record<string, string> = {
  Action: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  "Bonus Action": "text-green-400 border-green-400/40 bg-green-400/10",
  Attack: "text-red-400 border-red-400/40 bg-red-400/10",
  Reaction: "text-amber-400 border-amber-400/40 bg-amber-400/10",
};

const alignmentStyles: Record<ForceAlignment, { label: string; className: string }> = {
  light: {
    label: "Light Side",
    className: "text-sky-300 border-sky-300/40 bg-sky-300/10",
  },
  dark: {
    label: "Dark Side",
    className: "text-red-400 border-red-400/40 bg-red-400/10",
  },
  universal: {
    label: "Universal",
    className: "text-slate-300 border-slate-300/40 bg-slate-300/10",
  },
};

export default function ForceAbilitiesPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = forceAbilities.filter((a) => {
    const matchSearch =
      !search ||
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    const matchTag = !activeTag || a.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-violet-400 border-violet-400/40 bg-violet-400/10">
            Force Abilities
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Force Abilities
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Force powers available to Jedi Knights and Jedi Consulars. Force Points are the primary resource for all Force abilities.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search abilities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "ability-tag cursor-pointer transition-colors",
            !activeTag
              ? "text-violet-400 border-violet-400/60 bg-violet-400/20"
              : "text-muted-foreground border-border hover:text-foreground"
          )}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={cn(
              "ability-tag cursor-pointer transition-colors",
              activeTag === tag
                ? "text-violet-400 border-violet-400/60 bg-violet-400/20"
                : "text-muted-foreground border-border hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-xs text-muted-foreground mb-4 mono">
        {filtered.length} / {forceAbilities.length} abilities
      </div>

      {/* Ability cards */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((ability) => {
          const actionColor = actionTypeColors[ability.actionType] ?? "text-muted-foreground border-border";
          return (
            <div key={ability.id} className="glass-card rounded-lg p-5 border border-border/50">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <Zap size={16} className="text-violet-400 shrink-0" />
                  <h3
                    className="text-lg font-bold text-foreground"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {ability.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn("ability-tag", alignmentStyles[ability.alignment].className)}>
                    {alignmentStyles[ability.alignment].label}
                  </span>
                  <span className={cn("ability-tag", actionColor)}>
                    {ability.actionType}
                  </span>
                  <span className="ability-tag text-violet-400 border-violet-400/40 bg-violet-400/10 mono">
                    {ability.cost}
                  </span>
                </div>
              </div>

              {ability.range && (
                <div className="text-xs text-muted-foreground mb-2">
                  <span className="text-foreground/50">Range:</span> {ability.range}
                </div>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {ability.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {ability.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={cn(
                      "ability-tag text-[10px] cursor-pointer transition-colors",
                      activeTag === tag
                        ? "text-violet-400 border-violet-400/60 bg-violet-400/20"
                        : "text-muted-foreground border-border/50 hover:text-foreground"
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No abilities match your search.
        </div>
      )}
    </div>
  );
}
