interface PlantProps {
  tailwind?: string
  strokeWidth?: number
}

export const Plant: React.FC<PlantProps> = ({tailwind, strokeWidth}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={tailwind}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeWidth={strokeWidth}
        d='M 15.64 11.02 c 0.55 -1.47 1.43 -2.78 2.56 -3.83 c 0.38 -0.36 0.04 -1 -0.46 -0.85 c -3.32 0.98 -5.75 4.05 -5.74 7.69 c 0 0 0 0 0 0 C 12.95 12.75 14.2 11.72 15.64 11.02 Z M 11.42 8.85 c -0.6 -1.56 -1.63 -2.91 -2.96 -3.87 C 8.04 4.68 7.5 5.17 7.74 5.63 C 8.54 7.15 9 8.88 9 10.71 c 0 0.21 -0.03 0.41 -0.04 0.61 c 0.43 0.24 0.83 0.52 1.22 0.82 C 10.39 10.96 10.83 9.85 11.42 8.85 Z M 12 20 H 3 c -0.55 0 -1 -0.45 -1 -1 s 0.45 -1 1 -1 h 4.75 c -0.57 -2.19 -2.04 -4.02 -4 -5.06 l 0 0 c -0.16 -0.08 -0.26 -0.25 -0.26 -0.44 c 0 -0.27 0.22 -0.49 0.49 -0.5 c 0.01 0 0.02 0 0.02 0 C 8.42 12 12 15.58 12 20 Z M 20.26 12.94 L 20.26 12.94 c -1.96 1.04 -3.44 2.87 -4 5.06 H 21 c 0.55 0 1 0.45 1 1 s -0.45 1 -1 1 h -5 h -2 c 0 -0.68 -0.07 -1.35 -0.2 -2 c -0.15 -0.72 -0.38 -1.42 -0.67 -2.07 C 14.52 13.58 17.07 12 20 12 c 0.01 0 0.02 0 0.02 0 c 0.27 0 0.49 0.23 0.49 0.5 C 20.52 12.69 20.41 12.85 20.26 12.94 Z'
      />
    </svg>
  )
}