import Completed from "./TaskList/Completed";
import Ongoing from "./TaskList/Ongoing";
import Todo from "./TaskList/Todo";

const DisplayTask = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold my-8">Task List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <div>
          <Todo></Todo>
        </div>
        <div>
          <Ongoing></Ongoing>
        </div>
        <div>
          <Completed></Completed>
        </div>
      </div>
    </>
  );
};

export default DisplayTask;