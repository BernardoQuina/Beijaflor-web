import { Navbar } from './navbar/Navbar'
import { Footer } from './Footer'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='main-bg z-[0] pt-1 -mt-1'>
      <Navbar />
      <main className='w-full min-h-[75vh] 3xl:w-[90%] 4xl:w-[80%] mt-32 md:mt-40 mx-auto px-3'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
