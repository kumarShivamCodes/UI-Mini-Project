import React, { useState, useEffect } from "react";

const NoteDetail = ({ note, onUpdateNote, onDeleteNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(note.title);
    setDescription(note.description);
  }, [note]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in the title and description");
      return;
    }
    console.log(title, description);
    const updatedNote = { ...note, title, description };
    onUpdateNote(updatedNote);
  };

  const deleteNote = () => {
    onDeleteNote(note);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Description</label>
        <textarea cols="20" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <input type="submit" value="Save Task" className="btn" />
      <input type="button" value="Delete Task" className="btn btn-del" onClick={deleteNote} />
    </form>
  );
};

export default NoteDetail;
