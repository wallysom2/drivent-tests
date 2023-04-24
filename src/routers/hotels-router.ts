import { Router } from 'express';
import { getHotels, getHotelsWithRooms } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter.all('/*', authenticateToken).get('/', getHotels).get('/:hotelId', getHotelsWithRooms);

export { hotelsRouter };
