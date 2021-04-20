import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'
import { motion } from 'framer-motion'

import { Search } from '../svg/Search'
import { ShoppingBag } from '../svg/ShoppingBag'
import { Heart } from '../svg/Heart'
import { Person } from '../svg/Person'

interface TopNavProps {
  setUnderline: Dispatch<SetStateAction<number>>
  underline: number
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  setSearchActive: Dispatch<SetStateAction<boolean>>
  searchActive: boolean
  searchNode: MutableRefObject<HTMLInputElement>
}

export const TopNav: React.FC<TopNavProps> = ({
  setUnderline,
  underline,
  setOpen,
  open,
  setSearchActive,
  searchActive,
  searchNode,
}) => {
  return (
    <motion.div layoutId='top-nav' className='flex w-full h-[4rem]'>
      <Link href='/'>
        <a className=' ml-4 rounded-full self-center'>
          <Image className='h-[3rem] w-[3rem]' src='/logo.png' crop='fill' />
        </a>
      </Link>
      <div
        className={`absolute ${
          open ? 'flex' : 'hidden lg:flex'
        } w-full max-w-md lg:max-w-full  mx-auto top-[4.2rem] lg:top-0 lg:relative lg:w-5/12 2xl:w-4/12 transform left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 text-green-medium`}
      >
        <motion.button
          className={`lg:text-xl self-center ml-4 focus:outline-none`}
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
          className={`lg:text-xl self-center mx-auto focus:outline-none`}
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
          className={`lg:text-xl self-center mr-4 focus:outline-none`}
          onMouseEnter={() => {
            setUnderline(3)
            setOpen(true)
          }}
        >
          CATEGORIAS
          {underline === 3 || (open && underline !== 1 && underline !== 2) ? (
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
            ? 'absolute z-[1] md:relative w-[95%] mx-auto left-0 right-0'
            : 'w-5/12 relative'
        } md:w-6/12 lg:w-4/12 mx-auto self-center items-center rounded-xl shadow-inner bg-white text-3xl border-2`}
        onClick={() => setSearchActive(true)}
      >
        <motion.div layoutId='search-logo'>
          <Search
            tailwind='h-6 absolute transform left-[95%] translate-x-[-95%] -mt-3 text-gray-300'
            strokeWidth={2}
          />
        </motion.div>
        <input
          ref={searchNode}
          className='w-10/12 ml-2 pl-2 pr-5 text-xl font-thin tracking-widest focus:outline-none'
        />
      </motion.div>
      <div className='flex transform scale-90 md:scale-100 mx-auto md:w-2/12 lg:w-[12%] 2xl:w-[10%] items-center'>
        <button>
          <ShoppingBag tailwind='h-8 text-green-dark' strokeWidth={1.5} />
        </button>
        <button>
          <Heart
            tailwind='h-8 text-green-dark mx-2 md:mx-auto'
            strokeWidth={1.5}
          />
        </button>
        <button>
          <Person tailwind='h-8 md:mr-2 text-green-dark' strokeWidth={1.5} />
        </button>
      </div>
    </motion.div>
  )
}
