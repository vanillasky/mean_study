import * as fs from 'fs';
// import * as path from 'path';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const env = process.env.NODE_ENV || 'development';
const logDir = 'dist/log';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new DailyRotateFile({
  filename: `${logDir}/%DATE%.log`,
  datePattern: 'YYYY-MM-DD'
});

const logger = winston.createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      level: env === 'development' ? 'debug' : 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

logger.debug(`Logging initialized at ${env} mode`);

export default logger;
