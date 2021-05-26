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

export type Address = {
  __typename?: 'Address';
  id: Scalars['String'];
  completeName: Scalars['String'];
  country: Scalars['String'];
  street: Scalars['String'];
  numberAndBlock: Scalars['String'];
  zone: Scalars['String'];
  region: Scalars['String'];
  postal: Scalars['String'];
  contact: Scalars['String'];
  instructions?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AddressListRelationFilter = {
  every?: Maybe<AddressWhereInput>;
  some?: Maybe<AddressWhereInput>;
  none?: Maybe<AddressWhereInput>;
};

export type AddressOrderByInput = {
  id?: Maybe<SortOrder>;
  completeName?: Maybe<SortOrder>;
  country?: Maybe<SortOrder>;
  street?: Maybe<SortOrder>;
  numberAndBlock?: Maybe<SortOrder>;
  zone?: Maybe<SortOrder>;
  region?: Maybe<SortOrder>;
  postal?: Maybe<SortOrder>;
  contact?: Maybe<SortOrder>;
  instructions?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type AddressWhereInput = {
  AND?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  id?: Maybe<StringFilter>;
  completeName?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  street?: Maybe<StringFilter>;
  numberAndBlock?: Maybe<StringFilter>;
  zone?: Maybe<StringFilter>;
  region?: Maybe<StringFilter>;
  postal?: Maybe<StringFilter>;
  contact?: Maybe<StringFilter>;
  instructions?: Maybe<StringNullableFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['String'];
  user: User;
  cartItems: Array<CartItem>;
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  userId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type CartCartItemsArgs = {
  orderBy?: Maybe<Array<CartItemOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CartItemWhereUniqueInput>;
};

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['String'];
  product: Product;
  quantity: Scalars['Int'];
  cart: Cart;
  productId: Scalars['String'];
  cartId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CartItemListRelationFilter = {
  every?: Maybe<CartItemWhereInput>;
  some?: Maybe<CartItemWhereInput>;
  none?: Maybe<CartItemWhereInput>;
};

export type CartItemOrderByInput = {
  id?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  productId?: Maybe<SortOrder>;
  cartId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CartItemWhereInput = {
  AND?: Maybe<Array<CartItemWhereInput>>;
  OR?: Maybe<Array<CartItemWhereInput>>;
  NOT?: Maybe<Array<CartItemWhereInput>>;
  id?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
  quantity?: Maybe<IntFilter>;
  cart?: Maybe<CartWhereInput>;
  productId?: Maybe<StringFilter>;
  cartId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CartItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CartOrderByInput = {
  id?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CartWhereInput = {
  AND?: Maybe<Array<CartWhereInput>>;
  OR?: Maybe<Array<CartWhereInput>>;
  NOT?: Maybe<Array<CartWhereInput>>;
  id?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  cartItems?: Maybe<CartItemListRelationFilter>;
  price?: Maybe<FloatFilter>;
  quantity?: Maybe<IntFilter>;
  userId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CartWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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
  Ocasiao = 'Ocasiao',
  None = 'none'
}

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  editUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  createProduct?: Maybe<Product>;
  editProduct?: Maybe<Product>;
  changeProductStatus?: Maybe<Product>;
  deleteProduct?: Maybe<Scalars['Boolean']>;
  createCategory?: Maybe<Category>;
  editCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Scalars['Boolean']>;
  createPaymentIntent?: Maybe<PaymentIntent>;
  successfulPayment?: Maybe<Scalars['Boolean']>;
  createCartItem?: Maybe<CartItem>;
  changeItemQuantity?: Maybe<CartItem>;
  removeItem?: Maybe<Scalars['Boolean']>;
  toggleFromWishList?: Maybe<WishList>;
  createAddress?: Maybe<Address>;
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


export type MutationEditProductArgs = {
  whereId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  price?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['String']>;
  exposure?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  lifespan?: Maybe<Scalars['String']>;
};


export type MutationChangeProductStatusArgs = {
  whereId: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  whereId: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  mainCategory: MainCategory;
  subCategory: SubCategory;
  name: Scalars['String'];
  image: Scalars['String'];
};


export type MutationEditCategoryArgs = {
  whereId: Scalars['String'];
  mainCategory?: Maybe<MainCategory>;
  subCategory?: Maybe<SubCategory>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};


export type MutationDeleteCategoryArgs = {
  whereId: Scalars['String'];
};


export type MutationCreatePaymentIntentArgs = {
  amount: Scalars['Int'];
};


export type MutationCreateCartItemArgs = {
  cartId: Scalars['String'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
};


export type MutationChangeItemQuantityArgs = {
  plusOrMinusOne: Scalars['Int'];
  cartItemId: Scalars['String'];
  cartId: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationRemoveItemArgs = {
  cartItemId: Scalars['String'];
  cartId: Scalars['String'];
  productId: Scalars['String'];
};


export type MutationToggleFromWishListArgs = {
  wishListId: Scalars['String'];
  productId: Scalars['String'];
  merge?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAddressArgs = {
  completeName: Scalars['String'];
  country: Scalars['String'];
  street: Scalars['String'];
  numberAndBlock: Scalars['String'];
  zone: Scalars['String'];
  region: Scalars['String'];
  postal: Scalars['String'];
  contact: Scalars['String'];
  instructions?: Maybe<Scalars['String']>;
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

export type PaymentIntent = {
  __typename?: 'PaymentIntent';
  id?: Maybe<Scalars['String']>;
  client_secret?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  amount_capturable?: Maybe<Scalars['Int']>;
  amount_received?: Maybe<Scalars['Int']>;
  last_payment_error?: Maybe<LastPaymentError>;
  application?: Maybe<Scalars['String']>;
  application_fee_amount?: Maybe<Scalars['Int']>;
  canceled_at?: Maybe<Scalars['Int']>;
  cancellation_reason?: Maybe<Scalars['String']>;
  capture_method?: Maybe<Scalars['String']>;
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
  cartItems: Array<CartItem>;
  wishLists: Array<WishList>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type ProductCategoriesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
};


export type ProductCartItemsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CartItemWhereUniqueInput>;
};


export type ProductWishListsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<WishListWhereUniqueInput>;
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
  cartItems?: Maybe<CartItemListRelationFilter>;
  wishLists?: Maybe<WishListListRelationFilter>;
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
  cart?: Maybe<Cart>;
  carts: Array<Cart>;
  cartItem?: Maybe<CartItem>;
  cartItems: Array<CartItem>;
  wishList?: Maybe<WishList>;
  wishLists: Array<WishList>;
  address?: Maybe<Address>;
  addresses: Array<Address>;
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


export type QueryCartArgs = {
  where: CartWhereUniqueInput;
};


export type QueryCartsArgs = {
  where?: Maybe<CartWhereInput>;
  orderBy?: Maybe<Array<CartOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CartWhereUniqueInput>;
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemsArgs = {
  where?: Maybe<CartItemWhereInput>;
  orderBy?: Maybe<Array<CartItemOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<CartItemWhereUniqueInput>;
};


export type QueryWishListArgs = {
  where: WishListWhereUniqueInput;
};


export type QueryWishListsArgs = {
  where?: Maybe<WishListWhereInput>;
  orderBy?: Maybe<Array<WishListOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<WishListWhereUniqueInput>;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryAddressesArgs = {
  where?: Maybe<AddressWhereInput>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<AddressWhereUniqueInput>;
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
  TiposFlores = 'tiposFlores',
  TiposPlantas = 'tiposPlantas',
  Arranjos = 'arranjos',
  Cores = 'cores',
  Estacao = 'estacao',
  Local = 'local',
  Caracteristicas = 'caracteristicas',
  Vasos = 'vasos',
  Outros = 'outros',
  Calendario = 'calendario',
  Cerimonias = 'cerimonias',
  MomentosEspeciais = 'momentosEspeciais',
  None = 'none'
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
  cart?: Maybe<Cart>;
  wishlist?: Maybe<WishList>;
  addresses: Array<Address>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type UserAddressesArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<AddressWhereUniqueInput>;
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
  cart?: Maybe<CartWhereInput>;
  wishlist?: Maybe<WishListWhereInput>;
  addresses?: Maybe<AddressListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type WishList = {
  __typename?: 'WishList';
  id: Scalars['String'];
  user: User;
  products: Array<Product>;
  userId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type WishListProductsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<ProductWhereUniqueInput>;
};

export type WishListListRelationFilter = {
  every?: Maybe<WishListWhereInput>;
  some?: Maybe<WishListWhereInput>;
  none?: Maybe<WishListWhereInput>;
};

export type WishListOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type WishListWhereInput = {
  AND?: Maybe<Array<WishListWhereInput>>;
  OR?: Maybe<Array<WishListWhereInput>>;
  NOT?: Maybe<Array<WishListWhereInput>>;
  id?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  products?: Maybe<ProductListRelationFilter>;
  userId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type WishListWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type LastPaymentError = {
  __typename?: 'lastPaymentError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type BasicAddressInfoFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'completeName' | 'country' | 'street' | 'numberAndBlock' | 'zone' | 'region' | 'postal' | 'contact' | 'instructions'>
);

export type BasicCartInfoFragment = (
  { __typename?: 'Cart' }
  & Pick<Cart, 'id' | 'price' | 'quantity' | 'createdAt' | 'updatedAt'>
  & { cartItems: Array<(
    { __typename?: 'CartItem' }
    & BasicCartItemInfoFragment
  )> }
);

export type BasicCartItemInfoFragment = (
  { __typename?: 'CartItem' }
  & Pick<CartItem, 'id' | 'quantity' | 'createdAt' | 'updatedAt'>
  & { product: (
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  ) }
);

export type BasicCategoryInfoFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'name' | 'mainCategory' | 'subCategory' | 'image' | 'createdAt' | 'updatedAt'>
);

export type BasicPaymentIntentFragment = (
  { __typename?: 'PaymentIntent' }
  & Pick<PaymentIntent, 'id' | 'amount' | 'client_secret'>
  & { last_payment_error?: Maybe<(
    { __typename?: 'lastPaymentError' }
    & Pick<LastPaymentError, 'code' | 'message'>
  )> }
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
  & { cart?: Maybe<(
    { __typename?: 'Cart' }
    & BasicCartInfoFragment
  )>, wishlist?: Maybe<(
    { __typename?: 'WishList' }
    & BasicWishListInfoFragment
  )>, addresses: Array<(
    { __typename?: 'Address' }
    & BasicAddressInfoFragment
  )> }
);

export type BasicWishListInfoFragment = (
  { __typename?: 'WishList' }
  & Pick<WishList, 'id' | 'createdAt' | 'updatedAt'>
  & { products: Array<(
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  )> }
);

export type ChangeItemQuantityMutationVariables = Exact<{
  plusOrMinusOne: Scalars['Int'];
  cartItemId: Scalars['String'];
  cartId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type ChangeItemQuantityMutation = (
  { __typename?: 'Mutation' }
  & { changeItemQuantity?: Maybe<(
    { __typename?: 'CartItem' }
    & BasicCartItemInfoFragment
  )> }
);

export type CreateAddressMutationVariables = Exact<{
  completeName: Scalars['String'];
  country: Scalars['String'];
  street: Scalars['String'];
  numberAndBlock: Scalars['String'];
  zone: Scalars['String'];
  region: Scalars['String'];
  postal: Scalars['String'];
  contact: Scalars['String'];
  instructions?: Maybe<Scalars['String']>;
}>;


export type CreateAddressMutation = (
  { __typename?: 'Mutation' }
  & { createAddress?: Maybe<(
    { __typename?: 'Address' }
    & BasicAddressInfoFragment
  )> }
);

export type CreateCartItemMutationVariables = Exact<{
  cartId: Scalars['String'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
}>;


export type CreateCartItemMutation = (
  { __typename?: 'Mutation' }
  & { createCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & BasicCartItemInfoFragment
  )> }
);

export type CreatePaymentIntentMutationVariables = Exact<{
  amount: Scalars['Int'];
}>;


export type CreatePaymentIntentMutation = (
  { __typename?: 'Mutation' }
  & { createPaymentIntent?: Maybe<(
    { __typename?: 'PaymentIntent' }
    & BasicPaymentIntentFragment
  )> }
);

export type DeleteCategoryMutationVariables = Exact<{
  whereId: Scalars['String'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteCategory'>
);

export type DeleteProductMutationVariables = Exact<{
  whereId: Scalars['String'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProduct'>
);

export type EditCategoryMutationVariables = Exact<{
  whereId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  mainCategory?: Maybe<MainCategory>;
  subCategory?: Maybe<SubCategory>;
  image?: Maybe<Scalars['String']>;
}>;


export type EditCategoryMutation = (
  { __typename?: 'Mutation' }
  & { editCategory?: Maybe<(
    { __typename?: 'Category' }
    & BasicCategoryInfoFragment
  )> }
);

export type EditProductMutationVariables = Exact<{
  whereId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  stock?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['String']>;
  exposure?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  lifespan?: Maybe<Scalars['String']>;
}>;


export type EditProductMutation = (
  { __typename?: 'Mutation' }
  & { editProduct?: Maybe<(
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  )> }
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

export type ProductStatusMutationVariables = Exact<{
  whereId: Scalars['String'];
}>;


export type ProductStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeProductStatus?: Maybe<(
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

export type RemoveItemMutationVariables = Exact<{
  cartItemId: Scalars['String'];
  cartId: Scalars['String'];
  productId: Scalars['String'];
}>;


export type RemoveItemMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeItem'>
);

export type SuccessfulPaymentMutationVariables = Exact<{ [key: string]: never; }>;


export type SuccessfulPaymentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'successfulPayment'>
);

export type ToggleFromWishListMutationVariables = Exact<{
  wishListId: Scalars['String'];
  productId: Scalars['String'];
  merge?: Maybe<Scalars['Boolean']>;
}>;


export type ToggleFromWishListMutation = (
  { __typename?: 'Mutation' }
  & { toggleFromWishList?: Maybe<(
    { __typename?: 'WishList' }
    & BasicWishListInfoFragment
  )> }
);

export type CategoriesQueryVariables = Exact<{
  orderBy?: Maybe<Array<CategoryOrderByInput> | CategoryOrderByInput>;
  search?: Maybe<Scalars['String']>;
  searchMain?: Maybe<MainCategory>;
  searchSub?: Maybe<SubCategory>;
}>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & BasicCategoryInfoFragment
  )> }
);

export type CategoryCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'categoryCount'>
);

export type ExploreProductsQueryVariables = Exact<{
  orderBy?: Maybe<Array<ProductOrderByInput> | ProductOrderByInput>;
  search?: Maybe<Scalars['String']>;
  searchMain?: Maybe<MainCategory>;
  searchSub?: Maybe<SubCategory>;
  searchCatName1?: Maybe<Scalars['String']>;
  searchCatName2?: Maybe<Scalars['String']>;
  searchCatName3?: Maybe<Scalars['String']>;
  searchCatName4?: Maybe<Scalars['String']>;
  searchCatName5?: Maybe<Scalars['String']>;
  searchCatName6?: Maybe<Scalars['String']>;
  searchCatName7?: Maybe<Scalars['String']>;
  searchCatName8?: Maybe<Scalars['String']>;
  searchCatName9?: Maybe<Scalars['String']>;
  searchCatName10?: Maybe<Scalars['String']>;
}>;


export type ExploreProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  )> }
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

export type ProductsQueryVariables = Exact<{
  orderBy?: Maybe<Array<ProductOrderByInput> | ProductOrderByInput>;
  search?: Maybe<Scalars['String']>;
  searchMain?: Maybe<MainCategory>;
  searchSub?: Maybe<SubCategory>;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & BasicProductInfoFragment
  )> }
);

export type SingleProductQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SingleProductQuery = (
  { __typename?: 'Query' }
  & { product?: Maybe<(
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

export const BasicPaymentIntentFragmentDoc = gql`
    fragment BasicPaymentIntent on PaymentIntent {
  id
  amount
  client_secret
  last_payment_error {
    code
    message
  }
}
    `;
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
export const BasicCartItemInfoFragmentDoc = gql`
    fragment BasicCartItemInfo on CartItem {
  id
  quantity
  product {
    ...BasicProductInfo
  }
  createdAt
  updatedAt
}
    ${BasicProductInfoFragmentDoc}`;
export const BasicCartInfoFragmentDoc = gql`
    fragment BasicCartInfo on Cart {
  id
  price
  quantity
  cartItems(orderBy: {createdAt: desc}) {
    ...BasicCartItemInfo
  }
  createdAt
  updatedAt
}
    ${BasicCartItemInfoFragmentDoc}`;
export const BasicWishListInfoFragmentDoc = gql`
    fragment BasicWishListInfo on WishList {
  id
  products {
    ...BasicProductInfo
  }
  createdAt
  updatedAt
}
    ${BasicProductInfoFragmentDoc}`;
export const BasicAddressInfoFragmentDoc = gql`
    fragment BasicAddressInfo on Address {
  id
  completeName
  country
  street
  numberAndBlock
  zone
  region
  postal
  contact
  instructions
}
    `;
export const BasicUserInfoFragmentDoc = gql`
    fragment BasicUserInfo on User {
  id
  googleId
  facebookId
  email
  name
  role
  photo
  cart {
    ...BasicCartInfo
  }
  wishlist {
    ...BasicWishListInfo
  }
  addresses {
    ...BasicAddressInfo
  }
  createdAt
  updatedAt
}
    ${BasicCartInfoFragmentDoc}
${BasicWishListInfoFragmentDoc}
${BasicAddressInfoFragmentDoc}`;
export const ChangeItemQuantityDocument = gql`
    mutation ChangeItemQuantity($plusOrMinusOne: Int!, $cartItemId: String!, $cartId: String!, $productId: String!) {
  changeItemQuantity(
    plusOrMinusOne: $plusOrMinusOne
    cartItemId: $cartItemId
    cartId: $cartId
    productId: $productId
  ) {
    ...BasicCartItemInfo
  }
}
    ${BasicCartItemInfoFragmentDoc}`;
export type ChangeItemQuantityMutationFn = Apollo.MutationFunction<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>;

/**
 * __useChangeItemQuantityMutation__
 *
 * To run a mutation, you first call `useChangeItemQuantityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeItemQuantityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeItemQuantityMutation, { data, loading, error }] = useChangeItemQuantityMutation({
 *   variables: {
 *      plusOrMinusOne: // value for 'plusOrMinusOne'
 *      cartItemId: // value for 'cartItemId'
 *      cartId: // value for 'cartId'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useChangeItemQuantityMutation(baseOptions?: Apollo.MutationHookOptions<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>(ChangeItemQuantityDocument, options);
      }
export type ChangeItemQuantityMutationHookResult = ReturnType<typeof useChangeItemQuantityMutation>;
export type ChangeItemQuantityMutationResult = Apollo.MutationResult<ChangeItemQuantityMutation>;
export type ChangeItemQuantityMutationOptions = Apollo.BaseMutationOptions<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>;
export const CreateAddressDocument = gql`
    mutation CreateAddress($completeName: String!, $country: String!, $street: String!, $numberAndBlock: String!, $zone: String!, $region: String!, $postal: String!, $contact: String!, $instructions: String) {
  createAddress(
    completeName: $completeName
    country: $country
    street: $street
    numberAndBlock: $numberAndBlock
    zone: $zone
    region: $region
    postal: $postal
    contact: $contact
    instructions: $instructions
  ) {
    ...BasicAddressInfo
  }
}
    ${BasicAddressInfoFragmentDoc}`;
export type CreateAddressMutationFn = Apollo.MutationFunction<CreateAddressMutation, CreateAddressMutationVariables>;

/**
 * __useCreateAddressMutation__
 *
 * To run a mutation, you first call `useCreateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAddressMutation, { data, loading, error }] = useCreateAddressMutation({
 *   variables: {
 *      completeName: // value for 'completeName'
 *      country: // value for 'country'
 *      street: // value for 'street'
 *      numberAndBlock: // value for 'numberAndBlock'
 *      zone: // value for 'zone'
 *      region: // value for 'region'
 *      postal: // value for 'postal'
 *      contact: // value for 'contact'
 *      instructions: // value for 'instructions'
 *   },
 * });
 */
export function useCreateAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateAddressMutation, CreateAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, options);
      }
export type CreateAddressMutationHookResult = ReturnType<typeof useCreateAddressMutation>;
export type CreateAddressMutationResult = Apollo.MutationResult<CreateAddressMutation>;
export type CreateAddressMutationOptions = Apollo.BaseMutationOptions<CreateAddressMutation, CreateAddressMutationVariables>;
export const CreateCartItemDocument = gql`
    mutation CreateCartItem($cartId: String!, $productId: String!, $quantity: Int!) {
  createCartItem(cartId: $cartId, productId: $productId, quantity: $quantity) {
    ...BasicCartItemInfo
  }
}
    ${BasicCartItemInfoFragmentDoc}`;
export type CreateCartItemMutationFn = Apollo.MutationFunction<CreateCartItemMutation, CreateCartItemMutationVariables>;

/**
 * __useCreateCartItemMutation__
 *
 * To run a mutation, you first call `useCreateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartItemMutation, { data, loading, error }] = useCreateCartItemMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      productId: // value for 'productId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useCreateCartItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartItemMutation, CreateCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartItemMutation, CreateCartItemMutationVariables>(CreateCartItemDocument, options);
      }
export type CreateCartItemMutationHookResult = ReturnType<typeof useCreateCartItemMutation>;
export type CreateCartItemMutationResult = Apollo.MutationResult<CreateCartItemMutation>;
export type CreateCartItemMutationOptions = Apollo.BaseMutationOptions<CreateCartItemMutation, CreateCartItemMutationVariables>;
export const CreatePaymentIntentDocument = gql`
    mutation CreatePaymentIntent($amount: Int!) {
  createPaymentIntent(amount: $amount) {
    ...BasicPaymentIntent
  }
}
    ${BasicPaymentIntentFragmentDoc}`;
export type CreatePaymentIntentMutationFn = Apollo.MutationFunction<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;

/**
 * __useCreatePaymentIntentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentIntentMutation, { data, loading, error }] = useCreatePaymentIntentMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useCreatePaymentIntentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(CreatePaymentIntentDocument, options);
      }
export type CreatePaymentIntentMutationHookResult = ReturnType<typeof useCreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationResult = Apollo.MutationResult<CreatePaymentIntentMutation>;
export type CreatePaymentIntentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($whereId: String!) {
  deleteCategory(whereId: $whereId)
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      whereId: // value for 'whereId'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($whereId: String!) {
  deleteProduct(whereId: $whereId)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      whereId: // value for 'whereId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const EditCategoryDocument = gql`
    mutation EditCategory($whereId: String!, $name: String, $mainCategory: MainCategory, $subCategory: SubCategory, $image: String) {
  editCategory(
    whereId: $whereId
    name: $name
    mainCategory: $mainCategory
    subCategory: $subCategory
    image: $image
  ) {
    ...BasicCategoryInfo
  }
}
    ${BasicCategoryInfoFragmentDoc}`;
export type EditCategoryMutationFn = Apollo.MutationFunction<EditCategoryMutation, EditCategoryMutationVariables>;

/**
 * __useEditCategoryMutation__
 *
 * To run a mutation, you first call `useEditCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCategoryMutation, { data, loading, error }] = useEditCategoryMutation({
 *   variables: {
 *      whereId: // value for 'whereId'
 *      name: // value for 'name'
 *      mainCategory: // value for 'mainCategory'
 *      subCategory: // value for 'subCategory'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useEditCategoryMutation(baseOptions?: Apollo.MutationHookOptions<EditCategoryMutation, EditCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EditCategoryDocument, options);
      }
export type EditCategoryMutationHookResult = ReturnType<typeof useEditCategoryMutation>;
export type EditCategoryMutationResult = Apollo.MutationResult<EditCategoryMutation>;
export type EditCategoryMutationOptions = Apollo.BaseMutationOptions<EditCategoryMutation, EditCategoryMutationVariables>;
export const EditProductDocument = gql`
    mutation EditProduct($whereId: String!, $name: String, $description: String, $images: [String!], $price: Float, $stock: Int, $categories: [String!], $height: String, $water: String, $exposure: String, $temperature: String, $lifespan: String) {
  editProduct(
    whereId: $whereId
    name: $name
    description: $description
    images: $images
    price: $price
    stock: $stock
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
export type EditProductMutationFn = Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>;

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      whereId: // value for 'whereId'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      images: // value for 'images'
 *      price: // value for 'price'
 *      stock: // value for 'stock'
 *      categories: // value for 'categories'
 *      height: // value for 'height'
 *      water: // value for 'water'
 *      exposure: // value for 'exposure'
 *      temperature: // value for 'temperature'
 *      lifespan: // value for 'lifespan'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, options);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;
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
export const ProductStatusDocument = gql`
    mutation ProductStatus($whereId: String!) {
  changeProductStatus(whereId: $whereId) {
    ...BasicProductInfo
  }
}
    ${BasicProductInfoFragmentDoc}`;
export type ProductStatusMutationFn = Apollo.MutationFunction<ProductStatusMutation, ProductStatusMutationVariables>;

/**
 * __useProductStatusMutation__
 *
 * To run a mutation, you first call `useProductStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productStatusMutation, { data, loading, error }] = useProductStatusMutation({
 *   variables: {
 *      whereId: // value for 'whereId'
 *   },
 * });
 */
export function useProductStatusMutation(baseOptions?: Apollo.MutationHookOptions<ProductStatusMutation, ProductStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProductStatusMutation, ProductStatusMutationVariables>(ProductStatusDocument, options);
      }
export type ProductStatusMutationHookResult = ReturnType<typeof useProductStatusMutation>;
export type ProductStatusMutationResult = Apollo.MutationResult<ProductStatusMutation>;
export type ProductStatusMutationOptions = Apollo.BaseMutationOptions<ProductStatusMutation, ProductStatusMutationVariables>;
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
export const RemoveItemDocument = gql`
    mutation RemoveItem($cartItemId: String!, $cartId: String!, $productId: String!) {
  removeItem(cartItemId: $cartItemId, cartId: $cartId, productId: $productId)
}
    `;
export type RemoveItemMutationFn = Apollo.MutationFunction<RemoveItemMutation, RemoveItemMutationVariables>;

/**
 * __useRemoveItemMutation__
 *
 * To run a mutation, you first call `useRemoveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemMutation, { data, loading, error }] = useRemoveItemMutation({
 *   variables: {
 *      cartItemId: // value for 'cartItemId'
 *      cartId: // value for 'cartId'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useRemoveItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemMutation, RemoveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveItemMutation, RemoveItemMutationVariables>(RemoveItemDocument, options);
      }
export type RemoveItemMutationHookResult = ReturnType<typeof useRemoveItemMutation>;
export type RemoveItemMutationResult = Apollo.MutationResult<RemoveItemMutation>;
export type RemoveItemMutationOptions = Apollo.BaseMutationOptions<RemoveItemMutation, RemoveItemMutationVariables>;
export const SuccessfulPaymentDocument = gql`
    mutation SuccessfulPayment {
  successfulPayment
}
    `;
export type SuccessfulPaymentMutationFn = Apollo.MutationFunction<SuccessfulPaymentMutation, SuccessfulPaymentMutationVariables>;

/**
 * __useSuccessfulPaymentMutation__
 *
 * To run a mutation, you first call `useSuccessfulPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuccessfulPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [successfulPaymentMutation, { data, loading, error }] = useSuccessfulPaymentMutation({
 *   variables: {
 *   },
 * });
 */
export function useSuccessfulPaymentMutation(baseOptions?: Apollo.MutationHookOptions<SuccessfulPaymentMutation, SuccessfulPaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SuccessfulPaymentMutation, SuccessfulPaymentMutationVariables>(SuccessfulPaymentDocument, options);
      }
export type SuccessfulPaymentMutationHookResult = ReturnType<typeof useSuccessfulPaymentMutation>;
export type SuccessfulPaymentMutationResult = Apollo.MutationResult<SuccessfulPaymentMutation>;
export type SuccessfulPaymentMutationOptions = Apollo.BaseMutationOptions<SuccessfulPaymentMutation, SuccessfulPaymentMutationVariables>;
export const ToggleFromWishListDocument = gql`
    mutation ToggleFromWishList($wishListId: String!, $productId: String!, $merge: Boolean) {
  toggleFromWishList(
    wishListId: $wishListId
    productId: $productId
    merge: $merge
  ) {
    ...BasicWishListInfo
  }
}
    ${BasicWishListInfoFragmentDoc}`;
export type ToggleFromWishListMutationFn = Apollo.MutationFunction<ToggleFromWishListMutation, ToggleFromWishListMutationVariables>;

/**
 * __useToggleFromWishListMutation__
 *
 * To run a mutation, you first call `useToggleFromWishListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFromWishListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFromWishListMutation, { data, loading, error }] = useToggleFromWishListMutation({
 *   variables: {
 *      wishListId: // value for 'wishListId'
 *      productId: // value for 'productId'
 *      merge: // value for 'merge'
 *   },
 * });
 */
export function useToggleFromWishListMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFromWishListMutation, ToggleFromWishListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFromWishListMutation, ToggleFromWishListMutationVariables>(ToggleFromWishListDocument, options);
      }
export type ToggleFromWishListMutationHookResult = ReturnType<typeof useToggleFromWishListMutation>;
export type ToggleFromWishListMutationResult = Apollo.MutationResult<ToggleFromWishListMutation>;
export type ToggleFromWishListMutationOptions = Apollo.BaseMutationOptions<ToggleFromWishListMutation, ToggleFromWishListMutationVariables>;
export const CategoriesDocument = gql`
    query Categories($orderBy: [CategoryOrderByInput!], $search: String, $searchMain: MainCategory, $searchSub: SubCategory) {
  categories(
    orderBy: $orderBy
    where: {OR: [{name: {mode: insensitive, contains: $search}}, {mainCategory: {equals: $searchMain}}, {subCategory: {equals: $searchSub}}]}
  ) {
    ...BasicCategoryInfo
  }
}
    ${BasicCategoryInfoFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      search: // value for 'search'
 *      searchMain: // value for 'searchMain'
 *      searchSub: // value for 'searchSub'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
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
export const ExploreProductsDocument = gql`
    query ExploreProducts($orderBy: [ProductOrderByInput!], $search: String = "", $searchMain: MainCategory = none, $searchSub: SubCategory = none, $searchCatName1: String = "none", $searchCatName2: String = "none", $searchCatName3: String = "none", $searchCatName4: String = "none", $searchCatName5: String = "none", $searchCatName6: String = "none", $searchCatName7: String = "none", $searchCatName8: String = "none", $searchCatName9: String = "none", $searchCatName10: String = "none") {
  products(
    orderBy: $orderBy
    where: {OR: [{name: {mode: insensitive, contains: $search}}, {description: {mode: insensitive, contains: $search}}, {categories: {some: {name: {mode: insensitive, contains: $search}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName1}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName2}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName3}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName4}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName5}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName6}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName7}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName8}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName9}}}}, {categories: {some: {name: {mode: insensitive, contains: $searchCatName10}}}}, {categories: {some: {mainCategory: {equals: $searchMain}}}}, {categories: {some: {subCategory: {equals: $searchSub}}}}]}
  ) {
    ...BasicProductInfo
  }
}
    ${BasicProductInfoFragmentDoc}`;

/**
 * __useExploreProductsQuery__
 *
 * To run a query within a React component, call `useExploreProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExploreProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExploreProductsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      search: // value for 'search'
 *      searchMain: // value for 'searchMain'
 *      searchSub: // value for 'searchSub'
 *      searchCatName1: // value for 'searchCatName1'
 *      searchCatName2: // value for 'searchCatName2'
 *      searchCatName3: // value for 'searchCatName3'
 *      searchCatName4: // value for 'searchCatName4'
 *      searchCatName5: // value for 'searchCatName5'
 *      searchCatName6: // value for 'searchCatName6'
 *      searchCatName7: // value for 'searchCatName7'
 *      searchCatName8: // value for 'searchCatName8'
 *      searchCatName9: // value for 'searchCatName9'
 *      searchCatName10: // value for 'searchCatName10'
 *   },
 * });
 */
