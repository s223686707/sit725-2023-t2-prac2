//Importing Modules
const express = require('express')
const bodyparser = require('body-parser')

// Stores the express instance into app variable
const app = express();
app.use(bodyparser.urlencoded({extended:true})) // used to parse post body

// Renders the Welcome page when no endpoint specified.
app.get('',(req,res)=>{
    res.send("<center><h1>Welcome To the Simple Calculator")
})

// Renders the HTML file on the specific Endpoint
app.get('/add',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

// Used to post data on specific Route
app.post('/add',(req,res)=>{
    const number1 = Number(req.body.num1)
    const number2 = Number(req.body.num2)
    const add = number1 + number2
    
    res.send("The Output is: " + add)
})

// Get endpoint to subtract two numbers
app.get('/subtract/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let difference = (num1 - num2).toString()
    res.send(`<center><h1>The Difference of ${num1} and ${num2} is:  ${difference}</h1`)
})

// Get endpoint to multiply two numbers
app.get('/multiply/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let multiply = (num1 * num2).toString()
    res.send(`<center><h1>The Multiplication of ${num1} and ${num2} is:  ${multiply}</h1`)
})

// Get endpoint to divide two numbers
app.get('/divide/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let divide = (num1 / num2).toString()
    res.send(`<center><h1>The Division of ${num1} and ${num2} is:  ${divide}</h1`)
})

// Assigning Port
app.listen(3000,(res) => console.log("Server Started!!"))