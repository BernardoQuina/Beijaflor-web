type Categories =
  | {
      main: 'Flores'
      subDomain: 'tipos' | 'arranjos' | 'cores' | 'estação'
      name: string
      thumb: string
    }
  | {
      main: 'Plantas'
      subDomain: 'tipos' | 'local' | 'características'
      name: string
      thumb: string
    }
  | {
      main: 'Acessórios'
      subDomain: 'vasos' | 'outros'
      name: string
      thumb: string
    }
  | {
      main: 'Ocasião'
      subDomain: 'calendário' | 'cerimónias' | 'momentos especiais'
      name: string
      thumb: string
    }

type Products = {
  id: string
  name: string
  description: string
  thumbnail: string
  price: number
  MainCategory: string
}

export const categories: Categories[] = [
  // categorias em Flores
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'rosas',
    thumb: '/category-3.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'papoilas',
    thumb: '/card-image-3.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'orquídeas',
    thumb: '/category-4.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'cravos',
    thumb: '/cravo.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'lírios',
    thumb: '/lírio.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'margaridas',
    thumb: '/margarida.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'gerberas',
    thumb: '/gerbera.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'túlipas',
    thumb: '/túlipa.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'lisiantos',
    thumb: '/lisianto.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'tipos',
    name: 'antúrios',
    thumb: '/antúrio.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'arranjos',
    name: 'bouquet',
    thumb: '/card-image-5.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'arranjos',
    name: 'ramos',
    thumb: '/ramos.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'arranjos',
    name: 'centros',
    thumb: '/centros.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'arranjos',
    name: 'cestos',
    thumb: '/cestos.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'brancas',
    thumb: '/brancas.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'amarelas',
    thumb: '/amarelas.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'cor-de-laranja',
    thumb: '/cor-de-laranja.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'vermelhas',
    thumb: '/card-image-3.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'cor-de-rosa',
    thumb: '/card-image-2.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'roxas',
    thumb: '/category-2.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'azuis',
    thumb: '/azuis.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'cores',
    name: 'multicolor',
    thumb: '/category-1.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'estação',
    name: 'primavera',
    thumb: '/category-1.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'estação',
    name: 'verão',
    thumb: '/category-2.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'estação',
    name: 'outono',
    thumb: '/outono.jpg',
  },
  {
    main: 'Flores',
    subDomain: 'estação',
    name: 'inverno',
    thumb: '/inverno.jpg',
  },
  // categorias em Plantas
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'suculentas e catos',
    thumb: '/suculentas.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'fetos',
    thumb: '/fetos.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'trepadeiras',
    thumb: '/trepadeiras.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'folha larga',
    thumb: '/card-image-4.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'suspensas',
    thumb: '/suspensas.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'palmeiras',
    thumb: '/palmeiras.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'tipos',
    name: 'todas',
    thumb: '/todas.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'local',
    name: 'exterior',
    thumb: '/category-9.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'local',
    name: 'interior',
    thumb: '/category-8.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'local',
    name: 'sala',
    thumb: '/card-image-4.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'local',
    name: 'quarto',
    thumb: '/quarto.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'local',
    name: 'cozinha',
    thumb: '/cozinha.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'local',
    name: 'casa de banho',
    thumb: '/casa-de-banho.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'pequenas',
    thumb: '/category-8.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'médias',
    thumb: '/média.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'grandes',
    thumb: '/card-image-4.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'fácil de cuidar',
    thumb: '/fácil-de-cuidar.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'pet friendly',
    thumb: '/pet-friendly.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'purificação do ar',
    thumb: '/purificadoras.jpg',
  },
  {
    main: 'Plantas',
    subDomain: 'características',
    name: 'repelentes (cheirosas)',
    thumb: '/repelentes.jpg',
  },
  // categorias em Acessórios
  {
    main: 'Acessórios',
    subDomain: 'vasos',
    name: 'vidro',
    thumb: '/vidro.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'vasos',
    name: 'cerâmica',
    thumb: '/cerâmica.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'vasos',
    name: 'barro',
    thumb: '/barro.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'vasos',
    name: 'cimento',
    thumb: '/cimento.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'vasos',
    name: 'pedra',
    thumb: '/pedra.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'outros',
    name: 'ferramentas',
    thumb: '/ferramentas.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'outros',
    name: 'regadores',
    thumb: '/regadores.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'outros',
    name: 'compostos',
    thumb: '/compostos.jpg',
  },
  {
    main: 'Acessórios',
    subDomain: 'outros',
    name: 'todos',
    thumb: '/todas.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'calendário',
    name: 'dia da mãe',
    thumb: '/mãe.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'calendário',
    name: 'dia dos namorados',
    thumb: '/card-image-2.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'calendário',
    name: 'pascoa',
    thumb: '/category-1.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'momentos especiais',
    name: 'aniversário',
    thumb: '/festa.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'momentos especiais',
    name: 'nascimento',
    thumb: '/brancas.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'momentos especiais',
    name: 'amor',
    thumb: '/card-image-2.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'momentos especiais',
    name: 'amizade',
    thumb: '/cestos.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'cerimónias',
    name: 'casamento',
    thumb: '/category-6.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'cerimónias',
    name: 'pêsames',
    thumb: '/category-5.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'cerimónias',
    name: 'batizado',
    thumb: '/brancas.jpg',
  },
  {
    main: 'Ocasião',
    subDomain: 'cerimónias',
    name: 'festa de aniversário',
    thumb: '/festa.jpg',
  },
]

export const products: Products[] = [
  {
    id: '26hkj45h64j3',
    name: 'Ramo de rosas',
    description: 'ramo de uma dúzia de rosas pequenas, rosa claro',
    thumbnail: '/card-image-1.jpg',
    price: 4.99,
    MainCategory: 'rosas',
  },
  {
    id: '45k6h4435h4jh5i6u',
    name: 'Ficus-lira',
    description: 'Ficus-lira em vaso, 50cm',
    thumbnail: '/card-image-4.jpg',
    price: 29.99,
    MainCategory: 'folha larga',
  },
  {
    id: '26hg5jre45thb5f54674',
    name: 'Rosa única',
    description: 'um ramo de rosa',
    thumbnail: '/card-image-2.jpg',
    price: 1.99,
    MainCategory: 'rosas',
  },
  {
    id: '45k6h4lkj4h5i6u',
    name: 'Papoilas vermelhas',
    description: 'Ramo de papoilas vermelho em jarro',
    thumbnail: '/card-image-3.jpg',
    price: 9.99,
    MainCategory: 'papoilas',
  },
  {
    id: '43jh6h547g3hj67g',
    name: 'Buquê de flores',
    description: 'buque de flores coloridas variadas',
    thumbnail: '/card-image-5.jpg',
    price: 14.99,
    MainCategory: 'múltiplas',
  },
  {
    id: 'kjh65khg874lh4',
    name: 'Aloe aristata',
    description: 'pequena aloe aristata',
    thumbnail: '/suculentas.jpg',
    price: 4.99,
    MainCategory: 'suculentas e catos'
  }
]
