// =============================================================================
// ShipsPage.tsx — Starships, Modules, Systems Criticals, and Supplies
// =============================================================================

import { Rocket, Shield, Zap, Package } from "lucide-react";
import { ships, shipModules, systemsCriticals, suppliesSystem } from "@/lib/gameData";
import { cn } from "@/lib/utils";

function StatBadge({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center bg-card border border-border/50 rounded-lg px-3 py-2 min-w-[56px]">
      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{label}</span>
      <span className="text-base font-bold text-foreground mono">{value}</span>
    </div>
  );
}

export default function ShipsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-sky-400 border-sky-400/40 bg-sky-400/10">
            <Rocket size={10} className="inline mr-1" />SHIPS
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Starships & Space Combat
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          The party may start with one ship or purchase one later. Each ship has module slots for customization,
          a stat block, and a Critical Damage Threshold that triggers Systems Criticals when exceeded in a single turn.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* General Rules */}
      <div className="glass-card rounded-xl p-5 border border-border/50 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>General Rules</h2>
        <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
          <li>Each ship class has a number of module slots. Installing or swapping modules requires one week of dockyard time.</li>
          <li>Each module must be purchased individually. Installation costs 20% of the module's purchase price.</li>
          <li>Each ship has an additional character sheet.</li>
          <li>All shipboard weapons may be fired at once, unless otherwise stated. Targets must be declared before rolls are made.</li>
          <li>After taking at least your Critical Damage Threshold in damage in one turn, cause a Systems Critical on your ship.</li>
          <li>Each ship has a free DEX-based 1d4, 25nmi weapon.</li>
          <li>While a ship has Temporary HP, it cannot receive any Systems Criticals, and damage to its Temporary HP does not count towards its Critical Damage Threshold.</li>
          <li>Jumping to Hyperspace requires one turn of chargeup.</li>
        </ul>
      </div>

      {/* Ship Classes */}
      <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
        Ship Classes
      </h2>
      <div className="space-y-6 mb-10">
        {ships.map((ship) => (
          <div key={ship.id} className="glass-card rounded-xl p-5 border border-border/50">
            <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    {ship.name}
                  </h3>
                  <span className="ability-tag text-sky-400 border-sky-400/40 bg-sky-400/10">{ship.moduleSlots} Modules</span>
                  <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10">
                    {ship.cost.toLocaleString()} cr
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{ship.description}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 mb-3">
              <StatBadge label="STR" value={ship.stats.str} />
              <StatBadge label="DEX" value={ship.stats.dex} />
              <StatBadge label="CON" value={ship.stats.con} />
              {ship.stats.int !== undefined && <StatBadge label="INT" value={ship.stats.int} />}
              <StatBadge label="HP" value={ship.hp} />
              <StatBadge label="AC" value={ship.ac} />
              <StatBadge label="Move" value={`${ship.movement}nmi`} />
              <StatBadge label="Max Wpn" value={ship.maxWeapons} />
              <StatBadge label="Crit Dmg Threshold" value={ship.criticalThreshold} />
            </div>

            <div className="text-xs text-muted-foreground">
              <span className="text-foreground/60">Crew:</span> {ship.crew} &nbsp;·&nbsp;
              <span className="text-foreground/60">Free weapon:</span> {ship.freeWeapon}
            </div>
            {ship.includedModules && (
              <div className="text-xs text-muted-foreground mt-1">
                <span className="text-foreground/60">Included:</span> {ship.includedModules.join("; ")}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Ship Modules */}
      <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
        Ship Modules
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50 text-left">
              <th className="pb-2 pr-4 text-muted-foreground font-semibold">Module</th>
              <th className="pb-2 pr-4 text-muted-foreground font-semibold text-center">Slots</th>
              <th className="pb-2 pr-4 text-muted-foreground font-semibold text-right">Cost</th>
              <th className="pb-2 text-muted-foreground font-semibold">Effect</th>
            </tr>
          </thead>
          <tbody>
            {shipModules.map((mod) => (
              <tr key={mod.id} className="border-b border-border/20 hover:bg-card/50 transition-colors">
                <td className="py-2 pr-4 font-semibold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {mod.name}
                </td>
                <td className="py-2 pr-4 text-center mono text-muted-foreground">{mod.slots}</td>
                <td className="py-2 pr-4 text-right mono text-amber-400 whitespace-nowrap">
                  {mod.cost.toLocaleString()} cr
                </td>
                <td className="py-2 text-muted-foreground">{mod.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Systems Criticals */}
      <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
        <Shield size={20} className="inline mr-2 text-red-400" />
        Systems Criticals
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        When a ship takes damage equal to or exceeding its Critical Damage Threshold in a single turn, roll 1d8 on this table.
      </p>
      <div className="space-y-2 mb-10">
        {systemsCriticals.map((sc) => (
          <div key={sc.roll} className="glass-card rounded-lg p-4 border border-border/50 flex gap-4">
            <div className="shrink-0 mono text-sm font-bold text-red-400 border border-red-400/40 bg-red-400/10 rounded px-2 py-1 h-fit">
              {sc.roll}
            </div>
            <div>
              <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {sc.name}
              </span>
              <p className="text-sm text-muted-foreground mt-0.5">{sc.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Supplies */}
      <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
        <Package size={20} className="inline mr-2 text-green-400" />
        Supplies
      </h2>
      <div className="glass-card rounded-xl p-5 border border-border/50">
        <p className="text-sm text-muted-foreground mb-3">{suppliesSystem.description}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div>
            <span className="text-foreground/60">Max carried:</span>{" "}
            <span className="font-semibold text-foreground">{suppliesSystem.maxCarried} days</span>
          </div>
          <div>
            <span className="text-foreground/60">Ship storage:</span>{" "}
            <span className="font-semibold text-foreground">{suppliesSystem.shipStorage} days</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-3">{suppliesSystem.resupplyNote}</p>
      </div>
    </div>
  );
}
