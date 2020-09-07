import app from'./app';
import db from "./db";
// import router from "./routes";
const PORT = 8080;

// DATABASE
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.use("/api", router);

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}/`));
