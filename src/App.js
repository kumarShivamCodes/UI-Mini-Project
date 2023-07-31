import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  //Add Note
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newNote = { id, ...note };
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <AddNote onAdd={addNote} />
      </div>
      <div className="notes">
        <div className="noteSidebar">
          <Notes notes={notes} onNoteClick={setSelectedNote} />
        </div>
        <div className="noteContent">{selectedNote && <p>{selectedNote.description}</p>}</div>
      </div>
    </div>
  );
}

export default App;
