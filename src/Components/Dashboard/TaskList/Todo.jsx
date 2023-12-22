import Swal from "sweetalert2";
import useTask from "../../../Hooks/useTask";
import Loader from "../../../Shared/Loader";
import axiosSecure from "../../../Api";

const Todo = () => {
  const [task, isLoading, refetch] = useTask();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`task/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your task item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  if (isLoading) return <Loader></Loader>;
  return (
    <div className="bg-rose-100 p-4 rounded-lg">
      <h1 className="text-center text-3xl font-medium mt-2 mb-4">ToDo List</h1>
      <div className="space-y-4">
        {task?.map((taskData) => (
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={taskData._id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{taskData.title}</h2>
              <p>{taskData.description}</p>
              <p>Deadlines: {taskData.deadlines}</p>
              <p>Priority: {taskData.priority}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Edit</button>
                <button
                  onClick={() => handleDelete(taskData._id)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
