import { Router, Request, Response } from 'express';

const router = Router();

router.get('/api', (req: Request, res: Response) => {
    res.send('Version: v1.0.0');
});

router.get('/usuarios', (req: Request, res: Response) => {
    res.json({ok: true, mensaje: 'Todo esta bien'});
});

router.get('/usuario/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({ok: true, mensaje: 'Todo esta bien ${id}', id});
});

export default router;
