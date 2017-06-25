
import DeviceInfoKeyValue from "./DeviceInfoKeyValue";

const DeviceInfo = `
    type DeviceInfo {
        id: ID
        keyValues: [DeviceInfoKeyValue]!
    }
`;

export default () => [DeviceInfoKeyValue, DeviceInfo];