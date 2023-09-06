import useFetch from "../Hooks/useFetch";

const Users = () => {
  const [users] = useFetch([], "https://jsonplaceholder.typicode.com/users");

  return <div>Users</div>;
};

export default Users;
