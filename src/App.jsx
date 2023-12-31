import { useState } from "react";
import { HomePage } from "./page/HomePage";
import "./styles/index.scss";

function App() {
  const [listNotes, setListNotes] = useState([]);

  const addNote = (title, message , category) => {
    const id = crypto.randomUUID();
    console.log(id);
    const newNote = { title, message, category , id };
    setListNotes([...listNotes, newNote]);
    console.log(listNotes);
  };

  const removeNote = (id) => {
    const listeFiltered = listNotes.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });
    setListNotes(listeFiltered);
  };

  return (
    <>
      <HomePage
        listNotes={listNotes}
        addNote={addNote}
        removeNote={removeNote}
      />
    </>
  );
}

export default App;
