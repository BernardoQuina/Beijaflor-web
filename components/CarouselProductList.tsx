import { Carousel } from './Carousel'
import { CarouselProductItem } from './CarouselProductItem'

interface CarouselProductListProps {}

export const CarouselProductList: React.FC<CarouselProductListProps> = ({}) => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <Carousel infiniteLoop={true}>
      {testArray.map((number) => (
        <div className='px-4 my-8' key={number}>
          <CarouselProductItem />
        </div>
      ))}
    </Carousel>
  )
}
