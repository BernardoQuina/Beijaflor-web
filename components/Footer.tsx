import Link from 'next/link'
import { Image } from 'cloudinary-react'
import { Facebook } from './svg/Facebook'
import { Instagram } from './svg/Instagram'
import { Pinterest } from './svg/Pinterest'
import { Send } from './svg/Send'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className='w-full h-[26rem] bg-pink-light pt-10 mt-10'>
      <div className='flex max-w-[100rem] mx-auto text-green-dark tracking-widest'>
        <div className='flex flex-col ml-auto w-[10%]'>
          <div className='w-[120px] h-[120px] mx-auto  -mt-8'>
            <Image
              src='/logo-with-letters.png'
              height={120}
              width={120}
              crop='fill'
            />
          </div>
          <a href=''>
            <Facebook tailwind='h-6 text-green-dark mx-auto mt-16' />
          </a>
          <a href=''>
            <Instagram tailwind='h-6 text-green-dark mx-auto my-6' />
          </a>
          <a href=''>
            <Pinterest tailwind='h-6 text-green-dark mx-auto' />
          </a>
        </div>
        <div className='w-[85%] mr-auto'>
          <div className='h-[0.15rem] rounded-full w-[95%] mx-auto bg-green-dark mt-2 mb-10'></div>
          <div className='flex w-[90%] mx-auto'>
            <div className='mr-auto'>
              <h6 className='font-bold font-serif mb-6'>Navegação</h6>
              <Link href='/'>
                <a>
                  <p className='my-4'>Início</p>
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
              <Link href='/explorar/acessórios'>
                <a>
                  <p className='my-4'>acessórios</p>
                </a>
              </Link>
              <Link href='/explorar/ocasião'>
                <a>
                  <p className='my-4'>ocasião</p>
                </a>
              </Link>
            </div>
            <div className='mx-auto'>
              <h6 className='font-bold font-serif mb-6'>Conta</h6>
              <Link href='/conta'>
                <a>
                  <p className='my-4'>A minha conta</p>
                </a>
              </Link>
              <Link href='/carrinho'>
                <a>
                  <p className='my-4'>Carrinho</p>
                </a>
              </Link>
              <Link href='/favoritos'>
                <a>
                  <p className='my-4'>Favoritos</p>
                </a>
              </Link>
              <Link href='/checkout'>
                <a>
                  <p className='my-4'>Checkout</p>
                </a>
              </Link>
            </div>
            <div className='mx-auto'>
              <h6 className='font-bold font-serif mb-6'>Beijaflor</h6>
              <Link href='/sobre'>
                <a>
                  <p className='my-4'>Sobre nós</p>
                </a>
              </Link>
              <Link href='/condições'>
                <a>
                  <p className='my-4'>Condições gerais</p>
                </a>
              </Link>
              <Link href='/cookies'>
                <a>
                  <p className='my-4'>Perguntas frequentes</p>
                </a>
              </Link>
              <Link href='/privacidade'>
                <a>
                  <p className='my-4'>Política de privacidade</p>
                </a>
              </Link>
              <Link href='/cookies'>
                <a>
                  <p className='my-4'>Política de cookies</p>
                </a>
              </Link>
            </div>
            <div className='ml-auto'>
              <h6 className='font-bold font-serif mb-6'>
                Fique a par das novidades
              </h6>
              <div
        className='flex h-[3rem] w-[20rem] mx-auto self-center items-center rounded-l-md bg-white'
      >
        <input
          className='w-10/12 ml-2 pl-2 pr-2 text-lg font-thin tracking-widest focus:outline-none'
          placeholder='email para newsletter'
        />
        <button className='h-full w-12 rounded-r-md bg-green-dark'>
          <Send
            tailwind='h-6 mx-auto text-white transform rotate-45'
            strokeWidth={1.5}
          />
        </button>
      </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
