import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

import logger from '../common/logger';

if (fs.existsSync(path.join(__dirname, '.env'))) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: path.join(__dirname, '.env') });
} else if (fs.existsSync(path.join(__dirname, 'dev.env'))) {
  logger.debug('Using dev.env file to supply config environment variables');
  dotenv.config({ path: path.join(__dirname, 'dev.env') });  // you can delete this after you create your own .env file!
} else {
  logger.debug(process.cwd());
  logger.debug(path.join(__dirname));
  logger.warn('No dotenv file');
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env['SESSION_SECRET'];
export const MONGODB_URI = prod ? process.env['MONGODB_URI'] : process.env['MONGODB_URI_ATLAS'];
// export const POST_FILE_UPLOAD_PATH = process.env['POST_FILE_UPLOAD_PATH'];

if (!MONGODB_URI) {
  logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
  // process.exit(1);
}
