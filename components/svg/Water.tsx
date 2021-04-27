interface WaterProps {
  tailwind?: string
}

export const Water: React.FC<WaterProps> = ({ tailwind }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={tailwind}
      fill='currentColor'
    >
      <path d='M11 6c-3.653 5.398-6 8.774-6 12.056 0 3.284 2.684 5.944 6 5.944s6-2.66 6-5.944c0-3.282-2.347-6.658-6-12.056zm-.021 3.839c.352.544.771 1.491.771 2.49 0 2.931-3 3.412-3 1.627 0-1.224 1.491-3.031 2.229-4.117zm-2.399-3.829c-.613-1.639-1.876-3.492-3.58-6.01-2.436 3.599-4 5.85-4 8.037 0 2.129 1.695 3.851 3.822 3.945.949-1.775 2.235-3.719 3.758-5.972zm-5.08-.705c0-.816.994-2.021 1.486-2.745.235.362.514.994.514 1.66 0 1.954-2 2.274-2 1.085zm15.5-2.305c-1.706 2.521-2.97 4.376-3.583 6.016 1.415 2.202 2.466 4.102 3.054 5.932 2.524.331 4.529-1.609 4.529-3.911 0-2.187-1.564-4.438-4-8.037zm-1.5 5.305c0-.816.994-2.021 1.486-2.745.235.362.514.994.514 1.66 0 1.954-2 2.274-2 1.085z' />
    </svg>
  )
}
