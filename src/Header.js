import React from 'react';
import {withRouter} from 'react-router-dom';

const Header = (props) => {
  const header = {
    height: '40px',
    fontSize: '40px',
    background: '#cceeff',
    lineHeight:'40px',
    padding: '20px',
    margin: '20px 0px'
  }

  const btn ={
    border: 'none',
    height:'40px',
    margin:'0px 10px 50px 10px',
    fontSize: '30px',
    paddingBottom:'20px',
    background: '#2eb8b8',
    color:'white'
  }

  const handleClickHome = () => {
    props.history.push('/')
  }

  const handleClickEmployeeDirectory = () => {
    // give Header component the access to the history props
    props.history.push('/directory')
  }

  return (
    <div>
      <div style={header}>HEADER!
      <button style={btn} onClick={handleClickHome}>Home Page</button>
      <button style={btn}  onClick={handleClickEmployeeDirectory}>Directory</button>
      </div>
    </div>
  );
}

export default withRouter(Header);
