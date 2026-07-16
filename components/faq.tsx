"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "Preciso ter experiência prévia com pilates?",
    a: "Não. Recebemos desde iniciantes até praticantes avançados. Na primeira aula fazemos uma avaliação para entender seu histórico e montar um programa adequado ao seu nível.",
  },
  {
    q: "Quantos alunos há por turma?",
    a: "Trabalhamos com turmas de no máximo 2 alunos. Assim garantimos correção precisa, segurança e atenção individualizada em cada movimento.",
  },
  {
    q: "Quantas vezes por semana devo praticar?",
    a: "Depende do seu objetivo e condicionamento. Em geral, recomendamos de 2 a 3 vezes por semana para resultados consistentes, mas montamos a frequência ideal para você.",
  },
  {
    q: "O pilates ajuda com dores nas costas?",
    a: "Sim. O método fortalece a musculatura profunda e melhora a postura, sendo muito eficaz no alívio e na prevenção de dores lombares e cervicais. Sempre com acompanhamento profissional.",
  },
  {
    q: "Como faço para começar?",
    a: "É só entrar em contato pelo WhatsApp. Vamos entender seu objetivo, tirar suas dúvidas e agendar sua aula experimental no melhor horário para você.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Dúvidas frequentes</span>
          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="bg-background/70 backdrop-blur-xl rounded-2xl border border-border/60 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-foreground font-medium">{faq.q}</span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-foreground/70 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
