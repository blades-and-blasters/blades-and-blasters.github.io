// =============================================================================
// SkillsPage.tsx — All skills grouped by ability score
// =============================================================================

import { Star } from "lucide-react";
import { skills } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const abilityColors: Record<string, string> = {
  Strength: "text-red-400 border-red-400/40 bg-red-400/10",
  Dexterity: "text-green-400 border-green-400/40 bg-green-400/10",
  Constitution: "text-orange-400 border-orange-400/40 bg-orange-400/10",
  Intelligence: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  Wisdom: "text-teal-400 border-teal-400/40 bg-teal-400/10",
  Charisma: "text-violet-400 border-violet-400/40 bg-violet-400/10",
};

const abilityOrder = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export default function SkillsPage() {
  const grouped = abilityOrder.reduce<Record<string, typeof skills>>(
    (acc, ability) => {
      acc[ability] = skills.filter((s) => s.ability === ability);
      return acc;
    },
    {}
  );

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-green-400 border-green-400/40 bg-green-400/10">
            Skills
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Skills
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          All skills and their governing ability scores. Skills are grouped by ability.
        </p>

        {/* Special rule callout */}
        <div className="mt-4 glass-card rounded-lg p-4 border border-amber-400/30 bg-amber-400/5 flex items-start gap-3">
          <Star size={16} className="text-amber-400 mt-0.5 shrink-0" />
          <div>
            <span className="font-bold text-amber-400 text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Special Rule:{" "}
            </span>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">Perception is Intelligence-based</strong>, not Wisdom. This applies to all Perception checks across all classes.
            </span>
          </div>
        </div>

        <div className="section-divider mt-5" />
      </div>

      {/* Skill table */}
      <div className="mb-8">
        <div className="glass-card rounded-xl overflow-hidden border border-border/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Skill
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Ability
                </th>
                <th className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, i) => {
                const abilityColor = abilityColors[skill.ability] ?? "text-muted-foreground border-border";
                return (
                  <tr
                    key={skill.name}
                    className={cn(
                      "border-b border-border/30 transition-colors hover:bg-card/50",
                      i % 2 === 0 ? "bg-transparent" : "bg-card/20"
                    )}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                          {skill.name}
                        </span>
                        {skill.specialRule && (
                          <span className="ability-tag text-[10px] text-amber-400 border-amber-400/40 bg-amber-400/10">
                            Special
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("ability-tag", abilityColor)}>
                        {skill.ability}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">
                      {skill.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grouped by ability */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Skills by Ability Score
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {abilityOrder.map((ability) => {
            const abilitySkills = grouped[ability];
            if (!abilitySkills || abilitySkills.length === 0) return null;
            const color = abilityColors[ability] ?? "text-muted-foreground border-border";
            return (
              <div key={ability} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <span className={cn("ability-tag font-bold", color)}>
                    {ability}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {abilitySkills.map((skill) => (
                    <li key={skill.name} className="flex items-start gap-2">
                      <span className="text-muted-foreground mt-0.5">·</span>
                      <div>
                        <span className="text-sm text-foreground font-medium">
                          {skill.name}
                        </span>
                        {skill.specialRule && (
                          <span className="ml-2 text-[10px] text-amber-400">
                            ({skill.specialRule})
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
