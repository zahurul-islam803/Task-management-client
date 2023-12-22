
import useTask from "../../../Hooks/useTask";
import Loader from "../../../Shared/Loader";

const Todo = () => {
  const [task, isLoading] = useTask();
  if (isLoading) return <Loader></Loader>;
  return (
    <div className="bg-rose-100 p-4 rounded-lg">
    <h1 className="text-center text-3xl font-medium mt-2 mb-4">ToDo List</h1>
      <div className="space-y-4">
        {task?.map((taskData) => (
          <div key={taskData._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{taskData.title}</h2>
              <p>{taskData.description}</p>
              <p>Deadlines: {taskData.deadlines}</p>
              <p>Priority: {taskData.priority}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;