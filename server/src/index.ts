// import express from 'express';
// const app = express();
import { app } from "./app";

const PORT = 8080;

app.listen(PORT, () => console.log(`Server on http://localhost: ${PORT}/`));
