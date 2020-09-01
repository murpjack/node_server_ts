import { app } from "./app";

const PORT = 8080;

// app.use("/", (req,res) => res.json({name: "Jack"}));
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}/`));
