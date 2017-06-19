
import {
	Base64
} from "js-base64";

export default (stringId) => {
	return Base64.decode(stringId).split("_")[1]
}