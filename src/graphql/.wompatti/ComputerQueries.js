
import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from "graphql";

import FetchComputersResponse from "./FetchComputersResponse";
import FetchComputerByIdResponse from "./FetchComputerByIdResponse";

export default {
    fetchComputers: {
        name: "FetchComputers",
        type: FetchComputersResponse,
        args: {

        },
        resolve: (_, args) => new Promise((resolve, reject) => {
            resolve({
                computers: [
                    {
                        id: "qwer1",
                        name: "Tykkikone",
                        ip: "123.3.3.",
                        mac: "a3:f3:f4"
                    },
                    {
                        id: "qwer2",
                        name: "Tykkikone2",
                        ip: "1233.3.3.",
                        mac: "aa:f3:f4"
                    }
                ]
            })
        })
    },
    fetchComputerById: {
        name: "FetchComputerById",
        type: FetchComputerByIdResponse,
        args: {

        }
    }
}