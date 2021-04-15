import { useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded'

import { TopNav } from './TopNav'

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
          <TopNav
            setUnderline={setUnderline}
            underline={underline}
            setOpen={setOpen}
            open={open}
            setSearchActive={setSearchActive}
            searchActive={searchActive}
            searchNode={searchNode}
          />
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
                  <h4 className='ml-4 font-bold text-2xl text-green-medium'>
                    Flores
                  </h4>
                  <div className='w-[90%] flex p-4 bg-white rounded-lg shadow-md'>
                    <h6 className='font-bold text-xl text-green-dark'>tipos</h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      cores
                    </h6>
                    <h6 className='mr-auto font-bold text-xl text-green-dark'>
                      estação
                    </h6>
                  </div>
                </div>
                <div className='w-5/12 mx-auto'>
                  <h4 className='ml-4 font-bold text-2xl text-green-medium'>
                    Plantas
                  </h4>
                  <div className='w-[90%] flex p-4 bg-white rounded-lg shadow-md'>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      tipos
                    </h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      local
                    </h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      tamanho
                    </h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      características
                    </h6>
                  </div>
                </div>
                <div className='w-2/12'>
                  <h4 className='ml-4 font-bold text-2xl text-green-medium'>
                    Acessórios
                  </h4>
                  <div className='w-[90%] flex p-4 bg-white rounded-lg shadow-md'>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      vasos
                    </h6>
                    <h6 className='mx-auto font-bold text-xl text-green-dark'>
                      outros
                    </h6>
                  </div>
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