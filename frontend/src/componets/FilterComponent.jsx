import React, { useState } from "react";

const FilterComponent = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setQuery(inputValue);

    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={query}
        onChange={handleInputChange}
      />

      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>{query !== "" ? "The data you entered is not found." : ""}</p>
      )}
    </div>
  );
};

export default FilterComponent;
