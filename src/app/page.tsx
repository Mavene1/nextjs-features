import TodoList from "../ServerActions/features/TodoList"
import AddTodo from "../ServerActions/features/AddTodo"
import ReactQuery from "../ReactQuery/features/ReactQuery"
import PostList from "@/TypeScript/features/PostList"
import Parent from "@/TypeScript/features/children/Parent";
import Child from "@/TypeScript/features/children/Child";
import SecondChild from "@/TypeScript/features/children/SecondChild";
import CRUD from "@/TypeScript/features/CRUD";

export default function Home() {
  return (
    <>
      {/* <AddTodo />
      <TodoList /> */}
      {/* <ReactQuery /> */}
      {/* <PostList/> */}
      {/* <Parent>
        <Child/>
        <SecondChild/>
      </Parent> */}
      <CRUD/>
    </>
  )
}
