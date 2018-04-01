import { merge } from "lodash";

import * as user from "./user";
import * as viewer from "./viewer";
import * as tag from "./tag";
import * as language from "./language";
import * as author from "./author";

export const resolvers = merge(user, viewer, tag, language, author);
