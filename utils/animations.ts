import { Variants } from 'framer-motion'

export const slideLeft: Variants = {
  initial: {
    opacity: 0,
    x: '-400px',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: '-400px',
    transition: { duration: 0.1 },
  },
}

export const slideRight: Variants = {
  initial: {
    opacity: 0,
    x: '400px',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: '400px',
    transition: { duration: 0.1 },
  },
}