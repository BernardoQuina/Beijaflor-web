import { GetServerSideProps, NextPage } from 'next'
import { Image } from 'cloudinary-react'

import { Layout } from '../../components/Layout'
import { Meta } from '../../components/Meta'
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
import { ApolloQueryResult } from '@apollo/client'
import { initializeApollo } from '../../lib/apolloClient'
import {
  SingleProductDocument,
  SingleProductQuery,
  BasicProductInfoFragment,
  useCreateCartItemMutation,
  useMeQuery,
  useToggleFromWishListMutation,
} from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'
import { useCartModal } from '../../context/CartModalContext'
import { addToLocalCart, LocalCart } from '../../utils/localStorageCart'
import { useWishlistModal } from '../../context/wishListModalContext'
import {
  LocalWishlist,
  toggleFromLocalWishlist,
} from '../../utils/localStorageWishlist'
import { useLocalStorageChange } from '../../context/localStorageChangeContext'

interface produtoProps {
  product: BasicProductInfoFragment
  keywords: string
}

const produto: NextPage<produtoProps> = ({ product, keywords }) => {
  const { setCartModal } = useCartModal()
  const { setWishlistModal } = useWishlistModal()
  const { localStorageChange, setLocalStorageChange } = useLocalStorageChange()

  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)
  const [localWishlist, setLocalWishlist] = useState<LocalWishlist>({
    products: [],
  })

  const router = useRouter()

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  const [createCartItem] = useCreateCartItemMutation({ errorPolicy: 'all' })

  const [toggleFromWishList] = useToggleFromWishListMutation({
    errorPolicy: 'all',
  })

  let localCart: LocalCart = {
    price: 0,
    quantity: 0,
    cartItems: [],
  }

  if (!isServer()) {
    localCart = JSON.parse(localStorage.getItem('cart'))
  }

  useEffect(() => {
    setSelectedImage(product.images[0])
  }, [product])

  useEffect(() => {
    localCart = JSON.parse(localStorage.getItem('cart'))
    setLocalWishlist(JSON.parse(localStorage.getItem('wishlist')))
  }, [localStorageChange])

  return (
    <Layout>
      <Meta
        title={`${product.name} | Florista Beijaflor`}
        description={product.description}
        keywords={keywords}
      />
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
            <button
              className='flex mb-2 lg:-mb-6 ml-auto mr-2 lg:mr-10'
              type='button'
              onClick={async () => {
                if (data && data.me !== null) {
                  const response = await toggleFromWishList({
                    variables: {
                      productId: product.id,
                      wishListId: data.me.wishlist.id,
                    },
                    update: (cache) => {
                      cache.evict({ id: `Product:${product.id}` })
                      cache.evict({ id: `Wishlist:${data.me.wishlist.id}` })
                    },
                  })

                  if (
                    response.data.toggleFromWishList.products.some(
                      (wishlistProduct) => wishlistProduct.id === product.id
                    )
                  ) {
                    setWishlistModal('true')
                  }
                } else {
                  toggleFromLocalWishlist(
                    localWishlist,
                    product,
                    setLocalStorageChange,
                    setWishlistModal
                  )
                }
              }}
            >
              <Heart
                tailwind={`h-8 lg:h-10 text-pink-dark self-center ${
                  (data?.me?.wishlist.products.some(
                    (wishProduct) => wishProduct.id === product.id
                  ) &&
                    'fill-current') ||
                  (localWishlist?.products?.some(
                    (wishProduct) => wishProduct.name === product.name
                  ) &&
                    !data?.me &&
                    'fill-current')
                }`}
                strokeWidth={1.8}
              />
            </button>
          </div>
          <div className='h-[85%] xs:h-[95%] m-auto self-center rounded-xl overflow-hidden'>
            <Image
              alt={product.name}
              className='mx-auto max-w-[15rem] lg:max-w-[25rem] rounded-xl'
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId={selectedImage}
              quality={80}
              height={480}
              width={320}
              gravity='auto'
              crop='fill'
              secure={true}
            />
          </div>
        </div>
        <div className='col-span-4 md:col-span-5 lg:col-span-6 lg:col-start-1 lg:row-start-10 row-span-6 lg:mx-auto lg:row-span-4 lg:flex lg:flex-wrap overflow-auto md:mt-2 sm:scrollbar-thin sm:scrollbar-thumb-green-light sm:scrollbar-thumb-rounded-full'>
          {product.images.map((image) => (
            <button
              className={`flex h-[7rem] w-[5rem] md:h-[16rem] md:w-[12rem] lg:h-[10rem] lg:w-[7rem] my-3 mx-auto lg:mx-4 self-center rounded-xl overflow-hidden`}
              key={image}
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`relative w-full h-full md:max-w-[11rem] rounded-xl overflow-hidden  ${
                  image === selectedImage && 'border-2 border-pink-dark'
                }`}
              >
                <Image
                  alt={product.name}
                  className='absolute'
                  cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                  publicId={image}
                  quality={80}
                  height={480}
                  width={320}
                  gravity='auto'
                  crop='fill'
                  secure={true}
                />
              </div>
            </button>
          ))}
        </div>
        <div className='col-span-full lg:col-span-6  lg:row-start-2 row-span-3 lg:row-span-4 md:max-w-xl lg:max-w-xl mx-2 md:mx-auto lg:mx-2'>
          <div className='relative flex md:mt-6 lg:mt-0'>
            {product.stock === 0 ? (
              <p className='absolute top-[-0.4rem] left-0 text-lg text-red-500'>
                Sem stock!
              </p>
            ) : !product.active ? (
              <p className='absolute top-[-0.4rem] left-0 text-lg text-red-500'>
                Indisponível!
              </p>
            ) : null}
            <h2 className='mt-4 lg:mt-6 mr-4 text-2xl lg:text-4xl tracking-widest font-bold text-green-medium font-serif'>
              {product.name}
            </h2>
            <h5 className='mt-3 tracking-widest text-green-dark font-bold ml-auto mr-1 self-start'>
              €
            </h5>
            <h5 className='mr-2 mt-3 lg:mr-10 text-xl lg:text-2xl tracking-widest font-bold text-green-dark self-start'>
              {product.price.toFixed(2)}
            </h5>
          </div>
          <h6 className='mt-1 text-pink-medium tracking-[0.2rem]'>
            {product.categories[0].name.toUpperCase()}
          </h6>
          <p className='mt-4 lg:mt-6 lg:text-lg lg:leading-8 text-green-dark tracking-wide'>
            {product.description}
          </p>
        </div>
        <div className='flex col-span-full lg:col-span-6 lg:row-start-6 row-span-2 lg:row-span-2 mt-4 lg:max-w-2xl overflow-x-auto md:mx-auto lg:mx-0 overflow-y-hidden lg:scrollbar-thin lg:scrollbar-thumb-green-light lg:scrollbar-thumb-rounded-full'>
          {product.height && (
            <div className='mr-1 lg:mr-6 flex flex-col'>
              <div className='mx-auto p-2 rounded-full bg-pink-light'>
                <Size tailwind='h-8 text-pink-dark transform rotate-90' />
              </div>

              <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
                {product.height}
              </h6>
            </div>
          )}
          {product.water && (
            <div className='mx-1 lg:mx-6 flex flex-col'>
              <div className='mx-auto p-2 rounded-full bg-pink-light'>
                <Water tailwind='h-8 text-pink-dark' />
              </div>
              <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
                {product.water}
              </h6>
            </div>
          )}
          {product.exposure && (
            <div className='mx-1 lg:mx-6 flex flex-col'>
              <div className='mx-auto p-2 rounded-full bg-pink-light'>
                <Sun tailwind='h-8 text-pink-dark' strokeWidth={2} />
              </div>
              <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
                {product.exposure}
              </h6>
            </div>
          )}
          {product.temperature && (
            <div className='mx-1 lg:mx-6 flex flex-col'>
              <div className='mx-auto p-2 rounded-full bg-pink-light'>
                <Temperature tailwind='h-8 text-pink-dark' />
              </div>
              <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
                {product.temperature}
              </h6>
            </div>
          )}
          {product.lifespan && (
            <div className='ml-1 lg:ml-6 flex flex-col'>
              <div className='mx-auto p-2 rounded-full bg-pink-light'>
                <Time tailwind='h-8 text-pink-dark' strokeWidth={2} />
              </div>
              <h6 className='mt-1 mx-auto text-sm w-[5rem] text-center font-bold text-green-dark tracking-wider'>
                {product.lifespan}
              </h6>
            </div>
          )}
        </div>
        <div className='sticky bottom-6 lg:relative col-span-full lg:col-span-6 lg:row-start-9 row-span-2 lg:row-span-4 lg:max-w-xl'>
          <div className='flex flex-col mt-6 lg:mt-10 mx-auto w-full xs:w-[98%] max-w-lg h-[90%] lg:h-[60%] py-3 lg:py-4 rounded-xl bg-white shadow-around'>
            <div className='flex mb-6 mx-auto'>
              <p className='mr-6 self-center text-lg tracking-widest text-green-dark font-thin'>
                Quantidade:
              </p>
              <button
                className='p-1 rounded-lg shadow-md bg-green-extraLight hover:opacity-80'
                onClick={() => {
                  setQuantity((prev) => prev - 1)
                }}
                disabled={quantity <= 1}
              >
                <Minus tailwind='h-6 text-green-dark' strokeWidth={1.6} />
              </button>
              <p className='self-center mx-4 font-bold text-lg text-green-dark'>
                {quantity}
              </p>
              <button
                className='p-1 rounded-lg shadow-md bg-green-extraLight hover:opacity-80'
                onClick={() => setQuantity((prev) => prev + 1)}
                disabled={quantity >= product.stock}
              >
                <Plus tailwind='h-6 text-green-dark' strokeWidth={1.6} />
              </button>
            </div>
            <button
              type='button'
              onClick={async () => {
                if (data && data.me !== null) {
                  await createCartItem({
                    variables: {
                      cartId: data.me.cart.id,
                      productId: product.id,
                      quantity,
                    },
                    update: (cache) => {
                      cache.evict({ fieldName: 'CartItems' })
                      cache.evict({ id: `Cart:${data.me.cart.id}` })
                    },
                  })
                } else {
                  addToLocalCart(localCart, product, quantity)
                }
                setCartModal('true')
              }}
              className='flex p-2 xs:w-[93%] max-w-xs mx-auto rounded-lg shadow-md bg-green-extraLight hover:opacity-80 opacity-100'
            >
              <div className='flex mx-auto'>
                <ShoppingBag
                  tailwind='h-5 xs:h-7 text-green-dark self-center'
                  strokeWidth={1.6}
                />
                <h5 className='ml-2 mr-2 xs:mr-3 self-center text-green-dark tracking-wider'>
                  Adicionar ao cesto
                </h5>
                <h5 className='pl-2 xs:pl-3 mr-2 border-l-2 border-green-medium self-start font-bold text-green-dark'>
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

  const apolloClient = initializeApollo()

  let product: BasicProductInfoFragment

  const response: ApolloQueryResult<SingleProductQuery> =
    await apolloClient.query({
      query: SingleProductDocument,
      errorPolicy: 'all',
      variables: { name: productName.split('-').join(' ') },
    })

  if (response.data.product === null) {
    const secondResponse: ApolloQueryResult<SingleProductQuery> =
      await apolloClient.query({
        query: SingleProductDocument,
        errorPolicy: 'all',
        variables: { name: productName },
      })

    product = secondResponse.data.product
  } else {
    product = response.data.product
  }

  let keywordsArray: string[] = []
  let keywords = ''

  const makeKeywords = async () => {
    for (let i = 0; i < product.categories.length; i++) {
      keywordsArray.push(product.categories[i].name.toLocaleLowerCase())
    }

    keywords = keywordsArray.join(', ')
  }

  await makeKeywords()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      product,
      keywords,
    },
  }
}

export default produto
