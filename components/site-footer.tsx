import { siteConfig } from "@/lib/site"


export function SiteFooter() {
  return (
    <footer className="relative z-10 px-6 pb-10">
      <div className="max-w-6xl mx-auto bg-background/70 backdrop-blur-xl rounded-3xl border border-border/60 border-t-2 border-t-[#8B6F47]/60 px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p
              className="text-2xl text-primary"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{siteConfig.addressShort}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>{siteConfig.phoneDisplay}</p>
            <p className="mt-1">Seg a Sex · Horários sob agendamento</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
