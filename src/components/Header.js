import React from 'react';
import ReviewsIcon from '@mui/icons-material/Reviews';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Header({handleToggleDarkMode, previousDarkMode}) {
  return (
    <div className='header'>
      <h1>Reviews Corner <ReviewsIcon /></h1>
      {/* <Button className='save' onClick={()=> handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}> */}
      <Button className='save' onClick={()=> handleToggleDarkMode(!previousDarkMode)}>
        <Brightness4Icon />
      </Button>
    </div>
  );
}
export default Header;
