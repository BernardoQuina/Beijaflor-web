import { NextPage } from 'next'
import router from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Layout } from '../components/Layout'
import { Meta } from '../components/Meta'
import { ArrowDown } from '../components/svg/ArrowDown'
import { Phone } from '../components/svg/Phone'
import { Email } from '../components/svg/Email'
import { Location } from '../components/svg/Location'
import { scaleUp } from '../utils/animations'

interface ajudaProps {}

const ajuda: NextPage<ajudaProps> = ({}) => {
  return (
    <Layout>
      <Meta title='Perguntas Frequentes | Florista Beijaflor' />
      <motion.div
        initial='initial'
        animate='animate'
        variants={scaleUp}
        className='sticky flex flex-col z-[2] top-20 -mt-12 ml-auto lg:mr-6 w-[60%] max-w-[20rem] p-2 rounded-md bg-white shadow-md border-2 border-pink-light'
      >
        <div className='flex w-full m-auto'>
          <Email
            tailwind='ml-auto h-6 mr-4 text-pink-medium hidden lg:inline-block'
            strokeWidth={2}
          />
          <a
            className='mr-auto'
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:geral@floristabeijaflor.com'
          >
            <p className='text-pink-dark font-thin text-center hover:underline'>
              geral@floristabeijaflor.com
            </p>
          </a>
        </div>
        <div className='flex w-full m-auto'>
          <Phone
            tailwind='ml-auto h-6 mr-4 text-pink-medium hidden lg:inline-block'
            strokeWidth={2}
          />
          <a
            className='mr-auto'
            rel='noopener noreferrer'
            target='_blank'
            href='tel:+351219171574'
          >
            <p className='text-pink-dark font-thin hover:underline'>
              21 917 1574
            </p>
          </a>
        </div>
        <div className='flex w-full m-auto'>
          <Location tailwind='ml-auto h-6 mr-4 text-pink-medium hidden lg:inline-block' />
          <a
            className='mr-auto'
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.google.pt/maps/place/Florista+Beijaflor/@38.7806557,-9.3247543,17z/data=!4m8!1m2!3m1!2sFlorista+Beijaflor!3m4!1s0x0:0x48434555a6025c5!8m2!3d38.7806557!4d-9.3225656'
          >
            <p className='text-pink-dark font-thin hover:underline'>
              Rio de Mouro, Sintra
            </p>
          </a>
        </div>
      </motion.div>
      <div className='flex mx-auto w-full max-w-7xl lg:mb-0 -mt-16 lg:-mt-24'>
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
        <h1 className='relative z-[0] mt-10 lg:mt-4 ml-2 mr-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark'>
          Perguntas frequentes
          <div className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'></div>
        </h1>
      </div>
      <div className='flex flex-col mx-auto max-w-4xl w-full mt-8 text-green-dark tracking-wider'>
        <p className='ml-4'>
          Aqui poderá encontrar as perguntas mais frequentes entre os nossos
          clientes. Se tem alguma dúvida verifique se a mesma se encontra
          presente nesta página para obter um esclarecimento mais rápido. Se,
          contrariamente, a sua dúvida persistir, entre em contacto connosco via
          chamada ou email.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Quais são todos os preços que terei de pagar numa encomenda?
        </h4>
        <p className='ml-4'>
          Em cada produto que encontrar no site pode verificar o preço aplicável
          por cada unidade, sempre em euros (€). Se a soma dos preços dos itens
          do seu cesto for inferior a 35 euros, acresce uma taxa de entrega de 5
          euros. A quantia final do seu cesto já inclui todos os impostos
          aplicáveis.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Que meios de pagamento estão disponíveis?
        </h4>
        <p className='ml-4'>
          Pode fazer encomendas através do nosso site e efetuar o respetivo
          pagamento através de cartão bancário ou Paypal. A seleção do meio de
          pagamento é a ultima fase do nosso sistema de checkout, que pode
          aceder depois de adicionar items ao seu cesto virtual.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Como posso ter a certeza de que o meu pedido de encomenda foi bem
          sucedido?
        </h4>
        <p className='ml-4'>
          Depois de efetuar o pagamento com sucesso, será redirecionado para a
          pagina de confirmação de encomenda e receberá também um recibo bem
          como uma confirmação por email.
          <br />
          <br />
          Pode sempre consultar as suas encomendas, tanto ativas como passadas
          em{' '}
          <Link href='/conta/encomendas'>
            <a className='text-green-medium underline'>encomendas</a>
          </Link>
          .
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Posso cancelar a minha encomenda?
        </h4>
        <p className='ml-4'>
          Se a sua encomenda não se encontrar em distribuição ou já entregue,
          tem o direito de cancelar a sua encomenda. Para o efeito contacte-nos
          por email ou telefone e indique-nos o ID da sua encomenda.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Como será preparada a minha encomenda?
        </h4>
        <p className='ml-4'>
          Todas as plantas e flores são arranjadas por floristas profissionais,
          que terão sempre atenção aos métodos e estilos mais adequados. A
          preparação é feita o mais perto possível do momento de distribuição
          para garantir o máximo de frescura dos arranjos.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Como será enviada a minha encomenda?
        </h4>
        <p className='ml-4'>
          Quando chegar o momento de distribuição os arranjos são cuidadosamente
          embalados em materiais adequados que permitam a preservação do arranjo
          e mantenham a sua frescura. O transporte pode ser feito diretamente
          pela florista ou através de colaboradores, sempre com a maior
          brevidade e cuidado.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          Quando será entregue a minha encomenda?
        </h4>
        <p className='ml-4'>
          A sua encomenda será entregue no dia que selecionou quando efetuou a
          encomenda. Será contactado por nós se surgir alguma impossibilidade de
          entrega.
        </p>
      </div>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-8 text-green-dark tracking-wider'>
        <h4 className='font-bold font-serif mb-4 text-lg ml-2'>
          O destinatário não estava presente para receber a encomenda, e agora?
        </h4>
        <p className='ml-4'>
          O responsável pela entrega irá tentar o contacto telefónico que
          providenciou para tentar a entrega imediata e se tal não for possível
          o destinatário deverá entrar em contacto connosco para reagendar a
          entrega (por um custo acrescido) ou proceder à recolha da encomenda.
        </p>
      </div>
    </Layout>
  )
}

export default ajuda
