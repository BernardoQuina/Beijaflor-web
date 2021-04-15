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
            className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
              selected === 'cores' &&
              'bg-green-extraLight rounded-lg shadow-md font-bold'
            }`}
            onMouseEnter={() => setSelected('cores')}
          >
            cores
          </h6>
          <h6
            className={`mx-auto px-3 h-8 cursor-pointer tracking-wider text-xl text-green-dark ${
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
            <div className='my-4 ml-2 mr-4 grid grid-cols-2 2xl:grid-cols-3 gap-5'>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
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
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  rosas
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/card-image-3.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  papoilas
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/category-4.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  orquídeas
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/cravo.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  cravos
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/lírio.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  lírios
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/margarida.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  margaridas
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/gerbera.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  gerberas
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/túlipa.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  túlipas
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/lisianto.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  lisiantos
                </h6>
              </div>
              <div className='flex py-2 rounded-lg shadow-md cursor-pointer hover:bg-green-extraLight'>
                <div className='w-14 h-14 m-auto flex overflow-hidden rounded-xl'>
                  <Image
                    className='my-auto'
                    src='/antúrio.jpg'
                    quality={70}
                    height={500}
                    width={500}
                    gravity='auto'
                    crop='scale'
                  />
                </div>
                <h6 className='w-[55%] mx-auto self-center text-xl font-bold text-center text-green-dark tracking-widest'>
                  antúrios
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
