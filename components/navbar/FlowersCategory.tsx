import { useState } from 'react'
import { Image } from 'cloudinary-react'

interface FlowersCategoryProps {}

export const FlowersCategory: React.FC<FlowersCategoryProps> = ({}) => {
  const [selected, setSelected] = useState('tipos')
  return (
    <div className='w-5/12'>
      <h4 className='ml-4 font-bold text-2xl tracking-widest text-green-medium'>
        Flores
      </h4>
      <div className='w-[95%] h-[21.4rem] bg-white rounded-lg shadow-lg'>
        <div className='w-full h-[15%] border-b flex pt-2'>
          <h6
            className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'tipos' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('tipos')}
          >
            tipos
          </h6>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'cores' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('cores')}
          >
            cores
          </h6>
          <h6
            className={`mx-auto px-3 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'estação' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('estação')}
          >
            estação
          </h6>
        </div>
        <div className='w-full h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-green-light scrollbar-thumb-rounded-full'>
          {selected === 'tipos' ? (
            <div className='mt-4 ml-2 mr-4 grid grid-cols-2 gap-4'>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
              <div className='flex py-2 rounded-lg border-2 border-gray-200'>
                <div className='w-14 h-14 mx-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='mx-auto self-center font-bold text-center text-green-dark tracking-[0.8rem]'>
                  ROSAS
                </h6>
              </div>
            </div>
          ) : selected === 'cores' ? (
            <div></div>
          ) : selected === 'estação' ? (
            <div></div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
