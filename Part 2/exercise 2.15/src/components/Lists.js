import React from "react";

const Lists = ({ Show, filter }) => {
  return (
    <div>
      {Show.length < 10 || !filter
        ? Show
        : "Too many matches, specify another filter"}
    </div>
  );
};

export default Lists;