import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMeQuery } from '../lib/generated/graphql'
import { isServer } from './isServer'

export const useIsAuth = (push?: boolean) => {
  const router = useRouter()

  const { data, loading } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  useEffect(() => {
    if (!loading && !data?.me && push) {
      router.push('/login')
    }

    if (
      data?.me &&
      (router.pathname === '/login' ||
        router.pathname === '/register' ||
        router.pathname.includes('redefinir-palavra-passe') ||
        (router.pathname === '/conta/admin-dash' && data.me.role !== 'ADMIN'))
    ) {
      router.push('/')
    }
  }, [loading, data, push])
}
