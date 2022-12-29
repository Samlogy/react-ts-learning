import React, { useState } from "react";

interface IFilter {
  filter: string;
  onFilter: any;
}
function Filter({ filter, onFilter }: IFilter) {
  return (
    <div>
      <h3>Filter</h3>
      <input placeholder="Search..." value={filter} onChange={onFilter} />
    </div>
  );
}

export default Filter;
