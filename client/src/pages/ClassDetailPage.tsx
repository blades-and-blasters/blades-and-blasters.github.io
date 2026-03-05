// =============================================================================
// ClassDetailPage.tsx — Full class detail with level table and subclass links
// =============================================================================

import { Link, useParams } from "wouter";
import { ChevronLeft, ChevronRight, Zap, Shield, Sword } from "lucide-react";
import { classes, accentColorMap, LevelFeature } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const featureTypeColors: Record<string, string> = {
  passive: "text-blue-400 border-blue-400/40 bg-blue-400/10",
  active: "text-green-400 border-green-400/40 bg-green-400/10",
  asi: "text-amber-400 border-amber-400/40 bg-amber-400/10",
  subclass: "text-violet-400 border-violet-400/40 bg-violet-400/10",
  resource: "text-teal-400 border-teal-400/40 bg-teal-400/10",
};

function FeatureCard({ feature, accent }: { feature: LevelFeature; accent: string }) {
  const typeColor = featureTypeColors[feature.type ?? "passive"];
  return (
    <div className="glass-card rounded-lg p-4 border border-border/50">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "shrink-0 mono text-xs font-bold px-2 py-1 rounded border",
            accent
          )}
        >
          Lv {feature.level}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              {feature.name}
            </span>
            {feature.type && (
              <span className={cn("ability-tag", typeColor)}>
                {feature.type}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClassDetailPage() {
  const params = useParams<{ classId: string }>();
  const cls = classes.find((c) => c.id === params.classId);

  if (!cls) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Class not found. <Link href="/classes"><span className="text-primary underline cursor-pointer">Back to classes</span></Link>
      </div>
    );
  }

  const colors = accentColorMap[cls.accent];

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/classes">
          <span className="hover:text-foreground cursor-pointer flex items-center gap-1 transition-colors">
            <ChevronLeft size={14} />
            Classes
          </span>
        </Link>
        <span>/</span>
        <span className={colors.text}>{cls.name}</span>
      </div>

      {/* Header */}
      <div className={cn("glass-card rounded-xl p-6 mb-8 border-l-4", colors.border)}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1
              className={cn("text-4xl font-bold mb-1", colors.text)}
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              {cls.name}
            </h1>
            <p className="text-muted-foreground italic mb-4">{cls.tagline}</p>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-2xl">
              {cls.description}
            </p>
          </div>
          <div className={cn("ability-tag text-2xl px-4 py-2", colors.badge)}>
            {cls.hitDie}
          </div>
        </div>
      </div>

      {/* Proficiencies & Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="stat-block rounded-lg">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Saving Throws</div>
          <div className="text-sm text-foreground">{cls.savingThrows.join(", ")}</div>
        </div>
        <div className="stat-block rounded-lg">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Armor Proficiencies</div>
          <div className="text-sm text-foreground">{cls.armorProficiencies.join(", ")}</div>
        </div>
        <div className="stat-block rounded-lg">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Weapon Proficiencies</div>
          <div className="text-sm text-foreground">{cls.weaponProficiencies.join(", ")}</div>
        </div>
        <div className="stat-block rounded-lg">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Skill Choices</div>
          <div className="text-sm text-foreground">
            Choose {cls.skills.choose} from: {cls.skills.from.join(", ")}
          </div>
        </div>
        {cls.spellcastingAbility && (
          <div className="stat-block rounded-lg">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Spellcasting Ability</div>
            <div className="text-sm text-foreground">{cls.spellcastingAbility}</div>
          </div>
        )}
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Class Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cls.resources.map((res) => (
            <div key={res.name} className={cn("glass-card rounded-lg p-4 border", colors.border + "/30")}>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={14} className={colors.text} />
                <span className={cn("font-bold text-sm", colors.text)} style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {res.name}
                </span>
                {res.maxValue && (
                  <span className={cn("ability-tag ml-auto", colors.badge)}>
                    Max: {res.maxValue}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{res.description}</p>
              {res.recharge && (
                <div className="mt-2 text-xs text-muted-foreground">
                  <span className="text-foreground/60">Recharge:</span> {res.recharge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Class Features */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Class Features
        </h2>
        <div className="space-y-3">
          {cls.features.map((feature, i) => (
            <FeatureCard
              key={`${feature.level}-${feature.name}-${i}`}
              feature={feature}
              accent={colors.badge}
            />
          ))}
        </div>
      </div>

      {/* Subclasses */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Subclasses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cls.subclasses.map((sub) => (
            <Link key={sub.id} href={`/classes/${cls.id}/${sub.id}`}>
              <div
                className={cn(
                  "glass-card rounded-xl p-5 cursor-pointer transition-all duration-150 hover:scale-[1.01] group border",
                  colors.border + "/30",
                  colors.bgMuted
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3
                      className={cn("text-xl font-bold mb-1", colors.text)}
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {sub.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {sub.description}
                    </p>
                    <div className="mt-3 text-xs text-muted-foreground">
                      {sub.features.length} features · Unlocked at level 3
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
