import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  function handleChange(event) {
    // const name = event.target.name;
    // const value = event.target.value
    const { name, value } = event.target;
    setNote(prevNotes => {
      return {
        ...prevNotes,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({title:'', content: ''})
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title} />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content} />
        <button onClick={submitNote} >
          <AddCircleIcon/>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;