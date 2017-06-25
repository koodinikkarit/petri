
import DeviceType from "./DeviceType";

const Command = `
    type Command {
        id: ID
        deviceType: DeviceType
        name: String
        value: String
    }
`;

const CreateCommandInput = `
    input CreateCommandInput {
        deviceTypeId: ID
        name: String
        value: String
    }
`;

const EditCommandInput = `
    input EditCommandInput {
        commandId: ID
        name: String
        value: String
    }
`;

export default () => [DeviceType, Command, CreateCommandInput, EditCommandInput];