import { GetServerSideProps, NextPage } from 'next'
import { Image } from 'cloudinary-react'

import { Product, products } from '../../lib/testData'
import { Layout } from '../../components/Layout'
import { useEffect, useState } from 'react'
import { ArrowDown } from '../../components/svg/ArrowDown'
import { useRouter } from 'next/dist/client/router'
import { Heart } from '../../components/svg/Heart'
import { Size } from '../../components/svg/Size'
import { Water } from '../../components/svg/Water'
import { Sun } from '../../components/svg/Sun'

interface produtoProps {
  product: Product
}

const produto: NextPage<produtoProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0])

  const router = useRouter()

  useEffect(() => {
    setSelectedImage(product.images[0])
  }, [product])

  return (
    <Layout>
      <div className='grid max-w-[100rem] mx-auto w-full h-[45rem] md:h-[60rem] lg:h-[45rem] grid-cols-12 grid-rows-12 -mt-6 lg:-mt-20'>
        <div className='flex flex-col col-span-8 md:col-span-7 lg:col-span-6 lg:col-start-1 lg:row-start-2 row-span-6 lg:row-span-8'>
          <div className='flex'>
            <button
              className='flex mb-2 lg:mb-0 lg:-mt-10 lg:ml-10  p-1'
              onClick={() => router.back()}
            >
              <ArrowDown
                tailwind='h-4 lg:h-6 text-green-dark self-center transform rotate-90'
                strokeWidth={3}
              />
              <h6 className='mx-1 lg:mx-2 text-lg text-green-dark tracking-widest self-center'>
                voltar
              </h6>
            </button>
            <button className='flex mb-2 lg:mb-0 lg:-mt-6 ml-auto mr-2 lg:mr-16'>
              <Heart
                tailwind='h-8 lg:h-10 text-pink-dark self-center'
                strokeWidth={1.8}
              />
            </button>
          </div>
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
        <div className='col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-1 lg:row-start-10 row-span-6 lg:row-span-4 lg:flex overflow-y-auto'>
          {product.images.map((image) => (
            <button
              className={`relative flex h-[7rem] w-[5rem] md:h-[16rem] md:w-[12rem] lg:h-[9.2rem] lg:w-[7rem] my-3 mx-auto self-center rounded-xl overflow-hidden box-border ${
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
        <div className='col-span-full lg:col-span-6  lg:row-start-2 row-span-3 lg:row-span-4 max-w-xl mx-2'>
          <div className='flex'>
            <h2 className='mt-4 lg:mt-10 text-2xl lg:text-4xl tracking-[0.3rem] font-bold text-green-medium font-serif'>
              {product.name}
            </h2>
            <h5 className='tracking-widest text-green-dark font-bold ml-auto mr-1 self-center'>
              €
            </h5>
            <h5 className='lg:mr-10 text-xl lg:text-2xl tracking-widest font-bold text-green-dark self-center'>
              {product.price}
            </h5>
          </div>
          <h6 className='mt-1 text-pink-medium tracking-[0.2rem]'>
            {product.MainCategory.toUpperCase()}
          </h6>
          <p className='mt-2 lg:mt-8 lg:text-lg text-green-dark tracking-wide'>
            {product.description}
          </p>
        </div>
        <div className='flex col-span-full lg:col-span-6 lg:row-start-6 row-span-2 lg:row-span-4'>
          <div className='mx-auto flex flex-col'>
            <div className='mx-auto p-2 rounded-full bg-pink-light'>
              <Size tailwind='h-8 text-pink-dark transform rotate-90' />
            </div>
            <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
              40 cm
            </h6>
          </div>
          <div className='mx-auto flex flex-col'>
            <div className='mx-auto p-2 rounded-full bg-pink-light'>
              <Water tailwind='h-8 text-pink-dark' />
            </div>
            <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
              Manter em água
            </h6>
          </div>
          <div className='mx-auto flex flex-col'>
            <div className='mx-auto p-2 rounded-full bg-pink-light'>
              <Sun tailwind='h-8 text-pink-dark' strokeWidth={2} />
            </div>
            <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
              Sol ou sombra
            </h6>
          </div>
        </div>
        <div className='col-span-full lg:col-span-6 lg:row-start-10 row-span-1 lg:row-span-4 bg-purple-600'>
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
