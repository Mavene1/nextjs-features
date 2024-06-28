import TodoList from "../ServerActions/features/TodoList"
import AddTodo from "../ServerActions/features/AddTodo"
import ReactQuery from "../ReactQuery/features/ReactQuery"
import PostList from "@/TypeScript/features/posts/PostList"
import Parent from "@/TypeScript/features/children/Parent";
import Child from "@/TypeScript/features/children/Child";
import SecondChild from "@/TypeScript/features/children/SecondChild";
import Events from "@/TypeScript/features/Events";
import UseState from '../TypeScript/features/UseState';
import UseContext from "@/TypeScript/features/UseContext";
import UseRef from "@/TypeScript/features/UseRef";
import ShapeList from "@/TypeScript/features/exclude/ShapeList";

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
      {/* <Events/> */}
      {/* <UseState/> */}
      {/* <UseContext/> */}
      {/* <UseRef/> */}
      {/* <ItemList/> */}
      <ShapeList/>
    </>
  )
}
