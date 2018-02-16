import { merge } from "lodash";

import * as matiasClient from "./MatiasClient";
import * as songDatabase from "./SongDatabase";
import * as variation from "./Variation";

export const resolvers = merge(matiasClient, songDatabase, variation);

console.log("resolvers", resolvers);
