"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const routes_1 = require("./routes");
const PORT = 8080;
app_1.default.use("/api", routes_1.default);
app_1.default.listen(PORT, () => console.log(`Server on http://localhost:${PORT}/`));
//# sourceMappingURL=index.js.map