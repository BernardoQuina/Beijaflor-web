import { Navbar } from './navbar/Navbar'
import { Footer } from './Footer'
import { Meta } from './Meta'
import { useEffect, useState } from 'react'
import { CookiesModal } from './CookiesModal'

interface LayoutProps {
  overflowHide?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, overflowHide }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(true)

  useEffect(() => {
    const localCookie = JSON.parse(localStorage.getItem('cookiesAccepted'))
    if (!localCookie) setCookiesAccepted(false)
  }, [])

  return (
    <div
      className={`main-bg z-[0] pt-1 -mt-1 ${
        overflowHide && 'overflow-x-hidden'
      }`}
    >
      <Meta />
      <Navbar />
      {!cookiesAccepted && (
        <CookiesModal setCookiesAccepted={setCookiesAccepted} />
      )}
      <main className='w-full min-h-[85vh] 3xl:w-[90%] 4xl:w-[80%] mt-32 md:mt-40 mx-auto px-3'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
