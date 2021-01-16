import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div id="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/addPhoto">Add Photo</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
}
