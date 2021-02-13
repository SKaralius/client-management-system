import { Link } from "react-router-dom";

import React from "react";

export function ListLink({ route, text }) {
  return (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to={route}>
        {text}
      </Link>
    </li>
  );
}
