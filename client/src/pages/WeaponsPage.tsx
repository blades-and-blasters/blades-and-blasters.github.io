// =============================================================================
// WeaponsPage.tsx — Lightsabers, Blasters, Vibroweapons, and Weapon Properties
// Holonet Terminal design: dark sci-fi dashboard
// =============================================================================

import { useState } from "react";
import { Sword, Zap, Wrench, BookOpen } from "lucide-react";
import { weapons, weaponProperties, type WeaponCategory } from "@/lib/gameData";
import { cn } from "@/lib/utils";

type Tab = WeaponCategory | "properties";

const tabs: { id: Tab; label: string; icon: React.ReactNode; color: string; badge: string }[] = [
  {
    id: "lightsaber",
    label: "Lightsabers",
    icon: <Zap size={15} />,
    color: "text-blue-400",
    badge: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  },
  {
    id: "blaster",
    label: "Blasters",
    icon: <Sword size={15} />,
    color: "text-amber-400",
    badge: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  },
  {
    id: "vibroweapon",
    label: "Vibroweapons",
    icon: <Wrench size={15} />,
    color: "text-green-400",
    badge: "text-green-400 border-green-400/40 bg-green-400/10",
  },
  {
    id: "properties",
    label: "Properties",
    icon: <BookOpen size={15} />,
    color: "text-violet-400",
    badge: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  },
];

const categoryBorderMap: Record<WeaponCategory, string> = {
  lightsaber: "border-l-blue-400",
  blaster: "border-l-amber-400",
  vibroweapon: "border-l-green-400",
};

const categoryBadgeMap: Record<WeaponCategory, string> = {
  lightsaber: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  blaster: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  vibroweapon: "text-green-400 border-green-400/40 bg-green-400/10",
};

export default function WeaponsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("lightsaber");

  const filteredWeapons =
    activeTab !== "properties"
      ? weapons.filter((w) => w.category === activeTab)
      : [];

  const activeTabMeta = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-blue-400 border-blue-400/40 bg-blue-400/10">
            Weapons
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Weapons
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          All weapons available in the system, organized by category. Each entry lists damage, range, and applicable weapon properties.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Tab bar */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 border",
              activeTab === tab.id
                ? cn(tab.badge, "border-opacity-60")
                : "text-muted-foreground border-border hover:text-foreground hover:border-border/80"
            )}
          >
            <span className={activeTab === tab.id ? tab.color : ""}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Weapon table */}
      {activeTab !== "properties" && (
        <>
          <div className="glass-card rounded-xl overflow-hidden border border-border/50 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card/50">
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Name
                  </th>
                  {activeTab === "blaster" && (
                    <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                      Class
                    </th>
                  )}
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Damage
                  </th>
                  {activeTab === "blaster" && (
                    <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden md:table-cell">
                      Range
                    </th>
                  )}
                  <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden lg:table-cell">
                    Properties
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredWeapons.map((weapon, i) => (
                  <tr
                    key={weapon.id}
                    className={cn(
                      "border-b border-border/30 hover:bg-card/50 transition-colors",
                      i % 2 === 0 ? "bg-transparent" : "bg-card/20"
                    )}
                  >
                    <td className="px-4 py-3">
                      <div>
                        <span
                          className="font-bold text-foreground"
                          style={{ fontFamily: "Rajdhani, sans-serif" }}
                        >
                          {weapon.name}
                        </span>
                        {weapon.notes && (
                          <div className="text-[11px] text-muted-foreground mt-0.5 italic">
                            {weapon.notes}
                          </div>
                        )}
                      </div>
                    </td>
                    {activeTab === "blaster" && (
                      <td className="px-4 py-3 hidden sm:table-cell">
                        {weapon.classification ? (
                          <span
                            className={cn(
                              "ability-tag",
                              weapon.classification === "Simple"
                                ? "text-green-400 border-green-400/40 bg-green-400/10"
                                : "text-amber-400 border-amber-400/40 bg-amber-400/10"
                            )}
                          >
                            {weapon.classification}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    )}
                    <td className="px-4 py-3">
                      <span className="mono text-foreground/90">{weapon.damage}</span>
                    </td>
                    {activeTab === "blaster" && (
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className="mono text-muted-foreground">
                          {weapon.range ?? "—"}
                        </span>
                      </td>
                    )}
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {weapon.properties.length > 0 ? (
                          weapon.properties.map((prop) => (
                            <span
                              key={prop}
                              className={cn("ability-tag text-[10px]", categoryBadgeMap[weapon.category])}
                            >
                              {prop}
                            </span>
                          ))
                        ) : (
                          <span className="text-muted-foreground text-xs">—</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile property expansion */}
          <div className="lg:hidden space-y-3">
            {filteredWeapons.map((weapon) => (
              <div
                key={weapon.id}
                className={cn(
                  "glass-card rounded-lg p-4 border-l-4",
                  categoryBorderMap[weapon.category]
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className="font-bold text-foreground"
                    style={{ fontFamily: "Rajdhani, sans-serif" }}
                  >
                    {weapon.name}
                  </span>
                  <span className="mono text-sm text-foreground/80 shrink-0">
                    {weapon.damage}
                  </span>
                </div>
                {weapon.range && (
                  <div className="text-xs text-muted-foreground mb-2">
                    Range: <span className="mono">{weapon.range}</span>
                  </div>
                )}
                {weapon.properties.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {weapon.properties.map((prop) => (
                      <span
                        key={prop}
                        className={cn("ability-tag text-[10px]", categoryBadgeMap[weapon.category])}
                      >
                        {prop}
                      </span>
                    ))}
                  </div>
                )}
                {weapon.notes && (
                  <p className="text-[11px] text-muted-foreground mt-2 italic">
                    {weapon.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Properties tab */}
      {activeTab === "properties" && (
        <div className="space-y-3">
          {weaponProperties.map((prop) => (
            <div
              key={prop.name}
              className="glass-card rounded-lg p-4 border border-border/50"
            >
              <div className="flex items-start gap-3">
                <span className="ability-tag text-violet-400 border-violet-400/40 bg-violet-400/10 shrink-0 font-bold">
                  {prop.name}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
