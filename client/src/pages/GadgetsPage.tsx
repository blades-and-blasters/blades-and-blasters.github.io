// =============================================================================
// GadgetsPage.tsx — All gadgets with filtering
// =============================================================================

import { useState } from "react";
import { Wrench, Search } from "lucide-react";
import { gadgets } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const allTags = Array.from(new Set(gadgets.flatMap((g) => g.tags))).sort();

export default function GadgetsPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [maxSlots, setMaxSlots] = useState<number | null>(null);

  const filtered = gadgets.filter((g) => {
    const matchSearch =
      !search ||
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.description.toLowerCase().includes(search.toLowerCase());
    const matchTag = !activeTag || g.tags.includes(activeTag);
    const matchSlots = maxSlots === null || g.slots <= maxSlots;
    return matchSearch && matchTag && matchSlots;
  });

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10">
            Gadgets
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Gadgets
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Technology items available to Agents, Bounty Hunters, and Troopers. Gadgets occupy Gadget Slots and refresh on long rest.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search gadgets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <select
          value={maxSlots ?? ""}
          onChange={(e) => setMaxSlots(e.target.value ? Number(e.target.value) : null)}
          className="px-3 py-2 text-sm bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option value="">All slot costs</option>
          <option value="1">1 slot or less</option>
          <option value="2">2 slots or less</option>
          <option value="3">3 slots or less</option>
        </select>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTag(null)}
          className={cn(
            "ability-tag cursor-pointer transition-colors",
            !activeTag
              ? "text-amber-400 border-amber-400/60 bg-amber-400/20"
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
                ? "text-amber-400 border-amber-400/60 bg-amber-400/20"
                : "text-muted-foreground border-border hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-xs text-muted-foreground mb-4 mono">
        {filtered.length} / {gadgets.length} gadgets
      </div>

      {/* Gadget cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((gadget) => (
          <div key={gadget.id} className="glass-card rounded-lg p-4 border border-border/50 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Wrench size={14} className="text-amber-400 shrink-0" />
                <h3
                  className="text-base font-bold text-foreground"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {gadget.name}
                </h3>
              </div>
              <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10 mono shrink-0">
                {gadget.slots} slot{gadget.slots !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="text-xs text-muted-foreground mb-2">
              <span className="text-foreground/50">Uses:</span> {gadget.uses}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
              {gadget.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {gadget.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={cn(
                    "ability-tag text-[10px] cursor-pointer transition-colors",
                    activeTag === tag
                      ? "text-amber-400 border-amber-400/60 bg-amber-400/20"
                      : "text-muted-foreground border-border/50 hover:text-foreground"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No gadgets match your search.
        </div>
      )}
    </div>
  );
}
