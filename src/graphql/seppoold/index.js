import { 
	merge 
} from 'lodash';

export { default as Queries } from "./Queries";
export { default as Mutations } from "./Mutations";

import QueryResolvers from "./QueryResolvers";
import MutationResolvers from "./MutationResolvers";

export const resolvers = {
	Query: QueryResolvers, 
	Mutation: MutationResolvers
}