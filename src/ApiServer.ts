import express from 'express';
import { createServer, Server } from 'http';
import { Port } from './types/ApiServer';

class ApiServer {
    public static readonly DEFAULT_PORT: number = 8000;

    private server: Server;
    private app: express.Application;
    private port: Port;

    constructor() {
        this.create();
    }

    protected create(): void {
        this.app = express();
        this.server = createServer(this.app);
    }

    public setPort(port: Port): ApiServer {
        this.port = port;
        return this;
    }

    public getPort(): Port {
        return this.port;
    }

    public getApp(): express.Application {
        return this.app;
    }

    public getServer(): Server {
        return this.server;
    }

    public listen(): void {
        const port: Port = this.port || ApiServer.DEFAULT_PORT;

        this.getServer().listen(port, () => console.log(`Serving on ${port}`));
    }
}

export default ApiServer;
