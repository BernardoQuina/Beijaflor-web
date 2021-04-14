interface CategoryListProps {}

export const CategoryList: React.FC<CategoryListProps> = ({}) => {
  const testArray = [
    {
      thumbnail: '',
      name: 'Flores de Primavera',
    },
    {
      thumbnail: '',
      name: 'Flores de Verão',
    },
    {
      thumbnail: '',
      name: 'Rosas',
    },
    {
      thumbnail: '',
      name: 'Orquídeas',
    },
    {
      thumbnail: '',
      name: 'Pêsames',
    },
    {
      thumbnail: '',
      name: 'Casamento',
    },
    {
      thumbnail: '',
      name: 'Aniversário',
    },
    {
      thumbnail: '',
      name: 'Interior',
    },
    {
      thumbnail: '',
      name: 'Exterior',
    },
  ]

  return (
    <>
      {testArray.map((category) => (
        <div
          className='bg-pink-medium h-[20em] w-[20em] mx-auto'
          key={category.name}
        ></div>
      ))}
    </>
  )
}
