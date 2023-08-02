import React from "react";
import Note from "./Note";

const Notes = ({ notes, onNoteClick, emptySelectedNote }) => {
  return (
    <div className="notesWrapper">
      {notes.map((note) => (
        <Note key={note.id} note={note} onNoteClick={onNoteClick} emptySelectedNote={emptySelectedNote} />
      ))}
    </div>
  );
};

export default Notes;
