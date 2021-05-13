export type Category =
  | {
      mainCategory: 'Flores'
      subCategory: 'tipos' | 'arranjos' | 'cores' | 'estação'
      name: string
      image: string
    }
  | {
      mainCategory: 'Plantas'
      subCategory: 'tipos' | 'local' | 'características'
      name: string
      image: string
    }
  | {
      mainCategory: 'Acessórios'
      subCategory: 'vasos' | 'outros'
      name: string
      image: string
    }
  | {
      mainCategory: 'Ocasião'
      subCategory: 'calendário' | 'cerimónias' | 'momentos especiais'
      name: string
      image: string
    }

export type Product = {
  id: string
  name: string
  description: string
  images: string[]
  price: number
  MainCategory: string
  Characteristics: {
    subject: 'comprimento' | 'água' | 'exposição' | 'temperatura' | 'duração'
    text: string
  }[]
}

export const categories: Category[] = [
  // categorias em Flores
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'rosas',
    image: '/category-3.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'papoilas',
    image: '/card-image-3.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'orquídeas',
    image: '/category-4.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'cravos',
    image: '/cravo.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'lírios',
    image: '/lírio.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'margaridas',
    image: '/margarida.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'gerberas',
    image: '/gerbera.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'túlipas',
    image: '/túlipa.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'lisiantos',
    image: '/lisianto.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'tipos',
    name: 'antúrios',
    image: '/antúrio.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'arranjos',
    name: 'bouquet',
    image: '/card-image-5.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'arranjos',
    name: 'ramos',
    image: '/ramos.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'arranjos',
    name: 'centros',
    image: '/centros.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'arranjos',
    name: 'cestos',
    image: '/cestos.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'brancas',
    image: '/brancas.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'amarelas',
    image: '/amarelas.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'cor-de-laranja',
    image: '/cor-de-laranja.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'vermelhas',
    image: '/card-image-3.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'cor-de-rosa',
    image: '/card-image-2.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'roxas',
    image: '/category-2.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'azuis',
    image: '/azuis.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'cores',
    name: 'multicolor',
    image: '/category-1.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'estação',
    name: 'primavera',
    image: '/category-1.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'estação',
    name: 'verão',
    image: '/category-2.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'estação',
    name: 'outono',
    image: '/outono.jpg',
  },
  {
    mainCategory: 'Flores',
    subCategory: 'estação',
    name: 'inverno',
    image: '/inverno.jpg',
  },
  // categorias em Plantas
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'suculentas e catos',
    image: '/suculentas.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'fetos',
    image: '/fetos.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'trepadeiras',
    image: '/trepadeiras.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'folha larga',
    image: '/card-image-4.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'suspensas',
    image: '/suspensas.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'palmeiras',
    image: '/palmeiras.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'tipos',
    name: 'todas',
    image: '/todas.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'local',
    name: 'exterior',
    image: '/category-9.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'local',
    name: 'interior',
    image: '/category-8.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'local',
    name: 'sala',
    image: '/card-image-4.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'local',
    name: 'quarto',
    image: '/quarto.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'local',
    name: 'cozinha',
    image: '/cozinha.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'local',
    name: 'casa de banho',
    image: '/casa-de-banho.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'pequenas',
    image: '/category-8.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'médias',
    image: '/média.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'grandes',
    image: '/card-image-4.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'fácil de cuidar',
    image: '/fácil-de-cuidar.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'pet friendly',
    image: '/pet-friendly.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'purificação do ar',
    image: '/purificadoras.jpg',
  },
  {
    mainCategory: 'Plantas',
    subCategory: 'características',
    name: 'repelentes (cheirosas)',
    image: '/repelentes.jpg',
  },
  // categorias em Acessórios
  {
    mainCategory: 'Acessórios',
    subCategory: 'vasos',
    name: 'vidro',
    image: '/vidro.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'vasos',
    name: 'cerâmica',
    image: '/cerâmica.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'vasos',
    name: 'barro',
    image: '/barro.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'vasos',
    name: 'cimento',
    image: '/cimento.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'vasos',
    name: 'pedra',
    image: '/pedra.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'outros',
    name: 'ferramentas',
    image: '/ferramentas.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'outros',
    name: 'regadores',
    image: '/regadores.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'outros',
    name: 'compostos',
    image: '/compostos.jpg',
  },
  {
    mainCategory: 'Acessórios',
    subCategory: 'outros',
    name: 'todos',
    image: '/todas.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'calendário',
    name: 'dia da mãe',
    image: '/mãe.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'calendário',
    name: 'dia dos namorados',
    image: '/card-image-2.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'calendário',
    name: 'pascoa',
    image: '/category-1.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'momentos especiais',
    name: 'aniversário',
    image: '/festa.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'momentos especiais',
    name: 'nascimento',
    image: '/brancas.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'momentos especiais',
    name: 'amor',
    image: '/card-image-2.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'momentos especiais',
    name: 'amizade',
    image: '/cestos.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'cerimónias',
    name: 'casamento',
    image: '/category-6.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'cerimónias',
    name: 'pêsames',
    image: '/category-5.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'cerimónias',
    name: 'batizado',
    image: '/brancas.jpg',
  },
  {
    mainCategory: 'Ocasião',
    subCategory: 'cerimónias',
    name: 'festa de aniversário',
    image: '/festa.jpg',
  },
]

