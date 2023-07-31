import React, { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill all the fields");
      return;
    }
    onAdd({ title, description });

    //clear the form fields
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add Note Title" />
        </div>
        <div className="form-control">
          <label>Description</label>
          <textarea cols="20" rows="8" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Add Note Title"></textarea>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddNote;
