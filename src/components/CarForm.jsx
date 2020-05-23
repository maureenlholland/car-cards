import React, { useState } from 'react';
import {
  Pane,
  Button,
  Heading,
  TextInputField,
  FormField,
  SelectField,
  RadioGroup,
  Paragraph,
} from 'evergreen-ui';
import CarFormAttributes from './CarFormAttributes';
import CarFormNote from './CarFormNote';
import attributes from '../mockData/attributes';


function CarForm() {
  // on mount, merge blank state with existing car info if params id

  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('2020');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState('new');
  const [highPrice, setHighPrice] = useState('');
  const [lowPrice, setLowPrice] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('validate and save data, redirect to new single car page')
    // get all checked attributes
    // clean data
    // add created at value
    // add created by user value
    // call firebase to save car
      // on success, redirect to new car card 
      // on failure, display errors
  }

  return (
    <Pane className="car-form">
      <Heading is="h2" textAlign="center">{window.location.search ? 'Edit car' : 'New car'}</Heading>
      <form onSubmit={(e) => handleSubmit(e)} style={{ maxWidth: '600px', margin: '0 auto' }}>
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
        <SelectField
          label="Year"
          name="year"
          value={year}
          onChange={e => setYear(e.target.value)}
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
          size={16}
          label="Status"
          value={status}
          options={[{label: 'New', value: 'new'}, {label: 'Pre-owned', value: 'preOwned'}]}
          onChange={(value) => setStatus(value)}
        />
        <FormField
          label="Price Range"
          marginTop="30px"
        >
          <TextInputField
            marginTop="10px"
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
          marginTop="30px"
        >
          <TextInputField
            marginTop="10px"
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
        <CarFormAttributes attributes={attributes} />
        {window.location.search ? (
          <Paragraph>To add, edit, or delete notes, please see the User Notes section on the single car page.</Paragraph>
        ): <CarFormNote note={note} handleChange={setNote} />}
        <Button type="submit">Save Car</Button>
      </form>
    </Pane>
  );
}

export default CarForm;