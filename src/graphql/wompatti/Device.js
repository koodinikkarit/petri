
import DeviceInfo from "./DeviceInfo";
import DeviceType from "./DeviceType";

const Device = `
    type Device {
        id: ID
        name: String
        deviceInfo: DeviceInfo
        deviceType: DeviceType
    }
`;

const CreateDeviceInput = `
    input CreateDeviceInput {
        name: String
    }
`;

const EditDeviceInput = `
    input EditDeviceInput {
        id: ID
        name: String
        deviceTypeId: ID
    }
`; 

export default () => [
    DeviceInfo,
    DeviceType,
    Device,
    CreateDeviceInput,
    EditDeviceInput
];