import { useState, useEffect } from "react";
import axios from "axios";
import { ListaTareas } from "./listaTareas";

export const TodoApp = () => {
    interface Task {
        _id: string;
        title: string;
        description: string;
        status: 'pending' | 'completed';
        priority: 'low' | 'medium' | 'high';
      }
  const [nuevaTarea, setNuevaTarea] = useState({ title: '', description: '', status: 'pending', priority: 'medium' });
  const [listaTareas, setListaTareas] = useState<Task[]>([]);


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tasks');
        setListaTareas(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!nuevaTarea.title.trim() || !nuevaTarea.description.trim()) return;

    try {
      const response = await axios.post('http://localhost:8080/api/tasks', nuevaTarea);
      setListaTareas([...listaTareas, response.data]);
      setNuevaTarea({ title: '', description: '', status: 'pending', priority: 'medium' });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleBorrarTarea = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`);
      setListaTareas(listaTareas.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditTarea = async (id: string, updatedTask: any) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/tasks/${id}`, updatedTask);
      setListaTareas(listaTareas.map(task => task._id === id ? response.data : task));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <div className="flex">
        <input
          type="text"
          value={nuevaTarea.title}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, title: e.target.value })}
          placeholder="Task title"
        />
        <input
          type="text"
          value={nuevaTarea.description}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, description: e.target.value })}
          placeholder="Task description"
        />
        <select
          value={nuevaTarea.status}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={nuevaTarea.priority}
          onChange={(e) => setNuevaTarea({ ...nuevaTarea, priority: e.target.value })}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTareas={handleBorrarTarea}
        editarTarea={handleEditTarea}
      />
    </div>
  );
};


