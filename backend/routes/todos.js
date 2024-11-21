import { Router } from "express";

const router = Router();
const todos = [
  {
    id: "667bc88b-2e75-4498-94cc-9b47a9db445c",
    text: "Homework",
    isCompleted: false,
  },
  {
    id: "aef71871-401e-4248-9415-5a7f63e5e58a",
    text: "Dishes",
    isCompleted: false,
  },
  {
    id: "6a39029d-d003-43cc-bcf0-fde551b2b7b4",
    text: "Laundry",
    isCompleted: false,
  },
];

// GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

export default router;
