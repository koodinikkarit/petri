export const typeDefs = ["type Author {\n\tid: ID\n\tname: String\n}\n","type Copyright {\n\tid: ID\n\tname: String\n}\n","type EwDatabase {\n\tid: ID\n\tname: String\n\tmatiasClientId: ID\n\tmatiasClient: MatiasClient\n\tfilesystemPath: String\n\tsongDatabaseId: ID\n\tsongDatabase: SongDatabase\n\tremoveSongsFromEwDatabase: Int\n\tremoveSongsFromSongDatabase: Int\n\tvariationVersionConflictAction: Int\n}\n\ntype EwDatabasesConnection {\n\ttotalCount: Int\n\tewDatabases: [EwDatabase]\n}\n\ntype UpdateEwDatabaseResponse {\n\tsuccess: Boolean\n\tewDatabase: EwDatabase\n}\n","type Language {\n\tid: ID\n\tname: String\n}\n","type MatiasClient {\n\tid: ID\n\tname: String\n\thostName: String\n\tkey: String\n\taccepted: Boolean\n\tewDatabases: [EwDatabase]\n}\n\ntype MatiasClientsConnection {\n\ttotalCount: Int\n\tmatiasClients: [MatiasClient]\n}\n\ntype UpdateMatiasClientResponse {\n\tsuccess: Boolean\n\tmatiasClient: MatiasClient\n}\n","type Mutation {\n\tcreateVariation(name: String, text: String): Variation\n\tupdateVariation(params: UpdateVariationInputType): UpdateVariationResponse\n\tremoveVariation(variationId: ID): Boolean\n\tcreateSongDatabase(name: String): SongDatabase\n\tupdateSongDatabase(\n\t\tsongDatabaseId: ID\n\t\tname: String\n\t): UpdateSongDatabaseResponse\n\tremoveSongDatabase(songDatabaseId: ID): Boolean\n\tupdateMatiasClient(\n\t\tmatiasClientId: ID\n\t\tname: String\n\t\taccepted: Boolean\n\t): UpdateMatiasClientResponse\n\tcreateEwDatabase(\n\t\tname: String\n\t\tfilesystemPath: String\n\t\tsongDatabaseId: ID\n\t\tmatiasClientId: ID\n\t): EwDatabase\n\tupdateEwDatabase(\n\t\tewDatabaseId: ID\n\t\tname: String\n\t\taccepted: Boolean\n\t): UpdateEwDatabaseResponse\n}\n","type Person {\n\tid: ID\n\tname: String\n}\n","type Query {\n\tvariation(variationId: ID): Variation\n\tsearchVariations(\n\t\tsearchWord: String\n\t\tsongDatabaseId: ID\n\t\ttagId: ID\n\t\tlanguageId: ID\n\t\toffset: Int\n\t\tlimit: Int\n\t): VariationsConnection\n\tnewVariationVersion: VariationVersion\n\tsongDatabase: SongDatabase\n\tsearchSongDatabases(\n\t\toffset: Int\n\t\tlimit: Int\n\t\tsearchWord: String\n\t\tvariationId: ID\n\t): SongDatabasesConnection\n\tmatiasClient(matiasClientId: ID): MatiasClient\n\tsearchMatiasClients: MatiasClientsConnection\n\tewDatabase(ewDatabaseId: ID): EwDatabase\n\tsearchEwDatabases(\n\t\toffset: Int\n\t\tlimit: Int\n\t\tsongDatabaseId: ID\n\t\tmatiasClientId: ID\n\t): EwDatabasesConnection\n}\n","type Schedule {\n\tid: ID\n\tname: String\n\tvariations: [Variation]\n}\n","schema {\n\tquery: Query\n\tmutation: Mutation\n}\n","type Song {\n\tid: ID\n}\n","type SongDatabase {\n\tid: ID\n\tname: String\n\tvariations: [Variation]\n\ttags: [Tag]\n}\n\ntype SongDatabasesConnection {\n\ttotalCount: Int\n\tsongDatabases: [SongDatabase]\n}\n\ntype UpdateSongDatabaseResponse {\n\tsuccess: Boolean\n\tsongDatabase: SongDatabase\n}\n","type Tag {\n\tid: ID\n\tname: String\n\tvariations: [Variation]\n}\n","type Variation {\n\tid: ID\n\tsongId: ID\n\tsong: Song\n\tlanguageId: ID\n\tlanguage: Language\n\tauthorId: ID\n\tauthor: Author\n\tcopyrightId: ID\n\tcopyright: Copyright\n\tname: String\n\tversion: Int\n\ttext: String\n\tsongDatabasesConnection(offset: Int, limit: Int): SongDatabasesConnection\n}\n\ninput UpdateVariationInputType {\n\tvariationId: ID\n\tname: String\n\ttext: String\n\tlanguageId: ID\n\taddSongDatabaseIds: [ID]\n\tremoveSongDatabaseIds: [ID]\n}\n\ntype VariationVersion {\n\tid: ID\n\tname: String\n\ttext: String\n\tversion: Int\n\tcreatedAt: String\n\tdisabledAt: String\n\tvariation: Variation\n}\n\ntype VariationsConnection {\n\ttotalCount: Int\n\tvariations: [Variation]\n}\n\ntype UpdateVariationResponse {\n\tvariation: Variation\n\tsuccess: Boolean\n}\n"];
/* tslint:disable */

export interface Query {
  variation: Variation | null;
  searchVariations: VariationsConnection | null;
  newVariationVersion: VariationVersion | null;
  songDatabase: SongDatabase | null;
  searchSongDatabases: SongDatabasesConnection | null;
  matiasClient: MatiasClient | null;
  searchMatiasClients: MatiasClientsConnection | null;
  ewDatabase: EwDatabase | null;
  searchEwDatabases: EwDatabasesConnection | null;
}

