import {
  CategoryOrderByInput,
  Exact,
  MainCategory,
  SubCategory,
} from '../lib/generated/graphql'

export const categoriesVariables = (
  search: string,
  variables: Exact<{
    orderBy?: CategoryOrderByInput | CategoryOrderByInput[]
    search?: string
    searchMain?: MainCategory
    searchSub?: SubCategory
  }>
) => {
  variables.searchMain = MainCategory.None
  variables.searchSub = SubCategory.None
  if (search.toLowerCase().includes('plantas')) {
    variables.searchMain = MainCategory.Plantas
  }

  if (search.toLowerCase().includes('flores')) {
    variables.searchMain = MainCategory.Flores
  }

  if (search.toLowerCase().includes('acessórios')) {
    variables.searchMain = MainCategory.Acessorios
  }

  if (search.toLowerCase().includes('ocasião')) {
    variables.searchMain = MainCategory.Ocasiao
  }

  if (search.toLowerCase().includes('arranjos')) {
    variables.searchSub = SubCategory.Arranjos
  }

  if (search.toLowerCase().includes('calendário')) {
    variables.searchSub = SubCategory.Calendario
  }

  if (search.toLowerCase().includes('caracteristicas')) {
    variables.searchSub = SubCategory.Caracteristicas
  }

  if (search.toLowerCase().includes('cerimónias')) {
    variables.searchSub = SubCategory.Cerimonias
  }

  if (search.toLowerCase().includes('cores')) {
    variables.searchSub = SubCategory.Cores
  }

  if (search.toLowerCase().includes('estação')) {
    variables.searchSub = SubCategory.Estacao
  }

  if (search.toLowerCase().includes('local')) {
    variables.searchSub = SubCategory.Local
  }

  if (search.toLowerCase().includes('momentos especiais')) {
    variables.searchSub = SubCategory.MomentosEspeciais
  }

  if (search.toLowerCase().includes('outros')) {
    variables.searchSub = SubCategory.Outros
  }

  if (search.toLowerCase().includes('tipos')) {
    variables.searchSub = SubCategory.Tipos
  }

  if (search.toLowerCase().includes('vasos')) {
    variables.searchSub = SubCategory.Vasos
  }
}
