import { TextareaHTMLAttributes } from 'react'
import { useField } from 'formik'

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label?: string
  showLabel?: boolean
  labelStyling?: string
  textareaStyling: string
  errorStyling: string
  type: HTMLTextAreaElement['type']
  maxLength?: number
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  showLabel = true,
  labelStyling,
  textareaStyling,
  errorStyling,
  maxLength,
  ...props
}) => {
  const [field, { error }] = useField(props)

  return (
    <>
      {error && <div className={errorStyling}>{error}</div>}
      <div>
        {label && showLabel && <p className={labelStyling}>{label}</p>}
        <label htmlFor={field.name}></label>
        <textarea
          className={textareaStyling}
          maxLength={maxLength}
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder}
        />
      </div>
    </>
  )
}
