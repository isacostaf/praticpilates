"use client"

import { useState } from "react"
import { Footprints, Moon, Bone, BedDouble, Music2, type LucideIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

type Article = {
  icon: LucideIcon
  title: string
  teaser: string
  content: string
}

const articles: Article[] = [
  {
    icon: Footprints,
    title: "Panturrilha: o segundo coração do corpo",
    teaser: "A bomba muscular que ajuda sua circulação.",
    content:
      "A cada passo, a panturrilha se contrai e ajuda a empurrar o sangue de volta ao coração, vencendo a força da gravidade — por isso é chamada de 'segundo coração'. Uma panturrilha fraca ou pouco ativa, comum na rotina sedentária, pode prejudicar esse retorno venoso e contribuir para pernas cansadas, inchaço e varizes. No Pilates, exercícios de footwork e elevações trabalham essa musculatura com controle e precisão, fortalecendo essa bomba natural e favorecendo uma circulação mais saudável.",
  },
  {
    icon: Moon,
    title: "Pilates noturno: o poder de desacelerar",
    teaser: "Uma prática mais lenta para fechar o dia com calma.",
    content:
      "Diferente de um treino energizante pela manhã, o Pilates à noite pode ter um ritmo mais lento e consciente, com foco em respiração e alongamentos. Esse tipo de prática ajuda a ativar o sistema nervoso parassimpático — responsável pelo estado de relaxamento — soltando tensões acumuladas ao longo do dia e preparando corpo e mente para uma noite de descanso mais tranquila.",
  },
  {
    icon: Bone,
    title: "Pilates e dores na coluna",
    teaser: "Fortalecimento e alinhamento como aliados contra a dor.",
    content:
      "Boa parte das dores na coluna está ligada à fraqueza da musculatura profunda e a desequilíbrios posturais. O Pilates trabalha exatamente esse ponto: fortalece o core — abdômen profundo, estabilizadores da coluna e assoalho pélvico — e melhora a consciência corporal. Com movimentos controlados e progressivos, é possível aliviar tensões crônicas e reduzir a recorrência de crises, sempre respeitando os limites de cada corpo.",
  },
  {
    icon: BedDouble,
    title: "Pilates para ajudar no sono",
    teaser: "Movimento consciente que prepara o corpo para noites melhores.",
    content:
      "A combinação de movimento e respiração profunda praticada no Pilates favorece a redução do cortisol, o hormônio do estresse, e estimula respostas de relaxamento no corpo. A prática regular ajuda a soltar tensões musculares que atrapalham o conforto na hora de dormir e acalma os pensamentos, contribuindo para um sono mais tranquilo e reparador.",
  },
  {
    icon: Music2,
    title: "Pilates e a importância para bailarinas",
    teaser: "Técnica e consciência corporal a serviço da dança.",
    content:
      "O Pilates nasceu próximo ao universo da dança e, até hoje, é um dos treinos complementares mais usados por bailarinas. Ele fortalece a musculatura estabilizadora que protege as articulações do impacto repetitivo do balé, refina o alinhamento e o controle do movimento, e apoia a recuperação do corpo entre ensaios e apresentações intensas.",
  },
]

export function PilatesArticles() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const activeArticle = openIndex !== null ? articles[openIndex] : null

  return (
    <section id="alem-do-movimento" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">
            Curiosidades e cuidados
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground leading-tight text-balance"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Além do movimento
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {articles.map((article, index) => (
            <button
              key={article.title}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group text-left flex flex-col items-start bg-background/60 backdrop-blur-xl rounded-2xl border border-border/50 p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                <article.icon className="w-5 h-5 text-primary" strokeWidth={1.25} />
              </div>

              <h3 className="text-sm text-foreground font-medium leading-snug">{article.title}</h3>

              <span className="mt-3 text-xs text-primary/70 group-hover:text-primary transition-colors">
                Ler mais →
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="sm:max-w-lg rounded-3xl">
          {activeArticle && (
            <>
              <DialogHeader>
                <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center mb-2">
                  <activeArticle.icon className="w-5 h-5 text-primary" strokeWidth={1.25} />
                </div>
                <DialogTitle
                  className="text-xl text-foreground leading-snug"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {activeArticle.title}
                </DialogTitle>
                <DialogDescription className="sr-only">{activeArticle.teaser}</DialogDescription>
              </DialogHeader>

              <p className="text-sm text-foreground/70 leading-relaxed">{activeArticle.content}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
