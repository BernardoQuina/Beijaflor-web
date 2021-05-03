import { CategoryList } from '../CategoryList'


interface CategoriesSectionProps {

}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({  }) => {
  return (
    <section className='max-w-full 4xl:max-w-[100rem] mx-auto flex flex-col mt-44 xl:mt-20 2xl:mt-40'>
      <h1 className='relative z-[0] mr-auto md:ml-4 font-serif text-left text-2xl md:text-5xl tracking-widest text-pink-dark mb-14'>
            Categorias populares
            <div className='absolute z-[-1] ml-2 mt-[-0.9rem] lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.7rem] lg:h-[1rem]'></div>
          </h1>
      <div className='w-full mx-auto md:w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <CategoryList />
      </div>
    </section>
  )
}
