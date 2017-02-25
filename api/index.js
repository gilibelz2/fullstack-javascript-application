/**
 * Created by Gili Belz on 25/02/2017.
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: [] });
});

export default router;