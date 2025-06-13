import { todos } from "../data";

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const updated = await request.json();
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return new Response("Not found", { status: 404 });

  todos[index].title = updated.title;
  return new Response(JSON.stringify(todos[index]));
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return new Response("Not found", { status: 404 });

  const deleted = todos.splice(index, 1);
  return new Response(JSON.stringify(deleted[0]));
}
