import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  mainCategory: MainCategory;
  subCategory: SubCategory;
  name: Scalars['String'];
  image: Scalars['String'];
  products: Array<Product>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CategoryProductsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  mainCategory?: Maybe<SortOrder>;
  subCategory?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<StringFilter>;
  mainCategory?: Maybe<EnumMainCategoryFilter>;
  subCategory?: Maybe<EnumSubCategoryFilter>;
  name?: Maybe<StringFilter>;
  image?: Maybe<StringFilter>;
  products?: Maybe<ProductListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type EnumMainCategoryFilter = {
  equals?: Maybe<MainCategory>;
  in?: Maybe<Array<MainCategory>>;
  notIn?: Maybe<Array<MainCategory>>;
  not?: Maybe<NestedEnumMainCategoryFilter>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type EnumSubCategoryFilter = {
  equals?: Maybe<SubCategory>;
  in?: Maybe<Array<SubCategory>>;
  notIn?: Maybe<Array<SubCategory>>;
  not?: Maybe<NestedEnumSubCategoryFilter>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export enum MainCategory {
  Flores = 'Flores',
  Plantas = 'Plantas',
  Acessorios = 'Acessorios',
  Ocasiao = 'Ocasiao'
}

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  editUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  createProduct?: Maybe<Product>;
  createCategory?: Maybe<Category>;
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationEditUserArgs = {
  password?: Maybe<Scalars['String']>;
  updateName?: Maybe<Scalars['String']>;
  updateEmail?: Maybe<Scalars['String']>;
  updatePassword?: Maybe<Scalars['String']>;
  confirmNewPassword?: Maybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  password?: Maybe<Scalars['String']>;
};


export type MutationCreateProductArgs = {
  name: Scalars['String'];
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  price: Scalars['Float'];
  stock: Scalars['Int'];
  categories: Array<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['String']>;
  exposure?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  lifespan?: Maybe<Scalars['String']>;
};


export type MutationCreateCategoryArgs = {
  mainCategory: MainCategory;
  name: Scalars['String'];
  subCategory: SubCategory;
  image: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumMainCategoryFilter = {
  equals?: Maybe<MainCategory>;
  in?: Maybe<Array<MainCategory>>;
  notIn?: Maybe<Array<MainCategory>>;
  not?: Maybe<NestedEnumMainCategoryFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
};

export type NestedEnumSubCategoryFilter = {
  equals?: Maybe<SubCategory>;
  in?: Maybe<Array<SubCategory>>;
  notIn?: Maybe<Array<SubCategory>>;
  not?: Maybe<NestedEnumSubCategoryFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  price: Scalars['Float'];
  stock: Scalars['Int'];
  active: Scalars['Boolean'];
  categories: Array<Category>;
  height?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['String']>;
  exposure?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  lifespan?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ProductCategoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  images?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  stock?: Maybe<SortOrder>;
  active?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  water?: Maybe<SortOrder>;
  exposure?: Maybe<SortOrder>;
  temperature?: Maybe<SortOrder>;
  lifespan?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  images?: Maybe<StringNullableListFilter>;
  price?: Maybe<FloatFilter>;
  stock?: Maybe<IntFilter>;
  active?: Maybe<BoolFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  height?: Maybe<StringNullableFilter>;
  water?: Maybe<StringNullableFilter>;
  exposure?: Maybe<StringNullableFilter>;
  temperature?: Maybe<StringNullableFilter>;
  lifespan?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  userCount?: Maybe<Scalars['Int']>;
  me?: Maybe<User>;
  product?: Maybe<Product>;
  products: Array<Product>;
  productCount?: Maybe<Scalars['Int']>;
  inactiveCount?: Maybe<Scalars['Int']>;
  outOfStockCount?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  categoryCount?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserWhereUniqueInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export enum SubCategory {
  Tipos = 'tipos',
  Arranjos = 'arranjos',
  Cores = 'cores',
  Estacao = 'estacao',
  Local = 'local',
  Caracteristicas = 'caracteristicas',
  Vasos = 'vasos',
  Outros = 'outros',
  Calendario = 'calendario',
  Cerimonias = 'cerimonias',
  MomentosEspeciais = 'momentosEspeciais'
}

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  role: Role;
  passwordHash?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  googleId?: Maybe<SortOrder>;
  facebookId?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  passwordHash?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  googleId?: Maybe<StringNullableFilter>;
  facebookId?: Maybe<StringNullableFilter>;
  email?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  passwordHash?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  photo?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type BasicCategoryInfoFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name' | 'mainCategory' | 'subCategory' | 'image' | 'createdAt' | 'updatedAt'>
);

export type BasicProductInfoFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'name' | 'description' | 'price' | 'stock' | 'active' | 'images' | 'createdAt' | 'updatedAt' | 'height' | 'water' | 'exposure' | 'temperature' | 'lifespan'>
  & { categories: Array<(
    { __typename?: 'Category' }
    & BasicCategoryInfoFragment
  )> }
);

export type BasicUserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'googleId' | 'facebookId' | 'email' | 'name' | 'role' | 'photo' | 'createdAt' | 'updatedAt'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & BasicUserInfoFragment
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type NewCategoryMutationVariables = Exact<{
  mainCategory: MainCategory;
  subCategory: SubCategory;
  name: Scalars['String'];
  image: Scalars['String'];
}>;


export type NewCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory?: Maybe<(
    { __typename?: 'Category' }
    & BasicCategoryInfoFragment
  )> }
);

