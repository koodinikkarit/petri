import { mergeSchemas } from "graphql-tools";

import seppo from "./seppo";

export default mergeSchemas({
	schemas: [seppo]
});

// export const context = sepp;
