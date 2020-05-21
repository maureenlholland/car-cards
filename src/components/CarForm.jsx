import React from 'react';
import {
  Pane,
  Heading,
  TextInputField,
  SelectField,
  TextareaField,
  Checkbox
} from 'evergreen-ui'


function CarForm() {
  return (
    <>
      <Heading is="h2">Car Form: blank for new, pre-filled for existing</Heading>
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
        />
        <Pane>
          {/* attributes can be used as tags */}
          <label>Select all attributes that apply:</label>
          <Checkbox label="AWD" />
          <Checkbox checked label="Nearby dealership" />
          <Checkbox label="Good fuel economy" />
          <Checkbox label="Turbo engine" />
          {/* add attribute button */}
        </Pane>
        {/* hide textarea behind "Add note" button, allows user attribution, easier to edit directly on existing car page */}
        <TextareaField
          label="Notes"
          description="Highlight pros or cons, add personal opinions, link to outside reviews."
          inputHeight={200}
        />
      </form>
    </>
  );
}

export default CarForm;