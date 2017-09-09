
import EthernetInterface from "./EthernetInterface";

const WolInterface = `
    type WolInterface {
        id: ID
        ethernetInterface: EthernetInterface
        mac: String
    }
`;

const CreateWolInterfaceInput = `
    input CreateWolInterfaceInput {
        computerId: ID
        ethernetInterfaceId: ID
        mac: String
    }
`;

const EditWolInterfaceInput = `
    input EditWolInterfaceInput {
        wolInterfaceId: ID
        ethernetInterfaceId: ID
        mac: String
    }
`;

export default () => [
    WolInterface,
    EthernetInterface,
    CreateWolInterfaceInput,
    EditWolInterfaceInput
];