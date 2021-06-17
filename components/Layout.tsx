import { Navbar } from './navbar/Navbar'
import { Footer } from './Footer'
import { Meta } from './Meta'

interface LayoutProps {
  overflowHide?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, overflowHide }) => {
  return (
    <div
      className={`main-bg z-[0] pt-1 -mt-1 ${
        overflowHide && 'overflow-x-hidden'
      }`}
    >
      <Meta />
      <Navbar />
      <main className='w-full min-h-[85vh] 3xl:w-[90%] 4xl:w-[80%] mt-32 md:mt-40 mx-auto px-3'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
