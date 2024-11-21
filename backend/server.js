import express from "express";
import router from "./routes/todos.js";

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API!" });
});

app.use("/todos", router);

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
