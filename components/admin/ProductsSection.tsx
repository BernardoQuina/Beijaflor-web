import { Image } from 'cloudinary-react'
import { useState } from 'react'

import {
  useProductCountsQuery,
  useProductsQuery,
} from '../../lib/generated/graphql'
import { products } from '../../lib/testData'
import { ArrowDown } from '../svg/ArrowDown'
import { Plus } from '../svg/Plus'
import { Settings } from '../svg/Settings'
import { NewProductModal } from './NewProductModal'

interface ProductsSectionProps {}

export const ProductsSection: React.FC<ProductsSectionProps> = ({}) => {
  const [showNewProductModal, setShowNewProductModal] = useState(false)

  const { data } = useProductCountsQuery({ errorPolicy: 'all' })

  const { data: productData } = useProductsQuery({ errorPolicy: 'all' })

  return (
    <section className='flex flex-col w-full min-h-[75vh] p-2 bg-white rounded-md shadow-around'>
      <NewProductModal
        showProductModal={showNewProductModal}
        setShowProductModal={setShowNewProductModal}
      />
      <div className='flex'>
        <h1 className='relative z-[0] mt-1 lg:mt-4 ml-2 mr-auto font-serif text-2xl md:text-4xl tracking-widest text-pink-dark'>
          Produtos
          <div className='absolute z-[-1] ml-1 -mt-3 lg:-mt-4 rounded-sm bg-pink-light w-full h-[0.4rem] lg:h-[0.6rem]'></div>
        </h1>
        <button
          className='group flex px-2 lg:px-3 lg:mr-2 self-center h-10 rounded-md shadow-md bg-green-extraLight'
          onClick={() => setShowNewProductModal(true)}
        >
          <h5 className='hidden lg:inline-block mr-2 self-center tracking-wider text-green-dark group-hover:font-bold'>
            Novo produto
          </h5>
          <Plus tailwind='m-auto h-6 text-green-dark' strokeWidth={2} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row mt-6 max-w-lg'>
        <div className='flex mb-3 lg:mx-auto py-2 px-4 rounded-md shadow-md bg-green-extraLight'>
          <h4 className='mx-auto text-green-dark tracking-widest'>
            <strong>{data?.productCount}</strong> produtos
          </h4>
        </div>
        <div className='flex mx-auto w-full lg:w-[66%]'>
          <div className='flex mb-3 mx-auto py-2 px-4 rounded-md shadow-md bg-gray-200'>
            <h4 className='mx-auto text-gray-500 tracking-widest'>
              <strong>{data?.inactiveCount}</strong> inativos
            </h4>
          </div>
          <div className='flex mb-3 mx-auto py-2 px-4 rounded-md shadow-md bg-red-100'>
            <h4 className='mx-auto text-red-700 tracking-widest'>
              <strong>{data?.outOfStockCount}</strong> sem stock
            </h4>
          </div>
        </div>
      </div>
      <div className='w-full mt-4 mx-auto lg:p-2 min-h-[46rem]'>
        <div className='sticky z-[1] flex top-40 lg:top-20 mb-4 w-full h-10 p-2 rounded-md shadow-md bg-green-extraLight'>
          <div className='flex w-[20%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                IMAGEM
              </h5>
            </button>
          </div>
          <div className='flex w-[54%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                NOME
              </h5>
            </button>
          </div>
          <div className='hidden lg:flex w-[34%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                PREÇO
              </h5>
            </button>
          </div>
          <div className='hidden lg:flex w-[34%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                STOCK
              </h5>
            </button>
          </div>
          <div className='hidden lg:flex w-[34%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                ESTADO
              </h5>
            </button>
          </div>
          <div className='flex w-[28%]'>
            <button className='flex mx-auto'>
              <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                AÇÃO
              </h5>
            </button>
          </div>
        </div>
        {productData?.products
          ? productData.products.map((product, index) => (
              <div
                key={product.id}
                className={`flex w-full h-20 p-2 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
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
                    className='mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
                  >
                    <ArrowDown tailwind='h-5 text-green-dark' strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </section>
  )
}
