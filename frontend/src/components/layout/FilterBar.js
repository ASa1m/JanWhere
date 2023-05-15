import React, { useEffect, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { useNavigate, useParams } from 'react-router-dom';

function SplitVariantExample(props) {
    
    const navigate = useNavigate();

    const { name } = useParams();

    const handleSelect = (eventKey) => {
        navigate(`/discover/${eventKey.toLowerCase()}`);
    };

    const dropdownCreate = (value) => {
        const labels = [];
        return props.obj.map((animal, index) => {
            if (!labels.includes(animal[value])) {
                labels.push(animal[value]);
                console.log(name);
                console.log(animal[value]);
                return <Dropdown.Item key={index}  active={name.toUpperCase()==animal[value]} eventKey={animal[value]} onSelect={handleSelect}>{animal[value]}</Dropdown.Item>;
            }
        });
    };

  return (
    <>
{[{name: 'Name',variant: 'primary'}, {name: 'Region',variant: 'secondary'}, {name: 'Population',variant: 'success'}, {name: 'Category',variant: 'danger'}].map(
        (name) => (
          <SplitButton
            key={name.name}
            id={`dropdown-split-variants-${name.variant}`}
            variant={name.variant.toLowerCase()}
            title={name.name}
            toggleLabel=''
          >
            {dropdownCreate(name.name.toLowerCase())}
          </SplitButton>
        ),
      )}
    </>
  );
}

export default SplitVariantExample;