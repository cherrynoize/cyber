import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <button>
          Home
        </button>
      </Link>
      <Link to="cyber">
        <button>
          Cyber
        </button>
      </Link>
      <Link to="dreams">
        <button>
          Dreams
        </button>
      </Link>
      <Link to="glitch">
        <button>
          Glitch
        </button>
      </Link>
      <Link to="misc">
        <button>
          Misc
        </button>
      </Link>
      <a className="right" to="https://cherrynoize.github.io">
        <button className="arrow to-left">
          <span>Back</span>
        </button>
      </a>
    </nav>
  );
}
