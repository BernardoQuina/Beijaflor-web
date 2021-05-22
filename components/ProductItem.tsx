import Link from 'next/link'
import { Image } from 'cloudinary-react'

import { Heart } from './svg/Heart'
import { ShoppingBag } from './svg/ShoppingBag'
import {
  BasicProductInfoFragment,
  useCreateCartItemMutation,
  useMeQuery,
  useToggleFromWishListMutation,
} from '../lib/generated/graphql'
import { isServer } from '../utils/isServer'
import { useCartModal } from '../context/CartModalContext'
import { addToLocalCart, LocalCart } from '../utils/localStorageCart'
import { useWishlistModal } from '../context/wishListModalContext'

interface ProductItemProps {
  product: BasicProductInfoFragment
  height: string
  width: string
  sm?: boolean
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  height,
  width,
  sm,
}) => {
  const routeName = encodeURIComponent(product.name).replace(/%20/g, '-')

  const { setCartModal } = useCartModal()
  const { setWishlistModal } = useWishlistModal()

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

  return (
    <div
      className={`relative z-10 ${height} ${width} mx-auto rounded-xl shadow-xl bg-white overflow-hidden transform active:scale-95`}
    >
      <Link href={`/produtos/${routeName}`}>
        <a>
          <div className='w-full h-[70%] overflow-hidden'>
            <button
              className='absolute top-4 right-4 rounded-full p-2 bg-opacity-20 bg-white hover:bg-opacity-100'
              type='button'
              onClick={async (e) => {
                e.preventDefault()

                if (data?.me) {
                  const response = await toggleFromWishList({
                    variables: {
                      productId: product.id,
                      wishListId: data.me.wishlist.id,
                    },
                    update: (cache, { data: mutationData }) => {
                      cache.modify({
                        id: `Product:${product.id}`,
                        fields: {
                          wishLists() {
                            return [mutationData.toggleFromWishList]
                          },
                        },
                      })
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
                }
              }}
            >
              <Heart
                tailwind={`h-8 text-pink-dark ${
                  data?.me?.wishlist.products.some(
                    (wishProduct) => wishProduct.id === product.id
                  ) && 'fill-current'
                }`}
                strokeWidth={1.8}
              />
            </button>
            <Image
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId={product.images[0]}
              quality={70}
              height={900}
              width={600}
              gravity='auto'
              crop='fill'
              secure={true}
            />
          </div>
          <div className='relative flex flex-col h-[30%] pt-2'>
            <h6 className='ml-4 tracking-widest leading-tight text-pink-medium'>
              {product.categories[product.categories.length - 1].name}
            </h6>
            <button
              className='absolute bottom-0 right-1 rounded-full p-2 bg-opacity-20 bg-white hover:bg-opacity-100 hover:scale-110'
              type='button'
              onClick={async (e) => {
                e.preventDefault()

                if (data && data.me !== null) {
                  await createCartItem({
                    variables: {
                      cartId: data.me.cart.id,
                      productId: product.id,
                      quantity: 1,
                    },
                    update: (cache) => {
                      cache.evict({ fieldName: 'CartItems' })
                      cache.evict({ id: `Cart:${data.me.cart.id}` })
                    },
                  })
                } else {
                  addToLocalCart(localCart, product, 1)
                }

                setCartModal('true')
              }}
            >
              <ShoppingBag tailwind='h-8 text-pink-dark' strokeWidth={1.8} />
            </button>
            <h4
              className={`mx-4 my-auto font-serif leading-tight tracking-wide text-green-medium ${
                sm ? 'text-lg' : 'text-xl'
              }`}
            >
              {product.name}
            </h4>
            <div className='h-8 w-full'></div>
            <div className='absolute left-4 bottom-1 flex'>
              <h3 className='mr-2 text-green-dark'>€</h3>
              <h3 className='text-xl text-green-dark tracking-widest'>
                {product.price.toFixed(2)}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
