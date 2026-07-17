"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { whatsappUrl, siteConfig } from "@/lib/site"

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3 leading-none">
          <img
            src="/images/logo.png"
            alt={siteConfig.name}
            className="h-12 md:h-14 w-auto object-contain"
          />

          <div className="flex flex-col">
            <span
              className="text-xl md:text-2xl text-primary tracking-wide"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
            >
              {siteConfig.name}
            </span>

            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Studio
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Marcar aula
          </a>
        </Button>
      </div>
    </nav>
  )
}
