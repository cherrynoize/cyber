import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <a href='https://cherrynoize.github.io/#/contacts'>
        <button className='a'>
          Contacts
        </button>
      </a>
      <a href='https://cherrynoize.github.io/#/contribute'>
        <button className='a'>
          Contribute
        </button>
      </a>
      <span>
        &copy; All rights reserved 2023
      </span>
    </footer>
  );
}
