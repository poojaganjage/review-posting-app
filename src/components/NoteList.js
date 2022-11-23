import React from 'react';
import Note from '../components/Note';
import AddNote from '../components/AddNote';

function NoteList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='note-list'>
      {
        notes.map((note) => {
          return <Note 
            key={note.id}
            id={note.id} 
            text={note.text} 
            date={note.date} 
            handleDeleteNote={handleDeleteNote}
          />
        })
      }
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
export default NoteList;
