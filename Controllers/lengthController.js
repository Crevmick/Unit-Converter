import lengthModel from '../Model/lengthModels.js';


// Coverting from milimeter to other units
export const converFromMilimeter = async (req, res) => {
  const { value, from, to } = req.body;
  
  const conversionRates = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    inch: 39.3701,
    foot: 3.28084,
    centimeters: 100,
    millimeters: 1000,
    decimeters: 10,
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


// Coverting from centimeter to other units
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
  }
  else if(to === 'miles'){
    result = centimeter * 0.0000062137;
  } else if(to === 'decimeter'){
    result = centimeter * 10;
  } else if(to === 'centimeter'){
    result = centimeter;
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


// Coverting from meter to other units
export const convertFrommeter = async (req, res) => {
  const { to, value } = req.body;

  if (!to || !value) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const meter = parseFloat(value);
  let result;

  if (to === 'millimeters') {
    result = meter * 1000;
  } else if (to === 'centimeter') {
    result = meter * 100;
  } else if (to === 'kilometer') {
    result = meter * 0.001;
  } else if(to === 'inch'){
    result = meter * 39.3701;
  } else if(to === 'foot'){
    result = meter * 3.28084;
  }else if(to === 'miles'){
    result = meter * 0.000621371;
  } else if(to === 'decimeter'){
    result = meter * 10;
  } else { 
    return res.status(400).json({ error: "Invalid unit" });
  }

  // Save to DB
  const conversion = new lengthModel({
    from: 'meter',
    to,
    input: meter,
    result
  });

  await conversion.save();

  res.json({ from: 'meter', to, input: meter, result });
};


// Coverting from decimeter to other units
export const convertFromdecimeter = async (req, res) => {
  const { to, value } = req.body;

  if (!to || !value) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const decimeter = parseFloat(value);
  let result;

  if (to === 'millimeters') {
    result = decimeter * 100;
  } else if (to === 'centimeter') {
    result = decimeter * 10;
  } else if (to === 'kilometer') {
    result = decimeter * 0.0001;
  } else if(to === 'inch'){
    result = decimeter * 3.93701;
  } else if(to === 'foot'){
    result = decimeter * 0.328084;
  }else if(to === 'miles'){
    result = decimeter * 0.0000621371;
  } else if(to === 'meter'){
    result = decimeter * 0.1;
  } else { 
    return res.status(400).json({ error: "Invalid unit" });
  }

  // Save to DB
  const conversion = new lengthModel({
    from: 'decimeter',
    to,
    input: decimeter,
    result
  });

  await conversion.save();

  res.json({ from: 'decimeter', to, input: decimeter, result });
};


// Coverting from foot to other units
export const convertFromFoot = async (req, res) => {
  const { to, value } = req.body;

  if (!to || !value) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const foot = parseFloat(value);
  let result;

  if (to === 'millimeters') {
    result = foot * 304.8;
  } else if (to === 'centimeter') {
    result = foot * 30.48;
  } else if (to === 'meter') {
    result = foot * 0.3048;
  } else if (to === 'kilometer') {
    result = foot * 0.0003048;
  } else if (to === 'inch') {
    result = foot * 12;
  } else if (to === 'decimeter') {
    result = foot * 3.048;
  } else if (to === 'miles') {
    result = foot * 0.000189394;
  } else {
    return res.status(400).json({ error: "Invalid unit" });
  }

  // Save to DB
  const conversion = new lengthModel({
    from: 'foot',
    to,
    input: foot,
    result
  });

  await conversion.save();

  res.json({ from: 'foot', to, input: foot, result });
};




// Coverting from inch to other units
export const convertFromInch = async (req, res) => {
  const { to, value } = req.body;

  if (!to || !value) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const inch = parseFloat(value);
  let result;

  if (to === 'millimeters') {
    result = inch * 25.4;
  } else if (to === 'centimeter') {
    result = inch * 2.54;
  } else if (to === 'meter') {
    result = inch * 0.0254;
  } else if (to === 'kilometer') {
    result = inch * 0.0000254;
  } else if (to === 'foot') {
    result = inch * 0.0833333;
  } else if (to === 'decimeter') {
    result = inch * 0.254;
  } else if (to === 'miles') {
    result = inch * 0.0000157828;
  } else {
    return res.status(400).json({ error: "Invalid unit" });
  }

  // Save to DB
  const conversion = new lengthModel({
    from: 'inch',
    to,
    input: inch,
    result
  });

  await conversion.save();

  res.json({ from: 'inch', to, input: inch, result });
};
