import React from 'react';
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
  return (
    <Pane className="car__form">
      {/* pre-fill form if editing existing car, show blank if new */}
      <Heading is="h2">Car Form</Heading>
      <form>
        <TextInputField
          label="Make"
          name="make"
          placeholder="Mazda"
          required
        />
        <TextInputField
          label="Model"
          name="Model"
          placeholder="CX-5"
          required
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
            name="high"
            placeholder="$43,965"
          />
          <TextInputField
            label="Low"
            name="low"
            placeholder="$30,015"
          />
        </FormField>
        <FormField
          label="Dimensions"
        >
          <TextInputField
            label="Length"
            name="length"
            placeholder="4550mm"
          />
          <TextInputField
            label="Width"
            name="width"
            placeholder="1840mm"
          />
          <TextInputField
            label="Height"
            name="height"
            placeholder="1675mm"
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
        />
        <Button appearance="primary">Add</Button>
        {/* on click, transform to save button, show and focus input for new attribute */}
        <IconButton icon="plus" />
        {/* on click, save to db, redirect to new single car page */}
        {/* if error, display error message */}
        <Button appearance="primary">Save Car</Button>
      </form>
    </Pane>
  );
}

export default CarForm;