import { Button } from "@/components/ui/button"
import { whatsappUrl, siteConfig } from "@/lib/site"

export function HeroSection() {
  return (
    <section
      id="top"
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 pt-28 pb-20 text-center">
        <span className="inline-flex items-center gap-2 mb-8 text-[11px] md:text-xs uppercase tracking-[0.4em] text-foreground/70 bg-background/30 backdrop-blur-md rounded-full px-5 py-2.5 border border-foreground/10">
          Studio de Pilates · Sudoeste, Brasília
        </span>

        <h1 className="text-balance leading-[0.85] mb-6" style={{ fontFamily: "var(--font-display)" }}>
          <div className="flex items-baseline justify-center gap-4">
            <span className="text-7xl sm:text-8xl md:text-[9rem] xl:text-[11rem] font-medium tracking-[-0.03em] text-primary">
              Pratic
            </span>

            <span className="text-7xl sm:text-8xl md:text-[9rem] xl:text-[11rem] italic font-light tracking-[-0.02em] text-foreground/85">
              Pilates
            </span>
          </div>
        </h1>

        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-foreground/25" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Est. Brasília</span>
          <span className="h-px w-10 bg-foreground/25" />
        </div>

        <p className="text-base md:text-xl text-foreground/75 text-pretty max-w-xl mx-auto leading-relaxed mb-10">
          Movimento com intenção, cuidado com propósito. Turmas de até 2 alunos, atenção exclusiva e um
          ambiente sereno para reconectar corpo e mente.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg shadow-primary/20"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Marcar uma aula
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full bg-background/30 backdrop-blur-md border-foreground/20 text-foreground hover:bg-background/50 px-8 py-6 text-base"
          >
            <a href="#sobre">Conhecer o studio</a>
          </Button>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/50 hover:text-primary transition-colors"
        aria-label="Rolar para saber mais"
      >
        <span className="block text-[10px] uppercase tracking-[0.3em] mb-2">Explore</span>
        <svg
          className="mx-auto animate-bounce"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
