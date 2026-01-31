const ducklyns = [
  {
    name: "Pato Clásico",
    description: "El pato de goma tradicional, amarillo y simpático.",
    price: 2.00,
    category: "Clásico",
    photo: "https://m.media-amazon.com/images/I/41yvxsHIJ6L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Pato Surfista",
    description: "Listo para las olas con su tabla de surf y actitud relajada.",
    price: 2.99,
    category: "Deportivo",
    photo: "https://www.duckshop.de/media/image/c2/02/50/Quietscheentchen_Surfer_106532856_600x600.jpg"
  },
  {
    name: "Pato Rugbista",
    description: "Con casco y camiseta, preparado para el contacto en el campo.",
    price: 2.99,
    category: "Deportivo",
    photo: "https://www.paturros.es/wp-content/uploads/2024/04/comprar-patito-goma-rugby.jpg"
  },
  {
    name: "Pato Beisbolista",
    description: "Con gorra y bate, este pato está listo para el home run.",
    price: 2.99,
    category: "Deportivo",
    photo: "https://www.qualitylogoproducts.com/toys/baseball-duck-hq.jpg"
  },
  {
    name: "Pato Boxeador",
    description: "Guantes puestos y mirada feroz, el campeón del ring.",
    price: 2.99,
    category: "Deportivo",
    photo: "https://canarddebain.com/cdn/shop/files/CanardBoxeur-Schnabels.jpg?v=1750354861"
  },
  {
    name: "Pato Frankenstein",
    description: "Verde y con cicatrices, el pato más monstruosamente divertido.",
    price: 2.99,
    category: "Fantástico",
    photo: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-frankenstein.jpg"
  },
  {
    name: "Pato Pirata",
    description: "Con parche en el ojo y sombrero, este pato surca las bañeras como los siete mares.",
    price: 3.50,
    category: "Aventurero",
    photo: "https://www.paturros.es/wp-content/uploads/2021/06/patito-goma-pirata.jpg"
  },
  {
    name: "Pato Unicornio",
    description: "Color pastel y cuerno mágico, el pato más fantástico para soñar en la bañera.",
    price: 3.99,
    category: "Fantástico",
    photo: "https://www.paturros.es/wp-content/uploads/2021/09/comprar-patito-goma-unicornio-xxl-rosa.jpg"
  },
  {
    name: "Pato Doctor",
    description: "Con bata blanca y estetoscopio, cuida de todos en la bañera.",
    price: 3.20,
    category: "Profesiones",
    photo: "https://www.paturros.es/wp-content/uploads/2021/06/comprar-patito-goma-doctor.jpg"
  },
  {
    name: "Pato Chef",
    description: "Sombrero de cocinero y campana en mano, listo para preparar comida.",
    price: 3.20,
    category: "Profesiones",
    photo: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-chef.jpg"
  },
  {
    name: "Pato Policía",
    description: "Con gorra azul y silbato, mantiene el orden en la bañera.",
    price: 3.20,
    category: "Profesiones",
    photo: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-policia.jpg"
  },
  {
    name: "Pato Bombero",
    description: "Con casco rojo y manguera, apaga incendios de espuma.",
    price: 3.20,
    category: "Profesiones",
    photo: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-bombero.jpg"
  },
  {
    name: "Pato Vampiro",
    description: "Con capa negra y colmillos, ideal para baños de medianoche.",
    price: 3.50,
    category: "Fantástico",
    photo: "https://m.media-amazon.com/images/I/41FZAzKqHyL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Pato Princesa",
    description: "Corona dorada y vestido rosa, reina de la bañera.",
    price: 3.99,
    category: "Fantástico",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmgw6gQch6PKvZ3lh_5KhcOMxWCV2LdzFFg&s"
  },
  {
    name: "Pato Astronauta",
    description: "Con casco espacial, explora galaxias de burbujas.",
    price: 4.20,
    category: "Aventurero",
    photo: "https://www.paturros.es/wp-content/uploads/2022/02/pato-goma-astronauta.jpg"
  },
  {
    name: "Pato Mago",
    description: "Con varita y sombrero, convierte el agua en magia.",
    price: 3.80,
    category: "Fantástico",
    photo: "https://canarddebain.com/cdn/shop/files/CanardMagicien01.jpg?v=1750354758&width=1946"
  },
  {
    name: "Pato Diablo",
    description: "Con cuernos y tridente, travieso pero encantador.",
    price: 3.50,
    category: "Fantástico",
    photo: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-diablo.jpg"
  },
  {
    name: "Pato Ángel",
    description: "Con aureola y alas blancas, el más puro del estanque.",
    price: 3.50,
    category: "Fantástico",
    photo: "https://www.paturros.es/wp-content/uploads/2021/01/pato-goma-angel.jpg"
  },
  {
    name: "Pato Vaquero",
    description: "Con sombrero tejano y pañuelo, patrulla el lejano oeste de la bañera.",
    price: 3.20,
    category: "Aventurero",
    photo: "https://m.media-amazon.com/images/I/613SzAa5lXL.jpg"
  },
  {
    name: "Pato Esqueleto",
    description: "Diseño de huesos blancos sobre fondo negro, ideal para Halloween.",
    price: 3.50,
    category: "Fantástico",
    photo: "https://www.paturros.es/wp-content/uploads/2022/11/pato-goma-esqueleto.jpg"
  },
  {
    name: "Pato Marinero",
    description: "Con gorra blanca y uniforme azul, navega por mares de espuma.",
    price: 3.20,
    category: "Profesiones",
    photo: "https://www.paturros.es/wp-content/uploads/2021/04/comprar-patito-goma-marinero.jpg"
  },
  {
    name: "Pato Rockero",
    description: "Con guitarra y gafas oscuras, estrella del baño.",
    price: 3.80,
    category: "Estilo",
    photo: "https://www.paturros.es/wp-content/uploads/2023/01/comprar-patito-goma-rockero.jpg"
  },
  {
    name: "Pato Navidad",
    description: "Con gorro de Papá Noel, ideal para fiestas en la bañera.",
    price: 3.99,
    category: "Temporada",
    photo: "https://www.paturros.es/wp-content/uploads/2021/08/comprar-patito-goma-arbol-navidad.jpg"
  },
  {
    name: "Pato Bruja",
    description: "Con sombrero de bruja y calabaza, el más espeluznante del baño.",
    price: 3.99,
    category: "Temporada",
    photo: "https://www.duckstore.es/2840-home_default/bruja-latex.jpg"
  }
];

export default ducklyns;
