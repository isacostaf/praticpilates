import { Users, Target, HeartHandshake } from "lucide-react"

const items = [
  {
    icon: Users,
    title: "Turmas com no máximo 2 alunos",
    description:
      "Você nunca se sente só mais um. Com turmas reduzidas, garantimos correção precisa, segurança e a atenção que o seu corpo merece.",
  },
  {
    icon: Target,
    title: "Programas personalizados",
    description:
      "Montamos um plano sob medida para o seu objetivo — postura, força, reabilitação ou bem-estar — respeitando seu ritmo e sua história.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento exclusivo",
    description:
      "Nossa equipe acompanha de perto cada evolução, ajustando os exercícios aula a aula para que você alcance resultados reais e duradouros.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Nosso diferencial</span>
          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Uma experiência feita para você
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-background/70 backdrop-blur-xl rounded-3xl border border-border/60 shadow-sm p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3
                className="text-2xl text-foreground mb-3 leading-snug"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
