import {
	DomainCompose
} from "grpc-graphql-router-tools";

import WompattiService from "./wompatti/WompattiService";
import SeppoService from "./seppo/SeppoService";

export default new DomainCompose({
	domainServices: {
		// wompatti: {
		// 	type: WompattiService
		// },
		seppo: {
			type: SeppoService
		}
	}
});