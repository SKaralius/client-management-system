import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export function DisplayList({ list }) {
  let { url } = useRouteMatch();
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item._id}>
            {item.name}
            <Link to={`${url}/${item._id}`}>View</Link>
            <button>Edit</button>
          </li>
        );
      })}
    </ul>
  );
}
