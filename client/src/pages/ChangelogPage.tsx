// Holonet Terminal design system
// ChangelogPage — displays versioned release notes from gameData.ts
// Dark sci-fi aesthetic: glowing accents, monospace version numbers, category badges

import { changelog, type ChangelogCategory } from "@/lib/gameData";
import { ScrollText } from "lucide-react";

const categoryColors: Record<ChangelogCategory, string> = {
  Class:           "text-blue-400 border-blue-400/40 bg-blue-400/10",
  Subclass:        "text-teal-400 border-teal-400/40 bg-teal-400/10",
  "Force Ability": "text-purple-400 border-purple-400/40 bg-purple-400/10",
  Gadget:          "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  Weapon:          "text-red-400 border-red-400/40 bg-red-400/10",
  Item:            "text-amber-400 border-amber-400/40 bg-amber-400/10",
  Armor:           "text-orange-400 border-orange-400/40 bg-orange-400/10",
  Rule:            "text-green-400 border-green-400/40 bg-green-400/10",
  Skill:           "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
  Stance:          "text-pink-400 border-pink-400/40 bg-pink-400/10",
  General:         "text-slate-400 border-slate-400/40 bg-slate-400/10",
};

// Group changes by category within an entry
function groupByCategory(changes: { category: ChangelogCategory; description: string }[]) {
  const map = new Map<ChangelogCategory, string[]>();
  for (const c of changes) {
    if (!map.has(c.category)) map.set(c.category, []);
    map.get(c.category)!.push(c.description);
  }
  return map;
}

export default function ChangelogPage() {
  // Sort newest first
  const sorted = [...changelog].sort((a, b) => {
    const [aMaj, aMin, aPat] = a.version.split(".").map(Number);
    const [bMaj, bMin, bPat] = b.version.split(".").map(Number);
    return bMaj - aMaj || bMin - aMin || bPat - aPat;
  });

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-slate-600/50 bg-slate-800/50 text-slate-400 text-xs font-mono tracking-widest uppercase mb-4">
          <ScrollText className="w-3 h-3" />
          Holonet Terminal
        </div>
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Changelog
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          A record of all updates, additions, and revisions to the ruleset. Add new entries to{" "}
          <code className="font-mono text-xs bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
            gameData.ts
          </code>{" "}
          to keep this page current.
        </p>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <ScrollText className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p>No changelog entries yet.</p>
        </div>
      ) : (
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {sorted.map((entry, idx) => {
              const grouped = groupByCategory(entry.changes);
              const isLatest = idx === 0;

              return (
                <div key={entry.version} className="md:flex gap-8">
                  {/* Version + date column */}
                  <div className="md:w-36 flex-shrink-0 md:text-right mb-4 md:mb-0 relative">
                    <div className="inline-flex md:flex md:flex-col md:items-end gap-2">
                      <span
                        className={`font-mono text-sm font-bold px-2 py-0.5 rounded border ${
                          isLatest
                            ? "text-green-400 border-green-400/40 bg-green-400/10"
                            : "text-slate-400 border-slate-600/40 bg-slate-800/50"
                        }`}
                      >
                        v{entry.version}
                      </span>
                      {isLatest && (
                        <span className="text-xs font-mono text-green-400/70 uppercase tracking-wider">
                          Latest
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground font-mono">
                        {entry.date}
                      </span>
                    </div>

                    {/* Timeline dot */}
                    <div
                      className={`hidden md:block absolute right-[-1.15rem] top-2 w-3 h-3 rounded-full border-2 ${
                        isLatest
                          ? "border-green-400 bg-green-400/30"
                          : "border-slate-500 bg-slate-800"
                      }`}
                    />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-5 shadow-sm">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {entry.summary}
                    </p>

                    {grouped.size > 0 && (
                      <div className="space-y-4">
                        {Array.from(grouped.entries()).map(([cat, descs]) => (
                          <div key={cat}>
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`text-xs font-mono font-semibold px-2 py-0.5 rounded border ${categoryColors[cat]}`}
                              >
                                {cat}
                              </span>
                            </div>
                            <ul className="space-y-1.5 pl-1">
                              {descs.map((desc, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-foreground/80"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                                  {desc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
