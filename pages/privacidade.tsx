import { NextPage } from 'next'
import router from 'next/router'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'
import {Heart} from '../components/svg/Heart'

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
        Estamos empenhados em proteger a segurança e privacidade dos dados pessoais. Neste contexto, elaborámos a presente Política de Privacidade, com a finalidade de dar a conhecer os termos em que a nossa plataforma recolhe e trata dados pessoais, de acordo com o Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016 (Regulamento Geral sobre a Proteção de Dados – “RGPD”) e restante legislação de proteção de dados pessoais.
        </p>
        <br />
        <p className='ml-4'>
        O tratamento de dados descrito nesta Política diz respeito a dados pessoais, nomeadamente, de clientes que utilizam os serviços de encomenda de produtos florais e plantas (“Produtos e Serviços”) e (ii) dos utilizadores do nosso website.
        </p>
        <br />
        <p className='ml-8'>
        Procuramos respeitar as melhores práticas em matéria de segurança e proteção de dados pessoais. Saiba aqui como são tratados os seus dados pessoais:
        </p>
      </div>
    </Layout>
  )
}

export default privacidade
