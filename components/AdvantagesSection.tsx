import { Plant } from './svg/Plant'
import { Shipping } from './svg/Shipping'
import { Support } from './svg/Support'
import { Secure } from './svg/Secure'

interface AdvantagesSectionProps {}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({}) => {
  return (
    <section className='max-w-full 4xl:max-w-[120rem] mx-auto flex mt-12 2xl:mt-40'>
      <div className='lg:flex mx-auto md:w-[50%]'>
        <div className='mx-auto mt-20 text-center'>
          <Plant
            tailwind='h-12 md:h-16 mx-auto fill-current text-green-light'
            strokeWidth={0.2}
          />
          <h6 className='tracking-widest text-green-dark md:text-xl md:font-bold'>
            Frescura garantida
          </h6>
          <p className='hidden font-thin md:inline-block w-56 mx-auto tracking-wider text-green-dark'>
            flores frescas que duram
          </p>
        </div>
        <div className='mx-auto mt-8 lg:mt-20 text-center'>
          <Shipping
            tailwind='h-12 md:h-16 mx-auto fill-current text-green-light'
            strokeWidth={0.1}
          />
          <h6 className='tracking-widest text-green-dark md:text-xl md:font-bold'>Envio grátis</h6>
          <p className='hidden font-thin md:inline-block w-56 mx-auto tracking-wider text-green-dark'>
            Entrega gratuita acima de 35€
          </p>
        </div>
      </div>
      <div className='lg:flex mx-auto md:w-[50%]'>
        <div className='mx-auto mt-20 text-center'>
          <Support
            tailwind='h-12 md:h-16 fill-current mx-auto text-green-light'
            strokeWidth={0.2}
          />
          <h6 className='tracking-widest text-green-dark md:text-xl md:font-bold'>
            Suporte ao cliente
          </h6>
          <p className='hidden font-thin md:inline-block w-56 mx-auto tracking-wider text-green-dark'>
            Sempre disponíveis para oferecer ajuda
          </p>
        </div>
        <div className='mx-auto mt-8 lg:mt-20 text-center'>
          <Secure
            tailwind='h-12 md:h-16 fill-current mx-auto text-green-light'
            strokeWidth={0.2}
          />
          <h6 className='tracking-widest text-green-dark md:text-xl md:font-bold'>Compra Segura</h6>
          <p className='hidden font-thin md:inline-block w-56 mx-auto tracking-wider text-green-dark'>
            Métodos de pagamentos de confiança
          </p>
        </div>
      </div>
    </section>
  )
}
