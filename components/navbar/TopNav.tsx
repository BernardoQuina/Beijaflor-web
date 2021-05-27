import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { useCartModal } from '../../context/CartModalContext'
import {
  useCreateCartItemMutation,
  useMeQuery,
  useToggleFromWishListMutation,
} from '../../lib/generated/graphql'
import { isServer } from '../../utils/isServer'
import { Search } from '../svg/Search'
import { ShoppingBag } from '../svg/ShoppingBag'
import { Heart } from '../svg/Heart'
import { Person } from '../svg/Person'
import { Logo } from '../svg/Logo'
import { ProfileModal } from './ProfileModal'
import { CartModal } from './CartModal'
import { Image } from 'cloudinary-react'
import { useRouter } from 'next/router'
import { LocalCart, LocalCartItem } from '../../utils/localStorageCart'
import { MergeCartsModal } from './MergeCartsModal'
import { useWishlistModal } from '../../context/wishListModalContext'
import { WishlistModal } from './WishlistModal'
import { LocalWishlist } from '../../utils/localStorageWishlist'
import { useLocalStorageChange } from '../../context/localStorageChangeContext'
import { LocalProduct } from '../../utils/localStorageProduct'

interface TopNavProps {
  setUnderline: Dispatch<SetStateAction<number>>
  underline: number
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
  setSearchActive: Dispatch<SetStateAction<boolean>>
  searchActive: boolean
  searchNode: MutableRefObject<HTMLInputElement>
}

