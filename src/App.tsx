import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector } from "react-redux";
import { NotesState } from "./noteReducer";
import { useDispatch } from "react-redux";
import { addNote } from "./actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
