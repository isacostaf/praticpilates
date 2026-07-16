export const siteConfig = {
  name: "Pratic Pilates",
  phoneDisplay: "+55 61 98191-9910",
  address: "SQSW 302, Bloco B, Sala 109 — Sudoeste/Octogonal, Brasília - DF, 70673-612",
  addressShort: "Sudoeste, Brasília - DF",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SQSW+302+Sala+109+Sudoeste+Brasilia+DF+70673-612",
}

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de marcar uma aula no Pratic Pilates.",
)

export const whatsappUrl = `https://wa.me/5561981919910?text=${whatsappMessage}`
