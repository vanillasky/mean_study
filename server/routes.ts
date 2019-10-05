import * as express from 'express';
import * as path from 'path';
import logger from './common/logger';
import * as conf from './conf/conf';

export default function setRoutes(app) {

 app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
   next();
 });

 app.route('/api/hello').get((req, res) => {
   logger.debug('say hello');
   logger.debug('Mongo:' + conf.MONGODB_URI);
   res.send({
     greeting: [{ message: 'hello, world'}]
   });
 });

 app.use(express.static('dist'));
}
