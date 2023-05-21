import React, { useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

function FilterBar(props) {
    
    const [toggleLabel, setToggleLabel] = useState({});

    const handleSelect = (filterType, value) => {
        props.filterPosts(filterType, value);
        setToggleLabel((prevKeyValuePairs) => ({
          ...prevKeyValuePairs,
          [filterType]: value,
        }));

    };

   const dropdownCreate = (value) => {
  const labels = [];
  return props.obj.map((post, index) => {
    if (!labels.includes(post[value])) {
      labels.push(post[value]);
      console.log(post[value]);
      return (
        <Dropdown.Item
          key={index}
          active={toggleLabel[value] === post[value]}
          eventKey={post[value]}
          onClick={(event) => handleSelect(value, post[value], event)}
        >
          {post[value]}
        </Dropdown.Item>
      );
    }
    return null; // Return null for duplicate values to avoid React warning
  });
};


  return (
    <div className="filter-bar">
{[{name: 'Name',variant: 'primary'}].map(
        (name) => (
          <SplitButton
            key={name.name}
            id={`dropdown-split-variants-${name.variant}`}
            variant={name.variant.toLowerCase()}
            title={name.name}
            toggleLabel={toggleLabel["animal_name"] === undefined ? 'All' : toggleLabel["animal_name"]}
          >
            <Dropdown.Item 
            eventKey="all" onClick={(event) => handleSelect("animal_name","all", event)}>All</Dropdown.Item>
            {dropdownCreate("animal_name")}
          </SplitButton>
        ),
      )}
    </div>
  );
}

export default FilterBar;