export const TopNav: React.FC<TopNavProps> = ({
  setUnderline,
  underline,
  setOpen,
  open,
  setSearchActive,
  searchActive,
  searchNode,
}) => {
  const { cartModal, setCartModal } = useCartModal()
  const { wishlistModal, setWishlistModal } = useWishlistModal()
  const { localStorageChange } = useLocalStorageChange()

  const [profileModal, setProfileModal] = useState(false)
  const [search, setSearch] = useState('')
  const [cartQuantity, setCartQuantity] = useState(0)
  const [ShowMergeCartsModal, setShowMergeCartsModal] = useState(false)

  const router = useRouter()

  const { data } = useMeQuery({ errorPolicy: 'all', skip: isServer() })

  const [createCartItem] = useCreateCartItemMutation({ errorPolicy: 'all' })
  const [toggleFromWishlist] = useToggleFromWishListMutation({
    errorPolicy: 'all',
  })

  const profileButtonNode = useRef<HTMLButtonElement | null>(null)
  const profileModalNode = useRef<HTMLDivElement | null>(null)

  const cartButtonNode = useRef<HTMLButtonElement | null>(null)
  const cartModalNode = useRef<HTMLDivElement | null>(null)

  const wishlistButtonNode = useRef<HTMLButtonElement | null>(null)
  const wishlistModalNode = useRef<HTMLDivElement | null>(null)

  const profileButtonClick = (e: any) => {
    if (
      profileButtonNode.current &&
      profileButtonNode.current.contains(e.target)
    ) {
      return
    }

    if (
      profileModalNode.current &&
      profileModalNode.current.contains(e.target)
    ) {
      return
    }

    setProfileModal(false)
  }

  const cartButtonClick = (e: any) => {
    if (cartButtonNode.current && cartButtonNode.current.contains(e.target)) {
      return
    }

    if (cartModalNode.current && cartModalNode.current.contains(e.target)) {
      return
    }

    setCartModal('false')
  }

  const wishlistButtonClick = (e: any) => {
    if (
      wishlistButtonNode.current &&
      wishlistButtonNode.current.contains(e.target)
    ) {
      return
    }

    if (
      wishlistModalNode.current &&
      wishlistModalNode.current.contains(e.target)
    ) {
      return
    }

    setWishlistModal('false')
  }

  useEffect(() => {
    document.addEventListener('mousedown', profileButtonClick)
    document.addEventListener('mousedown', cartButtonClick)
    document.addEventListener('mousedown', wishlistButtonClick)

    return () => {
      document.removeEventListener('mousedown', profileButtonClick)
      document.removeEventListener('mousedown', cartButtonClick)
      document.removeEventListener('mousedown', wishlistButtonClick)
    }
  }, [])

  let localCart: LocalCart = {
    price: 0,
    quantity: 0,
    cartItems: [],
  }

  let localWishlist: LocalWishlist = {
    products: [],
  }

  if (!isServer()) {
    localCart = JSON.parse(localStorage.getItem('cart'))
    localWishlist = JSON.parse(localStorage.getItem('wishlist'))
  }

  useEffect(() => {
    if (localStorageChange) {
      localCart = JSON.parse(localStorage.getItem('cart'))
      localWishlist = JSON.parse(localStorage.getItem('wishlist'))
    }

    if (data?.me) {
      if (
        data.me.cart.quantity < 1 &&
        localCart !== null &&
        localCart.quantity > 0 &&
        !ShowMergeCartsModal
      ) {
        const createForEach = async (cartItems: LocalCartItem[]) => {
          for (let i = 0; i < cartItems.length; i++) {
            await createCartItem({
              variables: {
                cartId: data.me.cart.id,
                productId: cartItems[i].product.id,
                quantity: cartItems[i].quantity,
              },
              update: (cache) => {
                cache.evict({ fieldName: 'CartItems' })
                cache.evict({ id: `Cart:${data.me.cart.id}` })
              },
            })
          }
        }

        createForEach(localCart.cartItems)

        localStorage.removeItem('cart')
      }

      if (
        data.me.cart.quantity >= 1 &&
        localCart !== null &&
        localCart.quantity > 0
      ) {
        setShowMergeCartsModal(true)
      }

      if (localWishlist && localWishlist.products.length > 0) {
        const addForEach = async (products: LocalProduct[]) => {
          for (let i = 0; i < products.length; i++) {
            await toggleFromWishlist({
              variables: {
                productId: products[i].id,
                wishListId: data.me.wishlist.id,
                merge: true,
              },
              update: (cache, { data: mutationData }) => {
                cache.modify({
                  id: `Product:${products[i].id}`,
                  fields: {
                    wishLists() {
                      return [mutationData.toggleFromWishList]
                    },
                  },
                })
                cache.evict({ id: `Wishlist:${data.me.wishlist.id}` })
              },
            })
          }
        }

        addForEach(localWishlist.products)

        localStorage.removeItem('wishlist')
      }

      setCartQuantity(data.me.cart.quantity)
    } else if (localCart) {
      setCartQuantity(localCart.quantity)
    }
  }, [localStorageChange, data, localCart, localWishlist])

  return (
    <motion.div layoutId='top-nav' className='flex w-full h-[3rem]'>
      <Link href='/'>
        <a className=' ml-4 rounded-full self-center'>
          <Logo tailwind='text-green-dark h-8' strokeWidth={3.6} />
        </a>
      </Link>
      <div
        className={`absolute ${
          open ? 'flex' : 'hidden lg:flex'
        } w-full max-w-md lg:max-w-full  mx-auto top-[4.2rem] lg:top-0 lg:relative lg:w-5/12 2xl:w-4/12 transform left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 text-green-medium`}
      >
        <motion.button
          className={`text-sm xs:text-base lg:text-lg self-center ml-4 focus:outline-none`}
          onMouseEnter={() => {
            setUnderline(1)
            setOpen(true)
          }}
        >
          NOVIDADES
          {underline === 1 && (
            <motion.div
              layoutId='underline'
              className='h-[0.15rem] w-full rounded-full bg-green-medium'
            ></motion.div>
          )}
        </motion.button>
        <motion.button
          className={`text-sm xs:text-base lg:text-lg self-center mx-auto focus:outline-none`}
          onMouseEnter={() => {
            setUnderline(2)
            setOpen(true)
          }}
        >
          OCASIÃO
          {underline === 2 && (
            <motion.div
              layoutId='underline'
              className='h-[0.15rem] w-full rounded-full bg-green-medium'
            ></motion.div>
          )}
        </motion.button>
        <motion.button
          className={`text-sm xs:text-base lg:text-lg self-center mr-4 focus:outline-none`}
          onMouseEnter={() => {
            setUnderline(3)
            setOpen(true)
          }}
        >
          CATEGORIAS
          {underline === 3 || (open && underline !== 1 && underline !== 2) ? (
            <motion.div
              layoutId='underline'
              className='h-[0.16rem] w-full rounded-full bg-green-medium'
            ></motion.div>
          ) : null}
        </motion.button>
      </div>
      <motion.div
        layoutId='search-expand'
        className={`flex h-[2.2rem] ${
          searchActive
            ? 'absolute z-[2] md:relative w-[95%] mx-auto left-0 right-0'
            : 'w-5/12 relative'
        } md:w-6/12 lg:w-4/12 mx-auto self-center items-center rounded-lg shadow-inner bg-white text-3xl border`}
        onClick={() => setSearchActive(true)}
      >
        <button
          className='flex absolute left-[92%] translate-x-[-92%] self-center'
          type='submit'
          onClick={() => {
            if (search === '') {
              if (router.pathname.includes('explorar')) {
                return
              }
              router.push('/explorar')
            } else if (
              router.query.categories &&
              router.query.categories.includes(search)
            ) {
              router.reload()
            } else {
              router.push(`/explorar/pesquisa/${search}`)
            }
          }}
        >
          <Search tailwind='h-5 self-center text-gray-300' strokeWidth={2} />
        </button>
        <input
          ref={searchNode}
          className='w-10/12 ml-2 pl-2 pr-5 text-lg font-thin tracking-widest focus:outline-none'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (search === '') {
                if (router.pathname.includes('explorar')) {
                  return
                }
                router.push('/explorar')
              } else if (
                router.query.categories &&
                router.query.categories.includes(search)
              ) {
                router.reload()
              } else {
                router.push(`/explorar/pesquisa/${search}`)
              }
            }
          }}
        />
      </motion.div>
      <div className='relative z-[1] flex transform scale-90 md:scale-100 mx-auto md:w-2/12 lg:w-[12%] 2xl:w-[10%] items-center'>
        <button
          className='relative md:mx-auto'
          type='button'
          ref={cartButtonNode}
          onClick={() => {
            if (cartModal) {
              setCartModal('false')
            } else {
              setCartModal('true')
            }
          }}
        >
          <h6 className='absolute transform left-[50%] translate-x-[-50%] top-[1.1rem] font-black text-sm text-green-dark'>
            {cartQuantity}
          </h6>
          <ShoppingBag tailwind='h-10 text-green-dark' strokeWidth={1.5} />
        </button>
        <button
          className='relative md:mx-auto'
          type='button'
          ref={wishlistButtonNode}
          onClick={() => {
            if (wishlistModal) {
              setWishlistModal('false')
            } else {
              setWishlistModal('true')
            }
          }}
        >
          <Heart tailwind='h-9 text-green-dark mx-2' strokeWidth={1.5} />
        </button>
        <button
          className='md:mx-auto'
          type='button'
          ref={profileButtonNode}
          onClick={() => {
            setProfileModal(!profileModal)
          }}
        >
          {data?.me && data.me.photo ? (
            <div className='md:mr-2 lg:mr-0'>
              <Image
                className='rounded-full'
                src={data.me.photo}
                height={30}
                width={30}
              />
            </div>
          ) : (
            <Person tailwind='h-9 md:mr-2 lg:mr-0 text-green-dark' strokeWidth={1.5} />
          )}
        </button>
        {profileModal && <ProfileModal me={data} modalRef={profileModalNode} />}
        {cartModal && <CartModal data={data} modalRef={cartModalNode} />}
        {wishlistModal && (
          <WishlistModal data={data} modalRef={wishlistModalNode} />
        )}
      </div>
      {data?.me && (
        <MergeCartsModal
          showMergeCartsModal={ShowMergeCartsModal}
          setShowMergeCartsModal={setShowMergeCartsModal}
          localCart={localCart}
          data={data}
        />
      )}
    </motion.div>
  )
}
