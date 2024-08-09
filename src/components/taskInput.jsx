import React from "react";

function TaskInput({ onAddTask }) {
  let taskInput = "";

  const handleInputChange = (e) => {
    taskInput = e.target.value;
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      console.log(onAddTask);
      console.log(taskInput);
      taskInput = ""; // Clear the input
    }
  };

  return (
    <div className="flex gap-5">
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button
        className="btn btn-ghost border border-neutral-500 p-2"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
