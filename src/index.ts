import dotenv from 'dotenv';
dotenv.config();
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import express, { Application, json, urlencoded } from 'express';
import os from 'os';
import { initAllAssociations } from './database';
import routesDir from './routes';

const hostname = os.hostname();

const port = process.env.PORT || 3000;

const app: Application = express();

app.set('port', port);

// Middlewares
app.use(compression());
app.use(
  morgan((tokens, req, res) => {
    if ((tokens as any)['response-time'](req, res) > 1500)
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        '-',
        tokens['response-time'](req, res),
        'ms',
      ].join(' ');
  }),
);
app.use(cors());
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true }));

// Routes
app.use('', routesDir);

// DB
initAllAssociations();

app.listen({ hostname, port }, () => {
  console.log(`Server running on port ${port}`);
});
