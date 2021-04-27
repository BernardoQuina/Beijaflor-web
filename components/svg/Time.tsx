interface TimeProps {
  tailwind?: string
  strokeWidth?: number
}

export const Time: React.FC<TimeProps> = ({tailwind, strokeWidth}) => {
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
        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}
