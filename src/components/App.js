import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }

  function deleteNote(noteId) {
    console.log(noteId);
    setNotes(prevNotes => {
      return (
        prevNotes.filter((note, index) => index !== noteId)
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}
      />
      {notes.map((note, i) =>
        <Note
          key={i}
          id={i}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
