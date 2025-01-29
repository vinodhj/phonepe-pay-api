import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ChecksumResponse = {
  __typename?: 'ChecksumResponse';
  checksum: Scalars['String']['output'];
};

export type InstrumentResponse = {
  __typename?: 'InstrumentResponse';
  redirectInfo: RedirectInfo;
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  generateChecksum: ChecksumResponse;
  initiatePayment: PaymentResponse;
};

export type MutationGenerateChecksumArgs = {
  apiEndpoint: Scalars['String']['input'];
  payload: Scalars['String']['input'];
};

export type MutationInitiatePaymentArgs = {
  input: PaymentRequestInput;
};

export type PaymentData = {
  __typename?: 'PaymentData';
  instrumentResponse: InstrumentResponse;
  merchantId: Scalars['String']['output'];
  merchantTransactionId: Scalars['String']['output'];
};

export type PaymentInstrumentInput = {
  type: Scalars['String']['input'];
};

export type PaymentRequestInput = {
  amount: Scalars['Int']['input'];
  callbackUrl: Scalars['String']['input'];
  merchantId: Scalars['String']['input'];
  merchantTransactionId: Scalars['String']['input'];
  merchantUserId: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  paymentInstrument: PaymentInstrumentInput;
  redirectMode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type PaymentResponse = {
  __typename?: 'PaymentResponse';
  code: Scalars['String']['output'];
  data: PaymentData;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  getTransactionStatus: PaymentResponse;
};

export type QueryGetTransactionStatusArgs = {
  merchantTransactionId: Scalars['String']['input'];
};

export type RedirectInfo = {
  __typename?: 'RedirectInfo';
  method: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ChecksumResponse: ResolverTypeWrapper<ChecksumResponse>;
  InstrumentResponse: ResolverTypeWrapper<InstrumentResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PaymentData: ResolverTypeWrapper<PaymentData>;
  PaymentInstrumentInput: PaymentInstrumentInput;
  PaymentRequestInput: PaymentRequestInput;
  PaymentResponse: ResolverTypeWrapper<PaymentResponse>;
  Query: ResolverTypeWrapper<{}>;
  RedirectInfo: ResolverTypeWrapper<RedirectInfo>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ChecksumResponse: ChecksumResponse;
  InstrumentResponse: InstrumentResponse;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PaymentData: PaymentData;
  PaymentInstrumentInput: PaymentInstrumentInput;
  PaymentRequestInput: PaymentRequestInput;
  PaymentResponse: PaymentResponse;
  Query: {};
  RedirectInfo: RedirectInfo;
  String: Scalars['String']['output'];
};

export type ChecksumResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChecksumResponse'] = ResolversParentTypes['ChecksumResponse']
> = {
  checksum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InstrumentResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InstrumentResponse'] = ResolversParentTypes['InstrumentResponse']
> = {
  redirectInfo?: Resolver<ResolversTypes['RedirectInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  generateChecksum?: Resolver<
    ResolversTypes['ChecksumResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationGenerateChecksumArgs, 'apiEndpoint' | 'payload'>
  >;
  initiatePayment?: Resolver<
    ResolversTypes['PaymentResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationInitiatePaymentArgs, 'input'>
  >;
};

export type PaymentDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentData'] = ResolversParentTypes['PaymentData']
> = {
  instrumentResponse?: Resolver<ResolversTypes['InstrumentResponse'], ParentType, ContextType>;
  merchantId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  merchantTransactionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaymentResponse'] = ResolversParentTypes['PaymentResponse']
> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['PaymentData'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getTransactionStatus?: Resolver<
    ResolversTypes['PaymentResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryGetTransactionStatusArgs, 'merchantTransactionId'>
  >;
};

export type RedirectInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RedirectInfo'] = ResolversParentTypes['RedirectInfo']
> = {
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ChecksumResponse?: ChecksumResponseResolvers<ContextType>;
  InstrumentResponse?: InstrumentResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaymentData?: PaymentDataResolvers<ContextType>;
  PaymentResponse?: PaymentResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RedirectInfo?: RedirectInfoResolvers<ContextType>;
};
