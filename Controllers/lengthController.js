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

