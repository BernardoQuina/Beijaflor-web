import { useState } from 'react'
import { Image } from 'cloudinary-react'

import { Settings } from '../svg/Settings'
import { ArrowDown } from '../svg/ArrowDown'
import { BasicCategoryInfoFragment } from '../../lib/generated/graphql'
import { EditCategoryModal } from './EditCategoryModal'

interface AdminCategoryItemProps {
  category: BasicCategoryInfoFragment
  index: number
}

export const AdminCategoryItem: React.FC<AdminCategoryItemProps> = ({
  category,
  index,
}) => {
  const [open, setOpen] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  return (
    <div
      className={`flex flex-col w-full ${!open && 'h-20'} ${
        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
      } rounded-md overflow-hidden`}
    >
      <EditCategoryModal
        category={category}
        showCategoryModal={showEditModal}
        setShowCategoryModal={setShowEditModal}
      />
      <div className='flex w-full h-20 p-2'>
        <div className='flex w-[20%]'>
          <div className='h-full w-12 mx-auto rounded-md overflow-hidden'>
            <Image
              cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
              publicId={category.image}
              height={300}
              width={200}
              quality={20}
              crop='fill'
            />
          </div>
        </div>
        <div className='flex w-[54%] lg:w-[44%]'>
          <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
            {category.name.toLowerCase()}
          </h4>
        </div>
        <div className='hidden lg:flex w-[44%]'>
          <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
            {category.mainCategory}
          </h4>
        </div>
        <div className='hidden lg:flex w-[34%]'>
          <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
            {category.subCategory}
          </h4>
        </div>
        <div className='flex w-[28%]'>
          <button
            type='button'
            onClick={() => setShowEditModal(true)}
            className='mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
          >
            <Settings tailwind='h-5 text-green-dark' />
          </button>
          <button
            type='button'
            onClick={() => setOpen(!open)}
            className='mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
          >
            <ArrowDown
              tailwind={`h-5 text-green-dark transform ${open && 'rotate-180'}`}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>
      <div className='flex flex-col w-full py-2 lg:px-2'>
        <div className='w-full lg:hidden'>
          <div className='flex w-full mt-2 h-8 py-2'>
            <div className='flex w-[50%]'>
              <button className='flex mx-auto'>
                <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                  CATEGORIA PRINCIPAL
                </h5>
              </button>
            </div>
            <div className='flex w-[50%]'>
              <button className='flex mx-auto'>
                <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                  SUBCATEGORIA
                </h5>
              </button>
            </div>
            
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-col lg:flex-row w-full mt-4 p-2'>
            HELLO
          </div>
        </div>
      </div>
    </div>
  )
}
