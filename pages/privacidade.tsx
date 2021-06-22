import { NextPage } from 'next'
import Link from 'next/link'
import router from 'next/router'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'

interface privacidadeProps {}

const privacidade: NextPage<privacidadeProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Política de privacidade | Florista Beijaflor' />
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
          Política de privacidade
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <p className='ml-4'>
          Estamos empenhados em proteger a segurança e privacidade dos dados
          pessoais. Neste contexto, elaborámos a presente Política de
          Privacidade, com a finalidade de dar a conhecer os termos em que a
          nossa plataforma recolhe e trata dados pessoais, de acordo com o
          Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27
          de abril de 2016 (Regulamento Geral sobre a Proteção de Dados –
          “RGPD”) e restante legislação de proteção de dados pessoais.
        </p>
        <br />
        <p className='ml-4'>
          O tratamento de dados descrito nesta Política diz respeito a dados
          pessoais, nomeadamente, de clientes que utilizam os serviços de
          encomenda de produtos florais e plantas (“Produtos e Serviços”) e (ii)
          dos utilizadores do nosso website.
        </p>
        <br />
        <p className='ml-8'>
          Procuramos respeitar as melhores práticas em matéria de segurança e
          proteção de dados pessoais. Saiba aqui como são tratados os seus dados
          pessoais:
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Quem é responsável pelo tratamento dos seus dados pessoais?
        </h4>
        <p className='ml-4'>
          A proprietária, mencionada nas{' '}
          <Link href='/condicoes'>
            <a className='text-green-medium underline'>condições gerais</a>
          </Link>{' '}
          que comercializa os produtos e e presta os serviços de encomenda é a
          responsável pelo tratamento dos dados, nos termos da RGPD.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Que dados pessoais são recolhidos?
        </h4>
        <p className='ml-4'>
          Recolhemos e tratamos, unicamente através da nossa plataforma e
          diretamente da ação voluntária do utilizador, os seguintes dados:
        </p>
        <p className='ml-8 mt-2'>
          a) <strong>Dados de identificação e contactos</strong> como nome,
          dados para pagamento, moradas, contacto telefónico e endereço de
          correio eletrónico, fotografia (apenas via google/facebook Oauth);
          <br />
          <br />
          b) <strong>Dados de utilização das Plataformas</strong>, nomeadamente
          endereço IP, localização geográfica, cookies e outras tecnologias
          semelhantes;
          <br />
          <br />
          c) <strong>Dados relativos a comportamentos fraudulentos</strong>,
          pela deteção de comportamento suspeito e consequente identificação do
          utilizador.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Quais os fundamentos e finalidades da recolha de dados pessoais?
        </h4>
        <p className='ml-4'>
          Os dados pessoais que recolhemos são utilizados no âmbito da utilização do site e da prestação e gestão dos serviços de encomenda contratados, com fundamente de legitimidade na boa execução dos contratos, diligências pré-contratuais e no cumprimento de obrigações legais e com as seguintes finalidades:
        </p>
        <p className='ml-8 mt-2'>
          a) <strong>Prestação de serviços, nomeadamente serviços de entrega e comercialização de produtos vendidos no site</strong>;
          <br />
          <br />
          b) <strong>gestão da relação com o utilizador/cliente</strong>, nomeadamente na gestão dos contratos, informações ou reclamações e apoio ao cliente;
          <br />
          <br />
          c) <strong>marketing</strong>, quando o utilizador expressamente consentir para o efeito, para a promoção de novos produtos ou serviços, ou apresentação de ofertas especiais.
        </p>
      </div>
    </Layout>
  )
}

export default privacidade
