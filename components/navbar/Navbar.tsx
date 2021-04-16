import { useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'

import { TopNav } from './TopNav'
import { ArrowDown } from '../svg/ArrowDown'
import { ExpandedNav } from './ExpandedNav'

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
            !open ? ' h-[4rem]' : 'h-[32rem] lg:h-[30rem]'
          }  rounded-xl overflow-y-hidden shadow-lg bg-green-extraLight`}
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
          <ExpandedNav open={open} underline={underline} />
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
            setUnderline(1)
          }}
        >
          <ArrowDown
            tailwind={`h-6 text-green-dark transform ${open && 'rotate-180'}`}
            strokeWidth={2.5}
          />
        </motion.button>
      </div>
    </AnimateSharedLayout>
  )
}
