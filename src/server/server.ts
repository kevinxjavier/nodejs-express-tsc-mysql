import express = require('express');
//import bodyParser from "body-parser";
import * as bodyParser from "body-parser";
import path = require('path');

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    static init (port: number) {
        return new Server(port);
    }

    // No hace falta con TypeScript el: support application/json type post data
    private enableJson() {
    // support application/json type post data
        this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private folder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));        
    }

    // start(callback: Function) {
    //     this.app.listen(this.port, callback);
    //     this.folder();
    // }
    start() {
        //this.enableJson();
        this.app.listen(this.port);
        this.folder();
    }
}
