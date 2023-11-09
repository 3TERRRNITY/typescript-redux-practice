import React, { FC, useState, ChangeEvent } from "react";

interface INewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: FC<INewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState<string>("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event?.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        value={note}
        onChange={updateNote}
        type="text"
        name="note"
        placeholder="Note"
      />
      {note ? (
        <button onClick={onAddNoteClick}>Add note</button>
      ) : (
        <button disabled onClick={onAddNoteClick}>
          Add note
        </button>
      )}
    </div>
  );
};
