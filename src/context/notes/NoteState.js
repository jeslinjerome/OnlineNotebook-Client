import React from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {

  return (
    // <values holds funtions that we want to provide
    <NoteContext.Provider value={{}}> 
        {props.children}
    </NoteContext.Provider>
  )
};

export default NoteState;
