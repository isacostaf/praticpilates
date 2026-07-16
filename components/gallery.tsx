import Image from "next/image"

const photos = [
  { src: "/images/studio-reformer.png", alt: "Reformer no studio Pratic Pilates", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/studio-space.png", alt: "Ambiente sereno do studio", span: "" },
  { src: "/images/studio-detail.png", alt: "Detalhe dos equipamentos de pilates", span: "" },
  { src: "/images/studio-mat.png", alt: "Área de mat pilates com acessórios", span: "md:col-span-2" },
]

export function Gallery() {
  return (
    <section id="galeria" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Nosso espaço</span>
          <h2
            className="mt-4 text-4xl md:text-5xl text-foreground text-balance leading-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            Um ambiente pensado no seu bem-estar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-3xl shadow-sm border border-border/40 ${photo.span}`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
