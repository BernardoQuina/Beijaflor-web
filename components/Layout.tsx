import { Navbar } from './navbar/Navbar'
import { Footer } from './Footer'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='main-bg relative z-[0] w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-pink-dark scrollbar-thumb-rounded-full'>
      <Navbar />
      <main className='w-full 3xl:w-[90%] 4xl:w-[80%] mt-32 md:mt-40 mx-auto px-3'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
