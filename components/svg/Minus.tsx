interface MinusProps {
  tailwind?: string
  strokeWidth?: number
}

export const Minus: React.FC<MinusProps> = ({ tailwind, strokeWidth }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={tailwind}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
        d='M20 12H4'
      />
    </svg>
  )
}
