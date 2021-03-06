import Link from 'next/link'
import { Image } from 'cloudinary-react'
import { Facebook } from './svg/Facebook'
import { Instagram } from './svg/Instagram'
import { Pinterest } from './svg/Pinterest'
import { Send } from './svg/Send'
import { ArrowDown } from './svg/ArrowDown'
import { useState } from 'react'
import { useWishlistModal } from '../context/wishListModalContext'
import { useCartModal } from '../context/CartModalContext'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const [open, setOpen] = useState('')

  const { setWishlistModal } = useWishlistModal()
  const { setCartModal } = useCartModal()

  return (
    <footer className='w-full bg-pink-light shadow-inner pt-10 mt-10'>
      <div className='flex flex-col lg:flex-row max-w-[100rem] mx-auto text-green-dark text-center lg:text-left tracking-widest'>
        <div className='flex flex-col lg:ml-auto lg:w-[10%]'>
          <div className='w-[120px] h-[120px] mx-auto lg:-mt-4'>
            <Image
              alt='logo florista beijaflor'
              src='/logo-with-letters.png'
              height={120}
              width={120}
              crop='fill'
            />
          </div>
          <div className='flex lg:flex-col w-[50%] lg:w-full mx-auto mt-6 lg:mt-16'>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://facebook.com/Florista-Beijaflor-em-Rio-de-MouroSintra-213481928713090'
              className='mx-auto'
            >
              <Facebook tailwind='h-6 text-green-dark mx-auto' />
            </a>
            <a href='' className='mx-auto'>
              <Instagram tailwind='h-6 text-green-dark mx-auto lg:my-6' />
            </a>
            <a href='' className='mx-auto'>
              <Pinterest tailwind='h-6 text-green-dark mx-auto' />
            </a>
          </div>
        </div>
        <div className='w-full mx-auto lg:w-[85%] mb-10 lg:mr-auto'>
          <div className='h-[0.15rem] mt-12 rounded-full w-[80%] lg:w-[95%] mx-auto bg-green-dark lg:mt-2 mb-10'></div>
          <div className='flex flex-col lg:flex-row w-[90%] mx-auto'>
            <div className='flex flex-col mx-auto lg:mr-auto mb-6 lg:mb-0'>
              <button
                className='flex mx-auto'
                onClick={() => {
                  if (open !== 'navega????o') {
                    setOpen('navega????o')
                  } else {
                    setOpen('')
                  }
                }}
              >
                <h6 className='font-bold font-serif tracking-widest self-center'>
                  Navega????o
                </h6>

                <ArrowDown
                  tailwind={`h-4 transform ml-1 self-center lg:hidden ${
                    open === 'navega????o' && 'rotate-180'
                  }`}
                  strokeWidth={3}
                />
              </button>
              <div
                className={`${
                  open !== 'navega????o' && 'hidden lg:inline-block'
                }`}
              >
                <Link href='/'>
                  <a>
                    <p className='my-4'>In??cio</p>
                  </a>
                </Link>
                <Link href='/explorar'>
                  <a>
                    <p className='my-4'>Explorar</p>
                  </a>
                </Link>
                <Link href='/explorar/flores'>
                  <a>
                    <p className='my-4'>Flores</p>
                  </a>
                </Link>
                <Link href='/explorar/plantas'>
                  <a>
                    <p className='my-4'>Plantas</p>
                  </a>
                </Link>
                <Link href='/explorar/acess??rios'>
                  <a>
                    <p className='my-4'>Acess??rios</p>
                  </a>
                </Link>
                <Link href='/explorar/ocasi??o'>
                  <a>
                    <p className='my-4'>Ocasi??o</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className='flex flex-col mx-auto mb-6 lg:mb-0'>
              <button
                className='flex mx-auto lg:mx-0'
                onClick={() => {
                  if (open !== 'conta') {
                    setOpen('conta')
                  } else {
                    setOpen('')
                  }
                }}
              >
                <h6 className='font-bold font-serif tracking-widest self-center'>
                  Conta
                </h6>

                <ArrowDown
                  tailwind={`h-4 transform ml-1 self-center lg:hidden ${
                    open === 'conta' && 'rotate-180'
                  }`}
                  strokeWidth={3}
                />
              </button>
              <div
                className={`${open !== 'conta' && 'hidden lg:inline-block'}`}
              >
                <Link href='/conta'>
                  <a>
                    <p className='my-4'>A minha conta</p>
                  </a>
                </Link>
                <button
                  onClick={() => setWishlistModal('true')}
                  className='tracking-widest hover:underline'
                >
                  <p>Lista de desejos</p>
                </button>
                <div className='my-4'>
                  <button
                    onClick={() => setCartModal('true')}
                    className='tracking-widest hover:underline'
                  >
                    <p>Cesto</p>
                  </button>
                </div>
                <Link href='/checkout'>
                  <a>
                    <p className='my-4'>Checkout</p>
                  </a>
                </Link>
                <Link href='/conta/encomendas'>
                  <a>
                    <p className='my-4'>Encomendas</p>
                  </a>
                </Link>
                <Link href='/conta/moradas'>
                  <a>
                    <p className='my-4'>Moradas</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className='flex flex-col mx-auto mb-10 lg:mb-0'>
              <button
                className='flex mx-auto lg:mx-0'
                onClick={() => {
                  if (open !== 'beijaflor') {
                    setOpen('beijaflor')
                  } else {
                    setOpen('')
                  }
                }}
              >
                <h6 className='font-bold font-serif tracking-widest self-center'>
                  Beijaflor
                </h6>
                <ArrowDown
                  tailwind={`h-4 transform ml-1 self-center lg:hidden ${
                    open === 'beijaflor' && 'rotate-180'
                  }`}
                  strokeWidth={3}
                />
              </button>
              <div
                className={`${
                  open !== 'beijaflor' && 'hidden lg:inline-block'
                }`}
              >
                <Link href='/sobre'>
                  <a>
                    <p className='my-4'>Sobre n??s</p>
                  </a>
                </Link>
                <Link href='/condicoes'>
                  <a>
                    <p className='my-4'>Condi????es gerais</p>
                  </a>
                </Link>
                <Link href='/ajuda'>
                  <a>
                    <p className='my-4'>Perguntas frequentes</p>
                  </a>
                </Link>
                <Link href='/privacidade'>
                  <a>
                    <p className='my-4'>Pol??tica de privacidade</p>
                  </a>
                </Link>
                <Link href='/cookies'>
                  <a>
                    <p className='my-4'>Pol??tica de cookies</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className='relative min-h-[12rem] mx-auto mt-10 lg:mt-0 lg:ml-auto'>
              <h6 className='font-bold font-serif self-center mb-6'>
                Fique a par das novidades
              </h6>
              <div className='flex h-[3rem] w-[18rem] xs:w-[20rem] md:w-[22rem] mx-auto self-center items-center rounded-md bg-white'>
                <input
                  className='w-10/12 ml-2 pl-2 pr-2 text-lg font-thin tracking-widest focus:outline-none'
                  placeholder='email para newsletter'
                />
                <button className='h-full w-12 md:w-14 rounded-r-md bg-green-extraLight'>
                  <Send
                    tailwind='h-6 mx-auto text-green-dark transform rotate-45'
                    strokeWidth={1.5}
                  />
                </button>
              </div>
              <div className='absolute w-full text-right bottom-0 text-xs'>
                <p>Copyright ?? 2021 Florista Beijaflor</p>
                <p>Todos os direitos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
