
import DeviceInfo from "./DeviceInfo";

const DeviceInfoKeyValue = `
    type DeviceInfoKeyValue {
        id: ID
        deviceInfo: DeviceInfo
        key: String
        Value: String
    }
`;

const CreateKeyValueInput = `
    input CreateKeyValueInput {
        deviceInfoId: ID!
        key: String
        value: String
    }
`;

const EditKeyValueInput = `
    input EditKeyValueInput {
        keyValueId: ID!
        key: String
        value: String
    }
`;

export default () => [
    DeviceInfo,
    DeviceInfoKeyValue,
    CreateKeyValueInput,
    EditKeyValueInput
];