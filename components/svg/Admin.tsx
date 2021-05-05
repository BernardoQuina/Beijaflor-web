interface AdminProps {
  tailwind?: string
}

export const Admin: React.FC<AdminProps> = ({ tailwind }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={tailwind}
      viewBox='0 0 24 26'
      fill='currentColor'
    >
      <g>
        <rect fill='none' height='24' width='24'></rect>
      </g>
      <g>
        <circle cx='17' cy='15.5' fillRule='evenodd' r='1.12'></circle>
        <path
          fillRule='evenodd'
          d='M 17 17.5 c -0.73 0 -2.19 0.36 -2.24 1.08 c 0.5 0.71 1.32 1.17 2.24 1.17 s 1.74 -0.46 2.24 -1.17 C 19.19 17.86 17.73 17.5 17 17.5 Z'
        ></path>
        <path
          fillRule='evenodd'
          d='M 18 11.09 V 6.27 L 10.5 3 L 3 6.27 v 4.91 c 0 4.54 3.2 8.79 7.5 9.82 c 0.55 -0.13 1.08 -0.32 1.6 -0.55 C 13.18 21.99 14.97 23 17 23 c 3.31 0 6 -2.69 6 -6 C 23 14.03 20.84 11.57 18 11.09 Z M 11 17 c 0 0.56 0.08 1.11 0.23 1.62 c -0.24 0.11 -0.48 0.22 -0.73 0.3 c -3.17 -1 -5.5 -4.24 -5.5 -7.74 v -3.6 l 5.5 -2.4 l 5.5 2.4 v 3.51 C 13.16 11.57 11 14.03 11 17 Z M 17 21 c -2.21 0 -4 -1.79 -4 -4 c 0 -2.21 1.79 -4 4 -4 s 4 1.79 4 4 C 21 19.21 19.21 21 17 21 Z'
        ></path>
      </g>
    </svg>
  )
}
