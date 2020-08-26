"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { app } from "./app";
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 8080;
app.listen(PORT, () => console.log(`Server on http://localhost: ${PORT}/`));
//# sourceMappingURL=index.js.map