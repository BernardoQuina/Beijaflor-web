interface PlusProps {
  tailwind?: string
  strokeWidth?: number
}

export const Plus: React.FC<PlusProps> = ({ tailwind, strokeWidth }) => {
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
        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
      />
    </svg>
  )
}
