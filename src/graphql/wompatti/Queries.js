
import Computer from "./Computer";
import Device from "./Device";
import DevicesConnection from "./DevicesConnection";
import DeviceInfo from "./DeviceInfo";
import EthernetInterface from "./EthernetInterface";
import WolInterface from "./WolInterface";
import DeviceType from "./DeviceType";
import TelnetInterface from "./TelnetInterface";
import PageInfo from "./PageInfo";

const WompattiQuery = `
    type Query {
        computer(id: ID): Computer
        computers(offset: Int, limit: Int): ComputersConnection
        device(id: ID): Device
        devices(offset: Int, limit: Int): DevicesConnection
        deviceInfo(id: ID): DeviceInfo
        ethernetInterfaces(offset: Int, limit: Int): EthernetInterfacesConnection
        ethernetInterface(id: ID): EthernetInterface
        wolInterface(id: ID): WolInterface
        deviceTypes(offset: Int, limit: Int): DeviceTypesConnection
        deviceType(id: ID): DeviceType
        telnetInterface(id: ID): TelnetInterface
        telnetInterfaces(offset: Int, limit: Int): TelnetInterfacesConnection
    }
`;

export default () => [
    WompattiQuery,
    Computer,
    Device,
    DevicesConnection,
    DeviceInfo,
    EthernetInterface,
    WolInterface,
    DeviceType,
    TelnetInterface,
    WolInterface,
    PageInfo
];
