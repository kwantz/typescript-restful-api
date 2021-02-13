import Logger from '@utils/Logger';
import { Application } from 'express';
import morgan from 'morgan';

export default (logger: Logger): ((app: Application) => void) => {
  const options = {
    stream: {
      write: function (message: string) {
        logger.info(message.trim());
      },
    },
  };

  return (app: Application) => {
    app.use(morgan('short', options));
  };
};
