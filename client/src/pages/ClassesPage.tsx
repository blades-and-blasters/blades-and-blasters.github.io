// =============================================================================
// ClassesPage.tsx — All classes overview
// =============================================================================

import { Link } from "wouter";
import { Swords, ChevronRight, Heart, Shield } from "lucide-react";
import { classes, accentColorMap } from "@/lib/gameData";
import { cn } from "@/lib/utils";

export default function ClassesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-blue-400 border-blue-400/40 bg-blue-400/10">
            Classes
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Character Classes
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Choose your class to define your character's core abilities, resources, and combat role.
          Each class has two subclasses, unlocked at 3rd level.
        </p>
        <div className="section-divider mt-5" />
      </div>

      <div className="grid grid-cols-1 gap-5">
        {classes.map((cls) => {
          const colors = accentColorMap[cls.accent];
          return (
            <Link key={cls.id} href={`/classes/${cls.id}`}>
              <div
                className={cn(
                  "glass-card rounded-xl p-6 cursor-pointer transition-all duration-150 hover:scale-[1.005] group",
                  `border-l-4 ${colors.border}`
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2
                        className={cn("text-2xl font-bold", colors.text)}
                        style={{ fontFamily: "Rajdhani, sans-serif" }}
                      >
                        {cls.name}
                      </h2>
                      <span className={cn("ability-tag", colors.badge)}>
                        {cls.hitDie}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {cls.description}
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="stat-block rounded-md">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Saves</div>
                        <div className="text-xs text-foreground">{cls.savingThrows.join(", ")}</div>
                      </div>
                      <div className="stat-block rounded-md">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Armor</div>
                        <div className="text-xs text-foreground">{cls.armorProficiencies.join(", ")}</div>
                      </div>
                      <div className="stat-block rounded-md">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Resources</div>
                        <div className="text-xs text-foreground">{cls.resources.map(r => r.name).join(", ")}</div>
                      </div>
                      <div className="stat-block rounded-md">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Skills</div>
                        <div className="text-xs text-foreground">Choose {cls.skills.choose}</div>
                      </div>
                    </div>

                    {/* Subclasses */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">Subclasses:</span>
                      {cls.subclasses.map((sub) => (
                        <span key={sub.id} className={cn("ability-tag text-xs", colors.badge)}>
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ChevronRight
                    size={20}
                    className={cn(
                      "shrink-0 mt-1 text-muted-foreground group-hover:text-foreground transition-colors",
                    )}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
