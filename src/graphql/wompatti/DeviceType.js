
import Command from "./Command";
import SerialInterface from "./SerialInterface";
import TelnetInterface from "./TelnetInterface";
import CecInterface from "./CecInterface";
import PageInfo from "./PageInfo";

const DeviceType = `
    type DeviceType {
        id: ID
        name: String
        commands: [Command]
        serialInterface: SerialInterface
        telnetInterface: TelnetInterface
        cecInterface: CecInterface
    }
`;

const CreateDeviceTypeInput = `
    input CreateDeviceTypeInput {
        name: String
    }
`;

const EditDeviceTypeInput = `
    input EditDeviceTypeInput {
        deviceTypeId: ID
        name: String
        serialInterfaceId: ID
        telnetInterfaceId: ID
        cecInterfaceId: ID
    }
`;

const DeviceTypesEdge = `
    type DeviceTypesEdge {
        node: DeviceType
        cursor: String!
    }
`;

const DeviceTypesConnection = `
    type DeviceTypesConnection {
        pageInfo: PageInfo
        edges: [DeviceTypesEdge]
        totalCount: Int
        deviceTypes: [DeviceType]
    }
`;

export default () => [
    DeviceType,
    CreateDeviceTypeInput,
    EditDeviceTypeInput,
    Command, 
    SerialInterface,
    TelnetInterface,
    CecInterface,
    DeviceTypesEdge,
    DeviceTypesConnection
];

