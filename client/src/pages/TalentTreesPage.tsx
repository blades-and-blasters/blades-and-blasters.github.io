// =============================================================================
// TalentTreesPage.tsx — Talent Trees reference page
// Class-tabbed layout: jump directly to your class's trees.
// Talent names are blank slots awaiting user input.
// =============================================================================
import { useState, useEffect } from "react";
import { useSearch } from "wouter";
import { GitBranch } from "lucide-react";
import { talentTrees, TalentTree, TalentTier } from "@/lib/gameData";
import { cn } from "@/lib/utils";

// ── Accent colour maps ────────────────────────────────────────────────────────
const accentText: Record<string, string> = {
  blue: "text-blue-400",
  indigo: "text-indigo-400",
  teal: "text-teal-400",
  cyan: "text-cyan-400",
  sky: "text-sky-400",
  pink: "text-pink-400",
  rose: "text-rose-400",
  green: "text-green-400",
  lime: "text-lime-400",
  yellow: "text-yellow-400",
  red: "text-red-400",
  orange: "text-orange-400",
  amber: "text-amber-400",
  purple: "text-purple-400",
};
const accentBorder: Record<string, string> = {
  blue: "border-blue-400/40",
  indigo: "border-indigo-400/40",
  teal: "border-teal-400/40",
  cyan: "border-cyan-400/40",
  sky: "border-sky-400/40",
  pink: "border-pink-400/40",
  rose: "border-rose-400/40",
  green: "border-green-400/40",
  lime: "border-lime-400/40",
  yellow: "border-yellow-400/40",
  red: "border-red-400/40",
  orange: "border-orange-400/40",
  amber: "border-amber-400/40",
  purple: "border-purple-400/40",
};
const accentBg: Record<string, string> = {
  blue: "bg-blue-400/10",
  indigo: "bg-indigo-400/10",
  teal: "bg-teal-400/10",
  cyan: "bg-cyan-400/10",
  sky: "bg-sky-400/10",
  pink: "bg-pink-400/10",
  rose: "bg-rose-400/10",
  green: "bg-green-400/10",
  lime: "bg-lime-400/10",
  yellow: "bg-yellow-400/10",
  red: "bg-red-400/10",
  orange: "bg-orange-400/10",
  amber: "bg-amber-400/10",
  purple: "bg-purple-400/10",
};
const accentGlow: Record<string, string> = {
  blue: "shadow-blue-400/10",
  indigo: "shadow-indigo-400/10",
  teal: "shadow-teal-400/10",
  cyan: "shadow-cyan-400/10",
  sky: "shadow-sky-400/10",
  pink: "shadow-pink-400/10",
  rose: "shadow-rose-400/10",
  green: "shadow-green-400/10",
  lime: "shadow-lime-400/10",
  yellow: "shadow-yellow-400/10",
  red: "shadow-red-400/10",
  orange: "shadow-orange-400/10",
  amber: "shadow-amber-400/10",
  purple: "shadow-purple-400/10",
};

// ── Subclass groupings (one tab per subclass, grouped visually by parent class) ─
const CLASS_GROUPS: { classLabel: string; subclasses: { id: string; label: string }[] }[] = [
  { classLabel: "Jedi Knight",    subclasses: [{ id: "sentinel", label: "Sentinel" }, { id: "guardian", label: "Guardian" }] },
  { classLabel: "Jedi Consular",  subclasses: [{ id: "sage",      label: "Sage" },     { id: "shadow",   label: "Shadow" }] },
  { classLabel: "Trooper",        subclasses: [{ id: "commando",  label: "Commando" }, { id: "vanguard", label: "Vanguard" }] },
  { classLabel: "Smuggler",       subclasses: [{ id: "gunslinger",label: "Gunslinger" },{ id: "scoundrel",label: "Scoundrel" }] },
  { classLabel: "Agent",          subclasses: [{ id: "operative", label: "Operative" },{ id: "sniper",   label: "Sniper" }] },
  { classLabel: "Bounty Hunter",  subclasses: [{ id: "powertech", label: "Powertech" },{ id: "mercenary",label: "Mercenary" }] },
  { classLabel: "Sith Warrior",   subclasses: [{ id: "marauder",  label: "Marauder" }, { id: "juggernaut",label: "Juggernaut" }] },
  { classLabel: "Sith Inquisitor",subclasses: [{ id: "alchemist", label: "Alchemist" },{ id: "sorcerer", label: "Sorcerer" }] },
];
// Flat list of all subclass tabs for easy lookup
const ALL_TABS = CLASS_GROUPS.flatMap((g) => g.subclasses);

