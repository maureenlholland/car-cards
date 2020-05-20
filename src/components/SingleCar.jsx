import React from 'react';
import { Button } from 'cauldron-react';

// const wrapperStyles = { maxWidth: '900px', margin: '0 auto', padding: '40px' };

function SingleCar() {
  return (
    <div className="car__single">
        <h1>Name of Car</h1>
        <Button>Edit Car</Button>
    </div>
  );
}

export default SingleCar;