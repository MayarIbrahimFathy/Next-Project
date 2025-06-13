"use client";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "bootstrap";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const [editId, setEditId] = useState(null); 

  const refresh = async () => {
    const res  = await fetch("/api/todos");
    const json = await res.json();
    setTodos(json.data);
  };

  const resetForm = () => {
    setFormTitle("");
    setEditId(null);
    document.getElementById("postModalClose")?.click();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url    = editId ? `/api/todos/${editId}` : "/api/todos";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: formTitle }),
    });
    await refresh();
    resetForm();
  };

  const handleEdit = todo => {
    setEditId(todo.id);
    setFormTitle(todo.title);
    new Modal("#postModal").show();
  };

  const handleDelete = async id => {
    if (!confirm("Delete this todo?")) return;
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    await refresh();
  };

  useEffect(() => { refresh(); }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Todos CRUD Demo</h1>

      <button
        className="btn btn-danger mb-3"
        onClick={() => {
          setEditId(null);
          setFormTitle("");
          new Modal("#postModal").show();
        }}
      >
        + New Todo
      </button>

      <ul className="list-group">
        {todos.map(t => (
          <li key={t.id} className="list-group-item d-flex justify-content-between">
            <span>{t.title}</span>
            <div>
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => handleEdit(t)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(t.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="modal fade" id="postModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <form onSubmit={handleSubmit} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {editId ? "Edit Todo" : "New Todo"}
              </h5>
              <button
                id="postModalClose"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                placeholder="Todo title"
                value={formTitle}
                onChange={e => setFormTitle(e.target.value)}
                required
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                {editId ? "Save Changes" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
