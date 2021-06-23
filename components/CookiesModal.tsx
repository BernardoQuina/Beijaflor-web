import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface CookiesModalProps {
  setCookiesAccepted: Dispatch<SetStateAction<boolean>>
}

export const CookiesModal: React.FC<CookiesModalProps> = ({
  setCookiesAccepted,
}) => {
  return (
    <div className='fixed z-[3] flex w-[95%] max-w-[60rem] p-2 mx-auto bottom-4 left-0 right-0 h-20 rounded-md shadow-around bg-white border-2 border-pink-medium overflow-y-auto'>
      <p className='text-green-dark pr-1 w-[85%] md:w-[90%] my-auto text-sm md:text-base text-center'>
        Este site utiliza cookies próprios e de terceiros. Para modificar a
        configuração e obter mais informação clique{' '}
        <Link href='/cookies'>
          <a className='text-green-medium underline'>aqui</a>
        </Link>
        .
      </p>
      <button
        type='button'
        className='sticky flex top-2 right-0 md:right-1 ml-auto h-10 p-1 px-1 rounded-md shadow-md text-green-dark hover:opacity-80 opacity-100 bg-green-extraLight tracking-widest md:text-lg'
        onClick={() => {
          localStorage.setItem('cookiesAccepted', 'true')
          setCookiesAccepted(true)
        }}
      >
        <p className='self-center'>aceitar</p>
      </button>
    </div>
  )
}
