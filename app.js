import express from 'express';
import logger from 'morgan';
import cors from 'cors';

// Import middlewares
import errorHandler from './middlewares/error-handler';
import errorLogHandler from './middlewares/error-log-handler';

// Import routes
import routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(routes);
app.use(cors());

// catch 404 and forward to error handler
app.use((request, response) => {
  response.status(404).send('Route not found/existing');
});

app.use(errorLogHandler);
app.use(errorHandler);

app.get('/', (request, response) => {
  response.send('Access denied!');
});

export default app;