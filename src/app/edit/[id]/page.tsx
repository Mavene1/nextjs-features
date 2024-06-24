import Todo from "@/ServerActions/features/Todo"
import fetchTodo from "@/ServerActions/lib/fetchTodo"
import { notFound } from "next/navigation"

type Props = {
    params: {
        id: string
    }
}

export default async function page({ params: { id } }: Props) {

    const todo = await fetchTodo(id)

    if (!todo) notFound()

    return (
        <Todo {...todo} />
    )
}