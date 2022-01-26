import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61f0434cfa88852625a05979",
      user: "61f00b9853b584b4bae0fe75",
      title: "Third note",
      description: "This is my Third note",
      tag: "Third",
      date: "2022-01-25T18:37:00.643Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO: API call
    console.log("adding a new note");
    const note = {
      _id: "61f0434cfa88852625a05339",
      user: "61f00b9853b584b4bae0fe75",
      title: title,
      description: description,
      tag: tag,
      date: "2022-01-25T18:37:00.643Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = (id) => {
    //todo api call
    console.log("Deleting note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id !== id});
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = () => {};

  return (
    // values holds funtions that we want to provide
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
