import Image from "next/image"

const stats = [
  { value: "Máx. 2", label: "alunos por turma" },
  { value: "100%", label: "aulas personalizadas" },
  { value: "1:1", label: "acompanhamento próximo" },
]

export function AboutPilates() {
  return (
    <section id="sobre" className="relative z-10 py-0 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="items-center">
          {/* <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/PP-closePatricia.jpg"
                alt="Close durante exercicio de braços em aula de pilates"
                width={800}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-background/80 backdrop-blur-xl rounded-2xl border border-border/60 shadow-lg px-6 py-4">
              <p className="text-sm text-muted-foreground">Um espaço, uma pessoa,</p>
              <p
                className="text-2xl text-primary"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
              >
                atenção total.
              </p>
            </div>
          </div> */}

          <div>
            {/* <span className="text-xs uppercase tracking-[0.35em] text-primary/80">O que é o Pilates</span> */}
            <h2
              className="mt-4 mb-4 text-4xl md:text-5xl text-foreground text-balance leading-tight text-center"
              style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
            >
              O que é o Pilates?
            </h2>
            <div  className="bg-background/60 backdrop-blur-md rounded-2xl border border-border/60 p-4 text-center">
              <span className="mt-6 text-xs uppercase tracking-[0.35em] text-[#8B6F47] font-medium">Força, equilíbrio e consciência corporal</span>
              <div className="mt-6 space-y-4 text-foreground/75 leading-relaxed">
                <p>
                  O Pilates é um método que trabalha corpo e mente de forma integrada, fortalecendo a
                  musculatura profunda, melhorando a postura, a flexibilidade e a respiração. Cada
                  movimento é preciso, fluido e realizado com plena consciência.
                </p>
                <p>
                  No {""}
                  <span className="text-primary font-medium">Pratic Pilates</span>, unimos essa técnica
                  milenar a um atendimento exclusivo e um ambiente acolhedor, para que você evolua com
                  segurança e no seu ritmo — seja para reabilitação, condicionamento ou bem-estar.
                </p>
              </div>
            </div>

            {/* <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background/60 backdrop-blur-md rounded-2xl border border-border/60 p-4 text-center"
                >
                  <p
                    className="text-2xl md:text-3xl text-primary"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 600 }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
