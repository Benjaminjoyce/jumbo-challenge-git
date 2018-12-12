/* @flow*/
import React from "react";

export const Info = data => {
  let title = data.name || data.title;
  return (
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">
        {title}
      </span>
      <span>{data.description}</span>
    </div>
  );
};
