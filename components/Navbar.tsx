import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { Image } from 'cloudinary-react'
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded'
import Search from '@material-ui/icons/Search'
import Person from '@material-ui/icons/Person'
import Heart from '@material-ui/icons/FavoriteBorder'
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
          className={`flex w-full ${
            !open ? ' h-[4.5rem]' : ' h-[30rem]'
          }  rounded-xl overflow-y-hidden shadow-lg bg-green-extraLight`}
          ref={navNode}
          // onMouseLeave={() => setTimeout(() => setOpen(false), 2000)}
        >
          <motion.div layoutId='top-nav' className='flex w-full h-[4.5rem]'>
            <Link href='/'>
              <a className=' ml-4 rounded-full self-center'>
                <Image
                  className='h-[3rem] w-[3rem]'
                  src='/logo.png'
                  crop='fill'
                />
              </a>
            </Link>
            <div className='hidden ml-2 md:flex w-5/12 2xl:w-4/12 mx-auto text-green-medium'>
              <motion.button
                className={`lg:text-xl 2xl:text-2xl self-center font-bold ml-4 focus:outline-none`}
                onMouseEnter={() => setUnderline(1)}
                onMouseLeave={() =>
                  setTimeout(() => {
                    if (openRef.current && underlineRef.current !== 2)
                      setUnderline(3)
                    if (underlineRef.current === 1) setUnderline(0)
                  }, 500)
                }
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
                onMouseEnter={() => setUnderline(2)}
                onMouseLeave={() =>
                  setTimeout(() => {
                    if (openRef.current && underlineRef.current !== 1)
                      setUnderline(3)
                    if (underlineRef.current === 2) setUnderline(0)
                  }, 500)
                }
              >
                POPULAR
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
                  ? 'absolute md:relative w-11/12 mx-auto left-0 right-0'
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
              <Heart fontSize='large' className='text-green-dark mx-auto' />
              <Person fontSize='large' className='mr-2 text-green-dark' />
            </div>
          </motion.div>
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