export function useExploreProductsQuery(baseOptions?: Apollo.QueryHookOptions<ExploreProductsQuery, ExploreProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExploreProductsQuery, ExploreProductsQueryVariables>(ExploreProductsDocument, options);
      }
export function useExploreProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExploreProductsQuery, ExploreProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExploreProductsQuery, ExploreProductsQueryVariables>(ExploreProductsDocument, options);
        }
export type ExploreProductsQueryHookResult = ReturnType<typeof useExploreProductsQuery>;
export type ExploreProductsLazyQueryHookResult = ReturnType<typeof useExploreProductsLazyQuery>;
export type ExploreProductsQueryResult = Apollo.QueryResult<ExploreProductsQuery, ExploreProductsQueryVariables>;
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
    query Products($orderBy: [ProductOrderByInput!], $search: String, $searchMain: MainCategory, $searchSub: SubCategory) {
  products(
    orderBy: $orderBy
    where: {OR: [{name: {mode: insensitive, contains: $search}}, {description: {mode: insensitive, contains: $search}}, {categories: {some: {name: {mode: insensitive, contains: $search}}}}, {categories: {some: {mainCategory: {equals: $searchMain}}}}, {categories: {some: {subCategory: {equals: $searchSub}}}}]}
  ) {
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
 *      orderBy: // value for 'orderBy'
 *      search: // value for 'search'
 *      searchMain: // value for 'searchMain'
 *      searchSub: // value for 'searchSub'
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
export const SingleProductDocument = gql`
    query SingleProduct($name: String!) {
  product(where: {name: $name}) {
    ...BasicProductInfo
  }
}
    ${BasicProductInfoFragmentDoc}`;

/**
 * __useSingleProductQuery__
 *
 * To run a query within a React component, call `useSingleProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProductQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSingleProductQuery(baseOptions: Apollo.QueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
      }
export function useSingleProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
        }
export type SingleProductQueryHookResult = ReturnType<typeof useSingleProductQuery>;
export type SingleProductLazyQueryHookResult = ReturnType<typeof useSingleProductLazyQuery>;
export type SingleProductQueryResult = Apollo.QueryResult<SingleProductQuery, SingleProductQueryVariables>;
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