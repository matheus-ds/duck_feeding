# duck_feeding

Duck Feeding is React+Express application connected to a PostgreSQL database.
It's purpose is to collect data points on how ducks are being fed in parks around the world.

## Installation
Clone the repo
```bash
git clone https://github.com/matheus-ds/duck_feeding.git
```
Install NPM packages

```bash
npm install && npm run client-install
```

## Usage
To run the application locally, create a .env file in the root directory and add the folowing information:
```bash
PORT=5000

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_PORT=
DB_DATABASE=
```
Lastly, to run the application, use the command
```bash
npm run dev
```
