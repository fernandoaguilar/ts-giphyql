export const typeDefs = /* GraphQL */ `type AggregateGif {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Gif {
  id: ID!
  giphyId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
  rating: String!
  trendingDatetime: String
  title: String
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type GifConnection {
  pageInfo: PageInfo!
  edges: [GifEdge]!
  aggregate: AggregateGif!
}

input GifCreateInput {
  giphyId: ID!
  url: String!
  rating: String!
  trendingDatetime: String
  title: String
  likedBy: UserCreateManyWithoutGifsInput
}

input GifCreateManyWithoutLikedByInput {
  create: [GifCreateWithoutLikedByInput!]
  connect: [GifWhereUniqueInput!]
}

input GifCreateWithoutLikedByInput {
  giphyId: ID!
  url: String!
  rating: String!
  trendingDatetime: String
  title: String
}

type GifEdge {
  node: Gif!
  cursor: String!
}

enum GifOrderByInput {
  id_ASC
  id_DESC
  giphyId_ASC
  giphyId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
  rating_ASC
  rating_DESC
  trendingDatetime_ASC
  trendingDatetime_DESC
  title_ASC
  title_DESC
}

type GifPreviousValues {
  id: ID!
  giphyId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
  rating: String!
  trendingDatetime: String
  title: String
}

type GifSubscriptionPayload {
  mutation: MutationType!
  node: Gif
  updatedFields: [String!]
  previousValues: GifPreviousValues
}

input GifSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GifWhereInput
  AND: [GifSubscriptionWhereInput!]
  OR: [GifSubscriptionWhereInput!]
  NOT: [GifSubscriptionWhereInput!]
}

input GifUpdateInput {
  giphyId: ID
  url: String
  rating: String
  trendingDatetime: String
  title: String
  likedBy: UserUpdateManyWithoutGifsInput
}

input GifUpdateManyMutationInput {
  giphyId: ID
  url: String
  rating: String
  trendingDatetime: String
  title: String
}

input GifUpdateManyWithoutLikedByInput {
  create: [GifCreateWithoutLikedByInput!]
  delete: [GifWhereUniqueInput!]
  connect: [GifWhereUniqueInput!]
  disconnect: [GifWhereUniqueInput!]
  update: [GifUpdateWithWhereUniqueWithoutLikedByInput!]
  upsert: [GifUpsertWithWhereUniqueWithoutLikedByInput!]
}

input GifUpdateWithoutLikedByDataInput {
  giphyId: ID
  url: String
  rating: String
  trendingDatetime: String
  title: String
}

input GifUpdateWithWhereUniqueWithoutLikedByInput {
  where: GifWhereUniqueInput!
  data: GifUpdateWithoutLikedByDataInput!
}

input GifUpsertWithWhereUniqueWithoutLikedByInput {
  where: GifWhereUniqueInput!
  update: GifUpdateWithoutLikedByDataInput!
  create: GifCreateWithoutLikedByInput!
}

input GifWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  giphyId: ID
  giphyId_not: ID
  giphyId_in: [ID!]
  giphyId_not_in: [ID!]
  giphyId_lt: ID
  giphyId_lte: ID
  giphyId_gt: ID
  giphyId_gte: ID
  giphyId_contains: ID
  giphyId_not_contains: ID
  giphyId_starts_with: ID
  giphyId_not_starts_with: ID
  giphyId_ends_with: ID
  giphyId_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  rating: String
  rating_not: String
  rating_in: [String!]
  rating_not_in: [String!]
  rating_lt: String
  rating_lte: String
  rating_gt: String
  rating_gte: String
  rating_contains: String
  rating_not_contains: String
  rating_starts_with: String
  rating_not_starts_with: String
  rating_ends_with: String
  rating_not_ends_with: String
  trendingDatetime: String
  trendingDatetime_not: String
  trendingDatetime_in: [String!]
  trendingDatetime_not_in: [String!]
  trendingDatetime_lt: String
  trendingDatetime_lte: String
  trendingDatetime_gt: String
  trendingDatetime_gte: String
  trendingDatetime_contains: String
  trendingDatetime_not_contains: String
  trendingDatetime_starts_with: String
  trendingDatetime_not_starts_with: String
  trendingDatetime_ends_with: String
  trendingDatetime_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
  AND: [GifWhereInput!]
  OR: [GifWhereInput!]
  NOT: [GifWhereInput!]
}

input GifWhereUniqueInput {
  id: ID
  giphyId: ID
}

scalar Long

type Mutation {
  createGif(data: GifCreateInput!): Gif!
  updateGif(data: GifUpdateInput!, where: GifWhereUniqueInput!): Gif
  updateManyGifs(data: GifUpdateManyMutationInput!, where: GifWhereInput): BatchPayload!
  upsertGif(where: GifWhereUniqueInput!, create: GifCreateInput!, update: GifUpdateInput!): Gif!
  deleteGif(where: GifWhereUniqueInput!): Gif
  deleteManyGifs(where: GifWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  gif(where: GifWhereUniqueInput!): Gif
  gifs(where: GifWhereInput, orderBy: GifOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gif]!
  gifsConnection(where: GifWhereInput, orderBy: GifOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GifConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  gif(where: GifSubscriptionWhereInput): GifSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  gifs(where: GifWhereInput, orderBy: GifOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gif!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  gifs: GifCreateManyWithoutLikedByInput
}

input UserCreateManyWithoutGifsInput {
  create: [UserCreateWithoutGifsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateWithoutGifsInput {
  email: String!
  password: String!
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  gifs: GifUpdateManyWithoutLikedByInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyWithoutGifsInput {
  create: [UserCreateWithoutGifsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGifsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGifsInput!]
}

input UserUpdateWithoutGifsDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateWithWhereUniqueWithoutGifsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGifsDataInput!
}

input UserUpsertWithWhereUniqueWithoutGifsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGifsDataInput!
  create: UserCreateWithoutGifsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gifs_every: GifWhereInput
  gifs_some: GifWhereInput
  gifs_none: GifWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`