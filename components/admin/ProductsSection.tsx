interface ProductsSectionProps {}

export const ProductsSection: React.FC<ProductsSectionProps> = ({}) => {
  return (
    <section className='flex flex-col w-full h-full p-4 bg-white rounded-md shadow-around'>
      <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-2xl md:text-4xl tracking-widest text-pink-dark'>
        Produtos
        <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
      </h1>
      <div className='flex flex-col lg:flex-row mt-6 max-w-lg'>
        <div className='flex mb-3 lg:mx-auto py-2 px-4 rounded-md shadow-md bg-green-extraLight'>
          <h4 className='mx-auto text-green-dark tracking-widest'>
            <strong>26</strong> produtos
          </h4>
        </div>
        <div className='flex mx-auto w-full lg:w-[66%]'>
          <div className='flex mb-2 mx-auto py-2 px-4 rounded-md shadow-md bg-pink-light'>
            <h4 className='mx-auto text-pink-dark tracking-widest'>
              <strong>4</strong> inativos
            </h4>
          </div>
          <div className='flex mb-2 mx-auto py-2 px-4 rounded-md shadow-md bg-red-100'>
            <h4 className='mx-auto text-red-700 tracking-widest'>
              <strong>5</strong> sem stock
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
