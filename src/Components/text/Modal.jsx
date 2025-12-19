import { useState } from "react";

export default function Modal({ onClose, onCreateTask, taskToEdit, onEditTask }) {
  // ১. স্টেট ইনিশিয়ালাইজ করার সময় ট্যাগগুলোকে স্ট্রিং হিসেবে রাখা
  const [task, setTask] = useState(
    taskToEdit
      ? { ...taskToEdit, tags: taskToEdit.tags.join(",") } // অ্যারে থেকে স্ট্রিং করা হলো
      : {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          tags: "", // এখানে স্ট্রিং রাখা ভালো
          priority: "",
          isFavorite: false,
        }
  );

  function handleCreateTask(e) {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  }

  function handleCreateTaskSubmit(e) {
    e.preventDefault();

    // ২. সাবমিট করার আগে ট্যাগগুলোকে অ্যারেতে রূপান্তর এবং অতিরিক্ত স্পেস রিমুভ (Trim)
    const newTask = {
      ...task,
      tags: task.tags.split(",").map((tag) => tag.trim()), 
    };

    if (taskToEdit) {
      onEditTask(newTask);
    } else {
      onCreateTask(newTask);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      {/* onSubmit হ্যান্ডলার ব্যবহার করা ভালো */}
      <form
        onSubmit={handleCreateTaskSubmit}
        className="relative mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-300 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {/* ৩. ডাইনামিক টাইটেল */}
          {taskToEdit ? "Edit Task" : "Add New Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              onChange={handleCreateTask}
              value={task.title}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleCreateTask}
              value={task.description}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              name="description"
              id="description"
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags (comma separated)</label>
              <input
                onChange={handleCreateTask}
                value={task.tags}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                onChange={handleCreateTask}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit" // টাইপ সাবমিট দিলে এন্টার প্রেস করলেও কাজ করবে
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {taskToEdit ? "Update Task" : "Create new Task"}
          </button>
        </div>
      </form>
    </div>
  );
}