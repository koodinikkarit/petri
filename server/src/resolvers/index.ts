import { merge } from "lodash";

import * as user from "./user";
import * as viewer from "./viewer";
import * as tag from "./tag";

export const resolvers = merge(user, viewer, tag);