// ── Tier component ────────────────────────────────────────────────────────────
function TierRow({ tier, accent }: { tier: TalentTier; accent: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mb-4">
      {/* Tier label */}
      <div className="flex items-center gap-2 mb-2">
        <span
          className={cn(
            "text-xs font-bold px-2 py-0.5 rounded border",
            accentText[accent] ?? "text-foreground",
            accentBorder[accent] ?? "border-border",
            accentBg[accent] ?? "bg-card"
          )}
          style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.08em" }}
        >
          TIER {tier.tier}
        </span>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      {/* Two talent options side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tier.options.map((talent) => {
          const isSelected = selected === talent.id;
          const hasName = talent.name && talent.name.trim() !== "";
          return (
            <button
              key={talent.id}
              onClick={() => setSelected(isSelected ? null : talent.id)}
              className={cn(
                "text-left glass-card rounded-lg p-4 border transition-all duration-150 focus:outline-none",
                isSelected
                  ? cn(
                      accentBorder[accent] ?? "border-border",
                      accentBg[accent] ?? "bg-card",
                      "shadow-md",
                      accentGlow[accent]
                    )
                  : "border-border/50 hover:border-border"
              )}
            >
              {/* Name slot — blank placeholder if empty */}
              {hasName ? (
                <p
                  className={cn(
                    "font-bold text-sm mb-1",
                    isSelected
                      ? accentText[accent] ?? "text-foreground"
                      : "text-foreground"
                  )}
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {talent.name}
                  {isSelected && (
                    <span className="ml-2 text-xs font-normal opacity-70">(selected)</span>
                  )}
                </p>
              ) : (
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={cn(
                      "h-4 rounded w-28 border border-dashed",
                      isSelected
                        ? cn(accentBorder[accent], accentBg[accent])
                        : "border-border/40 bg-muted/20"
                    )}
                  />
                  {isSelected && (
                    <span className="text-xs text-muted-foreground opacity-70">(selected)</span>
                  )}
                </div>
              )}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {talent.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Tree card component ───────────────────────────────────────────────────────
function TreeCard({ tree }: { tree: TalentTree }) {
  const accent = tree.accent;
  return (
    <div className="glass-card rounded-xl border border-border/50 overflow-hidden mb-8">
      {/* Tree header */}
      <div
        className={cn(
          "px-6 py-4 border-b border-border/50",
          accentBg[accent] ?? "bg-card/50"
        )}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "ability-tag text-xs",
              accentText[accent] ?? "text-foreground",
              accentBorder[accent] ?? "border-border",
              accentBg[accent] ?? "bg-card"
            )}
          >
            Talent Tree
          </span>
        </div>
        <h2
          className={cn(
            "text-2xl font-bold",
            accentText[accent] ?? "text-foreground"
          )}
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          {tree.name}
        </h2>
        <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
          {tree.description}
        </p>
      </div>

      {/* Tiers */}
      <div className="px-6 py-5">
        {tree.tiers.map((tier) => (
          <TierRow key={tier.tier} tier={tier} accent={accent} />
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TalentTreesPage() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const requestedTab = params.get("tab");

  // ?tab= can be either a subclass id (e.g. "sentinel") or a class label (e.g. "Jedi Knight").
  // If it's a class label, default to the first subclass of that class.
  const resolveTab = (raw: string | null): string => {
    if (!raw) return ALL_TABS[0].id;
    // Direct subclass id match
    if (ALL_TABS.find((t) => t.id === raw)) return raw;
    // Class label match — pick first subclass
    const group = CLASS_GROUPS.find((g) => g.classLabel === raw);
    if (group) return group.subclasses[0].id;
    return ALL_TABS[0].id;
  };

  const [activeTab, setActiveTab] = useState(() => resolveTab(requestedTab));

  useEffect(() => {
    setActiveTab(resolveTab(requestedTab));
  }, [requestedTab]);

  const visibleTree = talentTrees.find((t) => t.id === activeTab) ?? null;

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-purple-400 border-purple-400/40 bg-purple-400/10">
            Talent Trees
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Talent Trees
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Talent Trees provide optional specialisation paths available to any character. Each tree
          has four tiers — at each tier you choose one of two talents. Talents are taken in place
          of an Ability Score Improvement, or as granted by a class feature. Click a talent card
          to mark it as selected.
        </p>
      </div>

      {/* Subclass tabs — grouped by parent class */}
      <div className="mb-6 border-b border-border/40 pb-4 space-y-2">
        {CLASS_GROUPS.map((group) => (
          <div key={group.classLabel} className="flex flex-wrap items-center gap-2">
            {/* Class label */}
            <span
              className="text-xs text-muted-foreground/50 w-28 shrink-0 text-right pr-2 border-r border-border/30"
              style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.06em" }}
            >
              {group.classLabel}
            </span>
            {/* Subclass buttons */}
            {group.subclasses.map((sub) => {
              const isActive = sub.id === activeTab;
              const tree = talentTrees.find((t) => t.id === sub.id);
              const accent = tree?.accent ?? "blue";
              return (
                <button
                  key={sub.id}
                  onClick={() => setActiveTab(sub.id)}
                  className={cn(
                    "px-4 py-1.5 rounded-md text-sm font-semibold border transition-all duration-150 focus:outline-none",
                    isActive
                      ? cn(accentText[accent], accentBorder[accent], accentBg[accent])
                      : "border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
                  )}
                  style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "0.04em" }}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Active tree */}
      {visibleTree ? (
        <TreeCard key={visibleTree.id} tree={visibleTree} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <GitBranch size={40} className="text-muted-foreground/30 mb-4" />
          <p
            className="text-xl font-bold text-muted-foreground/50 mb-1"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            No Talent Tree Yet
          </p>
          <p className="text-sm text-muted-foreground/40 max-w-xs">
            This talent tree will appear here once it is added to the rulebook.
          </p>
        </div>
      )}
    </div>
  );
}
