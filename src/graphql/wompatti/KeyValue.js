
import DeviceInfo from "./DeviceInfo";

const KeyValue = `
    type KeyValue {
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
    KeyValue,
    CreateKeyValueInput,
    EditKeyValueInput
];