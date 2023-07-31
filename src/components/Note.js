import React from "react";

const Note = ({ note, onNoteClick }) => {
  return (
    <div>
      <ul>
        <li
          className="note-title"
          onClick={() => {
            onNoteClick(note);
          }}
        >
          {note.title}
        </li>
      </ul>
    </div>
  );
};

export default Note;
