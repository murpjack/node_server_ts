import app from './app';
import db from "./db";
const PORT = 8080;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}/`));
//# sourceMappingURL=index.js.map