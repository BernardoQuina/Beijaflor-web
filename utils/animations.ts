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
    transition: { duration: 0.3 },
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
    transition: { duration: 0.3 },
  },
}

export const backdrop: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.3 },
  },
}

export const scaleUp: Variants = {
  initial: {
    opacity: 0,
    scaleY: 0.15,
    scaleX: 0.25,
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    scaleX: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scaleY: 0.15,
    scaleX: 0.25,
    transition: { duration: 0.3 },
  },
}
