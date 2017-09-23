
import Computer from "./Computer";
import Device from "./Device";
import DeviceInfo from "./DeviceInfo";
import EthernetInterface from "./EthernetInterface";
import WolInterface from "./WolInterface";
import DeviceType from "./DeviceType";
import TelnetInterface from "./TelnetInterface";
import SerialInterface from "./SerialInterface";
import PageInfo from "./PageInfo";

const WompattiQuery = `
    type Query {
        computer(id: ID): Computer
        allComputers(after: Int, before: Int, first: Int, last: Int): ComputersConnection
        device(id: ID): Device
        allDevices(after: Int, before: Int, first: Int, last: Int): DevicesConnection
        deviceInfo(id: ID): DeviceInfo
        ethernetInterface(id: ID): EthernetInterface
        ethernetInterfaces(after: Int, before: Int, first: Int, last: Int): EthernetInterfacesConnection
        wolInterface(id: ID): WolInterface
        deviceType(id: ID): DeviceType
        allDeviceTypes(after: Int, before: Int, first: Int, last: Int): DeviceTypesConnection
        telnetInterface(id: ID): TelnetInterface
        allTelnetInterfaces(after: Int, before: Int, first: Int, last: Int): TelnetInterfacesConnection
        serialInterface(id: ID): SerialInterface
        allSerialInterfaces(after: Int, before: Int, first: Int, last: Int): SerialInterfacesConnection
    }
`;

export default () => [
    WompattiQuery,
    Computer,
    Device,
    DeviceInfo,
    EthernetInterface,
    WolInterface,
    DeviceType,
    TelnetInterface,
    WolInterface,
    SerialInterface,
    PageInfo
];
