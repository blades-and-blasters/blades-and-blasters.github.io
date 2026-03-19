// =============================================================================
// FeatsPage.tsx — Character feats available at ASI levels
// Holonet Terminal design: dark sci-fi dashboard
// =============================================================================

import { useState } from "react";
import { Shield } from "lucide-react";
import { feats, type FeatCategory } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const categories: FeatCategory[] = [
  "Combat",
  "Force",
  "Utility",
  "Social",
  "Technical",
];

const categoryColors: Record<FeatCategory, string> = {
  Combat:    "text-red-400 border-red-400/40 bg-red-400/10",
  Force:     "text-blue-400 border-blue-400/40 bg-blue-400/10",
  Utility:   "text-green-400 border-green-400/40 bg-green-400/10",
  Social:    "text-violet-400 border-violet-400/40 bg-violet-400/10",
  Technical: "text-amber-400 border-amber-400/40 bg-amber-400/10",
};

export default function FeatsPage() {
  const [activeCategory, setActiveCategory] = useState<FeatCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = feats.filter((feat) => {
    const matchesCategory =
      activeCategory === "All" || feat.category === activeCategory;
    const matchesSearch =
      search.trim() === "" ||
      feat.name.toLowerCase().includes(search.toLowerCase()) ||
      feat.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10">
            Feats
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Feats
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Optional character enhancements available in place of an Ability Score
          Improvement. Each feat grants a unique passive or active benefit.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search feats..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border rounded-md px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-amber-400/50"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium border transition-all duration-150",
              activeCategory === "All"
                ? "text-amber-400 border-amber-400/60 bg-amber-400/10"
                : "text-muted-foreground border-border hover:text-foreground"
            )}
          >
            ALL
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium border transition-all duration-150",
                activeCategory === cat
                  ? cn(categoryColors[cat], "border-opacity-60")
                  : "text-muted-foreground border-border hover:text-foreground"
              )}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-xs text-muted-foreground mb-4">
        {filtered.length} / {feats.length} feat{feats.length !== 1 ? "s" : ""}
      </p>

      {/* Feat cards */}
      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((feat) => (
            <div
              key={feat.id}
              className="glass-card rounded-lg p-5 border border-border/50"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                <h3
                  className="font-bold text-foreground text-lg leading-tight"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {feat.name}
                </h3>
                <span className={cn("ability-tag shrink-0", categoryColors[feat.category])}>
                  {feat.category}
                </span>
              </div>

              {feat.prerequisites && feat.prerequisites.length > 0 && (
                <p className="text-xs text-muted-foreground mb-2 italic">
                  <span className="font-semibold text-foreground/70">
                    Prerequisite:{" "}
                  </span>
                  {feat.prerequisites.map((p) => p.description).join(", ")}
                </p>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feat.description}
              </p>

              {feat.benefit && (
                <div className="mt-3 px-3 py-2 rounded-md bg-card border border-border/50 text-sm text-foreground/80">
                  <span className="font-semibold text-amber-400">Benefit: </span>
                  {feat.benefit}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Shield size={40} className="text-muted-foreground/30 mb-4" />
          <p
            className="text-xl font-bold text-muted-foreground/50 mb-1"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            {feats.length === 0 ? "No Feats Yet" : "No Results"}
          </p>
          <p className="text-sm text-muted-foreground/40 max-w-xs">
            {feats.length === 0
              ? "Feats will appear here once they are added to the rulebook."
              : "Try adjusting your search or filter."}
          </p>
        </div>
      )}
    </div>
  );
}
