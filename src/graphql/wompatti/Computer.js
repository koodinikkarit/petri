
import DeviceInfo from "./DeviceInfo";
import WolInterface from "./WolInterface";
import Arttu from "./Arttu";
import PageInfo from "./PageInfo";

const Computer = `
    type Computer {
        id: ID
        name: String
        deviceInfo: DeviceInfo
        arttu: Arttu
        wolInterface: WolInterface
    }
`;

const CreateComputerInput = `
    input CreateComputerInput {
        name: String
    }
`;

const EditComputerInput = `
    input EditComputerInput {
        computerId: ID!
        name: String
        arttuId: ID
        deviceInfoId: ID
        wolInterfaceId: ID
    }
`;

const ComputersEdge = `
    type ComputersEdge {
        node: Computer
        cursor: String!
    }
`

const ComputersConnection = `
    type ComputersConnection {
        pageInfo: PageInfo
        edges: [ComputersEdge]
        totalCount: Int
        computers: [Computer]
    }
`;

export default () => [
    DeviceInfo, 
    WolInterface, 
    Arttu, 
    Computer,
    PageInfo,
    CreateComputerInput,
    EditComputerInput,
    ComputersConnection,
    ComputersEdge
];