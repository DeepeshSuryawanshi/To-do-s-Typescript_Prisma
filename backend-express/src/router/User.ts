import express from 'express'
import { PrismaClient } from '@prisma/client';
const router = express.Router();
const prisma = new PrismaClient()

// Create a new user
router.post('/create', async (req, res) => {
  const { email, username, password } = req.body;
  console.log("create route run",req.body);
  try {
    const user = await prisma.user.create({
      data: { email, username, password },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to create user", details: error });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { todos: true },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Get a single user by ID
router.get("/login", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { todos: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Update a user
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { email, username, password } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, username, password },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to update user", details: error });
  }
});

// Delete a user
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
});


export default router;