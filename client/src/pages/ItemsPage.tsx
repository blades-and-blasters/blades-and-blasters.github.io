// =============================================================================
// ItemsPage.tsx — All items with category filtering
// Holonet Terminal design: dark sci-fi dashboard
// =============================================================================

import { useState } from "react";
import { Package, Search } from "lucide-react";
import { items } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Medical: "text-green-400 border-green-400/40 bg-green-400/10",
  Grenade: "text-red-400 border-red-400/40 bg-red-400/10",
  Tool: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  Survival: "text-teal-400 border-teal-400/40 bg-teal-400/10",
  Clothing: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  Illicit: "text-amber-400 border-amber-400/40 bg-amber-400/10",
};

const categoryBorderMap: Record<string, string> = {
  Medical: "border-l-green-400",
  Grenade: "border-l-red-400",
  Tool: "border-l-blue-400",
  Survival: "border-l-teal-400",
  Clothing: "border-l-violet-400",
  Illicit: "border-l-amber-400",
};

const allCategories = Array.from(new Set(items.map((i) => i.category))).sort();

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = items.filter((item) => {
    const matchSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = !activeCategory || item.category === activeCategory;
    return matchSearch && matchCat;
  });

  // Group filtered items by category for display
  const grouped = allCategories.reduce<Record<string, typeof items>>(
    (acc, cat) => {
      const catItems = filtered.filter((i) => i.category === cat);
      if (catItems.length > 0) acc[cat] = catItems;
      return acc;
    },
    {}
  );

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-teal-400 border-teal-400/40 bg-teal-400/10">
            Items
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Items &amp; Equipment
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Consumables, tools, survival gear, clothing, and other equipment available to all characters.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory(null)}
          className={cn(
            "ability-tag cursor-pointer transition-colors",
            !activeCategory
              ? "text-teal-400 border-teal-400/60 bg-teal-400/20"
              : "text-muted-foreground border-border hover:text-foreground"
          )}
        >
          All
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={cn(
              "ability-tag cursor-pointer transition-colors",
              activeCategory === cat
                ? categoryColors[cat] ?? "text-teal-400 border-teal-400/60 bg-teal-400/20"
                : "text-muted-foreground border-border hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="text-xs text-muted-foreground mb-6 mono">
        {filtered.length} / {items.length} items
      </div>

      {/* Grouped items */}
      {Object.keys(grouped).length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No items match your search.
        </div>
      )}

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, catItems]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={cn(
                  "ability-tag font-bold",
                  categoryColors[category] ?? "text-muted-foreground border-border"
                )}
              >
                {category}
              </span>
              <span className="text-xs text-muted-foreground mono">
                {catItems.length} item{catItems.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catItems.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "glass-card rounded-lg p-4 border-l-4",
                    categoryBorderMap[item.category] ?? "border-l-border"
                  )}
                >
                  <div className="flex items-start gap-2 mb-1">
                    <Package
                      size={13}
                      className={cn(
                        "shrink-0 mt-0.5",
                        (categoryColors[item.category] ?? "text-muted-foreground").split(
                          " "
                        )[0]
                      )}
                    />
                    <span
                      className="font-bold text-sm text-foreground"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {item.name}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
