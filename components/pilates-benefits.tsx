import Image from "next/image"
import { PersonStanding, Dumbbell, Move, HeartPulse, Brain } from "lucide-react"

const benefits = [
  {
    icon: PersonStanding,
    title: "Postura alinhada",
    description: "Coluna mais forte, corpo mais ereto.",
  },
  {
    icon: Dumbbell,
    title: "Força que vem de dentro",
    description: "Core ativado, tonificação equilibrada.",
  },
  {
    icon: Move,
    title: "Flexibilidade e mobilidade",
    description: "Mais amplitude, mais liberdade.",
  },
  {
    icon: HeartPulse,
    title: "Alívio de dores e tensões",
    description: "Menos tensão na lombar e no pescoço.",
  },
  {
    icon: Brain,
    title: "Equilíbrio entre corpo e mente",
    description: "Respiração consciente, mente presente.",
  },
]

export function PilatesBenefits() {
  return (
    <section id="beneficios" className="relative z-10 py-28 pb-1 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] order-1">
          <Image
            src="/images/PN-1.jpg"
            alt="Aluna praticando pilates com a parede do studio ao fundo, com os dizeres postura, alongamento e qualidade de vida"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="order-2">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">
            Por que praticar
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground leading-tight text-balance"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Benefícios do Pilates
          </h2>

          <div className="mt-10 space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-secondary flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-primary" strokeWidth={1.25} />
                </div>

                <div>
                  <h3 className="text-foreground font-medium leading-snug">{benefit.title}</h3>
                  <p className="text-sm text-foreground/55 leading-snug">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
