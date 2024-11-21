// src/routes/userRoutes.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request, Response, Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../models/userModel";

const router = Router();

router.get("/", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await getUserById(Number(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
router.post("/", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const user = await createUser({ name, email });
  res.status(201).json(user);
});

router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  const user = await updateUser(Number(req.params.id), { name, email });
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

router.delete("/:id", async (req, res) => {
  await deleteUser(Number(req.params.id));
  res.status(204).send();
});

export default router;
