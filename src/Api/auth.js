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

// get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure.get("/users");
  return data;
};