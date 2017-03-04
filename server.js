/**
 * Created by Gili Belz on 25/02/2017.
 */
import config from './config';
import apiRouter from './api';
import express from 'express';
//import fs from 'fs';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

//this wait for react to render:(
server.get(['/', '/contest/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
        .then(( { initialMarkup, initialData } ) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(console.error)
});

server.use('/api', apiRouter);
server.use(express.static('public'));

/*server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    })
});*/

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});



//import https from 'https';
//import http from 'http';

//console.log(config, nodeEnv);

//test_func('hello world');

//https as a client
/*
https.get('https://www.lynda.com', res => {
   console.log('status code:', res.statusCode);

   res.on('data', chunk => {
       console.log(chunk.toString());
   });
});*/

//http as a server
/*const server= http.createServer((req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000);
});

server.listen(8080);*/


