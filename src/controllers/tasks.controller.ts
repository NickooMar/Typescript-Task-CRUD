import { Request, Response } from "express";

import Task from "../models/Task";

export const getTasks = async (req: Request, res: Response) => {
  const taskList = await Task.find().sort({ date: "desc" });

  res.json({ taskList });
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const newTask = await new Task({
    title: title,
    description: description,
  });

  await newTask.save();
  res.json({ newTask });
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req?.params;

  try {
    const taskFound = await Task.findById(id);
    res.json({ taskFound });
  } catch (error) {
    console.error(error);
    res.json({ message: "No task found" });
    return;
  }
};
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req?.params;

  const { title, description, done } = req.body;

  try {
    const taskUpdated = await Task.findByIdAndUpdate(id, {
      title: title,
      description: description,
      done: done,
    });
    res.json({ taskUpdated });
  } catch (error) {
    console.error(error);
    res.json({ message: "No possible to update Task" });
    return;
  }
};
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req?.params;

  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task Deleted Successfully" });
  } catch (error) {
    console.error(error);
    res.json({ message: "No possible to Delete Task" });
    return;
  }
};
