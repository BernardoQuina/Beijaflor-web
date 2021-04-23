import { Carousel } from './Carousel'
import { ProductItem } from './ProductItem'
import { products } from '../lib/testData'

interface CarouselProductListProps {
  height: string
  width: string
  sm?: boolean
}

export const CarouselProductList: React.FC<CarouselProductListProps> = ({
  height,
  width,
  sm,
}) => {

  return (
    <Carousel infiniteLoop={true}>
      {products.map((product) => (
        <div className={`px-4 mt-4 ${!sm ? 'mb-10' : 'mb-4'}`} key={product.id}>
          <ProductItem
            product={product}
            height={height}
            width={width}
            sm={sm}
          />
        </div>
      ))}
    </Carousel>
  )
}