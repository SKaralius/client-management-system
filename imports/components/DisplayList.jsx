import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export function DisplayList({ list }) {
  let { path, url } = useRouteMatch();
  return (
    <ul className="my-5">
      {list.map((item) => {
        return (
          <li key={item._id} className="d-flex justify-content-around my-2">
            {item.name}
            <Link className="btn btn-primary" to={`${url}/${item._id}`}>
              Edit
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
