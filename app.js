const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express();
const port = 80;
// EXPRESS SPEFIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine for pug
app.set('views', path.join(__dirname,'views')) //  Sets the views directory

//Endpoint
app.get('/',(req, res)=>{ 
const con = "This is the best content so far"
const params = {'title':'Vibhu is the best', content: con}
res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    name =req.body.name
    age =req.body.age
    gender =req.body.gender
    address =req.body.address
    let outputToWrite = `The name of the peson is ${name}, ${age} years old, ${gender}, living in ${address}`
    fs.writeFileSync('output.txt',outputToWrite )
    const params = {'message':'Your form has been submitted'}
    res.status(200).render('index.pug', params);
})
// START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started sucessfully on port ${port}`)
})