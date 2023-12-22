import { useForm } from "react-hook-form"
import axiosSecure from "../../Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const CreateTask = () => {
   const { register, handleSubmit } = useForm()
   const navigate = useNavigate();
   const {user} = useAuth();
  const onSubmit = async (data) => {
    const taskItem = {
     title: data.title,
     deadlines: data.deadlines,
     description: data.description,
     priority: data.priority,
     email: user.email,
    }
    const taskRes = await axiosSecure.post("/task", taskItem);
    if(taskRes.data.insertedId){
      toast.success('Task added successfully!');
      navigate("/dashboard/show-task");
    } else{
      toast.error('Something went wrong!');
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-rose-100 shadow-lg p-6 max-w-xs mt-4 rounded-md">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Task Title</span>
        </div>
        <input
          {...register("title")}
          type="text"
          placeholder="Task Title"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control mt-4 w-full max-w-xs">
        <div className="label">
          <span className="label-text">Deadlines</span>
        </div>
        <input
          {...register("deadlines")}
          type="date"
          placeholder="Deadlines"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <label className="form-control my-4 w-full max-w-xs">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          {...register("description")}
          type="text"
          placeholder="Describe about your task"
          className="textarea textarea-bordered w-full max-w-xs"
        />
      </label>

      <select defaultValue={"default"}
        {...register("priority")}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled value={"default"}>
          Select Your Priority
        </option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>
      <br />
      <button className="btn mt-4 btn-warning">Create task</button>
    </form>
  );
};

export default CreateTask;