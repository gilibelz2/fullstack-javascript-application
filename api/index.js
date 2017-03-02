/**
 * Created by Gili Belz on 25/02/2017.
 */
import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/contests', (req, res) => {
    res.send({ contests: data.contests });
});

export default router;