import { useState } from "react";

const NoteModal = ({closeModal, addNote}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addNote(title, description);    
  };

  return (
    <div className="flexwd inset-0 bg-gray-800 bg-opacity-75 justify-center inems-center">
      <div className="p-8 rounded">
        <h2 className="text-xl font-bold mb-4">Add New Note</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="border p-2 w-full mb-4"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
            className="border p-2 w-full mb-4"
          />
          <button type="submit" className="btn btn-primary px-4 py-2 rounded">
            Add Note
          </button>
        </form>
        <button className="btn btn-error mt-4" onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default NoteModal;
