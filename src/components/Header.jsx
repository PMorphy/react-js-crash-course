import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
const Header = ({ onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : '#16ac42'}
        text={showAdd ? 'Close' : 'Add'}
      />
    </header>
  );
};

Header.propTypes = {
  onAdd: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
