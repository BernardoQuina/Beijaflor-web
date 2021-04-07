

interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='relative flex w-screen h-screen overflow-x-hidden bg-green-extraLight scrollbar-thin scrollbar-thumb-pink-dark scrollbar-thumb-rounded-full'>
      <div className='absolute z-0 ml-[100%] md:ml-[80%] 1xl:ml-[70%] 2xl:ml-[60%] 3xl:ml-[50%]'>
        <div className='h-[100rem] w-[100rem] rounded-[6rem] shadow-lg transform rotate-45 bg-pink-light'></div>
      </div>
      <main className='w-full flex z-[1] 3xl:w-[90%] 4xl:w-[70%] mx-auto px-10'>
        {children}
      </main>
    </div>
  )
}
