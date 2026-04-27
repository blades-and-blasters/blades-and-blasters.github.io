// =============================================================================
// SubclassDetailPage.tsx — Full subclass detail
// =============================================================================

import { Link, useParams } from "wouter";
import { ChevronLeft, Zap } from "lucide-react";
import {
  classes, accentColorMap,
  LevelFeature, MutagenicAbility, SniperGadget, OperativeGadget,
  CommandoShot, VanguardAbility, ScoundrelPresent, MercenaryAbility, DroidChassis,
} from "@/lib/gameData";
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

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "Rajdhani, sans-serif" }}>
        {title}
      </h2>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
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

      {/* ── Mutagenic Abilities (Alchemist) ── */}
      {sub.mutagenicAbilities && sub.mutagenicAbilities.length > 0 && (
        <>
          <SectionHeader
            title="Mutagenic Abilities"
            subtitle="Select from this pool when the Alchemical Horror feature or a Mutagenic Evolution feature grants new abilities or Overloads."
          />
          <div className="space-y-3">
            {sub.mutagenicAbilities.map((ability: MutagenicAbility) => (
              <div key={ability.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                      {ability.name}
                    </span>
                    <span className="ability-tag text-purple-400 border-purple-400/40 bg-purple-400/10">mutagenic</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{ability.description}</p>
                  <div className="text-xs border-t border-border/30 pt-2 mt-2">
                    <span className={cn("font-semibold", colors.text)}>Mutagenic Overload: </span>
                    <span className="text-muted-foreground">{ability.overload}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Sniper Gadgets ── */}
      {sub.sniperGadgets && sub.sniperGadgets.length > 0 && (
        <>
          <SectionHeader
            title="Sniper Gadgets"
            subtitle="Exclusive to the Sniper subclass. Gained via the Sniper Gadgets feature at level 3."
          />
          <div className="space-y-3">
            {sub.sniperGadgets.map((g: SniperGadget) => (
              <div key={g.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{g.name}</span>
                  <span className="ability-tag text-teal-400 border-teal-400/40 bg-teal-400/10">{g.slots} {g.slots === 1 ? "slot" : "slots"}</span>
                  <span className="ability-tag text-green-400 border-green-400/40 bg-green-400/10">{g.actionType}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Operative Gadgets ── */}
      {sub.operativeGadgets && sub.operativeGadgets.length > 0 && (
        <>
          <SectionHeader
            title="Operative Gadgets"
            subtitle="Exclusive to the Operative subclass. Gained via Deep Pockets, Deeper Stores at level 3."
          />
          <div className="space-y-3">
            {sub.operativeGadgets.map((g: OperativeGadget) => (
              <div key={g.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{g.name}</span>
                  <span className="ability-tag text-teal-400 border-teal-400/40 bg-teal-400/10">{g.slots} {g.slots === 1 ? "slot" : "slots"}</span>
                  <span className="ability-tag text-green-400 border-green-400/40 bg-green-400/10">{g.actionType}</span>
                  {"uses" in g && (g as any).uses && (
                    <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10">{(g as any).uses} use{(g as any).uses !== "1" && (g as any).uses !== "Unlimited" ? "s" : ""}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Commando Shots ── */}
      {sub.commandoShots && sub.commandoShots.length > 0 && (
        <>
          <SectionHeader
            title="Specialized Shots"
            subtitle="Select from this pool when the Specialized Shots feature grants new shots."
          />
          <div className="space-y-3">
            {sub.commandoShots.map((s: CommandoShot) => (
              <div key={s.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{s.name}</span>
                  <span className="ability-tag text-cyan-400 border-cyan-400/40 bg-cyan-400/10">{s.cost}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{s.description}</p>
                {s.overcharge && (
                  <div className="text-xs border-t border-border/30 pt-2 mt-2">
                    <span className={cn("font-semibold", colors.text)}>Overcharge: </span>
                    <span className="text-muted-foreground">{s.overcharge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Vanguard Abilities ── */}
      {sub.vanguardAbilities && sub.vanguardAbilities.length > 0 && (
        <>
          <SectionHeader
            title="Vanguard Abilities"
            subtitle="Select from this pool when the Vanguard Abilities feature grants new abilities."
          />
          <div className="space-y-3">
            {sub.vanguardAbilities.map((a: VanguardAbility) => (
              <div key={a.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{a.name}</span>
                  <span className="ability-tag text-cyan-400 border-cyan-400/40 bg-cyan-400/10">{a.cost}</span>
                  <span className="ability-tag text-green-400 border-green-400/40 bg-green-400/10">{a.actionType}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{a.description}</p>
                {a.overcharge && (
                  <div className="text-xs border-t border-border/30 pt-2 mt-2">
                    <span className={cn("font-semibold", colors.text)}>Overcharge: </span>
                    <span className="text-muted-foreground">{a.overcharge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Scoundrel Presents ── */}
      {sub.scoundrelPresents && sub.scoundrelPresents.length > 0 && (
        <>
          <SectionHeader
            title="Presents"
            subtitle="Plant these on enemies as a melee attack. Detonated by dealing any weapon damage."
          />
          <div className="space-y-3">
            {sub.scoundrelPresents.map((p: ScoundrelPresent) => (
              <div key={p.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{p.name}</span>
                  <span className="ability-tag text-pink-400 border-pink-400/40 bg-pink-400/10">{p.cost}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Mercenary Arsenal ── */}
      {sub.mercenaryAbilities && sub.mercenaryAbilities.length > 0 && (
        <>
          <SectionHeader
            title="Mercenary Arsenal"
            subtitle="Heat-based abilities that scale with current Heat level. Each tier unlocks at 50 and 70 Heat respectively."
          />
          <div className="space-y-3">
            {sub.mercenaryAbilities.map((a: MercenaryAbility) => (
              <div key={a.id} className="glass-card rounded-lg p-4 border border-border/50">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{a.name}</span>
                  <span className="ability-tag text-orange-400 border-orange-400/40 bg-orange-400/10">{a.heatCost} Heat</span>
                  {a.noAction && <span className="ability-tag text-slate-400 border-slate-400/40 bg-slate-400/10">No Action</span>}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{a.description}</p>
                {(a.tier50 || a.tier70) && (
                  <div className="text-xs border-t border-border/30 pt-2 mt-2 space-y-1">
                    {a.tier50 && (
                      <div>
                        <span className="font-semibold text-amber-400">50+ Heat: </span>
                        <span className="text-muted-foreground">{a.tier50}</span>
                      </div>
                    )}
                    {a.tier70 && (
                      <div>
                        <span className="font-semibold text-red-400">70+ Heat: </span>
                        <span className="text-muted-foreground">{a.tier70}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Droid Chassis (Powertech) ── */}
      {sub.droidChassis && sub.droidChassis.length > 0 && (
        <>
          <SectionHeader
            title="Droid Chassis"
            subtitle="Choose one chassis for your Companion Droid. The droid gains Ability Score Increases at the same rate as you."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {sub.droidChassis.map((d: DroidChassis) => (
              <div key={d.id} className={cn("glass-card rounded-lg p-4 border", colors.border + "/40")}>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="font-bold text-foreground text-sm" style={{ fontFamily: "Rajdhani, sans-serif" }}>{d.name}</span>
                  <span className={cn("ability-tag", colors.badge)}>{d.size}</span>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground mb-3">
                  <div><span className="text-foreground/60">Hit Die:</span> {d.hitDie}/level</div>
                  <div><span className="text-foreground/60">AC:</span> {d.ac}</div>
                  <div><span className="text-foreground/60">Movement:</span> {d.movement}</div>
                  <div><span className="text-foreground/60">Proficiency:</span> {d.proficiency}</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs mono">
                  {(["str","dex","con","int","wis","cha"] as const).map((stat) => (
                    <div key={stat} className="text-center">
                      <div className="text-foreground/40 uppercase">{stat}</div>
                      <div className={cn("font-bold", colors.text)}>{d.stats[stat]}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
