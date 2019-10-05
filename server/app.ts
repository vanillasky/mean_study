import * as express from 'express';
import * as compression from 'compression';  // compresses response body
// import * as bodyParser from 'body-parser';
// import * as path from 'path';
import setRoutes from './routes';

const app = express();

app.use(compression());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

setRoutes(app);

export default app;
