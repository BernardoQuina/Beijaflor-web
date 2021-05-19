export type LocalCart = {
  price: number
  quantity: number
  cartItems: LocalCartItem[]
}

export type LocalCartItem = {
  quantity: number
  product: {
    id: string
    name: string
    images: string[]
    price: number
    stock: number
  }
}
