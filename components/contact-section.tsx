import { Button } from "@/components/ui/button"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { whatsappUrl, siteConfig } from "@/lib/site"


export function ContactSection() {
  return (
    <section id="contato" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-background/80 backdrop-blur-xl rounded-[2rem] border border-border/60 shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12">
              <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Contato</span>
              <h2
                className="mt-4 text-4xl md:text-5xl text-foreground text-balance leading-tight"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
              >
                Venha nos conhecer
              </h2>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                Agende sua aula experimental e descubra como o pilates pode transformar o seu dia a dia.
                Estamos à sua espera.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8B6F47]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B6F47]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">Endereço</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div>
                      <p className="text-foreground font-medium text-sm">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">
                        {siteConfig.phoneDisplay}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Marcar uma aula
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-foreground/20 text-foreground hover:bg-secondary/50"
                >
                  <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Ver no mapa
                  </a>
                </Button>
              </div>
            </div>

            <div className="min-h-[300px] md:min-h-full">
              <iframe
                title="Localização do Pratic Pilates"
                src="https://www.google.com/maps?q=CLSW+302+Sudoeste+Brasilia+DF+70673-612&output=embed"
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
