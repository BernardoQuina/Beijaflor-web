interface ShippingProps {
  tailwind?: string
  strokeWidth?: number
}

export const Shipping: React.FC<ShippingProps> = ({tailwind, strokeWidth}) => {
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
        d='M 19.5 8 H 17 V 6 c 0 -1.1 -0.9 -2 -2 -2 H 3 c -1.1 0 -2 0.9 -2 2 v 9 c 0 1.1 0.9 2 2 2 c 0 1.66 1.34 3 3 3 s 3 -1.34 3 -3 h 6 c 0 1.66 1.34 3 3 3 s 3 -1.34 3 -3 h 1 c 0.55 0 1 -0.45 1 -1 v -3.33 c 0 -0.43 -0.14 -0.85 -0.4 -1.2 L 20.3 8.4 c -0.19 -0.25 -0.49 -0.4 -0.8 -0.4 Z M 6 18 c -0.55 0 -1 -0.45 -1 -1 s 0.45 -1 1 -1 s 1 0.45 1 1 s -0.45 1 -1 1 Z m 13.5 -8.5 l 1.96 2.5 H 17 V 9.5 h 2.5 Z M 18 18 c -0.55 0 -1 -0.45 -1 -1 s 0.45 -1 1 -1 s 1 0.45 1 1 s -0.45 1 -1 1 Z'
      />
    </svg>
  )
}