import React, {useContext} from "react";
import NoteContext from "../context/notes/NoteContext";


const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                {/* <div className="d-flex align-item-center"> */}
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">{note.title}</h5>
                  </div>
                  <div>
                  <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                  <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                  </div>
                </div>
                <p className="card-text">{note.description}</p>
                <p className="card-text">#{note.tag}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
