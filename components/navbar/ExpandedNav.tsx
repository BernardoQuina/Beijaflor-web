import { AccessoriesCategory } from './AccessoriesCategory'
import { FlowersCategory } from './FlowersCategory'
import { PlantsCategory } from './PlantsCategory'

interface ExpandedNavProps {
  open: boolean
  underline: number
}

export const ExpandedNav: React.FC<ExpandedNavProps> = ({
  open,
  underline,
}) => {
  return (
    <div>
      {open && underline === 1 ? (
        <div>NOVIDADES</div>
      ) : open && underline === 2 ? (
        <div>OCASIÃO</div>
      ) : open && underline === 3 ? ( // categorias
        <div className='flex mt-10 lg:mt-4 mx-6'>
          <FlowersCategory />
          <PlantsCategory />
          <AccessoriesCategory />
        </div>
      ) : null}
    </div>
  )
}
