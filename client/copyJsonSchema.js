const fs = require("fs");
const path = require("path");

const originalPath = path.join(__dirname, "../server/schema.json");

fs.renameSync(originalPath, "schema.json");
