import React from 'react';
import { useParams } from "react-router-dom";
import { Pane } from 'evergreen-ui';
import CarNotes from './CarNotes';
import CarSummary from './CarSummary';
import CarAttributes from './CarAttributes';
import car from '../mockData/car';

function Car() {
  // on mount, use id to fetch info from db
  let { id } = useParams();

  return (
    <Pane className={`car car--${id}`}>
        {/* add edit for car summary and attributes, delete for car */}
        <CarSummary car={car} />
        <CarAttributes attributes={car.attributes} />
        <CarNotes savedNotes={car.notes} />
    </Pane>
  );
}

export default Car;