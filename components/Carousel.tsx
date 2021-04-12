import { useEffect, useState, Children } from 'react'

interface CarouselProps {
  show: number
}

export const Carousel: React.FC<CarouselProps> = ({ children, show }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState<number>(
    Children.toArray(children).length
  )
  const [touchPosition, setTouchPosition] = useState(null)

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
    return
  }

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX

    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < 5) {
      prev()
    }

    setTouchPosition(null)
  }

  useEffect(() => {
    setLength(Children.toArray(children).length)
  }, [children])

  return (
    <div className='w-full flex flex-col'>
      {' '}
      {/*container*/}
      <div className='flex w-full relative'>
        {' '}
        {/*wrapper*/}
        {currentIndex > 0 && (
          <button
            className='absolute z-[1] top-[50%] translate-y-[-50%] w-[24px] h-[24px] border rounded-full bg-white left-[12px] leading-[1.6rem] text-3xl font-bold'
            onClick={prev}
          >
            &lt;
          </button>
        )}
        <div
          className='overflow-hidden w-full h-full'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {' '}
          {/*content-wrapper*/}
          <div
            className={`carousel-content md show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {' '}
            {/*content*/}
            {children}
          </div>
        </div>
        {currentIndex < (length - show) && (
          <button
            className='absolute z-[1] top-[50%] translate-y-[-50%] w-[24px] h-[24px] border rounded-full bg-white right-[12px] leading-[1.6rem] text-3xl font-bold'
            onClick={next}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}
