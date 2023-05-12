import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/gallery">
        <button>
          Home
        </button>
      </Link>
      <Link to="/gallery/cyber">
        <button>
          Cyber
        </button>
      </Link>
      <Link to="/gallery/dreams">
        <button>
          Dreams
        </button>
      </Link>
      <Link to="/gallery/glitch">
        <button>
          Glitch
        </button>
      </Link>
      <Link to="/gallery/misc">
        <button>
          Misc
        </button>
      </Link>
    </nav>
  );
}
