import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmMDBiOTg1M2I1ODRiNGJhZTBmZTc1In0sImlhdCI6MTY0MzEyODQ4OH0.AK46Twel7eWiy8g3l7mpjEs3JtH-ivWsnGxvBlLqKhU'
      } 
    })
    //logic to get
    const json = await response.json();
    console.log(json);
    setNotes(json);
    
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmMDBiOTg1M2I1ODRiNGJhZTBmZTc1In0sImlhdCI6MTY0MzEyODQ4OH0.AK46Twel7eWiy8g3l7mpjEs3JtH-ivWsnGxvBlLqKhU'
      },
      body: JSON.stringify({title, description, tag})
    })
    const json = response.json();
    console.log(json);

    //logic to add
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
    //api call
    //logic to delete
    console.log("Deleting note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id !== id});
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmMDBiOTg1M2I1ODRiNGJhZTBmZTc1In0sImlhdCI6MTY0MzEyODQ4OH0.AK46Twel7eWiy8g3l7mpjEs3JtH-ivWsnGxvBlLqKhU'
        },
        body: JSON.stringify({title, description, tag})
      })
      const json = response.json();
      console.log(json);

    //to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    // values holds funtions that we want to provide
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
