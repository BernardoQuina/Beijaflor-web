interface TemperatureProps {
  tailwind?: string
}

export const Temperature: React.FC<TemperatureProps> = ({ tailwind }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={tailwind}
      fill='currentColor'
    >
      <path d='M 15 13 V 5 c 0 -1.66 -1.34 -3 -3 -3 S 9 3.34 9 5 v 8 c -1.21 0.91 -2 2.37 -2 4 c 0 2.76 2.24 5 5 5 s 5 -2.24 5 -5 c 0 -1.63 -0.79 -3.09 -2 -4 Z m -4 -8 c 0 -0.55 0.45 -1 1 -1 s 1 0.45 1 1 h -1 v 1 h 1 v 2 h -1 v 1 h 1 v 2 h -2 V 5 Z' />
    </svg>
  )
}
