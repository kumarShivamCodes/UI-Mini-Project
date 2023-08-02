import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import NoteDetail from "./components/NoteDetail";
import Navbar from "./components/Navbar";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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

  const deleteNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
    setSelectedNote(null);
  };

  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/notes">
            <div className="notes">
              <div className="noteSidebar">
                <Notes notes={notes} onNoteClick={onSelectingNote} />
              </div>
              <div className="noteContent">{selectedNote && <NoteDetail note={selectedNote} onUpdateNote={updateNote} onDeleteNote={deleteNote} />}</div>
            </div>
          </Route>

          <Route path="/">
            <div className="container">
              <Header />
              <AddNote onAdd={addNote} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
