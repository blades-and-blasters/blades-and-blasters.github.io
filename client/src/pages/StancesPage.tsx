// =============================================================================
// StancesPage.tsx — Lightsaber Stances + Fighting Styles
// Holonet Terminal design: dark sci-fi dashboard
// =============================================================================

import { useState } from "react";
import { Shield, Crosshair } from "lucide-react";
import { lightsaberStances, fightingStyles } from "@/lib/gameData";
import { cn } from "@/lib/utils";

type Tab = "stances" | "fighting-styles";

const stanceColors = [
  { card: "text-blue-400 border-blue-400/30 bg-blue-400/5", badge: "text-blue-400 border-blue-400/40 bg-blue-400/10", border: "border-l-blue-400" },
  { card: "text-teal-400 border-teal-400/30 bg-teal-400/5", badge: "text-teal-400 border-teal-400/40 bg-teal-400/10", border: "border-l-teal-400" },
  { card: "text-green-400 border-green-400/30 bg-green-400/5", badge: "text-green-400 border-green-400/40 bg-green-400/10", border: "border-l-green-400" },
  { card: "text-violet-400 border-violet-400/30 bg-violet-400/5", badge: "text-violet-400 border-violet-400/40 bg-violet-400/10", border: "border-l-violet-400" },
  { card: "text-amber-400 border-amber-400/30 bg-amber-400/5", badge: "text-amber-400 border-amber-400/40 bg-amber-400/10", border: "border-l-amber-400" },
  { card: "text-orange-400 border-orange-400/30 bg-orange-400/5", badge: "text-orange-400 border-orange-400/40 bg-orange-400/10", border: "border-l-orange-400" },
  { card: "text-red-400 border-red-400/30 bg-red-400/5", badge: "text-red-400 border-red-400/40 bg-red-400/10", border: "border-l-red-400" },
];

const styleColors = [
  { card: "text-amber-400 border-amber-400/30 bg-amber-400/5", badge: "text-amber-400 border-amber-400/40 bg-amber-400/10", border: "border-l-amber-400" },
  { card: "text-orange-400 border-orange-400/30 bg-orange-400/5", badge: "text-orange-400 border-orange-400/40 bg-orange-400/10", border: "border-l-orange-400" },
  { card: "text-red-400 border-red-400/30 bg-red-400/5", badge: "text-red-400 border-red-400/40 bg-red-400/10", border: "border-l-red-400" },
  { card: "text-rose-400 border-rose-400/30 bg-rose-400/5", badge: "text-rose-400 border-rose-400/40 bg-rose-400/10", border: "border-l-rose-400" },
  { card: "text-sky-400 border-sky-400/30 bg-sky-400/5", badge: "text-sky-400 border-sky-400/40 bg-sky-400/10", border: "border-l-sky-400" },
  { card: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5", badge: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10", border: "border-l-cyan-400" },
];

const classBadgeMap: Record<string, string> = {
  Trooper: "text-red-400 border-red-400/40 bg-red-400/10",
  "Bounty Hunter": "text-orange-400 border-orange-400/40 bg-orange-400/10",
};

