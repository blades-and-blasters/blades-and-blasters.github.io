// =============================================================================
// TemplatesPage.tsx — Downloadable character and ship sheet templates
// =============================================================================

import { FileDown, User, Rocket } from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string;
  version: string;
  filename: string;
  icon: React.ReactNode;
  accent: string;
  border: string;
  bg: string;
}

const templates: Template[] = [
  {
    id: "character-sheet",
    name: "Character Sheet",
    description:
      "The official Blades & Blasters character sheet. Tracks ability scores, HP, resources, class features, equipment, and notes.",
    version: "v4.1",
    filename: "Blades_and_Blasters_Character_Sheet_v4-1.pdf",
    icon: <User size={28} />,
    accent: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
  },
  {
    id: "ship-sheet",
    name: "Ship Sheet",
    description:
      "The official starship record sheet. Tracks ship class, stats, installed modules, weapons, HP, and Systems Criticals.",
    version: "v4",
    filename: "Blades_and_Blasters_Ship_Sheet_v4.pdf",
    icon: <Rocket size={28} />,
    accent: "text-sky-400",
    border: "border-sky-400/30",
    bg: "bg-sky-400/5",
  },
];

export default function TemplatesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10">
            <FileDown size={10} className="inline mr-1" />
            TEMPLATES
          </span>
        </div>
        <h1
          className="text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          Templates
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Printable PDF sheets for use at the table. Download, print, and fill in by hand — or open in a PDF viewer that supports form filling.
        </p>
        <div className="section-divider mt-5" />
      </div>

      {/* Template cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {templates.map((t) => (
          <a
            key={t.id}
            href={`/templates/${t.filename}`}
            download={t.filename}
            className={`glass-card rounded-xl p-6 border ${t.border} ${t.bg} flex flex-col gap-4 cursor-pointer hover:scale-[1.01] transition-transform group no-underline`}
          >
            {/* Icon + version */}
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-lg bg-card ${t.accent}`}>
                {t.icon}
              </div>
              <span className="ability-tag text-muted-foreground border-border/50 mono">
                {t.version}
              </span>
            </div>

            {/* Name + description */}
            <div>
              <div
                className={`text-xl font-bold mb-1 ${t.accent}`}
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                {t.name}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Download cue */}
            <div className={`flex items-center gap-2 text-sm font-semibold mt-auto ${t.accent} group-hover:opacity-80 transition-opacity`}>
              <FileDown size={16} />
              <span>Download PDF</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
