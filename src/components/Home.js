import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Home = () => {

 const context = useContext(NoteContext);
  const {notes, setNotes} = context;

  return ( 
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form action="" className="my-3">
          <div className="mb-3">
            <lable className="form-lable">Add a Title</lable>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <lable className="form-lable">Add a Note description</lable>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <lable className="form-lable">Add a Tag</lable>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>

      <div className="container my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return note.title;
        }) }
      </div>
    </div>
  );
};

export default Home;
