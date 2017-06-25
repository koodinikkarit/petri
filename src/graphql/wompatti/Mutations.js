
import Computer from "./Computer";
import Device from "./Device";
import DeviceInfoKeyValue from "./DeviceInfoKeyValue";
import WolInterface from "./WolInterface";
import DeviceType from "./DeviceType";
import Command from "./Command";
import TelnetInterface from "./TelnetInterface";
import SerialInterface from "./SerialInterface";

const WompattiMutation = `
    type Mutation {
        createComputer(params: CreateComputerInput): CreateComputerOutput
        editComputer(params: EditComputerInput): Computer!
        removeComputer(id: ID): String
        createDevice(params: CreateDeviceInput): Device 
        editDevice(params: EditDeviceInput): Device!
        removeDevice(id: ID): Boolean
        createKeyValue(params: CreateKeyValueInput): DeviceInfoKeyValue
        editKeyValue(params: EditKeyValueInput): DeviceInfoKeyValue
        removeKeyValue(id: ID): Boolean
        createWolInterface(params: CreateWolInterfaceInput): WolInterface
        editWolInterface(params: EditWolInterfaceInput): WolInterface
        removeWolInterface(id: ID): Boolean
        executeWolInterface(id: ID): Boolean
        createDeviceType(params: CreateDeviceTypeInput): DeviceType
        editDeviceType(params: EditDeviceTypeInput): DeviceType
        removeDeviceType(id: ID): Boolean
        createCommand(params: CreateCommandInput): Command
        editCommand(params: EditCommandInput): Command
        removeCommand(id: ID): Boolean
        createTelnetInterface(params: CreateTelnetInterfaceInput): TelnetInterface
        editTelnetInterface(params: EditTelnetInterfaceInput): TelnetInterface
        removeTelnetInterface(id: ID): Boolean
        createSerialInterface(params: CreateSerialInterfaceInput): SerialInterface
        editSerialInterface(params: EditSerialInterfaceInput): SerialInterface
        removeSerialInterface(id: ID): Boolean
    }
`;

export default () => [
    WompattiMutation,
    Computer,
    Device,
    DeviceInfoKeyValue,
    WolInterface,
    DeviceType,
    Command,
    TelnetInterface,
    SerialInterface
];