import { useState } from 'react'

interface AccessoriesCategoryProps {}

export const AccessoriesCategory: React.FC<AccessoriesCategoryProps> = ({}) => {
  const [selected, setSelected] = useState('vasos')

  return (
    <div className='w-2/12 mx-auto'>
      <h4 className='ml-4 font-bold text-2xl tracking-widest text-green-medium'>
        Acessórios
      </h4>
      <div className='w-[100%] h-[21.4rem] p-2 bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[10%] flex'>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'vasos' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('vasos')}
          >
            vasos
          </h6>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'outros' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('outros')}
          >
            outros
          </h6>
        </div>
        <div className='w-full h-[90%]'></div>
      </div>
    </div>
  )
}
