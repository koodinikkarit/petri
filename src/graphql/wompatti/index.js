import { merge } from 'lodash';

export { default as Queries } from "./Queries";
export { default as Mutations } from "./Mutations";

import QueryResolvers from "./QueryResolvers";
import MutationResolvers from "./MutationResolvers";

//console.log("QQQ", Queries(), Mutations());
export const resolvers = merge(QueryResolvers, MutationResolvers);
