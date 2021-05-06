import { NextPage } from 'next'
import Link from 'next/link'

import { Layout } from '../../components/Layout'
import { Admin } from '../../components/svg/Admin'
import { Box } from '../../components/svg/Box'
import { Location } from '../../components/svg/Location'
import { Payment } from '../../components/svg/Payment'
import { Settings } from '../../components/svg/Settings'
import { useMeQuery } from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'
import { useIsAuth } from '../../utils/useIsAuth'

interface indexProps {}

const index: NextPage<indexProps> = ({}) => {
  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useIsAuth(true)

  return (
    <Layout>
      <div className='-mt-10 lg:-mt-14 max-w-7xl 3xl:max-w-[100rem] mx-auto flex flex-col'>
        {data?.me && (
          <div className='flex flex-col mx-auto w-full max-w-5xl 3xl:max-w-[100rem]'>
            <h1 className='font-serif text-2xl md:text-3xl tracking-widest text-pink-dark'>
              Olá,
            </h1>
            <h1 className='relative z-[0] mt-1 mr-auto font-serif text-2xl md:text-4xl tracking-widest text-pink-dark'>
              {data.me.name}!
              <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
            </h1>
          </div>
        )}
      </div>
      <div className='mx-auto max-w-[68rem] mt-10 mb-28 grid gap-12 grid-cols-1  lg:grid-cols-2'>
        {data?.me && data.me.role === 'ADMIN' && (
          <Link href='/conta/admin-dash'>
            <a>
              <div className='group flex mx-auto w-full lg:w-[30rem] bg-white rounded-md shadow-around'>
                <div className='flex w-[35%] xs:w-[30%] h-[8rem] lg:h-[10rem]'>
                  <div className='group flex m-4 h-16 lg:h-24 w-16 lg:w-24 self-center bg-pink-light group-hover:bg-green-extraLight rounded-full'>
                    <Admin tailwind='group mx-auto self-center h-14 lg:h-20 w-14 lg:w-20 text-pink-medium group-hover:text-green-medium' />
                  </div>
                </div>
                <div className='flex flex-col pt-2 pr-2 lg:pb-4 w-full'>
                  <h3 className='group xs:text-lg lg:mt-2 text-center tracking-wide xs:tracking-wider text-green-dark group-hover:font-bold'>
                    Administração
                  </h3>
                  <p className='my-auto text-center text-sm xs:text-base text-green-dark font-thin'>
                    Gerir produtos e categorias bem como consultar encomendas de
                    clientes
                  </p>
                </div>
              </div>
            </a>
          </Link>
        )}
        <Link href='/conta/encomendas'>
          <a>
            <div className='group flex mx-auto w-full lg:w-[30rem] bg-white rounded-md shadow-around'>
              <div className='flex w-[35%] xs:w-[30%] h-[8rem] lg:h-[10rem]'>
                <div className='group flex m-4 h-16 lg:h-24 w-16 lg:w-24 self-center bg-pink-light group-hover:bg-green-extraLight rounded-full'>
                  <Box tailwind='group mx-auto pr-2 self-center h-14 lg:h-20 w-14 lg:w-20 text-pink-medium group-hover:text-green-medium' />
                </div>
              </div>
              <div className='flex flex-col pt-2 pr-2 lg:pb-4 w-full'>
                <h3 className='group xs:text-lg lg:mt-2 text-center tracking-wide xs:tracking-wider text-green-dark group-hover:font-bold'>
                  As minhas encomendas
                </h3>
                <p className='my-auto text-center text-sm xs:text-base text-green-dark font-thin'>
                  Faça seguimento de encomendas ativas e consulte encomendas
                  passadas
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href='/conta/moradas'>
          <a>
            <div className='group flex mx-auto w-full lg:w-[30rem] bg-white rounded-md shadow-around'>
              <div className='flex w-[35%] xs:w-[30%] h-[8rem] lg:h-[10rem]'>
                <div className='group flex m-4 h-16 lg:h-24 w-16 lg:w-24 self-center bg-pink-light group-hover:bg-green-extraLight rounded-full'>
                  <Location tailwind='group mx-auto self-center h-10 lg:h-14 w-10 lg:w-14 text-pink-medium group-hover:text-green-medium' />
                </div>
              </div>
              <div className='flex flex-col pt-2 pr-2 lg:pb-4 w-full'>
                <h3 className='group xs:text-lg lg:mt-2 text-center tracking-wide xs:tracking-wider text-green-dark group-hover:font-bold'>
                  As minhas moradas
                </h3>
                <p className='my-auto text-center text-sm xs:text-base text-green-dark font-thin'>
                  Consulte e edite as suas moradas para entrega / faturação
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href='/conta/métodos-pagamento'>
          <a>
            <div className='group flex mx-auto w-full lg:w-[30rem] bg-white rounded-md shadow-around'>
              <div className='flex w-[35%] xs:w-[30%] h-[8rem] lg:h-[10rem]'>
                <div className='group flex m-4 h-16 lg:h-24 w-16 lg:w-24 self-center bg-pink-light group-hover:bg-green-extraLight rounded-full'>
                  <Payment tailwind='group mx-auto self-center h-10 lg:h-16 w-10 lg:w-16 text-pink-medium group-hover:text-green-medium' />
                </div>
              </div>
              <div className='flex flex-col pt-2 pr-2 lg:pb-4 w-full'>
                <h3 className='group xs:text-lg lg:mt-2 text-center tracking-wide xs:tracking-wider text-green-dark group-hover:font-bold'>
                  Métodos de pagamento
                </h3>
                <p className='my-auto text-center text-sm xs:text-base text-green-dark font-thin'>
                  Adicione / remova métodos de pagamento para compras futuras
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link href='/conta/definições'>
          <a>
            <div className='group flex mx-auto w-full lg:w-[30rem] bg-white rounded-md shadow-around'>
              <div className='flex w-[35%] xs:w-[30%] h-[8rem] lg:h-[10rem]'>
                <div className='group flex m-4 h-16 lg:h-24 w-16 lg:w-24 self-center bg-pink-light group-hover:bg-green-extraLight rounded-full'>
                  <Settings tailwind='group mx-auto self-center h-14 lg:h-20 w-14 lg:w-20 text-pink-medium group-hover:text-green-medium' />
                </div>
              </div>
              <div className='flex flex-col pt-2 pr-2 lg:pb-4 w-full'>
                <h3 className='group xs:text-lg lg:mt-2 text-center tracking-wide xs:tracking-wider text-green-dark group-hover:font-bold'>
                  Definições de conta
                </h3>
                <p className='my-auto text-center text-sm xs:text-base text-green-dark font-thin'>
                  Edite / elimine a sua conta na nossa plataforma
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default index