export interface VariationQueryArgs {
  variationId: string | null;
}

export interface SearchVariationsQueryArgs {
  searchWord: string | null;
  songDatabaseId: string | null;
  tagId: string | null;
  languageId: string | null;
  offset: number | null;
  limit: number | null;
}

export interface SearchSongDatabasesQueryArgs {
  offset: number | null;
  limit: number | null;
  searchWord: string | null;
  variationId: string | null;
}

export interface MatiasClientQueryArgs {
  matiasClientId: string | null;
}

export interface EwDatabaseQueryArgs {
  ewDatabaseId: string | null;
}

export interface SearchEwDatabasesQueryArgs {
  offset: number | null;
  limit: number | null;
  songDatabaseId: string | null;
  matiasClientId: string | null;
}

export interface Variation {
  id: string | null;
  songId: string | null;
  song: Song | null;
  languageId: string | null;
  language: Language | null;
  authorId: string | null;
  author: Author | null;
  copyrightId: string | null;
  copyright: Copyright | null;
  name: string | null;
  version: number | null;
  text: string | null;
  songDatabasesConnection: SongDatabasesConnection | null;
}

export interface SongDatabasesConnectionVariationArgs {
  offset: number | null;
  limit: number | null;
}

export interface Song {
  id: string | null;
}

export interface Language {
  id: string | null;
  name: string | null;
}

export interface Author {
  id: string | null;
  name: string | null;
}

export interface Copyright {
  id: string | null;
  name: string | null;
}

export interface SongDatabasesConnection {
  totalCount: number | null;
  songDatabases: Array<SongDatabase> | null;
}

export interface SongDatabase {
  id: string | null;
  name: string | null;
  variations: Array<Variation> | null;
  tags: Array<Tag> | null;
}

export interface Tag {
  id: string | null;
  name: string | null;
  variations: Array<Variation> | null;
}

export interface VariationsConnection {
  totalCount: number | null;
  variations: Array<Variation> | null;
}

export interface VariationVersion {
  id: string | null;
  name: string | null;
  text: string | null;
  version: number | null;
  createdAt: string | null;
  disabledAt: string | null;
  variation: Variation | null;
}

export interface MatiasClient {
  id: string | null;
  name: string | null;
  hostName: string | null;
  key: string | null;
  accepted: boolean | null;
  ewDatabases: Array<EwDatabase> | null;
}

export interface EwDatabase {
  id: string | null;
  name: string | null;
  matiasClientId: string | null;
  matiasClient: MatiasClient | null;
  filesystemPath: string | null;
  songDatabaseId: string | null;
  songDatabase: SongDatabase | null;
  removeSongsFromEwDatabase: number | null;
  removeSongsFromSongDatabase: number | null;
  variationVersionConflictAction: number | null;
}

export interface MatiasClientsConnection {
  totalCount: number | null;
  matiasClients: Array<MatiasClient> | null;
}

export interface EwDatabasesConnection {
  totalCount: number | null;
  ewDatabases: Array<EwDatabase> | null;
}

export interface Mutation {
  createVariation: Variation | null;
  updateVariation: UpdateVariationResponse | null;
  removeVariation: boolean | null;
  createSongDatabase: SongDatabase | null;
  updateSongDatabase: UpdateSongDatabaseResponse | null;
  removeSongDatabase: boolean | null;
  updateMatiasClient: UpdateMatiasClientResponse | null;
  createEwDatabase: EwDatabase | null;
  updateEwDatabase: UpdateEwDatabaseResponse | null;
}

export interface CreateVariationMutationArgs {
  name: string | null;
  text: string | null;
}

export interface UpdateVariationMutationArgs {
  params: UpdateVariationInputType | null;
}

export interface RemoveVariationMutationArgs {
  variationId: string | null;
}

export interface CreateSongDatabaseMutationArgs {
  name: string | null;
}

export interface UpdateSongDatabaseMutationArgs {
  songDatabaseId: string | null;
  name: string | null;
}

export interface RemoveSongDatabaseMutationArgs {
  songDatabaseId: string | null;
}

export interface UpdateMatiasClientMutationArgs {
  matiasClientId: string | null;
  name: string | null;
  accepted: boolean | null;
}

export interface CreateEwDatabaseMutationArgs {
  name: string | null;
  filesystemPath: string | null;
  songDatabaseId: string | null;
  matiasClientId: string | null;
}

export interface UpdateEwDatabaseMutationArgs {
  ewDatabaseId: string | null;
  name: string | null;
  accepted: boolean | null;
}

export interface UpdateVariationInputType {
  variationId: string | null;
  name: string | null;
  text: string | null;
  languageId: string | null;
  addSongDatabaseIds: Array<string> | null;
  removeSongDatabaseIds: Array<string> | null;
}

export interface UpdateVariationResponse {
  variation: Variation | null;
  success: boolean | null;
}

export interface UpdateSongDatabaseResponse {
  success: boolean | null;
  songDatabase: SongDatabase | null;
}

export interface UpdateMatiasClientResponse {
  success: boolean | null;
  matiasClient: MatiasClient | null;
}

export interface UpdateEwDatabaseResponse {
  success: boolean | null;
  ewDatabase: EwDatabase | null;
}

export interface Person {
  id: string | null;
  name: string | null;
}

export interface Schedule {
  id: string | null;
  name: string | null;
  variations: Array<Variation> | null;
}
