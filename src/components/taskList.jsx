function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center gap-4 bg-gray-600 rounded-lg p-2 mb-3"
        >
          <span>{task}</span>
          <button
            onClick={() => onDeleteTask(index)}
            className="bg-yellow-500 text-white rounded-lg p-1 hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
