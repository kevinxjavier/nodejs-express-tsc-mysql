import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/api', (req: Request, res: Response) => {
    res.send('Version: v1.0.0');
});

router.get('/usuarios', (req: Request, res: Response) => {
    const sql = 'SELECT * FROM usuarios';

    MySQL.consulta(sql, (err: any, usuarios: Object[]) => {
        if(err) 
            return res.status(400).json({status: 'Failed', error: err});

        res.json({status: 'Ok', usuarios});
    });
});

router.get('/usuario/:id', (req: Request, res: Response) => {
    const id = req.params.id;

// Evitando inyecccion de dedpendencia
    const escapeId = MySQL.instance.conn.escape(id);

    const sql = `SELECT * FROM usuarios WHERE id = ${escapeId}`;

    MySQL.consulta(sql, (err: any, usuarios: Object[]) => {
        if(err) 
            return res.status(400).json({status: 'Failed', error: err});

        res.json({status: 'Ok', usuarios: usuarios[0]});
    });
});

export default router;
