import React from 'react';
import { useParams } from "react-router-dom";
import {
  Heading,
  Button
} from 'evergreen-ui'

function SingleCar() {
  let { id } = useParams();

  return (
    <div className="car__single">
        <Heading is="h2">Car ID: {id}</Heading>
        <Button appearance="primary">Edit</Button>
    </div>
  );
}

export default SingleCar;