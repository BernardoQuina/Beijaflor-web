import { MutableRefObject } from 'react'
import { useApolloClient } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MeQuery, useLogoutMutation } from '../../lib/generated/graphql'

interface ProfileModalProps {
  me: MeQuery
  modalRef: MutableRefObject<HTMLDivElement>
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ me, modalRef }) => {
  const router = useRouter()

  const apolloClient = useApolloClient()
  const [logout] = useLogoutMutation({ errorPolicy: 'all' })

  return (
    <div
      ref={modalRef}
      className='absolute z-[20] py-2 px-2 w-[15rem] top-[3.7rem] right-0 rounded-md shadow-around bg-white'
    >
      {me.me ? (
        <>
          <Link href='/conta'>
            <a>
              <h6 className='py-2 text-green-dark tracking-wide text-center rounded-md hover:bg-green-extraLight'>
                A minha conta
              </h6>
            </a>
          </Link>
          <Link href='/encomendas'>
            <a>
              <h6 className='py-2 text-green-dark tracking-wide text-center rounded-md hover:bg-green-extraLight'>
                Encomendas
              </h6>
            </a>
          </Link>
          <button
            className='py-2 flex w-full  rounded-md hover:bg-red-100'
            type='button'
            onClick={async () => {
              await logout()
              await apolloClient.clearStore()
              router.push('/login')
            }}
          >
            <h6 className='w-full text-red-500 tracking-wide text-center'>
              Sair
            </h6>
          </button>
        </>
      ) : me === 'undefined' || me === null ? (
        <Link href='/login'>
          <a>
            <h6 className='py-2 text-green-dark tracking-wide text-center rounded-md hover:bg-green-extraLight'>
              Entrar / Criar conta
            </h6>
          </a>
        </Link>
      ) : null}
    </div>
  )
}
