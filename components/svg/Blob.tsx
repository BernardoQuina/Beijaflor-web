interface BlobProps {
  tailwind?: string
  rotate?: number
}

export const Blob: React.FC<BlobProps> = ({ tailwind, rotate }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-5 0 155 170'
      className={tailwind}
    >
      <path
        fill='currentColor'
        d='M35.5,-64.5C46.5,-55.3,56,-46.5,60.2,-35.9C64.5,-25.2,63.5,-12.6,65.7,1.3C67.9,15.2,73.4,30.3,68.2,39.5C63.1,48.6,47.4,51.8,34.3,59.8C21.1,67.9,10.6,80.9,0.7,79.7C-9.2,78.6,-18.4,63.3,-32.6,55.8C-46.8,48.3,-65.9,48.7,-72.1,40.7C-78.3,32.7,-71.6,16.4,-67.5,2.4C-63.4,-11.6,-61.9,-23.3,-58,-35.2C-54.1,-47.2,-47.8,-59.6,-37.7,-69.3C-27.7,-79,-13.8,-86.2,-0.8,-84.9C12.3,-83.6,24.6,-73.8,35.5,-64.5Z'
        transform={`translate(75 82) rotate(${rotate ? rotate : 180})`}
      />
    </svg>
  )
}
