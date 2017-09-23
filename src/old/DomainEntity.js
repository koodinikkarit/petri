
export default class DomainEntity {
	constructor(props) {
		if (!props) {
			throw new Error("DomainEntity constructor object props needs to be an object");
		}
		this.domainServices = props.domainServices;
	}
}