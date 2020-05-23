import React from 'react';
import { TextareaField } from 'evergreen-ui';

export default function CarFormNote({ note, handleChange }) {
    return (
        <TextareaField
            marginTop="30px"
            className="car-form-note"
            label="Note"
            description="Highlight pros or cons, add personal opinions, link to outside reviews."
            inputHeight={200}
            value={note}
            onChange={(e) => handleChange(e.target.value)}
        />
    )
}
