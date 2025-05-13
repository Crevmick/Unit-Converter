import TimeModel from '../Model/TimeModel.js';

export const convertFromSeconds = async (req, res) => {
  const { to, value } = req.body;

  if (!to || !value) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const seconds = parseFloat(value);
  let result;

  if (to === 'minutes') {
    result = seconds / 60;
  } else if (to === 'hours') {
    result = seconds / 3600;
  } else if (to === 'days') {
    result = seconds / 86400;
  } else {
    return res.status(400).json({ error: "Invalid unit" });
  }

  // Save to DB
  const conversion = new TimeModel({
    from: 'seconds',
    to,
    input: seconds,
    result
  });

  await conversion.save();

  res.json({ from: 'seconds', to, input: seconds, result });
};
// Coverting from Hours to other units
export const convertFromHours = async (req, res) => {
  const { to, value } = req.body;

  if (!to || value == null) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const hours = parseFloat(value);
  let result;

  if (to === 'minutes') {
    result = hours * 60;
  } else if (to === 'seconds') {
    result = hours * 3600;
  } else if (to === 'days') {
    result = hours / 24;
  } else if (to === 'hours') {
    result = hours; // no conversion needed
  } else {
    return res.status(400).json({ error: "Invalid units" });
  }



  // Save to DB
  const conversion = new TimeModel({
    from: 'hours',
    to,
    input: hours,
    result
  });

  await conversion.save();

  res.json({ from: 'hours', to, input: hours, result });
};

//Converting from Minutes to other units
export const convertFromMinutes = async (req, res) => {
  const { to, value } = req.body;

  if (!to || value == null) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const minutes = parseFloat(value);
  let result;

  if (to === 'minutes') {
    result = minutes; // no conversion needed
  } else if (to === 'seconds') {
    result = minutes * 60;
  } else if (to === 'days') {
    result = minutes / 1440;
  } else if (to === 'hours') {
    result = minutes / 60;
  } else {
    return res.status(400).json({ error: "Invalid units" });
  }

  
  // Save to DB
  const conversion = new TimeModel({
    from: 'minutes',
    to,
    input: minutes,
    result
  });

  await conversion.save();

  res.json({ from: 'minutes', to, input: minutes, result });
};