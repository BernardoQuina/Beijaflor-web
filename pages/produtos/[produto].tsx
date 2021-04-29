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
import { Temperature } from '../../components/svg/Temperature'
import { Time } from '../../components/svg/Time'
import { ShoppingBag } from '../../components/svg/ShoppingBag'
import { Minus } from '../../components/svg/Minus'
import { Plus } from '../../components/svg/Plus'

interface produtoProps {
  product: Product
}

const produto: NextPage<produtoProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)

  const router = useRouter()

  useEffect(() => {
    setSelectedImage(product.images[0])
  }, [product])

  return (
    <Layout>
      <div className='grid max-w-[100rem] mx-auto w-full h-[60rem] md:h-[60rem] lg:h-[50rem] grid-cols-12 grid-rows-14 -mt-12 md:-mt-16 lg:-mt-14'>
        <div className='flex flex-col col-span-8 md:col-span-7 lg:col-span-6 lg:col-start-1 lg:row-start-1 row-span-6 lg:row-span-9'>
          <div className='flex'>
            <button
              className='flex mb-2 lg:mb-0 lg:ml-10  p-1'
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
            <button className='flex mb-2 lg:-mb-6 ml-auto mr-2 lg:mr-10'>
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
              className={`flex h-[7rem] w-[5rem] md:h-[16rem] md:w-[12rem] lg:h-[10rem] lg:w-[7rem] my-3 mx-auto self-center rounded-xl overflow-hidden`}
              key={image}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`w-full h-full rounded-xl overflow-hidden  ${
                  image === selectedImage && 'border-2 border-pink-dark'
                }`}
              >
                <Image
                  className='transform scale-110 -mt-1 -mr-1'
                  src={image}
                  quality={70}
                  height={300}
                  width={200}
                  gravity='auto'
                  crop='fill'
                />
              </div>
            </button>
          ))}
        </div>
        <div className='col-span-full lg:col-span-6  lg:row-start-2 row-span-3 lg:row-span-4 md:max-w-2xl lg:max-w-xl mx-2 md:mx-auto lg:mx-2'>
          <div className='flex md:mt-6 lg:mt-0'>
            <h2 className='mt-4 lg:mt-6 text-2xl lg:text-4xl tracking-[0.3rem] font-bold text-green-medium font-serif'>
              {product.name}
            </h2>
            <h5 className='mt-4 tracking-widest text-green-dark font-bold ml-auto mr-1 self-start'>
              €
            </h5>
            <h5 className='mr-2 mt-3 lg:mr-10 text-xl lg:text-2xl tracking-widest font-bold text-green-dark self-start'>
              {product.price}
            </h5>
          </div>
          <h6 className='mt-1 text-pink-medium tracking-[0.2rem]'>
            {product.MainCategory.toUpperCase()}
          </h6>
          <p className='mt-4 lg:mt-6 lg:text-lg lg:leading-8 text-green-dark tracking-wide'>
            {product.description}
          </p>
        </div>
        <div className='flex col-span-full lg:col-span-6 lg:row-start-6 row-span-2 lg:row-span-2 mt-6 lg:max-w-xl'>
          {product.Characteristics.map((characteristic) => (
            <div className='mx-auto flex flex-col' key={characteristic.subject}>
              <div className='mx-auto p-2 rounded-full bg-pink-light'>
                {characteristic.subject === 'comprimento' ? (
                  <Size tailwind='h-8 text-pink-dark transform rotate-90' />
                ) : characteristic.subject === 'exposição' ? (
                  <Sun tailwind='h-8 text-pink-dark' strokeWidth={2} />
                ) : characteristic.subject === 'água' ? (
                  <Water tailwind='h-8 text-pink-dark' />
                ) : characteristic.subject === 'temperatura' ? (
                  <Temperature tailwind='h-8 text-pink-dark' />
                ) : characteristic.subject === 'duração' ? (
                  <Time tailwind='h-8 text-pink-dark' strokeWidth={2} />
                ) : null}
              </div>
              <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
                {characteristic.text}
              </h6>
            </div>
          ))}
        </div>
        <div className='sticky bottom-6 lg:relative col-span-full lg:col-span-6 lg:row-start-9 row-span-2 lg:row-span-4 lg:max-w-xl'>
          <div className='flex flex-col mt-6 lg:mt-10 mx-auto w-full xs:w-[98%] max-w-lg h-[90%] lg:h-[60%] py-3 lg:py-4 rounded-xl bg-white shadow-around'>
            <div className='flex mb-6 mx-auto'>
              <p className='mr-6 self-center text-lg tracking-widest text-green-dark font-thin'>
                Quantidade:
              </p>
              <button
                className='p-1 rounded-lg shadow-md bg-green-extraLight'
                onClick={() => setQuantity((prev) => prev - 1)}
                disabled={quantity <= 1}
              >
                <Minus tailwind='h-6 text-green-dark' strokeWidth={2} />
              </button>
              <p className='self-center mx-4 font-bold text-lg text-green-dark'>
                {quantity}
              </p>
              <button
                className='p-1 rounded-lg shadow-md bg-green-extraLight'
                onClick={() => setQuantity((prev) => prev + 1)}
                disabled={quantity >= 100}
              >
                <Plus tailwind='h-6 text-green-dark' strokeWidth={2} />
              </button>
            </div>
            <button className='flex p-2 xs:w-[93%] max-w-xs mx-auto rounded-lg shadow-md bg-green-extraLight'>
              <div className='flex mx-auto'>
                <ShoppingBag
                  tailwind='h-5 xs:h-7 text-green-dark self-center'
                  strokeWidth={1.8}
                />
                <h5 className='ml-2 mr-2 xs:mr-3 self-center text-green-dark tracking-wider font-bold'>
                  Adicionar ao cesto
                </h5>
                <h5 className='pl-2 xs:pl-3 mr-2 border-l-2 border-green-medium self-end font-bold text-green-dark'>
                  €
                </h5>
                <h5 className=' self-center font-bold text-green-dark tracking-widest xs:text-lg'>
                  {(product.price * quantity).toFixed(2)}
                </h5>
              </div>
            </button>
          </div>
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
        (product) =>
          product.name === productName.split('-').join(' ') ||
          product.name === productName
      )
    ]

  return {
    props: {
      product,
    },
  }
}

export default produto