export type NewProductMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  stock: Scalars['Int'];
  images: Array<Scalars['String']> | Scalars['String'];
  categories: Array<Scalars['String']> | Scalars['String'];
  height?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['String']>;
  exposure?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  lifespan?: Maybe<Scalars['String']>;
}>;


export type NewProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  )> }
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'User' }
    & BasicUserInfoFragment
  )> }
);

export type CategoryCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'categoryCount'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & BasicUserInfoFragment
  )> }
);

export type ProductCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCountsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'productCount' | 'outOfStockCount' | 'inactiveCount'>
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  )> }
);

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & BasicUserInfoFragment
  )> }
);

export const BasicCategoryInfoFragmentDoc = gql`
    fragment BasicCategoryInfo on Category {
  id
  name
  mainCategory
  subCategory
  image
  createdAt
  updatedAt
}
    `;
export const BasicProductInfoFragmentDoc = gql`
    fragment BasicProductInfo on Product {
  id
  name
  description
  price
  stock
  active
  images
  createdAt
  updatedAt
  categories {
    ...BasicCategoryInfo
  }
  height
  water
  exposure
  temperature
  lifespan
}
    ${BasicCategoryInfoFragmentDoc}`;
export const BasicUserInfoFragmentDoc = gql`
    fragment BasicUserInfo on User {
  id
  googleId
  facebookId
  email
  name
  role
  photo
  createdAt
  updatedAt
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...BasicUserInfo
  }
}
    ${BasicUserInfoFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const NewCategoryDocument = gql`
    mutation NewCategory($mainCategory: MainCategory!, $subCategory: SubCategory!, $name: String!, $image: String!) {
  createCategory(
    mainCategory: $mainCategory
    subCategory: $subCategory
    name: $name
    image: $image
  ) {
    ...BasicCategoryInfo
  }
}
    ${BasicCategoryInfoFragmentDoc}`;
export type NewCategoryMutationFn = Apollo.MutationFunction<NewCategoryMutation, NewCategoryMutationVariables>;

/**
 * __useNewCategoryMutation__
 *
 * To run a mutation, you first call `useNewCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newCategoryMutation, { data, loading, error }] = useNewCategoryMutation({
 *   variables: {
 *      mainCategory: // value for 'mainCategory'
 *      subCategory: // value for 'subCategory'
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useNewCategoryMutation(baseOptions?: Apollo.MutationHookOptions<NewCategoryMutation, NewCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewCategoryMutation, NewCategoryMutationVariables>(NewCategoryDocument, options);
      }
export type NewCategoryMutationHookResult = ReturnType<typeof useNewCategoryMutation>;
export type NewCategoryMutationResult = Apollo.MutationResult<NewCategoryMutation>;
export type NewCategoryMutationOptions = Apollo.BaseMutationOptions<NewCategoryMutation, NewCategoryMutationVariables>;
export const NewProductDocument = gql`
    mutation NewProduct($name: String!, $description: String!, $price: Float!, $stock: Int!, $images: [String!]!, $categories: [String!]!, $height: String, $water: String, $exposure: String, $temperature: String, $lifespan: String) {
  createProduct(
    name: $name
    description: $description
    price: $price
    stock: $stock
    images: $images
    categories: $categories
    height: $height
    water: $water
    exposure: $exposure
    temperature: $temperature
    lifespan: $lifespan
  ) {
    ...BasicProductInfo
  }
}
    ${BasicProductInfoFragmentDoc}`;
export type NewProductMutationFn = Apollo.MutationFunction<NewProductMutation, NewProductMutationVariables>;

/**
 * __useNewProductMutation__
 *
 * To run a mutation, you first call `useNewProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newProductMutation, { data, loading, error }] = useNewProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      stock: // value for 'stock'
 *      images: // value for 'images'
 *      categories: // value for 'categories'
 *      height: // value for 'height'
 *      water: // value for 'water'
 *      exposure: // value for 'exposure'
 *      temperature: // value for 'temperature'
 *      lifespan: // value for 'lifespan'
 *   },
 * });
 */
export function useNewProductMutation(baseOptions?: Apollo.MutationHookOptions<NewProductMutation, NewProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewProductMutation, NewProductMutationVariables>(NewProductDocument, options);
      }
export type NewProductMutationHookResult = ReturnType<typeof useNewProductMutation>;
export type NewProductMutationResult = Apollo.MutationResult<NewProductMutation>;
export type NewProductMutationOptions = Apollo.BaseMutationOptions<NewProductMutation, NewProductMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  register(
    name: $name
    email: $email
    password: $password
    confirmPassword: $confirmPassword
  ) {
    ...BasicUserInfo
  }
}
    ${BasicUserInfoFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CategoryCountDocument = gql`
    query CategoryCount {
  categoryCount
}
    `;

/**
 * __useCategoryCountQuery__
 *
 * To run a query within a React component, call `useCategoryCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryCountQuery(baseOptions?: Apollo.QueryHookOptions<CategoryCountQuery, CategoryCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryCountQuery, CategoryCountQueryVariables>(CategoryCountDocument, options);
      }
export function useCategoryCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryCountQuery, CategoryCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryCountQuery, CategoryCountQueryVariables>(CategoryCountDocument, options);
        }
export type CategoryCountQueryHookResult = ReturnType<typeof useCategoryCountQuery>;
export type CategoryCountLazyQueryHookResult = ReturnType<typeof useCategoryCountLazyQuery>;
export type CategoryCountQueryResult = Apollo.QueryResult<CategoryCountQuery, CategoryCountQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...BasicUserInfo
  }
}
    ${BasicUserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProductCountsDocument = gql`
    query ProductCounts {
  productCount
  outOfStockCount
  inactiveCount
}
    `;

/**
 * __useProductCountsQuery__
 *
 * To run a query within a React component, call `useProductCountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductCountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductCountsQuery(baseOptions?: Apollo.QueryHookOptions<ProductCountsQuery, ProductCountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductCountsQuery, ProductCountsQueryVariables>(ProductCountsDocument, options);
      }
export function useProductCountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductCountsQuery, ProductCountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductCountsQuery, ProductCountsQueryVariables>(ProductCountsDocument, options);
        }
export type ProductCountsQueryHookResult = ReturnType<typeof useProductCountsQuery>;
export type ProductCountsLazyQueryHookResult = ReturnType<typeof useProductCountsLazyQuery>;
export type ProductCountsQueryResult = Apollo.QueryResult<ProductCountsQuery, ProductCountsQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    ...BasicProductInfo
  }
}
    ${BasicProductInfoFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const UserDocument = gql`
    query User($userId: String!) {
  user(where: {id: $userId}) {
    ...BasicUserInfo
  }
}
    ${BasicUserInfoFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;