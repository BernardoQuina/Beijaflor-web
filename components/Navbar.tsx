import { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false)

  return (
    <AnimateSharedLayout>
      {!open ? (
        <motion.nav
          layoutId='expandable-nav'
          className='fixed w-[90%] 4xl:w-[70%] h-[5rem] mt-3 mx-auto left-0 right-0 rounded-3xl shadow-lg bg-white'
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
                className='text-gray-400 bg-white transform'
              />
            </motion.button>
          </div>
        </motion.nav>
      ) : (
        <motion.nav
          layoutId='expandable-nav'
          className='fixed w-[90%] 4xl:w-[70%] h-[30rem] mt-3 mx-auto left-0 right-0 rounded-3xl shadow-lg bg-white'
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
                className='text-gray-400 bg-white transform rotate-180'
              />
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimateSharedLayout>
  )
}
