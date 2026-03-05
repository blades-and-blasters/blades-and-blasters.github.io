// =============================================================================
// SubclassDetailPage.tsx — Full subclass detail
// =============================================================================

import { Link, useParams } from "wouter";
import { ChevronLeft, Zap } from "lucide-react";
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
        <div className={cn("shrink-0 mono text-xs font-bold px-2 py-1 rounded border", accent)}>
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

export default function SubclassDetailPage() {
  const params = useParams<{ classId: string; subclassId: string }>();
  const cls = classes.find((c) => c.id === params.classId);
  const sub = cls?.subclasses.find((s) => s.id === params.subclassId);

  if (!cls || !sub) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Subclass not found.{" "}
        <Link href="/classes">
          <span className="text-primary underline cursor-pointer">Back to classes</span>
        </Link>
      </div>
    );
  }

  const colors = accentColorMap[cls.accent];

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
        <Link href="/classes">
          <span className="hover:text-foreground cursor-pointer flex items-center gap-1 transition-colors">
            <ChevronLeft size={14} />
            Classes
          </span>
        </Link>
        <span>/</span>
        <Link href={`/classes/${cls.id}`}>
          <span className={cn("hover:text-foreground cursor-pointer transition-colors", colors.text)}>
            {cls.name}
          </span>
        </Link>
        <span>/</span>
        <span className="text-foreground">{sub.name}</span>
      </div>

      {/* Header */}
      <div className={cn("glass-card rounded-xl p-6 mb-8 border-l-4", colors.border)}>
        <div className="flex items-start gap-4 flex-wrap">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h1
                className={cn("text-4xl font-bold", colors.text)}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {sub.name}
              </h1>
              <span className={cn("ability-tag", colors.badge)}>
                {cls.name} Subclass
              </span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-2xl mt-3">
              {sub.description}
            </p>
          </div>
        </div>
      </div>

      {/* Subclass Resource (if any) */}
      {sub.classResource && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Subclass Resource
          </h2>
          <div className={cn("glass-card rounded-lg p-5 border", colors.border + "/30")}>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className={colors.text} />
              <span className={cn("font-bold text-sm", colors.text)} style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {sub.classResource.name}
              </span>
              {sub.classResource.maxValue && (
                <span className={cn("ability-tag ml-auto", colors.badge)}>
                  Max: {sub.classResource.maxValue}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sub.classResource.description}
            </p>
            {sub.classResource.recharge && (
              <div className="mt-2 text-xs text-muted-foreground">
                <span className="text-foreground/60">Recharge:</span> {sub.classResource.recharge}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Features */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Subclass Features
        </h2>
        <div className="space-y-3">
          {sub.features.map((feature, i) => (
            <FeatureCard
              key={`${feature.level}-${feature.name}-${i}`}
              feature={feature}
              accent={colors.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
