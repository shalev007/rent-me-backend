import ApiServer from './ApiServer';
import sellerRouter from './routes/Seller';

const server = new ApiServer();
server.setPort(8000).addRouter(sellerRouter).listen();
