import { useEffect, useState, Children } from 'react'

interface CarouselProps {
  infiniteLoop: boolean
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  infiniteLoop,
}) => {

  const [show, setShow] = useState(1)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState<number>(
    Children.toArray(children).length
  )

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && Children.toArray(children).length > show
  )
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState(null)

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
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

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  const renderExtraPrev = () => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push((children as any)[length - 1 - index])
    }
    output.reverse()
    return output
  }

  const renderExtraNext = () => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push((children as any)[index])
    }
    return output
  }

  useEffect(() => {
    setLength(Children.toArray(children).length)
    setIsRepeating(
      infiniteLoop && infiniteLoop && Children.toArray(children).length > show
    )
  }, [children, infiniteLoop, show])

  useEffect(() => {
    if (window && window.innerWidth > 768) {
      setShow(3)
    }

    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  return (
    <div className='w-full flex flex-col'>
      <div className='flex w-full relative'>
        {(isRepeating || currentIndex > 0) && (
          <button
            className='absolute z-[1] top-[50%] translate-y-[-50%] w-[24px] h-[24px] text-green-dark left-[-10px] lg:left-[10px] text-5xl font-bold'
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
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>

        {(isRepeating || currentIndex < length - show) && (
          <button
            className='absolute z-[1] top-[50%] translate-y-[-50%] w-[24px] h-[24px] text-green-dark right-[-10px] lg:right-[10px] text-5xl font-bold'
            onClick={next}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}
