import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL;

    conn: mysql.Connection;
    status: boolean = false;

    constructor() {
        console.log('Instanced class MySQL.');

        this.conn = mysql.createConnection({
            host     : '172.17.0.2',
            user     : 'root',
            password : '249861',
            database : 'test'
          });

        // Use better connectDB() handling errors
          //this.conn.connect(); 
        this.connectDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static consulta(sql: string, callback: Function) {
        this.instance.conn.query(sql, (err, results: Object[], fields) => {
            if (err) 
                return callback(err);

            if (!results.length) 
                return callback('No existen registros.');

            return callback(null, results);
        });
    }

    private connectDB() {
        this.conn.connect((err: mysql.MysqlError) => {
            if (err) 
                return console.log(err.message);

            this.status = true;
            console.log('Database connected!');
        });
    }

}
