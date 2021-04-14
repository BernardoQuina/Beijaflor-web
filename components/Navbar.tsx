import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { Image } from 'cloudinary-react'
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded'
import Search from '@material-ui/icons/Search'
import Person from '@material-ui/icons/Person'
import { Heart } from './svg/Heart'
import { ShoppingBag } from './svg/ShoppingBag'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [underline, setUnderline] = useState(0)

  const underlineRef = useRef<number>()
  underlineRef.current = underline

  const openRef = useRef<boolean>()
  openRef.current = open

  const navNode = useRef<HTMLButtonElement | null>(null)
  const searchNode = useRef<HTMLInputElement | null>(null)

  const offNavClick = (e: any) => {
    if (navNode.current && navNode.current.contains(e.target)) {
      return
    }

    setOpen(false)
    setUnderline(0)
  }

  const offSearchClick = (e: any) => {
    if (searchNode.current && searchNode.current.contains(e.target)) {
      return setSearchActive(true)
    }

    setSearchActive(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', offNavClick)
    document.addEventListener('mousedown', offSearchClick)
    return () => {
      document.removeEventListener('mousedown', offNavClick)
      document.removeEventListener('mousedown', offSearchClick)
    }
  }, [searchActive, open, underline])

  return (
    <AnimateSharedLayout>
      <div className='z-[1] fixed w-[95%] 3xl:w-[85%] 4xl:w-[70%] mt-4 mx-auto left-0 right-0'>
        <motion.nav
          layoutId='expandable-nav'
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 21,
          }}
          className={`flex flex-col w-full ${
            !open ? ' h-[4rem]' : ' h-[30rem]'
          }  rounded-xl overflow-y-hidden shadow-lg bg-green-extraLight`}
          ref={navNode}
        >
          <motion.div layoutId='top-nav' className='flex w-full h-[4rem]'>
            <Link href='/'>
              <a className=' ml-4 rounded-full self-center'>
                <Image
                  className='h-[3rem] w-[3rem]'
                  src='/logo.png'
                  crop='fill'
                />
              </a>
            </Link>
            <div
              className={`absolute ${
                open ? 'flex' : 'hidden md:flex'
              } w-full top-[4.2rem] md:top-0 md:relative md:w-5/12 2xl:w-4/12 mx-auto text-green-medium`}
            >
              <motion.button
                className={`lg:text-xl 2xl:text-2xl self-center font-bold ml-4 focus:outline-none`}
                onMouseEnter={() => {
                  setUnderline(1)
                  setOpen(true)
                }}
              >
                NOVIDADES
                {underline === 1 && (
                  <motion.div
                    layoutId='underline'
                    className='h-[0.15rem] w-full rounded-full bg-green-medium'
                  ></motion.div>
                )}
              </motion.button>
              <motion.button
                className={`lg:text-xl 2xl:text-2xl self-center font-bold mx-auto focus:outline-none`}
                onMouseEnter={() => {
                  setUnderline(2)
                  setOpen(true)
                }}
              >
                OCASIÃO
                {underline === 2 && (
                  <motion.div
                    layoutId='underline'
                    className='h-[0.15rem] w-full rounded-full bg-green-medium'
                  ></motion.div>
                )}
              </motion.button>
              <motion.button
                className={`lg:text-xl 2xl:text-2xl self-center font-bold mr-4 focus:outline-none`}
                onMouseEnter={() => {
                  setUnderline(3)
                  setOpen(true)
                }}
              >
                CATEGORIAS
                {underline === 3 ||
                (open && underline !== 1 && underline !== 2) ? (
                  <motion.div
                    layoutId='underline'
                    className='h-[0.16rem] w-full rounded-full bg-green-medium'
                  ></motion.div>
                ) : null}
              </motion.button>
            </div>
            <motion.div
              layoutId='search-expand'
              className={`flex h-[3rem] ${
                searchActive
                  ? 'absolute z-[1] md:relative w-11/12 mx-auto left-0 right-0'
                  : 'w-5/12 relative'
              } md:w-4/12 mx-auto self-center items-center rounded-xl shadow-sm bg-white text-3xl`}
              onClick={() => setSearchActive(true)}
            >
              <motion.div layoutId='search-logo'>
                <Search
                  fontSize='inherit'
                  className='absolute transform left-[95%] translate-x-[-95%] -mt-3 text-gray-300'
                />
              </motion.div>
              <input
                ref={searchNode}
                className='w-10/12 ml-2 pl-2 pr-5 text-2xl focus:outline-none'
              />
            </motion.div>
            <div className='flex transform scale-90 md:scale-100 mx-auto md:w-2/12 lg:w-[12%] 2xl:w-[10%] items-center'>
              <ShoppingBag tailwind='h-8 text-green-dark' strokeWidth={2.1} />
              <Heart
                tailwind='h-8 text-green-dark mx-2 md:mx-auto'
                strokeWidth={2.1}
              />
              <Person fontSize='large' className='md:mr-2 text-green-dark' />
            </div>
          </motion.div>
          <div>
            {open && underline === 1 ? (
              <motion.div layoutId='expand-nav'>NOVIDADES</motion.div>
            ) : open && underline === 2 ? (
              <motion.div layoutId='expand-nav'>OCASIÃO</motion.div>
            ) : open && underline === 3 ? (
              <motion.div
                layoutId='expand-nav'
                className='flex mt-10 lg:mt-4 mx-6'
              >
                <div className='w-5/12'>
                  <h4 className='ml-left font-bold text-2xl text-green-medium'>
                    Flores
                  </h4>
                  <div className='flex'>
                    <h6 className='font-bold text-xl text-green-dark'>tipos</h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>cores</h6>
                    <h6 className='mr-auto font-bold text-xl text-green-dark'>
                      estação
                    </h6>
                  </div>
                </div>
                <div className='w-5/12 mx-auto'>
                  <h4 className='font-bold text-2xl text-green-medium'>
                    Plantas
                  </h4>
                  <div className='flex'>
                    <h6 className='ml-left font-bold text-xl text-green-dark'>tipos</h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>local</h6>
                    <h6 className='mr-auto font-bold text-xl text-green-dark'>
                      tamanho
                    </h6>
                    <h6 className='mr-auto font-bold text-xl text-green-dark'>
                      características
                    </h6>
                  </div>
                </div>
                <div className='w-2/12'>
                  <h4 className='font-bold text-2xl text-green-medium'>
                    Acessórios
                  </h4>
                </div>
              </motion.div>
            ) : null}
          </div>
        </motion.nav>
        <motion.button
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 21,
          }}
          type='button'
          layoutId='expandable-nav-button'
          className='absolute -bottom-7 mx-auto left-0 right-0 focus:outline-none'
          onClick={() => {
            setOpen(!open)
            setUnderline(3)
          }}
        >
          <ExpandMoreRounded
            fontSize='large'
            className={`text-green-dark transform ${open && 'rotate-180'}`}
          />
        </motion.button>
      </div>
    </AnimateSharedLayout>
  )
}
