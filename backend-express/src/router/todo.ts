import express from 'express';
import { PrismaClient } from '@prisma/client';
const router = express.Router();

let Prisma = new PrismaClient();

// Create a new todo
router.post("/add", async (req, res) => {
    const { userId, title, context, status } = req.body;
    try {
      const todo = await Prisma.toDo.create({
        data: {
          userId,
          title,
          context,
          status,
        },
      });
      res.status(201).json(todo);
    } catch (error) {
        console.log(error);
        
      res.status(400).json({ error: "Failed to create todo", details: error });
    }
  });
  
  // Get all todos
  router.get("/todos", async (req, res) => {
    try {
      const todos = await Prisma.toDo.findMany({
        include: { user: true },
      });
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todos" });
    }
  });
  
  // Get a single todo by ID
  router.get("/todos/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const todo = await Prisma.toDo.findUnique({
        where: { id: Number(id) },
        include: { user: true },
      });
  
      if (!todo) return res.status(404).json({ error: "Todo not found" });
  
      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch todo" });
    }
  });
  
  // Update a todo
  router.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { title, context, status } = req.body;
  
    try {
      const todo = await Prisma.toDo.update({
        where: { id: Number(id) },
        data: { title, context, status },
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).json({ error: "Failed to update todo", details: error });
    }
  });
  
  // Delete a todo
  router.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      await Prisma.toDo.delete({ where: { id: Number(id) } });
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: "Failed to delete todo" });
    }
  });
  
  export default router;