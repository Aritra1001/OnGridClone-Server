const express = require('express');
const cors = require('cors');
const route = require('./Route/route');
const connection = require('./database/connection');
const dotenv = require('dotenv');

dotenv.config();  //configuring env file

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}))
app.use(route);

app.get('/', (req, res)=>{
    res.send({message: "This is home page"});
})


const PORT = process.env.PORT;

app.listen(PORT, async()=>{
    console.log(`Our server is running ${PORT}`);
    await connection();
})