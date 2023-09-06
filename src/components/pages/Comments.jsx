import useFetch from "../Hooks/useFetch";

const Comments = () => {
  const [comments] = useFetch(
    [],
    "https://jsonplaceholder.typicode.com/comments"
  );
  return <div>Comments</div>;
};

export default Comments;
