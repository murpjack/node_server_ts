"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// const app = express();
const app_1 = require("./app");
const PORT = 8080;
app_1.app.listen(PORT, () => console.log(`Server on http://localhost: ${PORT}/`));
//# sourceMappingURL=index.js.map