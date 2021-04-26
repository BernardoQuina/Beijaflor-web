import { GetServerSideProps, NextPage } from 'next'
import { Image } from 'cloudinary-react'

import { Product, products } from '../../lib/testData'
import { Layout } from '../../components/Layout'
import { useState } from 'react'

interface produtoProps {
  product: Product
}

const produto: NextPage<produtoProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  console.log(product)

  return (
    <Layout>
      <div className='grid max-w-[100rem] mx-auto w-full h-[45rem] md:h-[60rem] lg:h-[45rem] grid-cols-12 grid-rows-6 -mt-6 lg:-mt-10'>
        <div className='flex col-span-8 md:col-span-7 lg:col-span-6 lg:col-start-1 lg:row-start-1 row-span-3 lg:row-span-4'>
          <div className='h-[85%] xs:h-[95%] m-auto self-center rounded-xl overflow-hidden'>
            <Image
              className='mx-auto rounded-xl'
              src={selectedImage}
              quality={70}
              height={480}
              width={320}
              gravity='auto'
              crop='fill'
            />
          </div>
        </div>
        <div className='col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-1 lg:row-start-5 row-span-3 lg:row-span-2 lg:flex overflow-y-auto shadow-inner-y lg:shadow-none'>
          {product.images.map((image) => (
            <button
              className={`relative flex lg:h-[75%] lg:w-[8rem] h-[7rem] w-[5rem] md:h-[16rem] md:w-[12rem] my-3 mx-auto self-center rounded-xl overflow-hidden box-border ${
                image === selectedImage && 'border-2 border-pink-dark'
              }`}
              key={image}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                className='mx-auto'
                src={image}
                quality={70}
                height={300}
                width={200}
                gravity='auto'
                crop='scale'
              />
            </button>
          ))}
        </div>
        <div className='col-span-full lg:col-span-6  lg:row-start-1 row-span-1 lg:row-span-2'>
          <h2>{product.name}</h2>
        </div>
        <div className='col-span-full lg:col-span-6 lg:row-start-3 row-span-1 lg:row-span-2 bg-purple-300'>
          características
        </div>
        <div className='col-span-full lg:col-span-6 lg:row-start-5 row-span-1 lg:row-span-2 bg-purple-600'>
          preço + quantidade + adicionar ao carrinho
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productName = context.query.produto as string

  const product =
    products[
      products.findIndex(
        (product) => product.name === productName.split('-').join(' ')
      )
    ]

  return {
    props: {
      product,
    },
  }
}

export default produto
