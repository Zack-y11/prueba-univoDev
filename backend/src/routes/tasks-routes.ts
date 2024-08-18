import {Router} from "express";
import {getTasks, createTask, getTaskById, updateTask, deleteTask} from "../controllers.ts/taskController";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para gestionar tareas
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           description: ID de la tarea.
 *         title:
 *           type: string
 *           description: Título de la tarea.
 *         description:
 *           type: string
 *           description: Descripción detallada de la tarea.
 *         status:
 *           type: string
 *           enum: ['pending', 'in-progress', 'completed']
 *           description: Estado de la tarea.
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: Fecha límite de la tarea.
 *         priority:
 *           type: string
 *           enum: ['low', 'medium', 'high']
 *           description: Prioridad de la tarea.
 *         assignedTo:
 *           type: string
 *           description: ID del usuario asignado a la tarea.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de última actualización.
 */



router.get("/tasks", getTasks); //GET /tasks
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtiene todas las tareas.
 *     description: Retorna una lista de todas las tareas disponibles.
 *     responses:
 *       200:
 *         description: Lista de tareas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */

router.post("/tasks", createTask);
/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crea una nueva tarea.
 *     description: Añade una nueva tarea al sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Error en la solicitud.
 */


router.get("/tasks/:id", getTaskById);
/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea específica.
 *     description: Retorna una tarea basándose en su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a obtener.
 *     responses:
 *       200:
 *         description: Tarea encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada.
 */

router.put("/tasks/:id", updateTask);
/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualiza una tarea existente.
 *     description: Modifica los detalles de una tarea existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Tarea no encontrada.
 *       400:
 *         description: Error en la solicitud.
 */

router.delete("/tasks/:id", deleteTask);
/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Elimina una tarea.
 *     description: Elimina una tarea existente del sistema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea a eliminar.
 *     responses:
 *       204:
 *         description: Tarea eliminada exitosamente.
 *       404:
 *         description: Tarea no encontrada.
 */

export default router;


