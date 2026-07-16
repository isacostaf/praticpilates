import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marina Albuquerque",
    role: "Aluna há 2 anos",
    text: "O atendimento é impecável. Por ser turma reduzida, me sinto totalmente acompanhada. Minha postura e minhas dores nas costas melhoraram completamente.",
  },
  {
    name: "Rafael Monteiro",
    role: "Aluno há 1 ano",
    text: "Ambiente sofisticado e tranquilo. Cada aula é pensada para o meu objetivo. Nunca me senti tão bem cuidado em um studio de pilates.",
  },
  {
    name: "Camila Rezende",
    role: "Aluna há 3 anos",
    text: "O Pratic virou meu refúgio semanal. A equipe é atenciosa, o espaço é lindo e os resultados no meu corpo são visíveis. Recomendo de olhos fechados.",
  },
  {
    name: "Juliana Castro",
    role: "Aluna há 8 meses",
    text: "Comecei para reabilitação de um joelho e hoje faço por prazer. O acompanhamento personalizado fez toda a diferença na minha recuperação.",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Depoimentos</span>
          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            O que nossos alunos dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-background/70 backdrop-blur-xl rounded-3xl border border-border/60 shadow-sm p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed text-lg italic flex-1">
                {`"${t.text}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary text-lg"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
