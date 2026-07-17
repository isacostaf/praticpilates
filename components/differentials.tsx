import { Users, Target, HeartHandshake } from "lucide-react"

const items = [
  {
    icon: Users,
    title: "2 alunos por turma",
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
    <section id="diferenciais" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-xs uppercase tracking-[0.4em] text-primary/70">
            Uma experiência feita para você
          </span>

          <h2
            className="mt-5 text-4xl md:text-5xl text-foreground leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
            }}
          >
            Nosso Diferencial
          </h2>
        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">

          {items.map((item) => (
            <div
              key={item.title}
              className="relative pt-16"
            >

              {/* Ícone fora do card */}
              <div
                className="
                  absolute
                  -top-10
                  left-1/2
                  -translate-x-1/2
                  w-20
                  h-20
                  rounded-full
                  bg-background
                  border
                  border-primary/20
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  z-10
                "
              >
                <item.icon
                  className="w-10 h-10 text-primary"
                  strokeWidth={1}
                />
              </div>


              {/* Card */}
              <div
                className="
                  bg-background/60
                  backdrop-blur-xl
                  rounded-[2rem]
                  border
                  border-border/50
                  px-8
                  pb-8
                  pt-8
                  text-center
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                "
              >

                <h3
                  className="
                    text-2xl
                    text-foreground
                    mb-4
                    leading-snug
                  "
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>


                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-foreground/65
                  "
                >
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}