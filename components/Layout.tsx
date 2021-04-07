import { Navbar } from './Navbar'


interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative z-[0] w-screen h-screen overflow-x-hidden bg-green-extraLight scrollbar-thin scrollbar-thumb-pink-dark scrollbar-thumb-rounded-full'>
      <div className='absolute z-[-1] ml-[100%] md:ml-[80%] 1xl:ml-[70%] 2xl:ml-[60%] 3xl:ml-[50%]'>
        <div className='h-[100rem] w-[100rem] rounded-[6rem] shadow-inner-2 transform rotate-45 bg-pink-light'></div>
      </div>
      <Navbar />
      <main className='w-full 3xl:w-[90%] 4xl:w-[70%] mt-36 mx-auto px-3'>
        {children}
      </main>
    </div>
  )
}
