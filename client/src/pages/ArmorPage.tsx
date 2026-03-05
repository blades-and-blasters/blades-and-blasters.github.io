// =============================================================================
// ArmorPage.tsx — All armor tiers
// Holonet Terminal design: dark sci-fi dashboard
// =============================================================================

import { Shield, AlertTriangle } from "lucide-react";
import { armors, type ArmorWeight } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const weightColors: Record<ArmorWeight, { badge: string; border: string; text: string }> = {
  Light: {
    badge: "text-green-400 border-green-400/40 bg-green-400/10",
    border: "border-l-green-400",
    text: "text-green-400",
  },
  Medium: {
    badge: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    border: "border-l-amber-400",
    text: "text-amber-400",
  },
  Heavy: {
    badge: "text-red-400 border-red-400/40 bg-red-400/10",
    border: "border-l-red-400",
    text: "text-red-400",
  },
};

const weightOrder: ArmorWeight[] = ["Light", "Medium", "Heavy"];

const weightDescriptions: Record<ArmorWeight, string> = {
  Light: "Light armor offers mobility and stealth at the cost of protection. Adds the wearer's full Dexterity modifier to AC.",
  Medium: "Medium armor balances protection and mobility. Adds the wearer's Dexterity modifier to AC, up to a maximum of +2.",
  Heavy: "Heavy armor provides maximum protection but restricts movement and imposes Disadvantage on Stealth checks.",
};

export default function ArmorPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-orange-400 border-orange-400/40 bg-orange-400/10">
            Armor
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Armor
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Armor available to all characters, organized by weight class. Armor proficiency is determined by your class.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Full comparison table */}
      <div className="mb-10">
        <h2
          className="text-xl font-bold text-foreground mb-4"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          All Armor
        </h2>
        <div className="glass-card rounded-xl overflow-hidden border border-border/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Weight
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  AC
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                  Stealth
                </th>
              </tr>
            </thead>
            <tbody>
              {armors.map((armor, i) => {
                const colors = weightColors[armor.weight];
                return (
                  <tr
                    key={armor.id}
                    className={cn(
                      "border-b border-border/30 hover:bg-card/50 transition-colors",
                      i % 2 === 0 ? "bg-transparent" : "bg-card/20"
                    )}
                  >
                    <td className="px-4 py-3">
                      <span
                        className="font-bold text-foreground"
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {armor.name}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("ability-tag", colors.badge)}>
                        {armor.weight}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="mono text-foreground/90">{armor.ac}</span>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {armor.stealthDisadvantage ? (
                        <div className="flex items-center gap-1 text-amber-400">
                          <AlertTriangle size={12} />
                          <span className="text-xs">Disadvantage</span>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grouped by weight */}
      <div className="space-y-8">
        {weightOrder.map((weight) => {
          const weightArmors = armors.filter((a) => a.weight === weight);
          const colors = weightColors[weight];
          return (
            <div key={weight}>
              <div className="flex items-center gap-3 mb-4">
                <Shield size={18} className={colors.text} />
                <h2
                  className={cn("text-xl font-bold", colors.text)}
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  {weight} Armor
                </h2>
              </div>

              <p className="text-sm text-muted-foreground mb-4 max-w-2xl">
                {weightDescriptions[weight]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {weightArmors.map((armor) => (
                  <div
                    key={armor.id}
                    className={cn(
                      "glass-card rounded-lg p-4 border-l-4",
                      colors.border
                    )}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span
                        className="font-bold text-foreground text-sm"
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {armor.name}
                      </span>
                      <span className="mono text-sm text-foreground/80 shrink-0">
                        {armor.ac}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={cn("ability-tag text-[10px]", colors.badge)}>
                        {armor.weight}
                      </span>
                      {armor.stealthDisadvantage && (
                        <span className="ability-tag text-[10px] text-amber-400 border-amber-400/40 bg-amber-400/10 flex items-center gap-1">
                          <AlertTriangle size={10} />
                          Stealth Disadv.
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
