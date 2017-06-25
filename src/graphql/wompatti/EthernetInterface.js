
import PageInfo from "./PageInfo";

const EthernetInterface = `
    type EthernetInterface {
        id: ID
        name: String
        ip: String
        mac: String
        index: Int
        mtu: Int
        flags: Int
    }
`;

const EthernetInterfacesEdge = `
    type EthernetInterfacesEdge {
        node: EthernetInterface
        cursor: String!
    }
`;

const EthernetInterfacesConnecton = `
    type EthernetInterfacesConnection {
        pageInfo: PageInfo
        edges: [EthernetInterfacesEdge]
        totalCount: Int
        ethernetInterfaces: [EthernetInterface]
    }
`;

export default () => [
    PageInfo,
    EthernetInterface,
    EthernetInterfacesEdge,
    EthernetInterfacesConnecton
];