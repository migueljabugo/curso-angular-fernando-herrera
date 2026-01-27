
const { mkdirSync, writeFileSync } = require('fs');

require('dotenv').config();

const targetPath = `./src/environments/environment.ts`;
const targetPathDev = `./src/environments/environment.development.ts`;

const MAPBOX_KEY = 'MAPBOX_KEY';

if (!process.env[MAPBOX_KEY]) {
  throw new Error(`No ${MAPBOX_KEY} specified in .env file`);
}

const envConfigFile = `
export const environment = {
  mapboxKey: "${process.env[MAPBOX_KEY]}"
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envConfigFile);
writeFileSync(targetPathDev, envConfigFile);
