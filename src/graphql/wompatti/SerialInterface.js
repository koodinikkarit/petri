
import SerialPort from "./SerialPort";

const SerialInterface = `
    type SerialInterface {
        id: ID
        serialPort: SerialPort
    }
`;

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
    CreateSerialInterfaceInput,
    EditSerialInterfaceInput,
    SerialPort
];