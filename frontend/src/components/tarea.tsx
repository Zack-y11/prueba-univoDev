//import React from 'react';

type TareaProps = {
  tarea: {
    _id: string;
    title: string;
    description: string;
    status: string;
    priority: string;
  };
  borrarTarea: (id: string) => void;
  editarTarea: (id: string, updatedTask: any) => void;
};

export const Tarea = ({ tarea, borrarTarea, editarTarea }: TareaProps) => {
    const getStatusClass = () => {
        switch (tarea.status) {
          case 'completed':
            return 'completed';
          case 'pending':
            return 'pending';
          default:
            return '';
        }
      };
      const getPriorityClass = () => {
        switch (tarea.priority) {
          case 'high':
            return 'high-priority';
          case 'medium':
            return 'medium-priority';
          case 'low':
            return 'low-priority';
          default:
            return '';
        }
      };


  const handleEdit = () => {
    const newTitle = prompt('Edit title:', tarea.title);
    const newDescription = prompt('Edit description:', tarea.description);
    const newStatus = prompt('Edit status:', tarea.status);
    const newPriority = prompt('Edit priority:', tarea.priority);

    if (newTitle && newDescription && newStatus && newPriority) {
      editarTarea(tarea._id, { title: newTitle, description: newDescription, status: newStatus, priority: newPriority });
    }
  };

  return (
    <div className={`task ${getStatusClass()} ${getPriorityClass()}`}>
      <h3>{tarea.title}</h3>
      <p>{tarea.description}</p>
      <p>Status: {tarea.status}</p>
      <p>Priority: {tarea.priority}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => borrarTarea(tarea._id)}>Delete</button>
    </div>
  );
};
