import React, { useState } from 'react';
import {
    IconButton,
    Button,
    TextInputField,
    FormField,
    Checkbox
} from 'evergreen-ui';

function camelCase(string) {
    const stringArr = Array.from(string);
    return stringArr.reduce((camelCasedString, currentChar, index) => {
        // return existing string if current char is space
        if ((/\s/).test(currentChar)) {
            return camelCasedString;
        }
        // capitalize current char if previous char was space and concat with existing string
        let capitalizeLetter = index > 0 && (/\s/).test(stringArr[index - 1]);
        return camelCasedString += (capitalizeLetter ? currentChar.toUpperCase() : currentChar.toLowerCase());
    }, '');
};

export default function CarFormAttributes({ attributes }) {
    const [attributeList, updateAttributeList] = useState([...attributes])
    const [attribute, setAttribute] = useState('');
    const [addAttribute, setAddAttribute] = useState(false);

    const toggleChecked = (e) => {
        // change appropriate attr to opposite of existing checked status
        const newAttributeList = attributeList.map((attr) => {
            if (attr.value === e.target.value) {
                attr.isChecked = !attr.isChecked;
            }
            return attr;
        });
        updateAttributeList(newAttributeList)
    }

    const addNewAttribute = (e) => {
        if (!attribute) {
            return alert('Cannot add empty attribute. Please fill in the attribute field.')
        }
        // add checked attribute
        const newAttribute = {
            isChecked: true,
            label: attribute,
            value: camelCase(attribute)
        }
        updateAttributeList([...attributeList, newAttribute])
        setAddAttribute(false)
    }

    return (
        <>
            <FormField
                label="Attributes"
                description="Select all that apply. These are searchable tags on the quick view cards"
                className="car-form-attributes"
            >
            {/* on click, toggle checkbox checked attribute */}
                {attributeList.map(({value, label, isChecked}) => {
                    return <Checkbox key={value} label={label} name={value} value={value} checked={isChecked} onClick={(e) => toggleChecked(e)} />
                })}
            </FormField>
            {addAttribute ? (
                <>
                    <TextInputField
                        label="New Attribute"
                        name="attribute"
                        className="car-form-attributes__single"
                        placeholder="Something I want"
                        value={attribute}
                        onChange={(e) => setAttribute(e.target.value)}
                    />
                    <Button appearance="primary" type="button" onClick={addNewAttribute}>Add</Button>
                </>
            ) : <IconButton icon="plus" onClick={e => setAddAttribute(true)} />}
        </>
    )
}
