import useFetch from "../Hooks/useFetch";

const Posts = () => {
  const [posts] = useFetch([], "https://jsonplaceholder.typicode.com/posts");

  return <div>Posts</div>;
};

export default Posts;
