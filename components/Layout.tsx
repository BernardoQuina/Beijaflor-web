import { Navbar } from './Navbar'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative z-[0] w-screen h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-pink-dark scrollbar-thumb-rounded-full'>
      <div className='absolute z-[-1] ml-[70%] md:ml-[60%] lg:ml[80%] 1xl:ml-[70%] 2xl:ml-[60%] 3xl:ml-[50%]'>
        <div className='h-[180rem] w-[180rem] rounded-[4rem] shadow-inner-2 transform rotate-45 bg-pink-light'></div>
      </div>

      <Navbar />
      <main className='w-full 3xl:w-[90%] 4xl:w-[70%] mt-32 mx-auto px-3'>
        {children}
      </main>
    </div>
  )
}
