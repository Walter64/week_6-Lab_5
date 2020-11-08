
// set up an web server and listen at port 4000
const express = require('express')
const { runInNewContext } = require('vm')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');// parses body for POST request

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// creating roots, Send an HTTP GET request to url '/' the root localhost/3000 and get a result back
app.get('/', (req, res) => { // '/' means the main or home page - localhost/3000
  res.send('Welcome to Data Representation & Qureying!')
})

// Send an HTTP GET request to url '/whatever' page and get a result back
app.get('/whaterver', (req, res) => {
    res.send('Hello whatever!')
  })

// passing in variable in the url '/hello/' using variable 'name' and concatenate response to string
app.get('/hello/:name', (req, res)=>{ // takes a variable 'name'
    res.send('Hello '+req.params.name);
})

// Send an HTTP GET request to url '/api/movies' page and get following JSON result back
app.get('/api/movies', (req, res)=>{
    const movies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ]

    res.json({
        mymovies:movies,
        message:'Data sent successfully'

    })
})

// Send an HTTP GET request to url '/test' page and return the index.html page
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html'); // __dirname, determines directory i'm in
})

// Send an HTTP GET request to url '/name' page which accepts the data being passed up and get a result back
app.get('/name', (req, res)=>{
    console.log(req.query);
    res.send("Hello "+ req.query.firstname + " " + req.query.lastname);// parsing query
})

// Send an HTTP POST request to url '/name' page which accepts the data being passed up and get a result back
app.post('/name', (req, res)=>{
    // POST request is sent up in as part of the body so not seen in url 
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname); // parsing body
})

// web server app.listen port - listens at port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

