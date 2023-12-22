import axiosSecure from ".";

// save user to database
export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
  };
  const { data } = await axiosSecure.put(`/users`, currentUser);
  return data;
};

// get task data
export const getTask = async (email) => {
  const { data } = await axiosSecure.get(`/task/${email}`);
  return data;
};