import React from 'react';
import {
  Heading,
  Button
} from 'evergreen-ui'

function SingleCar() {
  return (
    <div className="car__single">
        <Heading is="h2">Name of Car</Heading>
        <Button>Edit Car</Button>
    </div>
  );
}

export default SingleCar;