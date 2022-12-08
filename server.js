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


app.use(express.urlencoded({extended: true}));



app.get('/app/', (req, res) => {
    res.send('200 OK');
   
})

app.get('/app/roll/', (req, res) => {
    res.send(roll(6,2,1));
   
})

app.post('/app/roll/', (req, res) => {
    var sides = parseInt(req.body.sides);
    var dice = parseInt(req.body.dice);
    var rolls = parseInt(req.body.rolls);
    console.log(req.body);
    res.send(roll(sides, dice, rolls));
   
})

app.get('/app/roll/:sides/', (req, res) => {
    var sides = parseInt(req.params.sides);
    res.send(roll(sides,2,1));
    
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
    var sides = parseInt(req.params.sides);
    var dice = parseInt(req.params.dice);
    res.send(roll(sides, dice, 1));
    
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    var sides = parseInt(req.params.sides);
    var dice = parseInt(req.params.dice);
    var rolls = parseInt(req.params.rolls);
    res.send(roll(sides,dice,rolls));
    
})

app.get('*', (req, res) => {
    console.error('error')
    res.status(404).send('404 NOT FOUND');
    
})

app.listen(port, () => {
    console.log("Server listening on port" + port)
})
