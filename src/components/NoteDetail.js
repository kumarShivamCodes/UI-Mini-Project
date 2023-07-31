import React, { useState, useEffect } from "react";

const NoteDetail = ({ note }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(note.title);
    setDescription(note.description);
  }, [note]);

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Description</label>
        <textarea cols="20" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default NoteDetail;
