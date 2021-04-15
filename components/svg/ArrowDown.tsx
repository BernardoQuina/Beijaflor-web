interface ArrowDownProps {
  tailwind?: string
  strokeWidth?: number
}

export const ArrowDown: React.FC<ArrowDownProps> = ({
  tailwind,
  strokeWidth,
}) => {
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
        d='M19 9l-7 7-7-7'
      />
    </svg>
  )
}
