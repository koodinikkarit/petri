
import Arttu from "./Arttu";

const SerialPort = `
    type SerialPort {
        id: ID
        name: String
        arttu: Arttu
    }
`;

export default () => [SerialPort, Arttu];