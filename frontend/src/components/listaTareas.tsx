//import React from 'react';
import { Tarea } from './tarea';

type ListaTareasProps = {
  listaTareas: {
    _id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
  }[];
  borrarTareas: (id: string) => void;
  editarTarea: (id: string, updatedTask: any) => void;
};

export const ListaTareas = ({ listaTareas, borrarTareas, editarTarea }: ListaTareasProps) => {
  return (
    <div className="taskList">
      {listaTareas.map((task) => (
        <Tarea
          key={task._id}
          tarea={task}
          borrarTarea={borrarTareas}
          editarTarea={editarTarea}
        />
      ))}
    </div>
  );
};
