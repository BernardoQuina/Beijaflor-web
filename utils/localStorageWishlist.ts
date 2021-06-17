import { Dispatch } from 'react'
import { BasicProductInfoFragment } from '../lib/generated/graphql'
import { LocalProduct } from './localStorageProduct'

export type LocalWishlist = {
  products: LocalProduct[]
}

export const toggleFromLocalWishlist = (
  localWishlist: LocalWishlist,
  product: BasicProductInfoFragment | LocalProduct,
  setLocalStorageChange: Dispatch<'true' | 'false'>,
  setWishlistModal: Dispatch<'true' | 'false'>
) => {
  if (!localWishlist || !localWishlist.products) {
    const newLocalWishlist: LocalWishlist = {
      products: [
        {
          id: product.id,
          name: product.name,
          images: product.images,
          price: product.price,
          stock: product.stock,
          active: product.active
        },
      ],
    }
    localStorage.setItem('wishlist', JSON.stringify(newLocalWishlist))

    setWishlistModal('true')
  } else {
    if (
      localWishlist.products.some(
        (wishlistProduct) => wishlistProduct.name === product.name
      )
    ) {
      const productsMinusThisOne = localWishlist.products.filter(
        (wishlistProduct) => wishlistProduct.name !== product.name
      )

      const revisedWishlist: LocalWishlist = {
        products: productsMinusThisOne,
      }

      localStorage.setItem('wishlist', JSON.stringify(revisedWishlist))
    } else {
      const productsPlusThisOne = localWishlist.products.concat({
        id: product.id,
        name: product.name,
        images: product.images,
        price: product.price,
        stock: product.stock,
        active: product.active
      })

      const revisedWishlist: LocalWishlist = {
        products: productsPlusThisOne,
      }

      localStorage.setItem('wishlist', JSON.stringify(revisedWishlist))

      setWishlistModal('true')
    }
  }

  setLocalStorageChange('true')
  setTimeout(() => setLocalStorageChange('false'), 50)
}
