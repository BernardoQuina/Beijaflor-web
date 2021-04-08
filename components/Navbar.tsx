import { useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded'
import Search from '@material-ui/icons/Search'
import Person from '@material-ui/icons/Person'
import Heart from '@material-ui/icons/FavoriteBorder'
import { ShoppingBag } from './svg/ShoppingBag'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)

  const navNode = useRef<HTMLButtonElement | null>(null)
  const searchNode = useRef<HTMLInputElement | null>(null)

  const offNavClick = (e: any) => {
    if (navNode.current && navNode.current.contains(e.target)) {
      return
    }

    setOpen(false)
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
  }, [searchActive, open])

  return (
    <AnimateSharedLayout>
      <div className='fixed w-[95%] 3xl:w-[85%] 4xl:w-[70%] mt-5 mx-auto left-0 right-0'>
        <motion.nav
          layoutId='expandable-nav'
          className={`flex w-full ${
            !open ? ' h-[4.5rem]' : ' h-[30rem]'
          }  rounded-xl overflow-y-hidden shadow-lg bg-green-extraLight`}
          ref={navNode}
        >
          <motion.div layoutId='top-nav' className='flex w-full h-[4.5rem]'>
            <div className='h-[3rem] w-[3rem] ml-4 rounded-full self-center bg-green-medium'></div>
            <div className='hidden md:flex w-5/12 2xl:w-4/12 mx-auto text-green-medium'>
              <button className='text-2xl self-center font-bold ml-4 focus:outline-none'>
                NOVIDADES
              </button>
              <button className='text-2xl self-center font-bold mx-auto focus:outline-none'>
                POPULAR
              </button>
              <button
                className='text-2xl self-center font-bold mr-4 focus:outline-none'
                onClick={() => setOpen(!open)}
              >
                CATEGORIAS
              </button>
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
              <motion.div layoutId='search-logo' >
                <Search
                  fontSize='inherit'
                  className='absolute transform left-[95%] translate-x-[-95%] -mt-3 text-gray-300'
                />
              </motion.div>
              <input
                ref={searchNode}
                className='w-10/12 ml-2 pl-2 pr-5 focus:outline-none'
              />
            </motion.div>
            <div className='flex mx-auto md:w-2/12 lg:w-[12%] 2xl:w-[10%] items-center'>
              <ShoppingBag tailwind='h-8 text-green-dark' strokeWidth={2.1} />
              <Heart fontSize='large' className='text-green-dark mx-auto' />
              <Person fontSize='large' className='mr-4 text-green-dark' />
            </div>
          </motion.div>
        </motion.nav>
        <motion.button
          type='button'
          layoutId='expandable-nav-button'
          className='absolute -bottom-7 mx-auto left-0 right-0 focus:outline-none'
          onClick={() => setOpen(!open)}
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
