import express from "express";
import dotenv from "dotenv";

//Database
import { connectDB } from "./database/database";

//Routes
import taskRoutes from "./routes/tasks.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
