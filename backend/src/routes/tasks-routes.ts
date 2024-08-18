import {Router} from "express";
import {getTasks, createTask, getTaskById, updateTask, deleteTask} from "../controllers.ts/taskController";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para gestionar tareas
 */


router.get("/tasks", getTasks); //GET /tasks
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtiene todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de todas las tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 
 */
router.post("/tasks", createTask);
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 */

router.get("/tasks/:id", getTaskById);
/**
 * @swagger
 * /tasks/:id:
 *   get:
 *     summary: Obtiene una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea
 */
router.put("/tasks/:id", updateTask);
/**
 * @swagger
 * /tasks/:id:
 *   put:
 *     summary: Actualiza una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea
 */
router.delete("/tasks/:id", deleteTask);
/**
 * @swagger
 * /tasks/:id:
 *   delete:
 *     summary: Elimina una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea
 */
export default router;


