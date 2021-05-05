import { Image } from 'cloudinary-react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

interface OauthSignInProps {}

export const OauthSignIn: React.FC<OauthSignInProps> = ({}) => {
  const router = useRouter()

  const googleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`)
  }

  const facebookLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/auth/facebook`)
  }

  return (
    <motion.div layoutId='oauth' className='mt-14'>
      <div className='flex w-full'>
        <div className='w-full border-t'></div>
        <p className='mx-4 -mt-3 text-green-dark tracking-widest'>ou</p>
        <div className='w-full border-t'></div>
      </div>
      <button
        className='flex mt-8 py-2 px-4 mx-auto max-w-max rounded-md border-0 shadow-md group hover:bg-blue-400 focus:animate-bounce focus:outline-none'
        type='button'
        onClick={googleLogin}
      >
        <p className='self-center ml-2 mr-6 text-lg text-blue-500 group-hover:text-white'>
          Entrar com o Google
        </p>
        <Image
          src='/google.png'
          width={30}
          height={30}
          className='rounded-full group-hover:bg-white'
        />
      </button>
      <button
        className='flex mt-6 py-2 px-4 mx-auto max-w-max rounded-md border-0 shadow-md group hover:bg-blue-500 focus:animate-bounce focus:outline-none'
        type='button'
        onClick={facebookLogin}
      >
        <p className='self-center ml-2 mr-2 text-lg text-blue-500 group-hover:text-white'>
          Entrar com o Facebook
        </p>
        <Image
          src='/facebook.png'
          width={30}
          height={30}
          className='rounded-full group-hover:bg-white'
        />
      </button>
    </motion.div>
  )
}
