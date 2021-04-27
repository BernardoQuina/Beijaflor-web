interface SizeProps {
  tailwind?: string
}

export const Size: React.FC<SizeProps> = ({ tailwind }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={tailwind}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        d='M 21 6 H 3 c -1.1 0 -2 0.9 -2 2 v 8 c 0 1.1 0.9 2 2 2 h 18 c 1.1 0 2 -0.9 2 -2 V 8 c 0 -1.1 -0.9 -2 -2 -2 Z m -1 10 H 4 c -0.55 0 -1 -0.45 -1 -1 V 9 c 0 -0.55 0.45 -1 1 -1 h 1 v 3 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 8 h 2 v 3 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 8 h 2 v 3 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 8 h 2 v 3 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 8 h 1 c 0.55 0 1 0.45 1 1 v 6 c 0 0.55 -0.45 1 -1 1 Z'
      />
    </svg>
  )
}
