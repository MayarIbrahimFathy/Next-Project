import { todos } from "./data";

export async function GET() {
  return new Response(JSON.stringify({ data: todos }), { status: 200 });
}

export async function POST(request) {
  const newTodo = await request.json();
  const todo = {
    id: todos.length + 1,
    title: newTodo.title,
  };
  todos.push(todo);
  return new Response(JSON.stringify(todo), { status: 201 });
}
