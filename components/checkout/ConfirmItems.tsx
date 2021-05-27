import { Dispatch, SetStateAction } from 'react'
import { MeQuery } from '../../lib/generated/graphql'
import { CartContent } from '../navbar/CartContent'


interface ConfirmItemsProps {
  data: MeQuery
  setCheckoutFase: Dispatch<SetStateAction<string>>
}

export const ConfirmItems: React.FC<ConfirmItemsProps> = ({ data, setCheckoutFase }) => {
  return (
    <div className='mt-8 flex flex-col mx-auto max-w-6xl bg-white rounded-md shadow-around'>
      <CartContent cart={data.me.cart} data={data} /> !!! mudar !!!
    </div>
  )
}
