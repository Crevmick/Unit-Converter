import lengthModel from '../Model/lengthModels.js';

export const convertLength = async (req, res) => {
  const { value, from, to } = req.body;
  
  const conversionRates = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    inches: 39.3701,
    feet: 3.28084,
    centimeters: 100,
    millimeters: 1000,
  };

  // Validation
  if (!value || !from || !to) {
    return res.status(400).json({ error: "Please provide 'value', 'from', and 'to' fields." });
  }

  if (isNaN(value)) {
    return res.status(400).json({ error: "'value' must be a valid number." });
  }

  if (!conversionRates[from] || !conversionRates[to]) {
    return res.status(400).json({ error: "Invalid units provided." });
  }

  const result = (parseFloat(value) * conversionRates[to]) / conversionRates[from];

  // Save to DB
  const conversion = new lengthModel({
    from,
    to,
    input: value,
    result
  });

  await conversion.save();

  res.json({ from, to, input: value, result });
};


export const convertFromcentimeter = async (req, res) => {
  const { to, value } = req.body;

  if (!to || !value) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const centimeter = parseFloat(value);
  let result;

  if (to === 'millimeters') {
    result = centimeter * 10;
  } else if (to === 'meter') {
    result = centimeter * 100;
  } else if (to === 'kilometer') {
    result = centimeter * 100000;
  } else if(to === 'inch'){
    result = centimeter * 2.54;
  } else if(to === 'foot'){
    result = centimeter * 30.48;
  }else {
    return res.status(400).json({ error: "Invalid unit" });
  }

  // Save to DB
  const conversion = new lengthModel({
    from: 'centimeter',
    to,
    input: centimeter,
    result
  });

  await conversion.save();

  res.json({ from: 'centimeter', to, input: centimeter, result });
};