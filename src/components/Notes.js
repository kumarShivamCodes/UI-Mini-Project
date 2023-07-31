import React from "react";
import Note from "./Note";

const Notes = ({ notes, onNoteClick }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} onNoteClick={onNoteClick} />
      ))}
    </div>
  );
};

export default Notes;
