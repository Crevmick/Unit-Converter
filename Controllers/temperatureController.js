import temperatureModel from '../Model/temperatureModel.js';

export const convertFromFahrenheit = async (req, res) => {
    const {to, value} = req.body;

     if (!to || !value) {
        return res.status(400).json({error:"Invalid Input"})
     }

     const fahrenheit = parseFloat(value);
     let result;

     // Converting from Fahrenheit to Other Temperature Units
        switch(to){
            case `celsius`: 
            result = (fahrenheit - 32) * 5/9;
            break;
            case `kelvin`:
            result = (fahrenheit - 32) * (5/9) + 273.15;
            break;
            default:
            return res.status(400).json({error:"Invalid Unit"});
        }

    const conversion = new temperatureModel({
        from: "fahrenheit",
        to,
        input: fahrenheit,
        result

    });

    await conversion.save();
    res.json({
        from: "fahrenheit",
        to,
        input: fahrenheit,
        result
    });



}
        
    

export const convertFromKelvin = async (req, res) => {
    const {to, value} = req.body;

     if (!to || !value) {
        return res.status(400).json({error:"Invalid Input"})
     }

     const kelvin = parseFloat(value);
     let result;

     // Converting from Kelvin to Other Temperature Units
        switch(to){
            case `celsius`: 
            result = (kelvin - 273.15);
            break;
            case `fahrenheit`:
            result = (kelvin - 273.15) *(9/5) + 32;
            break;
            default:
            return res.status(400).json({error:"Invalid Unit"});
        }

    const conversion = new temperatureModel({
        from: "kelvin",
        to,
        input: kelvin,
        result

    });
    
    await conversion.save();
    res.json({
        from: "kelvin",
        to,
        input: kelvin,
        result
    });



}

export const convertFromCelsius = async (req, res) => {
    const {to, value} = req.body;

     if (!to || !value) {
        return res.status(400).json({error:"Invalid Input"})
     }

     const celsius = parseFloat(value);
     let result;

     // Converting from Celsius to Other Temperature Units
        switch(to){
            case `fahrenheit`: 
            result = (celsius * 9/5) + 32;
            break;
            case `kelvin`:
            result = (celsius + 273.15);
            break;
            default:
            return res.status(400).json({error:"Invalid Unit"});
        }

    const conversion = new temperatureModel({
        from: "celsius",
        to,
        input: celsius,
        result

    });

    await conversion.save();
    res.json({
        from: "celsius",
        to,
        input: celsius,
        result
    });


}