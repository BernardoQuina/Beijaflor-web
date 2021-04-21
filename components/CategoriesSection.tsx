import { CategoryList } from './CategoryList'


interface CategoriesSectionProps {

}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({  }) => {
  return (
    <section className='max-w-full 4xl:max-w-[120rem] mx-auto md:flex flex-col mt-44 xl:mt-20 2xl:mt-40'>
      <h1 className='md:ml-4 mb-16 font-serif text-left text-4xl md:text-5xl tracking-widest text-pink-dark'>
          Categorias populares
        </h1>
      <div className='w-full mx-auto md:w-[90%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <CategoryList />
      </div>
    </section>
  )
}
