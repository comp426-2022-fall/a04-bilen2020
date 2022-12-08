#!/usr/bin/env node

import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js"  

const args = minimist(process.argv.slice(2));

var port = 5000;
if(args.port){
    port = args.port;
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
   
})

app.get('/app/roll/', (req, res) => {
    res.status(200).send(roll(6,2,1));
   
})

app.post('/app/roll/', (req, res) => {
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.rolls);
    res.status(200).send(roll(sides, dice, rolls));
   
})

app.get('/app/roll/:sides/', (req, res) => {
    var sides = parseInt(req.params.sides);
    res.status(200).send(roll(sides,2,1));
    res.end;
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    var sides = parseInt(req.params.sides);
    var dice = parseInt(req.params.dice);
    res.status(200).send(roll(sides, dice, 1));
    res.end
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    var sides = parseInt(req.params.sides);
    var dice = parseInt(req.params.dice);
    var rolls = parseInt(req.params.rolls);
    res.status(200).send(roll(sides,dice,rolls));
    res.end
})

app.get('*', (req, res) => {
    console.error('error')
    res.status(200).status(404).send('404 NOT FOUND');
    res.end
})

app.listen(port, () => {
    console.log("Server listening on port" + port)
})
