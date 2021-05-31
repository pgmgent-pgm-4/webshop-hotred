import express from "express";
import dotenv from "dotenv";
import routes from "./api/routes/index.js"
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.json());

dotenv.config();
app.use("/api", routes)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});