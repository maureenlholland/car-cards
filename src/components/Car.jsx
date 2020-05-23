import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, IconButton } from 'evergreen-ui';
import CarNotes from './CarNotes';
import CarSummary from './CarSummary';
import CarAttributes from './CarAttributes';
import cars from '../mockData/cars';

function Car() {
  // on mount, use id to fetch info from db
  let { id } = useParams();
  // mock data for now
  const car = cars[0];

  return (
    <Card elevation={3} background="white" padding="20px" className={`car car--${id}`}>
        <NavLink to={`/form?id=${car.id}`}>
          <IconButton icon="edit" />
        </NavLink>
        {/* are you sure popup, delete from db, update list */}
        <IconButton icon="trash" />
        <CarSummary car={car} />
        <CarAttributes attributes={car.attributes} />
        <CarNotes savedNotes={car.notes} />
    </Card>
  );
}

export default Car;