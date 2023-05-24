import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to='https://cherrynoize.github.io/#/contacts'>
        <button className='a'>
          Contacts
        </button>
      </Link>
      <Link to='https://cherrynoize.github.io/#/contribute'>
        <button className='a'>
          Contribute
        </button>
      </Link>
      <span>
        &copy; All rights reserved 2023
      </span>
    </footer>
  );
}
