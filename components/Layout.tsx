import { Navbar } from './navbar/Navbar'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='main-bg relative z-[0] w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-pink-dark scrollbar-thumb-rounded-full'>
      <div className='absolute z-[-1] mt-[-20%] md:mt-[0%] ml-[40%] md:ml-[60%] lg:ml-[80%] 1xl:ml-[70%] 2xl:ml-[60%] 3xl:ml-[70%]'>
        <div className='h-[160rem] w-[160rem] md:h-[180rem] md:w-[180rem] rounded-[4rem] shadow-inner-2 transform rotate-45 bg-pink-light'></div>
      </div>

      <Navbar />
      <main className='w-full 3xl:w-[90%] 4xl:w-[70%] mt-32 md:mt-40 mx-auto px-3'>
        {children}
      </main>
    </div>
  )
}
