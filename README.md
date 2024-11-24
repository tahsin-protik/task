# My Express App

This is a simple Express.js application using Sequelize for database management and Mocha/Chai for testing. The application is structured to support different environments (development, test, production) using a single `.env` file.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MySQL

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tahsin-protik/task.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add your database credentials for each environment. You can see sample on .env.example


4. **Set up the database:**

   Ensure your MySQL server is running and create the necessary databases:

   ```sql
   CREATE DATABASE database_development;
   CREATE DATABASE database_test;
   CREATE DATABASE database_production;
   ```

5. **Run migrations:**

   Apply the database migrations to set up the schema:

   ```bash
   npm run migration:up
   ```

## Running the Application

1. **Start the server:**

   For development:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:304`.

2. **Run tests:**

   To run the test suite, use:

   ```bash
   npm test
   ```

## Project Structure

- `src/app.js`: Main application file.
- `src/routes/`: Contains route definitions.
- `src/controllers/`: Contains controller logic.
- `src/models/`: Contains Sequelize models and database configuration.
- `migrations/`: Contains database migration files.
- `test/`: Contains test files.

## Comments:
The API is not optimized. It can be optimized by building a tree in local memory which can be rebuilt from the data existing in the database. The tree can be stored in Redis as well if syncing across different instances is needed. Then, the ids can be listed from the tree and fetched from the database in a single query.

The test environment is set up, but the tests are not written yet.