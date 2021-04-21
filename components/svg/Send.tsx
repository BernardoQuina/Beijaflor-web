interface SendProps {
  tailwind?: string
  strokeWidth?: number
}

export const Send: React.FC<SendProps> = ({ tailwind, strokeWidth }) => {
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
        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
      />
    </svg>
  )
}
