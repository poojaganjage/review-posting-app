import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'The Product is awesome!!',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'Value for money',
      date: '21/04/2021',
    },
    {
      id: nanoid(),
      text: 'Room for improvement!',
      date: '28/04/2021',
    },
    {
      id: nanoid(),
      text: 'Did not meet the expectations!',
      date: '30/04/2021',
    }
  ]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id
    });
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} previousDarkMode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList 
          notes={notes.filter((note) => {
            return note.text.toLocaleLowerCase().includes(searchText)
          })} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote} 
        />
      </div>
    </div>
  );
}
export default App;
