import React, { useState } from 'react';
import {
  Pane,
  IconButton,
  Button,
  Heading,
  TextInputField,
  FormField,
  SelectField,
  RadioGroup,
  Checkbox
} from 'evergreen-ui'


function CarForm() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [link, setLink] = useState('');
  const [highPrice, setHighPrice] = useState('');
  const [lowPrice, setLowPrice] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [attribute, setAttribute] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    // clean data
    // call firebase to save car
      // on success, redirect to new car card 
      // on failure, display errors
  }

  const addAttribute = (e) => {
    e.preventDefault();
    // add checkbox with new attribute, default checked
  }

  return (
    <Pane className="car__form">
      {/* pre-fill form if editing existing car, show blank if new */}
      <Heading is="h2">Car Form</Heading>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextInputField
          label="Make"
          name="make"
          placeholder="Mazda"
          required
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <TextInputField
          label="Model"
          name="Model"
          placeholder="CX-5"
          required
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        {/* on change, show selected field */}
        <SelectField
          label="Year"
          name="year"
          defaultValue="2020"
          value={undefined}
          onChange={event => console.log(event.target.value)}
          required
        >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </SelectField>
        <TextInputField
          label="Link"
          name="link"
          type="url"
          placeholder="https://www.mazda.ca/en/vehicles/cx-5/overview/"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <RadioGroup
          label="Status"
          value={undefined}
          options={[{label: 'New', value: 'new'}, {label: 'Pre-owned', value: 'preOwned'}]}
          onChange={(e) => console.log(e)}
        />
        <FormField
          label="Price Range"
        >
          <TextInputField
            label="High"
            name="highPrice"
            placeholder="$43,965"
            value={highPrice}
            onChange={(e) => setHighPrice(e.target.value)}
          />
          <TextInputField
            label="Low"
            name="lowPrice"
            placeholder="$30,015"
            value={lowPrice}
            onChange={(e) => setLowPrice(e.target.value)}
          />
        </FormField>
        <FormField
          label="Dimensions"
        >
          <TextInputField
            label="Length"
            name="length"
            placeholder="4550mm"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextInputField
            label="Width"
            name="width"
            placeholder="1840mm"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <TextInputField
            label="Height"
            name="height"
            placeholder="1675mm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </FormField>
        <FormField
          label="Attributes"
          description="Select all that apply. These are searchable tags on the quick view cards"
        >
        {/* on click, toggle checkbox checked attribute */}
        <Checkbox label="AWD" />
        <Checkbox checked label="Nearby dealership" />
        <Checkbox label="Good fuel economy" />
        <Checkbox label="Turbo engine" />
        </FormField>
        <TextInputField
          label="New Attribute"
          name="attribute"
          placeholder="Something I want"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        />
        <Button appearance="primary" type="button" onClick={(e) => addAttribute(e)}>Add</Button>
        {/* on click, transform to save button, show and focus input for new attribute */}
        <IconButton icon="plus" />
        {/* on click, save to db, redirect to new single car page */}
        {/* if error, display error message */}
        <Button appearance="primary" type="submit">Save Car</Button>
      </form>
    </Pane>
  );
}

export default CarForm;