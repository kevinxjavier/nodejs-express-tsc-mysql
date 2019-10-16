import Server from './server/server';
import router from './router/router';

const port = 3000;

const server = Server.init(port);

server.app.use( router );

// server.start(() => {
    //     console.log(`Servidor corriendo en el puerto ${port}`);    
    // });
server.start();
