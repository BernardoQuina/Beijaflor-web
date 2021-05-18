interface NarrowArrowProps {
  tailwind: string
  strokeWidth: number
}

export const NarrowArrow: React.FC<NarrowArrowProps> = ({
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
        d='M17 8l4 4m0 0l-4 4m4-4H3'
      />
    </svg>
  )
}
