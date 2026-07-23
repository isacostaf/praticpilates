import { Sprout, Flower2, Wind, HeartHandshake } from "lucide-react"

const phases = [
  {
    icon: Sprout,
    number: "1",
    title: "1º Trimestre",
    subtitle: "Semanas 1–13 · Adaptação",
    description:
      "O corpo começa a se transformar. As aulas priorizam respiração consciente, consciência corporal e fortalecimento leve, sempre respeitando os sinais do corpo.",
  },
  {
    icon: Flower2,
    number: "2",
    title: "2º Trimestre",
    subtitle: "Semanas 14–27 · Energia e estabilidade",
    description:
      "Fase geralmente mais confortável. Fortalecemos pernas, glúteos e estabilizadores pélvicos, aliviando desconfortos e ganhando mais estabilidade para o dia a dia.",
  },
  {
    icon: Wind,
    number: "3",
    title: "3º Trimestre",
    subtitle: "Semanas 28–40 · Preparação",
    description:
      "O foco se volta para a respiração e a mobilidade do quadril, preparando corpo e mente para o momento do parto com mais confiança.",
  },
  {
    icon: HeartHandshake,
    number: "4",
    title: "Pós-parto",
    subtitle: "Após liberação médica · Recuperação",
    description:
      "Um retorno gradual e seguro ao movimento, com atenção especial ao assoalho pélvico e à reconstrução do core, no tempo de cada mamãe.",
  },
]

export function PilatesPregnancy() {
  return (
    <section id="gestacao" className="relative z-10 py-28 pb-1 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">
            Uma jornada acompanhada
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground leading-tight text-balance"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Pilates na Gestação
          </h2>

          <p className="mt-5 text-foreground/65 leading-relaxed">
            Cada fase da gestação pede um cuidado diferente. Adaptamos os exercícios ao seu momento, para
            que você se sinta forte, segura e presente do começo ao pós-parto.
          </p>
        </div>

        {/* Caminho - desktop */}
        <div className="hidden md:block relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/15 via-primary/50 to-primary" />

          <div className="relative grid grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.title} className="flex flex-col items-center text-center">
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/60 flex items-center justify-center shadow-sm">
                    <phase.icon className="w-7 h-7 text-primary" strokeWidth={1.25} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[11px] font-medium flex items-center justify-center border-2 border-background">
                    {phase.number}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 mb-1 mt-2">
                  {phase.subtitle}
                </span>

                <h3
                  className="text-lg text-foreground leading-snug mt-3"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {phase.title}
                </h3>

                <div className="mt-4 w-full bg-background/60 backdrop-blur-xl rounded-[1.75rem] border border-border/50 shadow-sm p-6">
                  <p className="text-sm text-foreground/65 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caminho - mobile */}
        <div className="md:hidden relative pl-6">
          <div className="absolute top-2 bottom-2 left-[27px] w-0.5 bg-gradient-to-b from-primary/15 via-primary/50 to-primary" />

          <div className="space-y-10">
            {phases.map((phase) => (
              <div key={phase.title} className="relative pl-14">
                <div className="absolute left-0 top-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/60 flex items-center justify-center shadow-sm">
                    <phase.icon className="w-6 h-6 text-primary" strokeWidth={1.25} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center border-2 border-background">
                    {phase.number}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70">
                  {phase.subtitle}
                </span>

                <h3
                  className="mt-1 text-lg text-foreground leading-snug"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                >
                  {phase.title}
                </h3>

                <div className="mt-3 bg-background/60 backdrop-blur-xl rounded-2xl border border-border/50 shadow-sm p-5">
                  <p className="text-sm text-foreground/65 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-foreground/45">
          * Sempre com liberação médica e acompanhamento individualizado em cada fase.
        </p>
      </div>
    </section>
  )
}
