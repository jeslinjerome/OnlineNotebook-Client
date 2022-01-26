import React, {useContext, useState}  from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title:"", description:"", tag:"default"}); 

  const handleClick = (e)=>{
      e.preventDefault();
        addNote(note.title, note.description, note.tag);
  }

  const onChange = (e)=>{
      //set whatever change is set to the its value
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form action="" className="my-3">
          <div className="mb-3">
            <lable htmlFor="title" className="form-lable">Title</lable>
            <input type="text" className="form-control" id="title" name="title" onChange={onChange} />
          </div>
          <div className="mb-3">
            <lable htmlFor="description" className="form-lable">Description</lable>
            <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
          </div>
          <div className="mb-3">
            <lable htmlFor="tag" className="form-lable">Tag</lable>
            <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
      </div>
    </>   
  );
};

export default AddNote;
