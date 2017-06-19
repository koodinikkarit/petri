
// QUERIES

import ComputerQueries from "./ComputerQueries";

export const queries = Object.assign(ComputerQueries);


// MUTATIONS

import AddComputer from "./AddComputer";
import EditComputer from "./EditComputer";
import RemoveComputer from "./RemoveComputer";
import Wakekup from "./Wakeup";

export const mutations = {
    AddComputer,
    EditComputer,
    RemoveComputer,
    Wakekup
}