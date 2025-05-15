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
 meter:{
        decimeter: 10,
        kilometer: 0.001,
        millimeter: 1000,
        mile: 0.000621371,
        foot: 3.28084,
        inch: 39.3701,
        centimeter: 100,
    },
    decimeter:{
        meter: 0.1,
        kilometer: 0.0001,
        millimeter: 10,
        mile: 0.0000621371,
        foot: 0.328084,
        inch: 3.93701,
        centimeter: 10,
    },
    kilometer:{
        meter: 1000,
        decimeter: 10000,
        millimeter: 1000000,
        mile: 0.621371,
        foot: 3280.84,
        inch: 39370.1,
        centimeter: 100000,
    },
    millimeter:{
        meter: 0.001,
        decimeter: 0.1,
        kilometer: 0.000001,
        mile: 6.21371e-7,
        foot: 0.00328084,
        inch: 0.0393701,
        centimeter: 0.1,
    },
    mile:{
        meter: 1609.34,
        decimeter: 16093.4,
        kilometer: 1.60934,
        millimeter: 1609340,
        foot: 5280,
        inch: 63360,
        centimeter: 160934,
    },
    foot:{
        meter: 0.3048,
        decimeter: 3.048,
        kilometer: 0.0003048,
        millimeter: 304.8,
        mile: 0.000189394,
        inch: 12,
        centimeter: 30.48,
    },
    inch:{
        meter: 0.0254,
        decimeter: 0.254,
        kilometer: 0.0000254,
        millimeter: 25.4,
        mile: 1.57828e-5,
        foot: 0.0833333,
        centimeter: 2.54,
    },
    centimeter:{
        meter: 0.01,
        decimeter: 0.1,
        kilometer: 0.00001,
        millimeter: 10,
        mile: 6.21371e-6,
        foot: 0.0328084,
        inch: 0.393701,
    },
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
    if (to === 'millimeter') {
      result = parsedMeter * 1000;
    } else if (to === 'meter') {
      result = parsedMeter;
    } else if (to === 'decimeter') {
      result = parsedMeter * 10;
    } else if (to === 'kilometer') {
      result = parsedMeter * 0.001;
    } else
    if (to === 'centimeter') {
      result = parsedMeter * 100;
    } else if (to === 'decimeter') {
      result = parsedMeter * 10;
    } else if (to === 'kilometer') {
      result = parsedMeter * 0.001;
    } else if(to === 'inch'){
      result = parsedMeter * 39.3701;
    } else if(to === 'foot'){
      result = parsedMeter * 3.28084;
    }
    else if(to === 'mile'){
      result = parsedMeter * 0.000621371;
    }
    else {
      return res.status(400).json({ error: "Invalid unit" });
    }
  // Convert the value to the desired unit
  let convertedMeter = centimeter * conversionRates.meter;
  let decimeter = centimeter * conversionRates.decmeter;
  let kilometer = centimeter * conversionRates.kilometer;
  let mile = centimeter * conversionRates.mile;
  let foot = centimeter * conversionRates.foot;
  let inches = centimeter * conversionRates.inches;
  let kilometers = centimeter * conversionRates.kilometers;

  // Save to DB
  const conversion = new lengthModel({
    from: 'centimeter','decimeter':'meter','kilometer':'mile','foot':'inch','millimeter': 'centimeter',
    to,
    input: centimeter,meter,decimeter,kilometer,mile,foot,inches,
    result
  });

  await conversion.save();

  res.json({ from: 'centimeter','decimeter':'meter','kilometer':'mile','foot':'inch', to, input: centimeter,meter,decimeter,mile,foot,
    inch,kilometers, result });
};