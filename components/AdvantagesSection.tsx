import { Plant } from './svg/Plant'
import { Shipping } from './svg/Shipping'
import { Support } from './svg/Support'
import { Secure } from './svg/Secure'

interface AdvantagesSectionProps {}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({}) => {
  return (
    <section className='max-w-full 4xl:max-w-[120rem] mx-auto md:flex mt-44 md:mt-40'>
      <div className='lg:flex mx-auto md:w-[50%]'>
        <div className='mx-auto mt-20 text-center'>
          <Plant
            tailwind='h-20 mx-auto fill-current text-green-medium'
            strokeWidth={0.2}
          />
          <h6 className='tracking-widest text-xl font-bold'>
            Frescura garantida
          </h6>
          <p className='w-56 mx-auto tracking-wider'>
            As nossas flores apresentam uma grande frescura e duração
          </p>
        </div>
        <div className='mx-auto mt-20 text-center'>
          <Shipping
            tailwind='h-20 mx-auto fill-current text-green-medium'
            strokeWidth={0.1}
          />
          <h6 className='tracking-widest text-xl font-bold'>Envio grátis</h6>
          <p className='w-56 mx-auto tracking-wider'>
            Entrega gratuita em compras acima de 35€
          </p>
        </div>
      </div>
      <div className='lg:flex mx-auto md:w-[50%]'>
        <div className='mx-auto mt-20 text-center'>
          <Support
            tailwind='h-20 fill-current mx-auto text-green-medium'
            strokeWidth={0.2}
          />
          <h6 className='tracking-widest text-xl font-bold'>
            Suporte ao cliente
          </h6>
          <p className='w-56 mx-auto tracking-wider'>
            Sempre disponíveis para oferecer ajuda e a resolver problemas
          </p>
        </div>
        <div className='mx-auto mt-20 text-center'>
          <Secure
            tailwind='h-20 fill-current mx-auto text-green-medium'
            strokeWidth={0.2}
          />
          <h6 className='tracking-widest text-xl font-bold'>Compra Segura</h6>
          <p className='w-56 mx-auto tracking-wider'>
            Métodos de pagamentos de confiança
          </p>
        </div>
      </div>
    </section>
  )
}
