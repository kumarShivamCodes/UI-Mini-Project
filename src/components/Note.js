import React from "react";

const Note = ({ note, onNoteClick }) => {
  return (
    <div onClick={() => onNoteClick(note)}>
      <ul>
        <li className="note-title">{note.title}</li>
      </ul>
    </div>
  );
};

export default Note;
