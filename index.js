import express from "express";
import bodyParser from "body-parser";
import partsRoutes from "./routes/varuosad.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

app.use("/parts", partsRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
  console.log("Server is updated");
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
