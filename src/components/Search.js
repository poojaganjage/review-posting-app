import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search({handleSearchNote}) {
  return (
    <div className='search'>
      <SearchIcon className='search-icons' size="1.3em" />
      <input 
        type='text' 
        placeholder='Search here...' 
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
}
export default Search;
