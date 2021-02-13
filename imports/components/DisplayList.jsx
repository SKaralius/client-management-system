import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export function DisplayList({ list }) {
  let { path, url } = useRouteMatch();
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item._id}>
            {item.name}
            <button>View</button>
            <Link to={`${url}/${item._id}`}>Edit</Link>
          </li>
        );
      })}
    </ul>
  );
}
