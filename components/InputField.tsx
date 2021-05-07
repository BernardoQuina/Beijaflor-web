import { InputHTMLAttributes } from 'react'
import { useField } from 'formik'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  showLabel?: boolean
  labelStyling?: string
  inputStyling: string
  errorStyling: string
  type: HTMLInputElement['type']
  maxLength?: number
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  showLabel = true,
  labelStyling,
  inputStyling,
  errorStyling,
  maxLength,
  ...props
}) => {
  const [field, { error }] = useField(props)

  return (
    <>
      {error && <div className={errorStyling}>{error}</div>}
      <div className='mx-auto'>
        {label && showLabel && <p className={labelStyling}>{label}</p>}
        <label htmlFor={field.name}></label>
        <input
          className={inputStyling}
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
