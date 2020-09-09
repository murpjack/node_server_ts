import express from "express";
import router from "./routes";

export const app = express();

// API
app.use("/api", router);

export default app;
