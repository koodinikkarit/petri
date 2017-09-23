
import PageInfo from "./PageInfo";

const TelnetInterface = `
    type TelnetInterface {
        id: ID
        ip: String
        port: Int
    }
`;

const CreateTelnetInterfaceInput = `
    input CreateTelnetInterfaceInput {
        ip: String
        port: String
    }
`;

const EditTelnetInterfaceInput = `
    input EditTelnetInterfaceInput {
        telnetInterfaceId: ID
        ip: String
        port: String
    }
`;

const TelnetInterfacesEdge = `
    type TelnetInterfacesEdge {
        node: TelnetInterface
        cursor: String
    }
`;

const TelnetInterfacesConnection = `
    type TelnetInterfacesConnection {
        pageInfo: PageInfo
        edges: [TelnetInterfacesEdge]
        totalCount: Int
        telnetInterfaces: [TelnetInterface]
    }
`


export default () => [
    TelnetInterface, 
    CreateTelnetInterfaceInput,
    EditTelnetInterfaceInput,
    TelnetInterfacesEdge,
    TelnetInterfacesConnection    
];