import React from 'react';
import {withRouter} from 'react-router-dom';

const Header = (props) => {

  const handleClickHome = () => {
    props.history.push('/')
  }

  const handleClickEmployeeDirectory = () => {
    // give Header component the access to the history props
    props.history.push('/directory')
  }

  return (
    <div>
      <h1>This is HEADER!!!</h1>
      <button onClick={handleClickHome}>Home Page</button>
      <button onClick={handleClickEmployeeDirectory}>Directory</button>
    </div>
  );
}

export default withRouter(Header);
