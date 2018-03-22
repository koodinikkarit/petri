import { merge } from "lodash";

import * as user from "./user";
import * as viewer from "./viewer";

export const resolvers = merge(user, viewer);
