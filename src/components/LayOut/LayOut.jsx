import React from 'react';
import { Link, Outlet } from 'react-router-dom';

LayOut.propTypes = {};

function LayOut(props) {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/postlist1'>Post List 1</Link>
        </li>
        <li>
          <Link to='/postlist2'>Post List 2</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

export default LayOut;
