import { useEffect, useState, Children } from 'react'
import useWindowSize from '../utils/useWindowSize'

interface CarouselProps {
  infiniteLoop: boolean
  sm?: boolean
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  infiniteLoop,
  sm
}) => {
  const [show, setShow] = useState(1)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState<number>(Children.count(children))

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && Children.count(children) > show
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

    if (diff > 7) {
      next()
    }

    if (diff < -7) {
      prev()
    }

    setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex >= length + show) {
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
    setLength(Children.count(children))
    setIsRepeating(infiniteLoop && Children.count(children) > show)
  }, [children, infiniteLoop, show])

  const windowChange = useWindowSize()

  useEffect(() => {
    if (window && windowChange.width > 768) {
      setShow(2)
      if (window.innerWidth > 1024) {
        setShow(3)
        if (windowChange.width > 1280) {
          setShow(4)
          if (windowChange.width > 1536) {
            setShow(5)
          }
        }
      }
    } else {
      setShow(1)
    }


    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length, windowChange])

  return (
    <div className='w-full flex flex-col'>
      <div className='flex w-full relative'>
        {(isRepeating || currentIndex > 0) && (
          <button
            className='absolute z-[1] top-[50%] translate-y-[-50%] w-[24px] text-green-dark left-[5px] lg:left-[0px] text-2xl font-bold'
            onClick={prev}
          >
            <p className='self-start'>&lt;</p>
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
            className='absolute z-[1] top-[50%] translate-y-[-50%] w-[24px] text-green-dark right-[5px] lg:right-[0px] text-2xl font-bold self-center'
            onClick={next}
          >
            <p>&gt;</p>
          </button>
        )}
      </div>
    </div>
  )
}
