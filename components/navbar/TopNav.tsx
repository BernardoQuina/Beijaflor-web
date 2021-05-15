import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { useMeQuery } from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'
import { Search } from '../svg/Search'
import { ShoppingBag } from '../svg/ShoppingBag'
import { Heart } from '../svg/Heart'
import { Person } from '../svg/Person'
import { Logo } from '../svg/Logo'
import { ProfileModal } from './ProfileModal'
import { Image } from 'cloudinary-react'
import { useRouter } from 'next/router'

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
  const [profileModal, setProfileModal] = useState(false)
  const [search, setSearch] = useState('')

  const router = useRouter()

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  const profileButtonNode = useRef<HTMLButtonElement | null>(null)
  const profileModalNode = useRef<HTMLDivElement | null>(null)

  const profileButtonClick = (e: any) => {
    if (
      profileButtonNode.current &&
      profileButtonNode.current.contains(e.target)
    ) {
      return
    }

    if (
      profileModalNode.current &&
      profileModalNode.current.contains(e.target)
    ) {
      return
    }

    setProfileModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', profileButtonClick)

    return () => {
      document.removeEventListener('mousedown', profileButtonClick)
    }
  })

  return (
    <motion.div layoutId='top-nav' className='flex w-full h-[3rem]'>
      <Link href='/'>
        <a className=' ml-4 rounded-full self-center'>
          <Logo tailwind='text-green-dark h-8' strokeWidth={3.6} />
        </a>
      </Link>
      <div
        className={`absolute ${
          open ? 'flex' : 'hidden lg:flex'
        } w-full max-w-md lg:max-w-full  mx-auto top-[4.2rem] lg:top-0 lg:relative lg:w-5/12 2xl:w-4/12 transform left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 text-green-medium`}
      >
        <motion.button
          className={`text-sm xs:text-base lg:text-lg self-center ml-4 focus:outline-none`}
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
          className={`text-sm xs:text-base lg:text-lg self-center mx-auto focus:outline-none`}
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
          className={`text-sm xs:text-base lg:text-lg self-center mr-4 focus:outline-none`}
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
        className={`flex h-[2.2rem] ${
          searchActive
            ? 'absolute z-[2] md:relative w-[95%] mx-auto left-0 right-0'
            : 'w-5/12 relative'
        } md:w-6/12 lg:w-4/12 mx-auto self-center items-center rounded-lg shadow-inner bg-white text-3xl border`}
        onClick={() => setSearchActive(true)}
      >
        <motion.button
          layoutId='search-logo'
          className='flex'
          type='submit'
          onClick={() => {
            if (
              router.query.categories &&
              router.query.categories.includes(search)
            ) {
              router.reload()
            } else {
              router.push(`/explorar/pesquisa/${search}`)
            }
          }}
        >
          <Search
            tailwind='h-5 absolute transform left-[92%] translate-x-[-92%] self-center text-gray-300'
            strokeWidth={2}
          />
        </motion.button>
        <input
          ref={searchNode}
          className='w-10/12 ml-2 pl-2 pr-5 text-lg font-thin tracking-widest focus:outline-none'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log(router.query)
              if (
                router.query.categories &&
                router.query.categories.includes(search)
              ) {
                router.reload()
              } else {
                router.push(`/explorar/pesquisa/${search}`)
              }
            }
          }}
        />
      </motion.div>
      <div className='relative z-[1] flex transform scale-90 md:scale-100 mx-auto md:w-2/12 lg:w-[12%] 2xl:w-[10%] items-center'>
        <button className='md:mx-auto'>
          <ShoppingBag tailwind='h-8 text-green-dark' strokeWidth={1.5} />
        </button>
        <button className='md:mx-auto'>
          <Heart tailwind='h-8 text-green-dark mx-2' strokeWidth={1.5} />
        </button>
        <button
          className='md:mx-auto'
          type='button'
          ref={profileButtonNode}
          onClick={() => {
            setProfileModal(!profileModal)
          }}
        >
          {data?.me && data.me.photo ? (
            <div className='md:mr-2'>
              <Image
                className='rounded-full'
                src={data.me.photo}
                height={30}
                width={30}
              />
            </div>
          ) : (
            <Person tailwind='h-8 md:mr-2 text-green-dark' strokeWidth={1.5} />
          )}
        </button>
        {profileModal && <ProfileModal me={data} modalRef={profileModalNode} />}
      </div>
    </motion.div>
  )
}
