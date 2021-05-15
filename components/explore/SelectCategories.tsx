import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect } from 'react'
import {
  BasicCategoryInfoFragment,
  Exact,
  MainCategory,
  ProductOrderByInput,
  SubCategory,
} from '../../lib/generated/graphql'

interface SelectCategoriesProps {
  category: BasicCategoryInfoFragment
  selectedCategories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
  variables: Exact<{
    orderBy?: ProductOrderByInput | ProductOrderByInput[]
    search?: string
    searchMain?: MainCategory
    searchSub?: SubCategory
    searchCatName1?: string
    searchCatName2?: string
    searchCatName3?: string
    searchCatName4?: string
    searchCatName5?: string
    searchCatName6?: string
    searchCatName7?: string
    searchCatName8?: string
    searchCatName9?: string
    searchCatName10?: string
  }>
  refetch: any
}

export const SelectCategories: React.FC<SelectCategoriesProps> = ({
  category,
  selectedCategories,
  setSelectedCategories,
  variables,
  refetch,
}) => {
  const router = useRouter()

  useEffect(() => {
    if (router.query.categories) {
      if (router.query.categories[0].toLowerCase() === 'pesquisa') {
        return
      } else if (router.query.categories[0].toLowerCase() === 'flores') {
        return
      } else if (router.query.categories[0].toLowerCase() === 'plantas') {
        return
      } else if (router.query.categories[0].toLowerCase() === 'acessórios') {
        return
      } else if (router.query.categories[0].toLowerCase() === 'ocasião') {
        return
      } else {
        variables.searchCatName1 = router.query.categories[0].toUpperCase()
        setSelectedCategories([router.query.categories[0].toUpperCase()])
      }
    }
  }, [])

  return (
    <label htmlFor={category.name} className='flex w-full'>
      {category.name.toLowerCase()}
      <input
        className='form-checkbox ml-auto text-pink-medium border border-pink-dark rounded-sm focus:border-pink-dark self-center'
        type='checkbox'
        name={category.name}
        value={category.name}
        checked={selectedCategories.includes(category.name)}
        disabled={
          selectedCategories.length >= 10 &&
          !selectedCategories.includes(category.name)
        }
        onChange={() => {
          variables.searchMain = MainCategory.None
          variables.searchSub = SubCategory.None
          if (selectedCategories.includes(category.name)) {
            setSelectedCategories((prev) => [
              ...prev.filter((name) => name !== category.name),
            ])
            if (variables.searchCatName1 === category.name) {
              variables.searchCatName1 = 'none'
            } else if (variables.searchCatName2 === category.name) {
              variables.searchCatName2 = 'none'
            } else if (variables.searchCatName3 === category.name) {
              variables.searchCatName3 = 'none'
            } else if (variables.searchCatName4 === category.name) {
              variables.searchCatName4 = 'none'
            } else if (variables.searchCatName5 === category.name) {
              variables.searchCatName5 = 'none'
            } else if (variables.searchCatName6 === category.name) {
              variables.searchCatName6 = 'none'
            } else if (variables.searchCatName7 === category.name) {
              variables.searchCatName7 = 'none'
            } else if (variables.searchCatName8 === category.name) {
              variables.searchCatName8 = 'none'
            } else if (variables.searchCatName9 === category.name) {
              variables.searchCatName9 = 'none'
            } else if (variables.searchCatName10 === category.name) {
              variables.searchCatName10 = 'none'
            }

            if (selectedCategories.length < 2) {
              variables.search = ''
            }

            refetch()
          } else {
            setSelectedCategories((prev) => [...prev, category.name])

            if (variables.searchCatName1 === 'none') {
              variables.search = 'nonsense'
              variables.searchCatName1 = category.name
              refetch()
            } else if (variables.searchCatName2 === 'none') {
              variables.searchCatName2 = category.name
              refetch()
            } else if (variables.searchCatName3 === 'none') {
              variables.searchCatName3 = category.name
              refetch()
            } else if (variables.searchCatName4 === 'none') {
              variables.searchCatName4 = category.name
              refetch()
            } else if (variables.searchCatName5 === 'none') {
              variables.searchCatName5 = category.name
              refetch()
            } else if (variables.searchCatName6 === 'none') {
              variables.searchCatName6 = category.name
              refetch()
            } else if (variables.searchCatName7 === 'none') {
              variables.searchCatName7 = category.name
              refetch()
            } else if (variables.searchCatName8 === 'none') {
              variables.searchCatName8 = category.name
              refetch()
            } else if (variables.searchCatName9 === 'none') {
              variables.searchCatName9 = category.name
              refetch()
            } else if (variables.searchCatName10 === 'none') {
              variables.searchCatName10 = category.name
              refetch()
            }
          }
        }}
      />
    </label>
  )
}
