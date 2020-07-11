import express, { Request, Response, NextFunction } from 'express';
import sellers from '../data/AvailableRentalTransportation.json';

const sellerRouter = express.Router();
sellerRouter.get('/sellers/', (req: Request, res: Response, next: NextFunction) => {
    return res.json(sellers);
});
export default sellerRouter;
