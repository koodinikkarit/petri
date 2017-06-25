
import PageInfo from "./PageInfo";
import Device from "./Device";

const DevicesEdge = `
    type DevicesEdge {
        node: Device
        cursor: String!
    }
`;

const DevicesConnection = `
    type DevicesConnection {
        pageInfo: PageInfo
        totalCount: Int       
        devices: [Device]
    }
`;

export default () => [DevicesEdge, DevicesConnection];