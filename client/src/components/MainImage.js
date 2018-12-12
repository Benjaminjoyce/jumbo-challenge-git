import React from "react";

export const MainImage = ({ path, extension }) => {
  return (
    <div className="waves-effect waves-block waves-light">
      <img
        className="activator"
        src={`${path}/portrait_fantastic.${extension}`}
        alt={path}
      />
      <hr />
    </div>
  );
};
