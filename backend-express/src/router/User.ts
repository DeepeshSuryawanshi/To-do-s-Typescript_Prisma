import express from 'express';
import { PrismaClient } from '@prisma/client';
const router = express.Router();
const prisma = new PrismaClient()
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

// Create a new user
//@ts-ignore
router.patch('/', async (req, res) => {
  const { email, username, password } = req.body;

  // Validate the request body
  if (!email || !username || !password) {
    return res.status(400).json({ error: 'Email, username, and password are required.' });
  }

  try {
    // Check if the email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(409).json({ error: 'Email or username already in use.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword, // Store the hashed password
      },
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
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
// @ts-ignore
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { username }
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    //Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    //Generate JWT token
    const token = jwt.sign({ userId: user.id },process.env.TOKEN_JWT_SECRET as string, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful",user  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
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