export const products: Product[] = [
  {
    id: '26hkj45h64j3',
    name: 'Ramo de rosas',
    description: 'ramo de uma dúzia de rosas pequenas, rosa claro',
    images: ['/card-image-1.jpg', '/1.jpg', '/2.jpg', '/3.jpg'],
    price: 4.99,
    MainCategory: 'rosas',
    Characteristics: [
      { subject: 'comprimento', text: '30 cm' },
      { subject: 'água', text: 'Manter em água' },
      { subject: 'exposição', text: 'Sol ou sombra' },
      { subject: 'duração', text: '3 semanas' },
    ],
  },
  {
    id: '45k6h4435h4jh5i6u',
    name: 'Ficus-lira',
    description: 'Ficus-lira em cesto de fio de malha.',
    images: ['/card-image-4.jpg', '/1.jpg', '/2.jpg', '/3.jpg'],
    price: 29.99,
    MainCategory: 'folha larga',
    Characteristics: [
      { subject: 'comprimento', text: '1 m' },
      { subject: 'água', text: '0,5L por dia' },
      { subject: 'exposição', text: 'Luz indireta' },
      { subject: 'duração', text: 'Até 20 anos' },
    ],
  },
  {
    id: '26hg5jre45thb5f54674',
    name: 'Rosa única',
    description: 'um ramo de rosa',
    images: ['/card-image-2.jpg', '/1.jpg', '/2.jpg', '/3.jpg'],
    price: 1.99,
    MainCategory: 'rosas',
    Characteristics: [
      { subject: 'comprimento', text: '20 cm' },
      { subject: 'água', text: 'Manter em água' },
      { subject: 'exposição', text: 'Sol ou sombra' },
      { subject: 'duração', text: '2 semanas' },
    ],
  },
  {
    id: '45k6h4lkj4h5i6u',
    name: 'Papoilas vermelhas',
    description: 'Ramo de papoilas vermelho em jarro.Ramo de papoilas vermelho em jarroRamo de papoilas vermelho em jarro',
    images: ['/card-image-3.jpg', '/1.jpg', '/2.jpg', '/3.jpg'],
    price: 9.99,
    MainCategory: 'papoilas',
    Characteristics: [
      { subject: 'comprimento', text: '40 cm' },
      { subject: 'água', text: 'Manter em água' },
      { subject: 'exposição', text: 'Sol ou sombra' },
      { subject: 'duração', text: '10 dias' },
    ],
  },
  {
    id: '43jh6h547g3hj67g',
    name: 'Buquê de flores',
    description: 'buque de flores coloridas variadas',
    images: ['/card-image-5.jpg', '/1.jpg', '/2.jpg', '/3.jpg'],
    price: 14.99,
    MainCategory: 'múltiplas',
    Characteristics: [
      { subject: 'comprimento', text: '40 cm' },
      { subject: 'água', text: 'Manter em água' },
      { subject: 'exposição', text: 'Sol ou sombra' },
      { subject: 'duração', text: '2 semanas' },
    ],
  },
  {
    id: 'kjh65khg874lh4',
    name: 'Aloe aristata',
    description:
      'Pequena aloe aristata em vaso branco de barro. Fácil de cuidar.',
    images: ['/suculentas.jpg', '/1.jpg', '/2.jpg', '/3.jpg'],
    price: 4.99,
    MainCategory: 'suculentas e catos',
    Characteristics: [
      { subject: 'comprimento', text: '15 cm' },
      { subject: 'água', text: '0,2L por dia' },
      { subject: 'exposição', text: 'Luz direta' },
      { subject: 'duração', text: '50 anos +' },
    ],
  },
]
