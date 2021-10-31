import React from 'react';
import { ToggleButton } from 'react-bootstrap';

export default function Button({name, onClick = ()=>{}, initialState}) {
    return (
        <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="radio"
            variant="outline-warning"
            checked={initialState}
            value="1"
            onClick={onClick}
        >
        {name.toUpperCase()}
      </ToggleButton>
    );
}