export default function StancesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("stances");

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-teal-400 border-teal-400/40 bg-teal-400/10">
            Combat Styles
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Stances &amp; Fighting Styles
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Combat specializations chosen at 1st level. Lightsaber Stances are available to Force-sensitive classes; Fighting Styles are available to martial classes.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Tab bar */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("stances")}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 border",
            activeTab === "stances"
              ? "text-teal-400 border-teal-400/40 bg-teal-400/10"
              : "text-muted-foreground border-border hover:text-foreground"
          )}
        >
          <Shield size={14} className={activeTab === "stances" ? "text-teal-400" : ""} />
          Lightsaber Stances
          <span className="mono text-xs opacity-60">{lightsaberStances.length}</span>
        </button>
        <button
          onClick={() => setActiveTab("fighting-styles")}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 border",
            activeTab === "fighting-styles"
              ? "text-amber-400 border-amber-400/40 bg-amber-400/10"
              : "text-muted-foreground border-border hover:text-foreground"
          )}
        >
          <Crosshair size={14} className={activeTab === "fighting-styles" ? "text-amber-400" : ""} />
          Fighting Styles
          <span className="mono text-xs opacity-60">{fightingStyles.length}</span>
        </button>
      </div>

      {/* ── LIGHTSABER STANCES ── */}
      {activeTab === "stances" && (
        <>
          <div className="mb-5 glass-card rounded-lg p-4 border border-teal-400/20 bg-teal-400/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Available to:</strong> Jedi Knight (1st level), Jedi Consular (1st level).{" "}
              Each character selects <strong className="text-foreground">one stance</strong> at 1st level and retains it for the duration of their career.
            </p>
          </div>

          {/* Stance grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {lightsaberStances.map((stance, i) => {
              const colors = stanceColors[i % stanceColors.length];
              const textColor = colors.card.split(" ")[0];
              return (
                <div
                  key={stance.name}
                  className={cn("glass-card rounded-xl p-5 border", colors.card)}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={cn("p-2 rounded-md bg-card/80", textColor)}>
                      <Shield size={18} />
                    </div>
                    <div>
                      <h3
                        className={cn("text-xl font-bold", textColor)}
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {stance.name}
                      </h3>
                      <span className={cn("ability-tag text-[10px]", colors.badge)}>
                        Lightsaber Stance
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stance.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Comparison table */}
          <h2
            className="text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Quick Comparison
          </h2>
          <div className="glass-card rounded-xl overflow-hidden border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card/50">
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Stance
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Bonus
                  </th>
                </tr>
              </thead>
              <tbody>
                {lightsaberStances.map((stance, i) => {
                  const colors = stanceColors[i % stanceColors.length];
                  return (
                    <tr
                      key={stance.name}
                      className={cn(
                        "border-b border-border/30 hover:bg-card/50 transition-colors",
                        i % 2 === 0 ? "bg-transparent" : "bg-card/20"
                      )}
                    >
                      <td className="px-4 py-3">
                        <span className={cn("ability-tag", colors.badge)}>
                          {stance.name}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {stance.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* ── FIGHTING STYLES ── */}
      {activeTab === "fighting-styles" && (
        <>
          <div className="mb-5 glass-card rounded-lg p-4 border border-amber-400/20 bg-amber-400/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Available to:</strong> Trooper (1st level), Bounty Hunter (1st level).{" "}
              Each character selects <strong className="text-foreground">one Fighting Style</strong> at 1st level. Styles marked with a class badge are exclusive to that class.
            </p>
          </div>

          {/* Style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {fightingStyles.map((style, i) => {
              const colors = styleColors[i % styleColors.length];
              const textColor = colors.card.split(" ")[0];
              return (
                <div
                  key={style.id}
                  className={cn("glass-card rounded-xl p-5 border", colors.card)}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={cn("p-2 rounded-md bg-card/80", textColor)}>
                      <Crosshair size={18} />
                    </div>
                    <div>
                      <h3
                        className={cn("text-xl font-bold", textColor)}
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {style.name}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {style.availableTo.map((cls) => (
                          <span
                            key={cls}
                            className={cn(
                              "ability-tag text-[10px]",
                              classBadgeMap[cls] ?? "text-muted-foreground border-border"
                            )}
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {style.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Comparison table */}
          <h2
            className="text-xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Quick Comparison
          </h2>
          <div className="glass-card rounded-xl overflow-hidden border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card/50">
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Style
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                    Available To
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Bonus
                  </th>
                </tr>
              </thead>
              <tbody>
                {fightingStyles.map((style, i) => {
                  const colors = styleColors[i % styleColors.length];
                  return (
                    <tr
                      key={style.id}
                      className={cn(
                        "border-b border-border/30 hover:bg-card/50 transition-colors",
                        i % 2 === 0 ? "bg-transparent" : "bg-card/20"
                      )}
                    >
                      <td className="px-4 py-3">
                        <span className={cn("ability-tag", colors.badge)}>
                          {style.name}
                        </span>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {style.availableTo.map((cls) => (
                            <span
                              key={cls}
                              className={cn(
                                "ability-tag text-[10px]",
                                classBadgeMap[cls] ?? "text-muted-foreground border-border"
                              )}
                            >
                              {cls}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {style.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
