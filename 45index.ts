function createCar(manufacturer, modelName, options = {}) {
    const car = {
      manufacturer: manufacturer,
      modelName: modelName,
      ...options // Spread the additional keyword arguments
    };
    return car;
  }
  
  // Call the function with required information and additional details
  const carInfo = createCar('Toyota', 'Camry', { color: 'Blue', year: 2023 });
  
  // Print the object to check the stored information
  console.log(carInfo);
  