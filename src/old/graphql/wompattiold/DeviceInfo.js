
import KeyValue from "./KeyValue";

const DeviceInfo = `
    type DeviceInfo {
        id: ID
        keyValues: [KeyValue]!
    }
`;

export default () => [KeyValue, DeviceInfo];