import { useEffect, useRef, useState } from 'react'
import { Image } from 'cloudinary-react'

import { Settings } from '../svg/Settings'
import { ArrowDown } from '../svg/ArrowDown'
import {
  BasicCategoryInfoFragment,
  SubCategory,
} from '../../lib/generated/graphql'
import { EditCategoryModal } from './EditCategoryModal'
import { CategoryOptionsModal } from './CategoryOptionsModal'
import { DeleteCategoryModal } from './DeleteCategoryModal'

interface AdminCategoryItemProps {
  category: BasicCategoryInfoFragment
  index: number
  lastCategoryRef?: any
}

export const AdminCategoryItem: React.FC<AdminCategoryItemProps> = ({
  category,
  index,
  lastCategoryRef,
}) => {
  const [open, setOpen] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showCategoryOptionsModal, setShowCategoryOptionsModal] =
    useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const categoryOptionsButtonNode = useRef<HTMLButtonElement | null>(null)
  const categoryOptionsModalNode = useRef<HTMLDivElement | null>(null)

  const categoryOptionsButtonClick = (e: any) => {
    if (
      categoryOptionsButtonNode.current &&
      categoryOptionsButtonNode.current.contains(e.target)
    ) {
      return
    }
    if (
      categoryOptionsModalNode.current &&
      categoryOptionsModalNode.current.contains(e.target)
    ) {
      return
    }

    setShowCategoryOptionsModal(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', categoryOptionsButtonClick)

    return () => {
      document.removeEventListener('mousedown', categoryOptionsButtonClick)
    }
  })

  return (
    <div ref={lastCategoryRef} className='relative w-full '>
      {showCategoryOptionsModal && (
        <CategoryOptionsModal
          category={category}
          modalRef={categoryOptionsModalNode}
          setShowCategoryOptionsModal={setShowCategoryOptionsModal}
          setShowEditCategoryModal={setShowEditModal}
          setShowDeleteCategoryModal={setShowDeleteModal}
        />
      )}
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
        <DeleteCategoryModal
          category={category}
          setShowDeleteCategoryModal={setShowDeleteModal}
          showDeleteCategoryModal={showDeleteModal}
        />
        <div className='flex w-full h-20 p-2'>
          <div className='flex w-[20%]'>
            <div className='h-full w-12 mx-auto rounded-md overflow-hidden'>
              <Image
                alt={category.name}
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={category.image}
                height={300}
                width={200}
                quality={20}
                crop='fill'
                secure={true}
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
          <div className='hidden lg:flex w-[42%]'>
            <h4 className='w-full self-center text-center text-green-dark tracking-wider'>
              {category.subCategory === SubCategory.TiposFlores
                ? 'tipos'
                : category.subCategory === SubCategory.TiposPlantas
                ? 'tipos'
                : category.subCategory === SubCategory.MomentosEspeciais
                ? 'momentos especiais'
                : category.subCategory === SubCategory.Estacao
                ? 'estação'
                : category.subCategory === SubCategory.Calendario
                ? 'calendário'
                : category.subCategory === SubCategory.Cerimonias
                ? 'cerimónias'
                : category.subCategory === SubCategory.Caracteristicas
                ? 'características'
                : category.subCategory}
            </h4>
          </div>
          <div className='flex w-[28%] lg:w-[20%]'>
            <button
              type='button'
              onClick={() =>
                setShowCategoryOptionsModal(!showCategoryOptionsModal)
              }
              ref={categoryOptionsButtonNode}
              className='mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center hover:opacity-80'
            >
              <Settings tailwind='h-5 text-green-dark' />
            </button>
            <button
              type='button'
              onClick={() => setOpen(!open)}
              className='lg:hidden mx-auto bg-green-extraLight p-1 rounded-md shadow-md h-8 self-center'
            >
              <ArrowDown
                tailwind={`h-5 text-green-dark transform ${
                  open && 'rotate-180'
                }`}
                strokeWidth={2.5}
              />
            </button>
          </div>
        </div>
        <div className='flex flex-col w-full py-2 lg:px-2'>
          <div className='w-full lg:hidden'>
            <div className='flex w-full mt-2 py-2'>
              <div className='flex flex-col w-[50%]'>
                <button className='flex mx-auto'>
                  <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                    CATEGORIA PRINCIPAL
                  </h5>
                </button>
                <p className='mx-auto text-center mt-2 text-green-dark'>
                  {category.mainCategory}
                </p>
              </div>
              <div className='flex flex-col w-[50%]'>
                <button className='flex mx-auto'>
                  <h5 className='self-center text-xs lg:text-sm tracking-widest font-bold text-green-dark'>
                    SUBCATEGORIA
                  </h5>
                </button>
                <p className='mx-auto text-center mt-2 text-green-dark'>
                  {category.subCategory === SubCategory.TiposFlores
                    ? 'tipos'
                    : category.subCategory === SubCategory.TiposPlantas
                    ? 'tipos'
                    : category.subCategory === SubCategory.MomentosEspeciais
                    ? 'momentos especiais'
                    : category.subCategory === SubCategory.Estacao
                    ? 'estação'
                    : category.subCategory === SubCategory.Calendario
                    ? 'calendário'
                    : category.subCategory === SubCategory.Cerimonias
                    ? 'cerimónias'
                    : category.subCategory === SubCategory.Caracteristicas
                    ? 'características'
                    : category.subCategory}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
