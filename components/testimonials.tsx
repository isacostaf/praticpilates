import { link } from "fs"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappUrl, siteConfig } from "@/lib/site"


const testimonials = [
  {
    name: "Gabriella Braga",
    role: "Avaliações Google",
    image: "/images/users/gabriellabraga.png",
    link: "https://share.google/tEhkYrhgvxh2A8pS9",
    text: "São os melhores profissionais que conheci nos últimos anos! Faz tempo que não encontro um local tão acolhedor e com professores tão bons no que fazem. Eu estava gestante e foi O MELHOR investimento! Tenho certeza que o meu parto ter sido tão maravilhoso tem tudo a ver com esse acompanhamento: eles se importam verdadeiramente, tem um cronograma individual, dão atenção para cada fase da gestação, trabalham em cima das suas dores e/ou dificuldades e você evolui! Sou grata a Patricia e a prof Karol por tudo. E espero voltar em breve!!",
  },
    {
    name: "Fernando Silva",
    role: "Avaliações Google",
    image: "/images/users/fernandosilva.png",
    link: "https://share.google/D8jb02M5Rf0TmcioM",
    text: "Eu e minha esposa estamos com a Pratic Pilates há mais de oito anos, tempo que por si só dá a dimensão da excelência do estúdio. São fisioterapeutas amigas, dedicadas, que permanentemente buscam aperfeiçoamentos, profundamente atentas às necessidades dos alunos, de tal modo que, se sentirem a necessidade da aplicação de alguma outra técnica fisioterápica em que estão plenamente capacitadas como por exemplo; ventosa, bandagem kinesia, liberação miofascial e outras o fazem, tudo no intuito de fornecer o melhor serviço possível ao cliente. Comandadas pela terna e acolhedora Patrícia, o estúdio é merecedor não de 5, mas de 1000 estrelas, tendo trazido ao longo desses anos grande contribuição em nosso bem estar físico e mental. Nossa gratidao.👏🙌",
  },
  {
    name: "Cristiane Marques",
    role: "Avaliações Google",
    image: "/images/users/cristianemarques.png",
    link: "https://share.google/FVHv4eyK9cj4k10AA",
    text: "Quando eu morava em Brasília, fazia aulas presenciais de Pilates com a Patrícia e adorava. Com a mudança para Berlim, passei a fazer on-line e a qualidade continua impecável! Tenho em casa elástico, bola e alguns itens que auxiliam nos exercícios. A Patrícia é atenciosa, explica cada movimento com clareza e adapta os exercícios para minhas necessidades. As aulas são dinâmicas, bem estruturadas e têm me ajudado muito a aliviar minhas dores e melhorar a postura, mesmo a distância. Recomendo de olhos fechados para quem busca qualidade, segurança e resultados reais no Pilates.",
  },
  {
    name: "Telma Zancanaro",
    role: "Avaliações Google",
    image: "/images/users/telmazancanaro.webp",
    link: "https://share.google/FfrHLpcTIYv2V1aVU",
    text: "Estou no Pratic Pilates desde março de 2012. Sempre fui de começar a me exercitar, mas sem levar adiante. Só depois que 'estraguei' o meu joelho e que passei a levar o exercício a sério. Em 2011, por indicação médica, conheci o Pilates e um ano depois encontrei a fisioterapeuta Patrícia Gontijo, o Pratic Pilates e a sua equipe de excelentes profissionais, todos todos com formação em fisioterapia. É neste ambiente agradável e acolhedor que eu melhorei a minha postura, ganhei força, flexibilidade e depois disposição para a vida. Recomendo! 😊",
  },
  {
    name: "Talita Lima",
    role: "Avaliações Google",
    image: "/images/users/talitalima.png",
    link: "https://share.google/9gqq1yCvMhdV19dJE",
    text: "Ótimo lugar para fazer Pilates! São só 2 alunos por horário, o que deixa a prática melhor acompanhada. O studio foi recém reformado e está lindo! Os aparelhos são novos. Sempre vejo higienização após o uso. E a Patrícia é uma excelente profissional, sempre atenta às necessidades dos alunos! Ela sempre me ajudou nas minhas dores! Recomendo muito!",
  },
  {
    name: "Ana Beatriz Garcia",
    role: "Avaliações Google",
    image: "/images/users/anabeatrizgarcia.png",
    link: "https://share.google/oc1R7ZXYOvt8pFZCi",
    text: "O Pilates virou um dos meus momentos favoritos da semana. Sinto meu corpo mais leve e minha mente mais calma. O ambiente das aulas é tranquilo e motivador, os professores são excelentes e atenciosos, o que torna a prática prazerosa e contribui para o bem-estar físico e mental.",
  }
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-10 py-0 px-6 mt-30">  
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">
            Depoimentos
          </span>

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
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="text-foreground/80 leading-relaxed text-lg italic flex-1">
                {`"${t.text}"`}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <p className="text-foreground font-medium text-sm">
                    {t.name}
                  </p>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-xs hover:text-primary transition-colors underline"
                  >
                    {t.role}
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-22">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-lg shadow-primary/20"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Marcar uma aula
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full bg-background/30 backdrop-blur-md border-foreground/20 text-foreground hover:bg-background/50 px-8 py-6 text-base"
          >
            <a href="https://www.google.com/search?sca_esv=11644df17cdf1a12&sxsrf=APpeQnsywElz8Kf88Eg9wwCl4H4FaeVdDw:1784292996727&q=Pratic+Pilates+Bras%C3%ADlia&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_wChoueU-ezoB6z7kbWsuPrZPHqQaoeM_OjyxySFKr685SYiknBvGaftOTFe2FH_yf6PXnQbtIkZkH1hudJbztlvKrWv6ji7o_xMq51CQhhgSkN72w%3D%3D&sa=X&ved=2ahUKEwjV0vqx4dmVAxUIJ7kGHUpbJFkQrrQLegQIKRAA&cshid=1784293065449000&biw=1380&bih=659&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            >Ver todas as avaliações</a>
          </Button>
        </div>
      </div>
    </section>
  )
}