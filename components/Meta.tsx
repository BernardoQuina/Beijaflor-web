import Head from 'next/head'

interface MetaProps {
  title?: string
  keywords?: string
  description?: string
}

export const Meta: React.FC<MetaProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name='author'
        content='Bernardo Quina'
        about='bernardoquina@gmail.com'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Florista Beijaflor',
  keywords: 'florista, flores, entregas de flores ao domicílio, entrega de flores ao domicílio, florista beijaflor, florista lisboa, florista portugal, florista sintra, florista entrega ao domicílio, floristas abertas, flores ao domicílio, entrega flores domingo, florista entregas, flores online, comprar flores, encomendar flores online, plantas, suculentas, suculentas com flores, vasos para plantas, planta suculentas, antúrio, rosa, orquídea, girassóis, gérbera, arranjos de flores naturais, flor iris, lírio, flores secas naturais, buquê de flor, margaridas, feliz aniversário flores, flor do campo, flores lindas, arranjos de flores, flor margarida, buque de flor, rosas amarelas, rosas vermelhas, flor narciso, flores violeta, coroas de flores, violeta flor, ramo de flor, flores brancas, arranjos de flores naturais modernos, cesta de flores',
  description: 'Descubra a nossa seleção de plantas e flores e receba-as à sua porta. Mais de 20 anos de momentos especiais!'
}
