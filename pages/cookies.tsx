import { NextPage } from 'next'
import router from 'next/router'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'

interface cookiesProps {}

const cookies: NextPage<cookiesProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Política de cookies | Florista Beijaflor' />
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-12 lg:-mt-20'>
        <button className='flex p-1' onClick={() => router.back()}>
          <ArrowDown
            tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
            strokeWidth={3}
          />
          <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
            voltar
          </h6>
        </button>
      </div>
      <div className='flex mx-auto max-w-6xl'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          Política de cookies
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <p className='ml-4'>
          A presente política de cookies visa esclarecer de forma transparente e
          simples o modo como é utilizada a informação recolhida aquando da
          navegação pelo presente site.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          O que são cookies?
        </h4>
        <p className='ml-4'>
          Os cookies (e outras tecnologias semelhantes como local storage) são
          pequenos ficheiros de texto com fragmentos de informação que são
          descarregados e armazenados no dispositivo do utilizador aquando da
          visita de determinados websites. Estes ficheiros podem ter um carácter
          temporário (sendo automaticamente apagados quando o browser é fechado)
          ou persistir até uma data de expiração pré-definida.
        </p>
        <br />
        <p className='ml-4'>
          O uso de cookies no acesso a websites é uma prática comum e os vários
          navegadores (browsers) permitem que cada utilizador possa recusar a
          sua utilização, bem como eliminar os que foram já criados.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Como são usados?
        </h4>
        <p className='ml-4'>
          A utilização de cookies permite melhorar a navegação dos utilizadores
          no nosso site, tornando-a mais simples e rápida, permitindo uma
          experiência de navegação mais interessante e dinâmica, uma vez que os
          conteúdos disponibilizados serão mais orientados às necessidades e
          expectativas dos utilizadores, sem prejudicar os dispositivos
          (computadores, tablets, telemóveis, etc) em que são armazenados.
        </p>
        <br />
        <h5 className='ml-4 font-bold font-serif mb-2'>
          Validade e tipo de cookies
        </h5>
        <p className='ml-6'>
          a) <strong>Cookies de sessão</strong> - expiram quando o utilizador
          fecha o navegador e consequente não permanecem no dispositivo
          <br />
          <br />
          b) <strong>Cookies persistentes</strong> - armazenados a longo prazo
          no seu computador. São usados para garantir que o site se lembra de
          suas preferências.
        </p>
        <br />
        <p className='ml-4'>
          Adicionalmente, considerando as diferentes finalidades dos cookies,
          estes podem ser categorizados em 4 diferentes tipos:
        </p>
        <br />
        <p className='ml-6'>
          a) <strong>Performance</strong> - cookies que permitem atualizar o
          site para responder às preferências do utilizador e consequentemente
          melhorar o desempenho. Estes cookies não recolhem informações qeu
          identificam os utilizadores.
          <br />
          <br />
          b) <strong>Funcionais</strong> - Cookies que permitem ao site
          reconhecer as escolhas do utilizador, como dados de login,
          preferências de idioma e outras informações de personalização
          efetuadas no uso da página. Estes cookies são necessários para
          possibilitar os serviços oferecidos.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Cookies de entidades externas
        </h4>
        <p className='ml-4'>
          Os cookies podem ser gerados por domínios pertencentes a presente site
          ou por domínios pertencentes a entidades externas, por exemplo, quando
          é efetuada uma ligação com um website de outra empresa, esta empresa
          poderá também colocar cookies no seu dispositivo. Os cookies gerados
          por entidades externas têm funções semelhantes aos que são gerados
          internamente, no entanto, não controlamos o modo de utilização dos
          mesmos, pelo que se recomenda a consulta das respetivas políticas de
          cookies associadas. A presente política é revista periodicamente com o
          intuito principal de atualizar a lista de cookies utilizados por
          entidades externas, sem prejuízo de, no decorrer das revisões,
          surgirem novos cookies utilizados para as finalidades já existentes,
          os quais serão incorporados aquando da atualização. À data da presente
          revisão, ao navegar no site, o utilizador poderá encontrar cookies das
          seguintes entidades:
        </p>
        <br />
        <p className='ml-6'>
          a) <strong>Google</strong> - utilizamos cookies da google quando faz
          login através da google Oauth, saiba mais{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://policies.google.com/technologies/cookies'
            className='text-green-medium underline'
          >
            aqui
          </a>
          .
          <br />
          <br />
          b) <strong>Facebook</strong> - utilizamos cookies do Facebook quando
          faz login através do Facebook Oauth, saiba mais{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.facebook.com/policies/cookies'
            className='text-green-medium underline'
          >
            aqui
          </a>
          .
          <br />
          <br />
          c) <strong>Cloudinary</strong> - utilizamos cookies da Cloudinary para
          o carregamento, armazenamento (caching) no browser e renderização
          otimizada de imagens, saiba mais{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://cloudinary.com/privacy/cookie-policy'
            className='text-green-medium underline'
          >
            aqui
          </a>
          .
          <br />
          <br />
          d) <strong>Stripe</strong> - utilizamos cookies da Stripe para o o
          processamento de pagamentos encriptados por cartão, saiba mais{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://stripe.com/pt-br-pt/cookie-settings'
            className='text-green-medium underline'
          >
            aqui
          </a>
          .
          <br />
          <br />
          e) <strong>Paypal</strong> - utilizamos cookies da Paypal para o o
          processamento de pagamentos encriptados por redirecionamento a contas
          paypal, saiba mais{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.paypal.com/uk/webapps/mpp/ua/cookie-full'
            className='text-green-medium underline'
          >
            aqui
          </a>
          .
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Gestão de cookies
        </h4>
        <p className='ml-4'>
          No cumprimento da atual legislação em vigor, com exceção dos cookies
          estritamente necessários, o site apenas recorre à utilização de
          cookies mediante o consentimento prévio e expresso do utilizador.
          Comprometemos-nos a utilizar cookies apenas para as finalidades
          referidas no ponto anterior. É importante referir que a utilização de
          cookies é essencial para o correto funcionamento do site e para
          providenciar os serviços de encomenda, pelo que a sua aceitação é
          condição necessária à utilização do site. Assim, deve ter em conta que
          a inibição de cookies afetará a funcionalidade e o desempenho do site,
          e impedirá o uso de determinados serviços. Se optar por inibir os
          cookies, não podemos garantir o acesso aos serviços fornecidos nem ter
          a certeza de como eles serão executados durante a sua visita. A
          inibição de cookies também afetará a capacidade de atualização dos
          site para atender às preferências do utilizador e melhorar o
          desempenho.
        </p>
        <br />
        <h5 className='ml-4 font-bold font-serif mb-2'>
          Operações de controlo
        </h5>
        <p className='ml-6'>
          Se desejar, através do seu navegador, pode efetuar as seguintes
          operações de controlo/gestão dos cookies:
        </p>
        <p className='ml-8'>
          a) Excluir, bloquear ou permitir todos os cookies;
          <br />
          <br />
          b) Bloquear cookies de "terceiros" (ou seja, cookies definidos por
          serviços online que não sejam os que está explicitamente a visitar);
          <br />
          <br />
          c) Limpar todos os cookies ao fechar o navegador;
          <br />
          <br />
          d) Abrir uma sessão de 'navegação privada' / 'anónima', que permite
          navegar na Web sem registar o histórico de navegação ou armazenar
          dados locais, como cookies (deve, no entanto, estar ciente das
          limitações desse recurso no contexto de privacidade);
          <br />
          <br />
          e) Instalar complementos e plugins que estendem a funcionalidade do
          navegador.
        </p>
        <br />
        <h5 className='ml-4 font-bold font-serif mb-2'>Remover cookies</h5>
        <p className='ml-6'>
          Para que o utilizador possa, de forma simples e intuitiva, ativar a
          navegação sem registo e gerir os cookies a partir do navegador, poderá
          utilizar as seguintes hiperligações:
        </p>
        <p className='ml-8'>
          a) <strong>Mozilla Firefox</strong> -{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://support.mozilla.org/pt-PT/kb/como-e-que-eu-ativo-funcionalidade-do-not-track'
            className='text-green-medium underline'
          >
            ativar navegação sem registo
          </a>{' '}
          e{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href=' https://support.mozilla.org/pt-PT/kb/ativar-desativar-cookies-websites-utilizam-monitorizar-preferencias'
            className='text-green-medium underline'
          >
            ativar/desativar cookies
          </a>
          ;
          <br />
          <br />
          b) <strong>Google Chrome</strong> -{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://support.google.com/chrome/answer/95464?hl=pt&ref_topic=7437824'
            className='text-green-medium underline'
          >
            ativar navegação sem registo
          </a>{' '}
          e{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://support.google.com/chrome/answer/95647?hl=pt'
            className='text-green-medium underline'
          >
            ativar/desativar cookies
          </a>
          ;
          <br />
          <br />
          c) <strong>Safari</strong> -{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://support.apple.com/pt-pt/guide/safari/ibrw1069/mac'
            className='text-green-medium underline'
          >
            ativar navegação sem registo
          </a>{' '}
          e{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://support.apple.com/pt-pt/guide/safari/sfri11471/mac'
            className='text-green-medium underline'
          >
            ativar/desativar cookies
          </a>
          ;
          <br />
          <br />
          d) <strong>Opera</strong> -{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://help.opera.com/en/latest/security-and-privacy'
            className='text-green-medium underline'
          >
            segurança e privacidade
          </a>
          .
          <br />
          <br />
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-4 text-green-dark tracking-wider'>
        <p className='ml-4'>
          Para mais informações sobre cookies, recomendamos a consulta de{' '}
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.aboutcookies.org/'
            className='text-green-medium underline'
          >
            AboutCookies.org
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default cookies
