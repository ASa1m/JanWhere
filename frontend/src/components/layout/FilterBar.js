import React, { useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

function FilterBar(props) {
    
    const [toggleLabel, setToggleLabel] = useState({});

    const handleSelect = (filterType, value) => {
        props.filterAnimals(filterType, value);
        setToggleLabel((prevKeyValuePairs) => ({
          ...prevKeyValuePairs,
          [filterType]: value,
        }));

    };

    const dropdownCreate = (value) => {
        const labels = [];
        props.obj.forEach((animal, index) => {
            if (!labels.includes(animal[value])) {
                labels.push(animal[value]);
                return <Dropdown.Item key={index}  active={toggleLabel[value]===animal[value]} eventKey={animal[value]} onClick={(event) => handleSelect(value,animal[value], event)}>{animal[value]}</Dropdown.Item>;
            }
        });
    };

  return (
    <div className="filter-bar">
{[{name: 'Name',variant: 'primary'}, {name: 'Region',variant: 'secondary'}, {name: 'Population',variant: 'success'}, {name: 'Category',variant: 'danger'}].map(
        (name) => (
          <SplitButton
            key={name.name}
            id={`dropdown-split-variants-${name.variant}`}
            variant={name.variant.toLowerCase()}
            title={name.name}
            toggleLabel={toggleLabel[name.name.toLowerCase()] === undefined ? 'All' : toggleLabel[name.name.toLowerCase()]}
          >
            <Dropdown.Item 
            eventKey="all" onClick={(event) => handleSelect(name.name.toLowerCase(),"all", event)}>All</Dropdown.Item>
            {dropdownCreate(name.name.toLowerCase())}
          </SplitButton>
        ),
      )}
    </div>
  );
}

export default FilterBar;