# Unit Converter API

A versatile and lightweight Unit Converter API built using JavaScript. This API offers users the ability to convert values across **Time**, **Length**, and **Temperature** units.

## Features

* Converts units between **Length**, **Time**, and **Temperature**.
* Organized into three distinct categories for seamless conversion:

  * **Time**: Convert seconds, minutes, hours, and days.
  * **Length**: Convert millimeters, centimeters, and other units.
  * **Temperature**: Convert between Celsius, Fahrenheit, and Kelvin.
* Developed with **Express.js** for easy scalability.
* Built using modern JavaScript (ES6+).
* Easily testable with Postman or any HTTP client.

## Tech Stack

* **JavaScript** (ES6)
* **Express.js** (for handling HTTP requests)
* **Postman** (for testing and API documentation)
* **dotenv** (for environment variable management)

## API Routes

### Time Conversion

* **POST** `/api/time/from-seconds`: Convert from seconds.
* **POST** `/api/time/from-days`: Convert from days.
* **POST** `/api/time/from-hour`: Convert from hours.
* **POST** `/api/time/from-minute`: Convert from minutes.

### Length Conversion

* **POST** `/api/length/from-mm`: Convert from millimeters.
* **POST** `/api/length/from-centimeter`: Convert from centimeters.
* **POST** `/api/length/from-decimeter`: Convert from decimeters.
* **POST** `/api/length/from-meter`: Convert from meter.
* **POST** `/api/length/from-foot`: Convert from foot.
* **POST** `/api/length/from-inch`: Convert from inch.

### Temperature Conversion

* **POST** `/api/temperature/from-fahrenheit`: Convert from Fahrenheit.
* **POST** `/api/temperature/from-kelvin`: Convert from Kelvin.
* **POST** `/api/temperature/from-celsius`: Convert from Celsius.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Crevmick/Unit-Converter.git
   cd Unit-Converter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory and adding the following:

   ```bash
   PORT=3000
   ```

4. Run the API:

   ```bash
   node app.js
   ```

5. The server will be running on `http://localhost:3000`.

## Testing the API

You can use **Postman** or any other API testing tool to test the API routes.

## Documentation

For detailed request/response formats and usage examples, [click here](https://documenter.getpostman.com/view/44798869/2sB2qWF3fF) to view the full API documentation.

## Contributions

This project is built by a team of developers working together to learn and grow.

### Contributors:

* Aworetan Micheal
* Amoo Raheemat
* Adeniran Stephen
* Adeoye Emmanuel
* Adu-Gyamfi Micheal
* Ajiboye Samuel
* Atari Victor
* Ayodeji Akanbi
