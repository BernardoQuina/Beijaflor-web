import { Dispatch, SetStateAction } from 'react'
import {
  BasicCategoryInfoFragment,
  BasicProductInfoFragment,
  Exact,
  MainCategory,
  ProductOrderByInput,
  SubCategory,
} from '../../lib/generated/graphql'

interface SelectCategoriesProps {
  category: BasicCategoryInfoFragment
  selectedCategories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
  setHasMore: Dispatch<SetStateAction<boolean>>
  setProducts: Dispatch<SetStateAction<BasicProductInfoFragment[]>>
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
  setProducts,
  setHasMore,
  variables,
  refetch,
}) => {
  return (
    <label htmlFor={category.name} className='flex w-full'>
      {category.name.toLowerCase()}
      <input
        className='form-checkbox ml-auto text-pink-medium border border-pink-dark rounded-sm focus:border-pink-dark self-center cursor-pointer'
        type='checkbox'
        name={category.name}
        value={category.name}
        checked={selectedCategories.includes(category.name)}
        disabled={
          selectedCategories.length >= 10 &&
          !selectedCategories.includes(category.name)
        }
        onChange={async () => {
          variables.search = 'nonsense'
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

            const response = await refetch()
            setProducts(response.data.products)
            setHasMore(true)
          } else {
            setSelectedCategories((prev) => [...prev, category.name])

            if (variables.searchCatName1 === 'none') {
              variables.search = 'nonsense'
              variables.searchCatName1 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName2 === 'none') {
              variables.search = 'nonsense'
              variables.searchCatName2 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName3 === 'none') {
              variables.searchCatName3 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName4 === 'none') {
              variables.searchCatName4 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName5 === 'none') {
              variables.searchCatName5 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName6 === 'none') {
              variables.searchCatName6 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName7 === 'none') {
              variables.searchCatName7 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName8 === 'none') {
              variables.searchCatName8 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName9 === 'none') {
              variables.searchCatName9 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            } else if (variables.searchCatName10 === 'none') {
              variables.searchCatName10 = category.name
              const response = await refetch()
              setProducts(response.data.products)
              setHasMore(true)
            }
          }
        }}
      />
    </label>
  )
}
