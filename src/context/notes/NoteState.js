import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const notesInitial = [
      {
        "_id": "61f0434cfa88852625a05979",
        "user": "61f00b9853b584b4bae0fe75",
        "title": "Third note",
        "description": "This is my Third note",
        "tag": "Third",
        "date": "2022-01-25T18:37:00.643Z",
        "__v": 0
      },
      {
        "_id": "61f0434cfa88852625a05979",
        "user": "61f00b9853b584b4bae0fe75",
        "title": "Third note",
        "description": "This is my Third note",
        "tag": "Third",
        "date": "2022-01-25T18:37:00.643Z",
        "__v": 0
      },
      {
        "_id": "61f0434cfa88852625a05979",
        "user": "61f00b9853b584b4bae0fe75",
        "title": "Third note",
        "description": "This is my Third note",
        "tag": "Third",
        "date": "2022-01-25T18:37:00.643Z",
        "__v": 0
      },
      {
        "_id": "61f0434cfa88852625a05979",
        "user": "61f00b9853b584b4bae0fe75",
        "title": "Third note",
        "description": "This is my Third note",
        "tag": "Third",
        "date": "2022-01-25T18:37:00.643Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(notesInitial);

  return (
    // values holds funtions that we want to provide
    <NoteContext.Provider value={{notes, setNotes}}> 
        {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState;
