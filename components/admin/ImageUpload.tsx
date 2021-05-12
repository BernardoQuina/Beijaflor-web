import { Dispatch, SetStateAction, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { Photo } from '../svg/Photo'

interface ImageUploadProps {
  setUploadedImages: Dispatch<SetStateAction<{ public_id: string }[]>>
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  setUploadedImages,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData()

      formData.append('file', acceptedFile)
      formData.append(
        'upload_preset',
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      )

      const response = await fetch(url, {
        method: 'post',
        body: formData,
      })

      const data = await response.json()

      setUploadedImages((existing) => [...existing, data])
    })
  }, [])

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
    maxSize: 5242880,
  })

  return (
    <div className='flex flex-col self-center'>
      {/* Drop Zone div */}
      {fileRejections[0] && (
        <div className='p-2 px-4 mx-auto mb-2 text-sm flex self-center rounded-md bg-red-200 shadow-md'>
          Máximo 5 MB
        </div>
      )}
      <button
        {...getRootProps()}
        type='button'
        className='flex ml-4 p-2 self-center bg-green-extraLight rounded-md shadow-md'
      >
        <p className='mx-2 text-green-dark tracking-wider'>Adicionar</p>
        <Photo tailwind='h-6 text-green-dark' strokeWidth={1.5} />
        <input {...getInputProps()} />
      </button>
    </div>
  )
}
