/// declarations
import dotenv from 'dotenv';
dotenv.config();

import express, { Application, NextFunction, Request, Response } from 'express';
import connectMongo from './connections/mongo';
import cors from 'cors';

import baseRouter from './routes/baseRoute';
import testimonialRouter from './routes/testimonialRoute';

import errorHandler from './middlewares/errorHandler';
import HttpError from './errors/HttpError';
const app: Application = express();
const PORT = 3000;


connectMongo();

///middleware
app.use(cors({ origin: ['http://localhost:4000'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///routes
app.use('/', baseRouter);
app.use('/testimonials', testimonialRouter);
app.all('*', (req: Request, res: Response, next: NextFunction) => {
	next(new HttpError('Route Not Found', 404));
});

///global error handler
app.use(errorHandler);

///start server
try {
	app.listen(PORT, (): void => {
		console.log(`App running on port ${PORT}`);
	});
} catch (error: any) {
	console.error(`Error occured: ${error.message}`);
}


