import { motion, AnimateSharedLayout } from 'framer-motion'

import { ArrowDown } from '../svg/ArrowDown'

interface CheckoutHeaderProps {
  checkoutFase: string
}

export const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({
  checkoutFase,
}) => {
  return (
    <div className='flex mx-auto -mt-12 lg:-mt-14 max-w-4xl'>
      <AnimateSharedLayout>
        <motion.h1
          layoutId='confirm Items'
          className={`${
            checkoutFase !== 'confirm items' && 'hidden md:inline-block'
          }
        relative z-[0] mt-1 lg:mt-4 mx-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark ${
          checkoutFase === 'confirm items'
            ? 'text-xl md:text-3xl'
            : 'text-sm md:text-xl font-thin self-end'
        }`}
        >
          Cesto
          {checkoutFase === 'confirm items' && (
            <motion.div
              layoutId='checkout-underline'
              className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'
            ></motion.div>
          )}
        </motion.h1>
        <div
          className={`${
            checkoutFase !== 'confirm items' && 'hidden md:inline-block'
          } self-end`}
        >
          <ArrowDown
            tailwind='h-6 text-pink-dark transform -rotate-90'
            strokeWidth={2}
          />
        </div>
        <motion.h1
          layoutId='address'
          className={`${
            checkoutFase !== 'confirm items' &&
            checkoutFase !== 'address' &&
            'hidden md:inline-block'
          }
        relative z-[0] mt-1 lg:mt-4 mx-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark ${
          checkoutFase === 'address'
            ? 'text-xl md:text-3xl'
            : 'text-sm md:text-xl font-thin self-end'
        }`}
        >
          Morada
          {checkoutFase === 'address' && (
            <motion.div
              layoutId='checkout-underline'
              className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'
            ></motion.div>
          )}
        </motion.h1>
        <div
          className={`${
            checkoutFase !== 'address' && 'hidden md:inline-block'
          } self-end`}
        >
          <ArrowDown
            tailwind='h-6 text-pink-dark transform -rotate-90'
            strokeWidth={2}
          />
        </div>
        <motion.h1
          layoutId='payment'
          className={`${
            checkoutFase !== 'address' &&
            checkoutFase !== 'payment' &&
            'hidden md:inline-block'
          }
        relative z-[0] mt-1 lg:mt-4 mx-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark ${
          checkoutFase === 'payment'
            ? 'text-xl md:text-3xl'
            : 'text-sm md:text-xl font-thin self-end'
        }`}
        >
          Pagamento
          {checkoutFase === 'payment' && (
            <motion.div
              layoutId='checkout-underline'
              className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'
            ></motion.div>
          )}
        </motion.h1>
        <div
          className={`${
            checkoutFase !== 'payment' && 'hidden md:inline-block'
          } self-end`}
        >
          <ArrowDown
            tailwind='h-6 text-pink-dark transform -rotate-90'
            strokeWidth={2}
          />
        </div>
        <h1
          className={`${
            checkoutFase !== 'payment' &&
            checkoutFase !== 'confirmation' &&
            'hidden md:inline-block'
          } relative z-[0] mt-1 lg:mt-4 mx-auto font-serif text-xl md:text-3xl tracking-widest text-pink-dark ${
            checkoutFase === 'confirmation'
              ? 'text-xl md:text-3xl'
              : 'text-sm md:text-xl font-thin self-end'
          }`}
        >
          Confirmação
          {checkoutFase === 'confirmation' && (
            <motion.div
              layoutId='checkout-underline'
              className='absolute z-[-1] ml-1 -mt-3 rounded-sm bg-pink-light w-full h-[0.4rem]'
            ></motion.div>
          )}
        </h1>
      </AnimateSharedLayout>
    </div>
  )
}
