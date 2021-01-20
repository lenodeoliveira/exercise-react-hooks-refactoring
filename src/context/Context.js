import React, { createContext, useState } from 'react';

const CarsContext = createContext();

const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState({ red: false, blue: false, yellow: false });

  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const objCars = { cars, moveCar };

  return (
    <CarsContext.Provider value={objCars}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsContext, CarsProvider as Provider };