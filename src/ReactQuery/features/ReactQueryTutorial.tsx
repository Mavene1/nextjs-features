import React, { useState } from "react";
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import fetchTodos from "@/ServerActions/lib/fetchTodos";
import { addTodo } from "@/ServerActions/lib/actions";

const ReactQueryTutorial = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const { data, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["fetchTodosQuery"],
  });

  const { mutateAsync } = useMutation({
    mutationFn: (data: FormData) => addTodo(data),
    onSuccess: () => {
      console.log("success")
      // queryClient.invalidateQueries(["fetchTodosQuery"]);
    },
  });

  console.log("Query: ", data);
  // console.log("Mutation: ", mutateAsync);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      await mutateAsync(formData);
      setTitle("");
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
};

export default ReactQueryTutorial;
