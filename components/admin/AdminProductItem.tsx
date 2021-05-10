import { useState } from 'react'
import { Image } from 'cloudinary-react'

import { Settings } from '../svg/Settings'
import { ArrowDown } from '../svg/ArrowDown'
import { Size } from '../svg/Size'
import { Water } from '../svg/Water'
import { BasicProductInfoFragment } from '../../lib/generated/graphql'
import { Sun } from '../svg/Sun'
import { Temperature } from '../svg/Temperature'
import { Time } from '../svg/Time'

interface AdminProductItemProps {
  product: BasicProductInfoFragment
  index: number
}

export const AdminProductItem: React.FC<AdminProductItemProps> = ({
  product,
  index,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`flex flex-col w-full ${!open && 'h-20'} ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      } overflow-hidden`}
    >
      <div className='flex w-full h-20 p-2'>
        <div className='flex w-[20%]'>
          <div className='h-full w-12 mx-auto rounded-md overflow-hidden'>
            <Image
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId={product.images[0]}
              height={300}
              width={200}
              quality={20}
              crop='fill'
            />
          </div>
        </div>
        <div className='flex w-[54%]'>
          <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
            {product.name}
          </h4>
        </div>
        <div className='hidden lg:flex w-[34%]'>
          <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
            € {product.price.toFixed(2)}
          </h4>
        </div>
        <div className='hidden lg:flex w-[34%]'>
          <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
            {product.stock}
          </h4>
        </div>
        <div className='hidden lg:flex w-[34%]'>
          {product.active ? (
            <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
              ativo
            </h4>
          ) : (
            <h4 className='w-full self-center text-center tracking-wider'>
              inativo
            </h4>
          )}
        </div>
        <div className='flex w-[28%]'>
          <button
            type='button'
            className='mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
          >
            <Settings tailwind='h-5 text-green-dark' />
          </button>
          <button
            type='button'
            onClick={() => setOpen(!open)}
            className='mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
          >
            <ArrowDown
              tailwind={`h-5 text-green-dark transform ${open && 'rotate-180'}`}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>
      <div className='flex flex-col w-full py-2 lg:px-4'>
        <div className='w-full lg:hidden'>
          <div className='flex w-full mt-2 h-8 py-2'>
            <div className='flex w-[34%]'>
              <button className='flex mx-auto'>
                <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                  PREÇO
                </h5>
              </button>
            </div>
            <div className='flex w-[34%]'>
              <button className='flex mx-auto'>
                <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                  STOCK
                </h5>
              </button>
            </div>
            <div className='flex w-[34%]'>
              <button className='flex mx-auto'>
                <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                  ESTADO
                </h5>
              </button>
            </div>
          </div>
          <div className='flex w-full h-10 py-2'>
            <div className='flex w-[34%]'>
              <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
                € {product.price.toFixed(2)}
              </h4>
            </div>
            <div className='flex w-[34%]'>
              <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
                {product.stock}
              </h4>
            </div>
            <div className='flex w-[34%]'>
              {product.active ? (
                <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
                  ativo
                </h4>
              ) : (
                <h4 className='w-full self-center text-center tracking-wider'>
                  inativo
                </h4>
              )}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-col lg:flex-row w-full mt-4 p-2'>
            <div className='flex flex-col w-full lg:w-[27.5%]'>
              <h5 className='ml-2 self-center w-full text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                DESCRIÇÃO
              </h5>
              <div>
                <p className='ml-2 mt-2 text-green-dark'>
                  {product.description}
                </p>
              </div>
            </div>
            <div className='flex flex-col w-full lg:w-[45%] mt-6 lg:mt-0'>
              <h5 className='ml-2 self-center w-full text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                CARACTERÍSTICAS
              </h5>
              <div className='flex lg:flex-wrap mt-3 pb-2 overflow-x-auto'>
                {product.height && (
                  <div className='flex min-w-[4rem] max-w-min flex-col mx-1 lg:mx-auto'>
                    <div className='mx-auto p-1 rounded-full bg-pink-light'>
                      <Size tailwind='h-6 text-pink-dark transform rotate-90' />
                    </div>
                    <p className='mt-1 text-sm text-center text-green-dark'>
                      {product.height}
                    </p>
                  </div>
                )}
                {product.water && (
                  <div className='flex min-w-[4rem] max-w-min flex-col mx-1 lg:mx-auto'>
                    <div className='mx-auto p-2 rounded-full bg-pink-light'>
                      <Water tailwind='h-5 text-pink-dark' />
                    </div>
                    <p className='mt-1 text-sm text-center text-green-dark'>
                      {product.water}
                    </p>
                  </div>
                )}
                {product.exposure && (
                  <div className='flex min-w-[4rem] max-w-min flex-col mx-1 lg:mx-auto'>
                    <div className='mx-auto p-1 rounded-full bg-pink-light'>
                      <Sun tailwind='h-6 text-pink-dark' strokeWidth={2} />
                    </div>
                    <p className='mt-1 text-sm text-center text-green-dark'>
                      {product.exposure}
                    </p>
                  </div>
                )}
                {product.temperature && (
                  <div className='flex min-w-[4rem] max-w-min flex-col lg:mx-auto mx-1'>
                    <div className='mx-auto p-1 rounded-full bg-pink-light'>
                      <Temperature tailwind='h-6 text-pink-dark' />
                    </div>
                    <p className='mt-1 text-sm text-center text-green-dark'>
                      {product.temperature}
                    </p>
                  </div>
                )}
                {product.lifespan && (
                  <div className='flex min-w-[4rem] max-w-min flex-col mx-1 lg:mx-auto'>
                    <div className='mx-auto p-1 rounded-full bg-pink-light'>
                      <Time tailwind='h-6 text-pink-dark' />
                    </div>
                    <p className='mt-1 text-sm text-center text-green-dark'>
                      {product.lifespan}
                    </p>
                  </div>
                )}
                {!product.height &&
                  !product.water &&
                  !product.exposure &&
                  !product.temperature &&
                  !product.lifespan && (
                    <p className='ml-2 text-green-dark'>Nenhuma</p>
                  )}
              </div>
            </div>
            <div className='flex flex-col w-full lg:w-[27.5%] mt-6 lg:mt-0'>
              <h5 className='ml-2 self-center w-full text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                CATEGORIAS
              </h5>
              <div className='flex lg:flex-wrap mt-3 pb-2 overflow-x-auto'>
                {product.categories.map((category) => (
                  <p key={category.id}>{category.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}