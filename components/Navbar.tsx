import { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false)

  return (
    <AnimateSharedLayout>
      <motion.nav
        layoutId='expandable-nav'
        className={`fixed w-[95%] 3xl:w-[85%] 4xl:w-[70%] ${
          !open ? ' h-[4.5rem]' : ' h-[30rem]'
        } mt-5 mx-auto left-0 right-0 rounded-xl shadow-lg bg-white`}
      >
        <div className='relative w-full h-full'>
          <motion.button
            type='button'
            layoutId='expandable-nav-button'
            className='absolute bottom-0 mx-auto left-0 right-0 bg-gray-400 rounded-full focus:outline-none'
            onClick={() => setOpen(!open)}
          >
            <ExpandMoreRounded
              fontSize='large'
              className={`text-gray-400 bg-white transform ${
                open && 'rotate-180'
              }`}
            />
          </motion.button>
        </div>
      </motion.nav>
    </AnimateSharedLayout>
  )
}
