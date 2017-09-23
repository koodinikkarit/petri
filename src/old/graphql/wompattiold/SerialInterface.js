
import PageInfo from "./PageInfo";
import SerialPort from "./SerialPort";

const SerialInterface = `
    type SerialInterface {
        id: ID
        serialPort: SerialPort
    }
`;

const SerialInterfaceEdge = `
    type SerialInterfaceEdge {
        node: SerialInterface
        cursor: Int
    }
`;

const SerialInterfacesConnection = `
    type SerialInterfacesConnection {
        pageInfo: PageInfo
        edges: [SerialInterfaceEdge]
        totalCount: Int
        serialInterfaces: [SerialInterface]
    }
` 

const CreateSerialInterfaceInput = `
    input CreateSerialInterfaceInput {
        serialPortId: ID
    }
`;

const EditSerialInterfaceInput = `
    input EditSerialInterfaceInput {
        serialInterfaceId: ID!
        serialPortId: ID
    }
`;

export default () => [
    SerialInterface,
    SerialInterfaceEdge,
    SerialInterfacesConnection,
    CreateSerialInterfaceInput,
    EditSerialInterfaceInput,
    SerialPort
];