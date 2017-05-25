
// QUERIES
import matrixQueries from "./MatrixQueries";
import diagramQueries from "./DiagramQueries";
import diagramScreenQueries from "./DiagramScreenQueries";
import defaultStateQueries from "./DefaultStateQueries";
import weeklyTimerQueries from "./WeeklyTimerQueries";

export const queries = Object.assign(
    matrixQueries,
    diagramQueries,
    diagramScreenQueries,
    defaultStateMutations,
    weeklyTimerQueries
);

// MUTATIONS
import matrixMutations from "./MatrixMutations";
import diagramMutations from "./DiagramMutations";
import diagramScreenMutations from "./DiagramScreenMutations";
import weeklyTimerMutations from "./WeeklyTimerMutations";
import cronTimerMutations from "./CronTimerMutations";
import defaultStateMutations from "./DefaultStateMutations";

export const mutations = Object.assign(
    matrixMutations,
    diagramMutations,
    diagramScreenMutations,
    weeklyTimerMutations,
    cronTimerMutations,
    defaultStateMutations
);