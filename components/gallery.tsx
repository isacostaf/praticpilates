import Image from "next/image"

const photos = [
  {
    src: "/images/PP-1.jpg",
    alt: "Reformer no studio Pratic Pilates",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/PP-2.jpg",
    alt: "Ambiente do studio",
    span: "",
  },
  {
    src: "/images/PP-3.jpg",
    alt: "Espaço de pilates",
    span: "",
  },
  {
    src: "/images/PP-4.jpg",
    alt: "Equipamentos de pilates",
    span: "md:col-span-2",
  },
  {
    src: "/images/PP-5.jpg",
    alt: "Área de exercícios",
    span: "md:row-span-2",
  },
  {
    src: "/images/PP-6.jpg",
    alt: "Detalhes do studio",
    span: "",
  },
  {
    src: "/images/PP-7.jpg",
    alt: "Sessão de pilates",
    span: "",
  },
  {
    src: "/images/PP-closePatricia.jpg",
    alt: "Sessão de pilates",
    span: "md:row-span-2",
  },
  {
    src: "/images/PP-8.png",
    alt: "Ambiente acolhedor",
    span: "md:col-span-2",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="relative z-10 py-0 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">
            Nosso espaço
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground leading-tight text-balance"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
            }}
          >
            Um ambiente pensado no seu bem-estar
          </h2>

          <p className="mt-5 text-foreground/65 leading-relaxed">
            Um espaço acolhedor, elegante e cuidadosamente preparado para que
            você se concentre apenas no que importa: seu movimento, sua saúde e
            sua qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[240px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-border/30
                shadow-lg
                bg-background/40
                backdrop-blur-sm
                ${photo.span}
              `}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              <div className="absolute inset-3 rounded-[1.5rem] border border-white/10 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}