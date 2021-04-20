type Categories =
  | {
      main: 'flores'
      subDomain: 'tipos' | 'arranjos' | 'cores' | 'estação'
      name: string
      thumb: string
    }
  | {
      main: 'plantas'
      subDomain: 'tipos' | 'local' | 'características'
      name: string
      thumb: string
    }
  | {
      main: 'acessórios'
      subDomain: 'vasos' | 'outros'
      name: string
      thumb: string
    }

type Occasions = {
  main: 'calendário' | 'cerimónias' | 'momentos especiais'
  name: string
  thumb: string
}

export const categories: Categories[] = [
  // categorias em flores
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'rosas',
    thumb: '/category-3.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'papoilas',
    thumb: '/card-image-3.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'orquídeas',
    thumb: '/category-4.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'cravos',
    thumb: '/cravo.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'lírios',
    thumb: '/lírio.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'margaridas',
    thumb: '/margarida.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'gerberas',
    thumb: '/gerbera.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'túlipas',
    thumb: '/túlipa.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'lisiantos',
    thumb: '/lisianto.jpg',
  },
  {
    main: 'flores',
    subDomain: 'tipos',
    name: 'antúrios',
    thumb: '/antúrio.jpg',
  },
  {
    main: 'flores',
    subDomain: 'arranjos',
    name: 'bouquet',
    thumb: '/card-image-5.jpg',
  },
  {
    main: 'flores',
    subDomain: 'arranjos',
    name: 'ramos',
    thumb: '/ramos.jpg',
  },
  {
    main: 'flores',
    subDomain: 'arranjos',
    name: 'centros',
    thumb: '/centros.jpg',
  },
  {
    main: 'flores',
    subDomain: 'arranjos',
    name: 'cestos',
    thumb: '/cestos.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'brancas',
    thumb: '/brancas.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'amarelas',
    thumb: '/amarelas.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'cor-de-laranja',
    thumb: '/cor-de-laranja.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'vermelhas',
    thumb: '/card-image-3.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'cor-de-rosa',
    thumb: '/card-image-2.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'roxas',
    thumb: '/category-2.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'azuis',
    thumb: '/azuis.jpg',
  },
  {
    main: 'flores',
    subDomain: 'cores',
    name: 'multicolor',
    thumb: '/category-1.jpg',
  },
  {
    main: 'flores',
    subDomain: 'estação',
    name: 'primavera',
    thumb: '/category-1.jpg',
  },
  {
    main: 'flores',
    subDomain: 'estação',
    name: 'verão',
    thumb: '/category-2.jpg',
  },
  {
    main: 'flores',
    subDomain: 'estação',
    name: 'outono',
    thumb: '/outono.jpg',
  },
  {
    main: 'flores',
    subDomain: 'estação',
    name: 'inverno',
    thumb: '/inverno.jpg',
  },
  // categorias em plantas
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'suculentas e catos',
    thumb: '/suculentas.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'fetos',
    thumb: '/fetos.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'trepadeiras',
    thumb: '/trepadeiras.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'folha larga',
    thumb: '/card-image-4.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'suspensas',
    thumb: '/suspensas.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'palmeiras',
    thumb: '/palmeiras.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'tipos',
    name: 'todas',
    thumb: '/todas.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'local',
    name: 'exterior',
    thumb: '/category-9.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'local',
    name: 'interior',
    thumb: '/category-8.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'local',
    name: 'sala',
    thumb: '/card-image-4.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'local',
    name: 'quarto',
    thumb: '/quarto.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'local',
    name: 'cozinha',
    thumb: '/cozinha.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'local',
    name: 'casa de banho',
    thumb: '/casa-de-banho.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'pequenas',
    thumb: '/category-8.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'médias',
    thumb: '/média.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'grandes',
    thumb: '/card-image-4.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'fácil de cuidar',
    thumb: '/fácil-de-cuidar.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'pet friendly',
    thumb: '/pet-friendly.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'purificação do ar',
    thumb: '/purificadoras.jpg',
  },
  {
    main: 'plantas',
    subDomain: 'características',
    name: 'repelentes (cheirosas)',
    thumb: '/repelentes.jpg',
  },
  // categorias em acessórios
  {
    main: 'acessórios',
    subDomain: 'vasos',
    name: 'vidro',
    thumb: '/vidro.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'vasos',
    name: 'cerâmica',
    thumb: '/cerâmica.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'vasos',
    name: 'barro',
    thumb: '/barro.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'vasos',
    name: 'cimento',
    thumb: '/cimento.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'vasos',
    name: 'pedra',
    thumb: '/pedra.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'outros',
    name: 'ferramentas',
    thumb: '/ferramentas.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'outros',
    name: 'regadores',
    thumb: '/regadores.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'outros',
    name: 'compostos',
    thumb: '/compostos.jpg',
  },
  {
    main: 'acessórios',
    subDomain: 'outros',
    name: 'todos',
    thumb: '/todas.jpg',
  },
]

export const occasions: Occasions[] = [
  {
    main: 'calendário',
    name: 'dia da mãe',
    thumb: '/mãe.jpg',
  },
  {
    main: 'calendário',
    name: 'dia dos namorados',
    thumb: '/card-image-2.jpg',
  },
  {
    main: 'calendário',
    name: 'pascoa',
    thumb: '/category-1.jpg',
  },
  {
    main: 'momentos especiais',
    name: 'aniversário',
    thumb: '/festa.jpg',
  },
  {
    main: 'momentos especiais',
    name: 'nascimento',
    thumb: '/brancas.jpg',
  },
  {
    main: 'momentos especiais',
    name: 'amor',
    thumb: '/card-image-2.jpg',
  },
  {
    main: 'momentos especiais',
    name: 'amizade',
    thumb: '/cestos.jpg',
  },
  {
    main: 'cerimónias',
    name: 'casamento',
    thumb: '/category-6.jpg',
  },
  {
    main: 'cerimónias',
    name: 'pêsames',
    thumb: '/category-5.jpg',
  },
  {
    main: 'cerimónias',
    name: 'batizado',
    thumb: '/brancas.jpg',
  },
  {
    main: 'cerimónias',
    name: 'festa de aniversário',
    thumb: '/festa.jpg',
  },
]
