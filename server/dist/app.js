import express from 'express';
import router from "./routes";
export const app = express();
app.use("/api", router);
export default app;
//# sourceMappingURL=app.js.map