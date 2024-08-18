import {Request, Response} from "express";
import Task from "../db/tasksModels";

export const getTasks = async (req: Request, res: Response)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
        res.status(200);
    }catch(error){
        res.status(500).json({message: "Error al obtener tareas"});
    }
}

export const createTask = async (req: Request, res: Response)=>{
    try{
        const task = new Task(req.body);
        const newTask = await task.save();
        res.status(201).json(newTask);

    }catch(error){
        res.status(500).json({message: "Error al crear tarea"});
    }
}

export const getTaskById = async (req: Request, res: Response)=>{
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({message: "Error al obtener tarea"});
    }
}

export const updateTask = async (req: Request, res: Response)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({message: "Error al actualizar tarea"});
    }
}

export const deleteTask = async (req: Request, res: Response)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Tarea eliminada"});
    }catch(error){
        res.status(500).json({message: "Error al eliminar tarea"});
    }
}