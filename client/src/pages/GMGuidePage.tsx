// =============================================================================
// GMGuidePage.tsx — Game Master reference
// =============================================================================
import { useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Streamdown } from "streamdown";
import { gmGuide } from "@/lib/gameData";

export default function GMGuidePage() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const articleRef = useRef<HTMLElement>(null);
  const chapter = gmGuide[chapterIndex];

  function selectChapter(index: number) {
    if (index < 0 || index >= gmGuide.length) return;
    setChapterIndex(index);
    articleRef.current?.scrollIntoView({ block: "start" });
  }

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="ability-tag text-amber-400 border-amber-400/40 bg-amber-400/10">
            <BookOpen size={10} className="inline mr-1" /> GAME MASTER
          </span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          GM Guide
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Guidance for constructing operations, designing tactical encounters, managing the economy, and running Blades &amp; Blasters.
        </p>
        <div className="section-divider mt-5" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[230px_minmax(0,1fr)] items-start">
        <nav aria-label="GM Guide chapters" className="glass-card rounded-xl p-3 border border-border xl:sticky xl:top-6">
          <h2 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground px-2 py-2">Chapters</h2>
          <ol className="grid gap-1 sm:grid-cols-2 xl:grid-cols-1">
            {gmGuide.map((item, index) => (
              <li key={item.id}>
                <button type="button" onClick={() => selectChapter(index)}
                  aria-current={index === chapterIndex ? "true" : undefined}
                  className={`w-full text-left rounded-md border px-3 py-2 text-sm flex items-start gap-2 transition-colors ${
                    index === chapterIndex
                      ? "bg-primary/15 text-primary border-primary/30 font-medium"
                      : "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}>
                  <span className="mono shrink-0">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <article ref={articleRef} className="min-w-0 glass-card rounded-xl border border-border p-4 sm:p-6 lg:p-8 scroll-mt-20 lg:scroll-mt-6" aria-labelledby="gm-chapter-title">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Chapter {chapterIndex + 1} of {gmGuide.length}</div>
          <h2 id="gm-chapter-title" className="text-3xl font-bold text-foreground mb-5" style={{ fontFamily: "Rajdhani, sans-serif" }}>{chapter.title}</h2>
          <div className="text-foreground text-sm sm:text-base leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:my-3 [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_li]:my-1 [&_table]:text-sm [&_th]:text-left [&_th]:bg-muted [&_th]:p-2 [&_td]:p-2 [&_td]:border-t [&_td]:border-border [&_pre]:overflow-x-auto [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:rounded-md [&_strong]:font-semibold overflow-x-auto">
            <Streamdown key={chapter.id}>{chapter.description}</Streamdown>
          </div>
          <div className="section-divider my-6" />
          <div className="flex flex-wrap justify-between gap-3">
            <button type="button" disabled={chapterIndex === 0} onClick={() => selectChapter(chapterIndex - 1)} className="flex gap-2 items-center text-sm text-primary disabled:opacity-40 disabled:cursor-not-allowed">
              <ChevronLeft size={16} /> Previous chapter
            </button>
            <button type="button" disabled={chapterIndex === gmGuide.length - 1} onClick={() => selectChapter(chapterIndex + 1)} className="flex gap-2 items-center text-sm text-primary disabled:opacity-40 disabled:cursor-not-allowed">
              Next chapter <ChevronRight size={16} />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
