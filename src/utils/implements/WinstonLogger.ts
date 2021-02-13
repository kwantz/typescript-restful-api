import Logger from '@utils/Logger';
import { injectable } from 'inversify';
import winston from 'winston';

@injectable()
export default class WinstonLogger implements Logger {
  logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      defaultMeta: { service: 'Refactor' },
      format: winston.format.combine(
        winston.format(this.updateLevel)(),
        winston.format.timestamp({
          format: 'ddd, YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.json(),
        winston.format.printf((info) => {
          const { timestamp, service, message, level, ...extra } = info;
          if (Object.keys(extra).length) {
            const dataString = `\nwith data ${JSON.stringify(extra, null, 2)}`;
            const dataFormat = dataString.replace(/\n/g, '\n    ');
            return `${timestamp} | ${level} | ${service} | ${message} ${dataFormat}`;
          }
          return `${timestamp} | ${level} | ${service} | ${message}`;
        })
      ),
      transports: [new winston.transports.Console()],
    });
  }

  private updateLevel(
    info: winston.Logform.TransformableInfo
  ): winston.Logform.TransformableInfo {
    const newInfo = info;
    newInfo.level = newInfo.level.toUpperCase();
    newInfo.level =
      newInfo.level.length < 5 ? `${newInfo.level} ` : newInfo.level;
    return newInfo;
  }

  public info(message: string, data: unknown): void {
    this.logger.info(message, data);
  }

  public warn(message: string, data: unknown): void {
    this.logger.warn(message, data);
  }

  public error(message: string, data: unknown): void {
    this.logger.error(message, data);
  }
}
