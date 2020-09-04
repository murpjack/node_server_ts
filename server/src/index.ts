import app from'./app';
import router from "./routes";

const PORT = 8080;

app.use("/api", router);

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}/`));
