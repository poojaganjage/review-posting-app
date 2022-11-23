import React, {useState} from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function AddNote({handleAddNote}) {
  const[noteText, setNoteText] = useState('');
  const characterLimit = 500;

  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  }
  return (
    <div className='note new'>
      <textarea cols='10' rows='8' placeholder='Type Reviews Here...' value={noteText} onChange={handleChange}></textarea>
      <div className='note-footer'>
        <small>{characterLimit - noteText.length} left</small>
        <Button className='save' onClick={handleSaveClick}>Publish <ArrowUpwardIcon /></Button>
      </div>
    </div>
  );
}
export default AddNote;
