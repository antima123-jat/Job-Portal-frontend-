import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Filter by job title..."
        className="border rounded-md p-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
