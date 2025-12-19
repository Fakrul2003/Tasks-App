import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import Modal from "./Modal";
import { useState } from "react";

const defaultTasks = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    "Learn React and build a task manager app. I want to learn how to build a task manager app.",
  tags: ["React", "JavaScript", "Vite"],
  priority: "High",
  isFavorite: false,
};

export default function TaskBoard() {
  const [ tasks, setTasks] = useState([defaultTasks]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Modal handlers
  const handleOpenModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(false);
  };
  function creatingTask(newTask) {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  }
  
  function handleEditButton(id){
    const task = tasks.find(task => task.id === id);
    setTaskToEdit(task);
       setIsModalOpen(true);
  }
  function editingTask(newTask){
   const updatedTask = tasks.map(task => task.id === newTask.id ? 
    newTask : task);
    setTasks(updatedTask);
    setIsModalOpen(false);
    setTaskToEdit(null);
  }

  function handlDelet(id){
   const updatedTask = tasks.filter(task => task.id!== id)
   setTasks(updatedTask);
  }
  function deletAll(){
    setTasks([]);
  }
  function handleSearch(searchText){
    const filterTask = tasks.filter(task=> task.title.toLowerCase().
      includes(searchText.toLowerCase()));
      setTasks(filterTask);
  }
  return (
    <section className="mb-20" id="tasks">
      {isModalOpen && <Modal onClose={handleCloseModal} onCreateTask={creatingTask} taskToEdit={taskToEdit} onEditTask={editingTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onDeletAll={deletAll} onAddTask={handleOpenModal} />
          <div className="overflow-auto">
            <TaskList tasks={tasks} onDelete={handlDelet} onEdit={handleEditButton} />
          </div>
        </div>
      </div>
    </section>
  );
}
