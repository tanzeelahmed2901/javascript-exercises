// Define the app
const express = require('express');
const app = express();

// Have a title on the process to help us stop it - see package.json
const process = require('process');
process.title = "MyApp"

app.use(express.json());

// Allows same-site origin - for use locally with following FETCH session
app.use(function(request, response, next) {
    if (request.headers.origin) {
        response.header('Access-Control-Allow-Origin', '*')
        response.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
        response.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
        if (request.method === 'OPTIONS') return response.sendStatus(200)
    }
    next()
})
// ...You can also use the CORS plugin for express https://expressjs.com/en/resources/middleware/cors.html
// ...on windows, depending on your security setup, instead you may need it:
// ... run "npm install --save cors" then uncomment this instead of using the other block:
// const cors = require("cors");
// app.use(cors({ origin: "*" }));

app.get('/hello', (request, response) => {
    response.send('world')
});

app.get('/data', (request, response) => {
    // Sends { "kittens": "3", "dogs": "2" }
    response.json({
        kittens: 3,
        dogs: 2,
    })
})

app.get('/fail', (request, response) => {
    response.res.sendStatus(400)
    response.json({ errorMessage: "missing parameters" })
})

app.get('/hello-path/:person', (request, response) => {
    response.send('hello ' + request.params.person)
});

app.get('/hello-path2/:person/shout/:shout', (request, response) => {
    const greeting = 'hello ' + request.params.person;
    if (request.params.shout === 'true') {
        response.send(greeting.toUpperCase())
    } else {
        response.send(greeting)
    }
});

app.get('/hello-query', (request, response) => {
    const greeting = 'hello ' + request.query.person;
    if (request.query.shout === 'true') {
        response.send(greeting.toUpperCase())
    } else {
        response.send(greeting)
    }
});

app.post('/hello/:person', (request, response) => {
    const person = req.params.person
    console.log('I received', request.body);
    response.json({ hello: person })
});

// Used in following FETCH session
app.post('/hello-query-post', (request, response) => {
    console.log("hello-query-post: request.body=", request.body)
    const greeting = 'hello ' + request.body.person;
    if (request.body.shout === 'true') {
        response.send(greeting.toUpperCase())
    } else {
        response.send(greeting)
    }
});

// TASK SAMPLE 1
// Add two numbers together using the url params
// Also used in following FETCH session
app.get("/add-by-path/:number1/:number2", (request, response) => {
    const addition = parseInt(request.params.number1) + parseInt(request.params.number2);
    response.send(`${request.params.number1} + ${request.params.number2} = ${addition}`)
})

// TASK SAMPLE 2
// Add two numbers together using the query params
// Also used in following FETCH session
app.get("/add-by-query", (request, response) => {
    const addition = parseInt(request.query.number1) + parseInt(request.query.number2);
    response.send(`${request.query.number1} + ${request.query.number2} = ${addition}`)
})

app.listen(8080)
console.log('Running on port 8080')
