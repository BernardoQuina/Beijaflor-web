import { useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'

import { TopNav } from './TopNav'
import { ArrowDown } from '../svg/ArrowDown'
import { ExpandedNav } from './ExpandedNav'
import { useCategoriesQuery } from '../../lib/generated/graphql'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [underline, setUnderline] = useState(0)

  const { data } = useCategoriesQuery({
    errorPolicy: 'all',
    variables: { search: '', skip: 0, take: 1000 },
    fetchPolicy: 'network-only',
  })

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
    if (!open) {
      setUnderline(0)
    }

    document.addEventListener('mousedown', offNavClick)
    document.addEventListener('mousedown', offSearchClick)
    return () => {
      document.removeEventListener('mousedown', offNavClick)
      document.removeEventListener('mousedown', offSearchClick)
    }
  }, [searchActive, open, underline])

  return (
    <AnimateSharedLayout>
      <div className='z-[3] fixed w-[95%] 3xl:w-[85%] 4xl:w-[70%] mt-2 mx-auto left-0 right-0'>
        <motion.nav
          layoutId='expandable-nav'
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 21,
          }}
          className={`flex flex-col w-full ${
            !open ? ' h-[3rem]' : 'h-[32rem] lg:h-[30rem]'
          }  rounded-lg shadow-lg bg-green-extraLight bg-opacity-95`}
          ref={navNode}
        >
          <TopNav
            setUnderline={setUnderline}
            underline={underline}
            setOpen={setOpen}
            open={open}
            setSearchActive={setSearchActive}
            searchActive={searchActive}
            searchNode={searchNode}
          />
          <ExpandedNav categories={data?.categories} setOpen={setOpen} open={open} underline={underline} />
        </motion.nav>
        <button
          type='button'
          className='absolute -bottom-6 left-[50%] translate-x-[-50%] focus:outline-none'
          onClick={() => {
            setOpen(!open)
            setUnderline(1)
          }}
        >
          <ArrowDown
            tailwind={`h-6 text-green-dark transform ${open && 'rotate-180'}`}
            strokeWidth={2.5}
          />
        </button>
      </div>
    </AnimateSharedLayout>
  )
}
