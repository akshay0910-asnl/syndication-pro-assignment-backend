import { NextFunction, Request, Response, Router } from 'express';
const router = Router();

router.get('/', (req:Request, res:Response, next:NextFunction) => {
    return res.status(200).send({ message: 'Hello World!' });
});

router.all('/', (req:Request, res:Response, next:NextFunction) => {
    return res.status(403).send({ message: 'Method  Not Allowed!' })
});

export default router;
