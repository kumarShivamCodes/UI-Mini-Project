import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import NoteDetail from "./components/NoteDetail";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  //Add Note
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newNote = { id, ...note };
    setNotes([...notes, newNote]);
  };

  //Select Note
  const onSelectingNote = (note) => {
    setSelectedNote(note);
  };

  // Update Note
  const updateNote = (updatedNote) => {
    setNotes((prevNotes) => prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
  };

  return (
    <div>
      <div className="container">
        <Header />
        <AddNote onAdd={addNote} />
      </div>
      <div className="notes">
        <div className="noteSidebar">
          <Notes notes={notes} onNoteClick={onSelectingNote} />
        </div>
        <div className="noteContent">{selectedNote && <NoteDetail note={selectedNote} onUpdateNote={updateNote} />}</div>
      </div>
    </div>
  );
}

export default App;
