import { Carousel } from './Carousel'
import { ProductItem } from './ProductItem'

interface CarouselProductListProps {}

export const CarouselProductList: React.FC<CarouselProductListProps> = ({}) => {
  const testArray = [
    {
      id: '26hkj45h64j3',
      name: 'Ramo de rosas',
      description: 'ramo de uma dúzia de rosas pequenas, rosa claro',
      thumbnail: '/card-image-1.jpg',
      price: 4.99,
      MainCategory: 'flor',
    },
    {
      id: '45k6h4435h4jh5i6u',
      name: 'Ficus-lira',
      description: 'Ficus-lira em vaso, 50cm',
      thumbnail: '/card-image-4.jpg',
      price: 29.99,
      MainCategory: 'interior',
    },
    {
      id: '26hg5jre45thb5f54674',
      name: 'Rosa única',
      description: 'um ramo de rosa',
      thumbnail: '/card-image-2.jpg',
      price: 1.99,
      MainCategory: 'flor',
    },
    {
      id: '45k6h4lkj4h5i6u',
      name: 'Papoilas vermelhas',
      description: 'Ramo de papoilas vermelho em jarro',
      thumbnail: '/card-image-3.jpg',
      price: 9.99,
      MainCategory: 'flor',
    },
  ]

  return (
    <Carousel infiniteLoop={true}>
      {testArray.map((product) => (
        <div className='px-4 mt-4 mb-10' key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </Carousel>
  )
}
