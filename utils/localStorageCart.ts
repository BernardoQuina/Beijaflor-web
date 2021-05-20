import { Dispatch, SetStateAction } from 'react'
import { v4 } from 'uuid'

import { BasicProductInfoFragment } from '../lib/generated/graphql'

export type LocalCart = {
  price: number
  quantity: number
  cartItems: LocalCartItem[]
}

export type LocalCartItem = {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    images: string[]
    price: number
    stock: number
  }
  createdAt: number
}

export const addToLocalCart = (
  localCart: LocalCart,
  product: BasicProductInfoFragment,
  quantity: number
) => {
  if (!localCart) {
    const newLocalCart: LocalCart = {
      price: product.price * quantity,
      quantity: quantity,
      cartItems: [
        {
          id: v4(),
          quantity,
          product: {
            id: product.id,
            name: product.name,
            images: product.images,
            price: product.price,
            stock: product.stock,
          },
          createdAt: Date.now(),
        },
      ],
    }
    localStorage.setItem('cart', JSON.stringify(newLocalCart))
  } else {
    const itemsMinusThisOne = localCart.cartItems.filter((item) => {
      return item.product.name !== product.name
    })

    const revisedItems = itemsMinusThisOne.concat({
      id: v4(),
      quantity,
      product: {
        id: product.id,
        name: product.name,
        images: product.images,
        price: product.price,
        stock: product.stock,
      },
      createdAt: Date.now(),
    })

    const alreadyInCart = localCart.cartItems.filter((item) => {
      return item.product.name === product.name
    })[0]
      ? localCart.cartItems.filter((item) => {
          return item.product.name === product.name
        })[0]
      : { quantity: 0, price: 0 }

    const priceMinusThisOne =
      localCart.price - alreadyInCart.quantity * product.price

    const revisedPrice = priceMinusThisOne + quantity * product.price

    const quantityMinusThisOne = localCart.quantity - alreadyInCart.quantity

    const revisedQuantity = quantityMinusThisOne + quantity

    const revisedLocalCart: LocalCart = {
      price: revisedPrice,
      quantity: revisedQuantity,
      cartItems: revisedItems,
    }

    localStorage.setItem('cart', JSON.stringify(revisedLocalCart))
  }
}

export const removeFromLocalCart = (
  localCart: LocalCart,
  cartItem: LocalCartItem,
  setLocalStorageChange: Dispatch<SetStateAction<boolean>>
) => {
  const itemsMinusThisOne = localCart.cartItems.filter((item) => {
    return item.product.name !== cartItem.product.name
  })

  const priceMinusThisOne =
    localCart.price -
    localCart.cartItems.filter((item) => {
      return item.product.name === cartItem.product.name
    })[0].quantity *
      cartItem.product.price

  const quantityMinusThisOne =
    localCart.quantity -
    localCart.cartItems.filter((item) => {
      return item.product.name === cartItem.product.name
    })[0].quantity

  const revisedLocalCart: LocalCart = {
    price: priceMinusThisOne,
    quantity: quantityMinusThisOne,
    cartItems: itemsMinusThisOne,
  }

  localStorage.setItem('cart', JSON.stringify(revisedLocalCart))

  setLocalStorageChange(true)
  setTimeout(() => setLocalStorageChange(false), 50)
}

export const minusOneItem = (
  localCart: LocalCart,
  cartItem: LocalCartItem,
  setLocalStorageChange: Dispatch<SetStateAction<boolean>>
) => {
  const itemsMinusThisOne = localCart.cartItems.filter((item) => {
    return item.product.name !== cartItem.product.name
  })

  const revisedItems = itemsMinusThisOne.concat({
    id: cartItem.id,
    quantity: cartItem.quantity - 1,
    product: {
      id: cartItem.product.id,
      name: cartItem.product.name,
      images: cartItem.product.images,
      price: cartItem.product.price,
      stock: cartItem.product.stock,
    },
    createdAt: cartItem.createdAt,
  })

  const priceMinusThisOne =
    localCart.price -
    localCart.cartItems.filter((item) => {
      return item.product.name === cartItem.product.name
    })[0].quantity *
      cartItem.product.price

  const revisedPrice =
    priceMinusThisOne + (cartItem.quantity - 1) * cartItem.product.price

  const quantityMinusThisOne =
    localCart.quantity -
    localCart.cartItems.filter((item) => {
      return item.product.name === cartItem.product.name
    })[0].quantity

  const revisedQuantity = quantityMinusThisOne + cartItem.quantity - 1

  const revisedLocalCart: LocalCart = {
    price: revisedPrice,
    quantity: revisedQuantity,
    cartItems: revisedItems,
  }

  localStorage.setItem('cart', JSON.stringify(revisedLocalCart))

  setLocalStorageChange(true)
  setTimeout(() => setLocalStorageChange(false), 50)
}

export const plusOneItem = (
  localCart: LocalCart,
  cartItem: LocalCartItem,
  setLocalStorageChange: Dispatch<SetStateAction<boolean>>
) => {
  const itemsMinusThisOne = localCart.cartItems.filter((item) => {
    return item.product.name !== cartItem.product.name
  })

  const revisedItems = itemsMinusThisOne.concat({
    id: cartItem.id,
    quantity: cartItem.quantity + 1,
    product: {
      id: cartItem.product.id,
      name: cartItem.product.name,
      images: cartItem.product.images,
      price: cartItem.product.price,
      stock: cartItem.product.stock,
    },
    createdAt: cartItem.createdAt,
  })

  const priceMinusThisOne =
    localCart.price -
    localCart.cartItems.filter((item) => {
      return item.product.name === cartItem.product.name
    })[0].quantity *
      cartItem.product.price

  const revisedPrice =
    priceMinusThisOne + (cartItem.quantity + 1) * cartItem.product.price

  const quantityMinusThisOne =
    localCart.quantity -
    localCart.cartItems.filter((item) => {
      return item.product.name === cartItem.product.name
    })[0].quantity

  const revisedQuantity = quantityMinusThisOne + cartItem.quantity + 1

  const revisedLocalCart: LocalCart = {
    price: revisedPrice,
    quantity: revisedQuantity,
    cartItems: revisedItems,
  }

  localStorage.setItem('cart', JSON.stringify(revisedLocalCart))

  setLocalStorageChange(true)
  setTimeout(() => setLocalStorageChange(false), 50)
}
