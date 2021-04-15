import { useState } from 'react'

interface PlantsCategoryProps {}

export const PlantsCategory: React.FC<PlantsCategoryProps> = ({}) => {
  const [selected, setSelected] = useState('tipos')

  return (
    <div className='w-5/12 mx-auto'>
      <h4 className='ml-4 font-bold text-2xl tracking-widest text-green-medium'>Plantas</h4>
      <div className='w-[95%] h-[21.4rem] p-2 bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[10%] flex'>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'tipos' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('tipos')}
          >
            tipos
          </h6>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'local' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('local')}
          >
            local
          </h6>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'características' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('características')}
          >
            características
          </h6>
        </div>
        <div className='w-full h-[90%]'></div>
      </div>
    </div>
  )
}
