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
