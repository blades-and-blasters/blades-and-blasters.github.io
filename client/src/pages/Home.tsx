// =============================================================================
// Home.tsx — Holonet Terminal landing / dashboard
// =============================================================================

import { Link } from "wouter";
import {
  Swords,
  Zap,
  Wrench,
  BookOpen,
  ChevronRight,
  Sword,
  Package,
  Shield as ShieldIcon,
  Star,
} from "lucide-react";
import { classes, forceAbilities, gadgets, skills, feats } from "@/lib/gameData";
import { accentColorMap } from "@/lib/gameData";
import { cn } from "@/lib/utils";

const sections = [
  {
    label: "Classes",
    href: "/classes",
    icon: <Swords size={22} />,
    count: classes.length,
    description: "Base classes with unique resources, features, and subclass paths.",
    accent: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
  },
  {
    label: "Stances",
    href: "/stances",
    icon: <ShieldIcon size={22} />,
    count: 7,
    description: "Lightsaber combat stances available to all Force-sensitive classes.",
    accent: "text-teal-400",
    border: "border-teal-400/30",
    bg: "bg-teal-400/5",
  },
  {
    label: "Force Abilities",
    href: "/force-abilities",
    icon: <Zap size={22} />,
    count: forceAbilities.length,
    description: "Force powers available to Jedi Knights and Jedi Consulars.",
    accent: "text-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/5",
  },
  {
    label: "Weapons",
    href: "/weapons",
    icon: <Sword size={22} />,
    count: null,
    description: "Lightsabers, blasters, vibroweapons, and all weapon properties.",
    accent: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/5",
  },
  {
    label: "Armor",
    href: "/armor",
    icon: <ShieldIcon size={22} />,
    count: null,
    description: "Light, medium, and heavy armor with AC values and properties.",
    accent: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
  },
  {
    label: "Items",
    href: "/items",
    icon: <Package size={22} />,
    count: null,
    description: "Consumables, tools, survival gear, clothing, and more.",
    accent: "text-cyan-400",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/5",
  },
  {
    label: "Gadgets",
    href: "/gadgets",
    icon: <Wrench size={22} />,
    count: gadgets.length,
    description: "Technology items available to Agents, Bounty Hunters, and Troopers.",
    accent: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: <Star size={22} />,
    count: skills.length,
    description: "All skills, their governing ability scores, and special rules.",
    accent: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
  },
  {
    label: "Feats",
    href: "/feats",
    icon: <ShieldIcon size={22} />,
    count: feats.length,
    description: "Optional enhancements taken in place of an Ability Score Improvement.",
    accent: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
  },
  {
    label: "Rules",
    href: "/rules",
    icon: <BookOpen size={22} />,
    count: null,
    description: "Special rules, errata, and core mechanics of the system.",
    accent: "text-rose-400",
    border: "border-rose-400/30",
    bg: "bg-rose-400/5",
  },
];

export default function Home() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-primary border-primary/40 bg-primary/10">
            Holonet Terminal
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Blades &amp; Blasters
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          A comprehensive reference for classes, abilities, gadgets, and game mechanics.
          Navigate using the sidebar to explore each section of the ruleset.
        </p>
        <div className="section-divider mt-6" />
      </div>

      {/* Class quick-access */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Classes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {classes.map((cls) => {
            const colors = accentColorMap[cls.accent];
            return (
              <Link key={cls.id} href={`/classes/${cls.id}`}>
                <div
                  className={cn(
                    "glass-card rounded-lg p-4 cursor-pointer transition-all duration-150 hover:scale-[1.02] group",
                    `border-l-4 ${colors.border}`,
                    `hover:${colors.bgMuted}`
                  )}
                >
                  <div className={cn("text-sm font-bold mb-1", colors.text)} style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    {cls.name}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug line-clamp-2">
                    {cls.tagline}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <span className={cn("ability-tag text-[10px]", colors.badge)}>
                      {cls.hitDie}
                    </span>
                    <span className={cn("ability-tag text-[10px]", colors.badge)}>
                      {cls.subclasses.length} subclasses
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Section grid */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          Reference Sections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <div
                className={cn(
                  "glass-card rounded-lg p-5 cursor-pointer transition-all duration-150 hover:scale-[1.01] group",
                  section.border,
                  section.bg
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={cn("p-2 rounded-md bg-card", section.accent)}>
                    {section.icon}
                  </div>
                  {section.count !== null && (
                    <span className="text-xs text-muted-foreground mono">
                      {section.count} entries
                    </span>
                  )}
                </div>
                <div className={cn("font-bold text-base mb-1", section.accent)} style={{ fontFamily: "Rajdhani, sans-serif" }}>
                  {section.label}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Browse</span>
                  <ChevronRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Special rules callout */}
      <div className="glass-card rounded-lg p-5 border border-amber-400/20 bg-amber-400/5">
        <div className="flex items-start gap-3">
          <BookOpen size={18} className="text-amber-400 mt-0.5 shrink-0" />
          <div>
            <div className="font-bold text-amber-400 text-sm mb-1" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              Special Rule: Perception
            </div>
            <p className="text-sm text-muted-foreground">
              Perception is <strong className="text-foreground">Intelligence-based</strong> in this system, not Wisdom. This applies to all Perception checks across all classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
