const express=require('express')
require('dotenv').config();
const cors=require('cors')
const axios=require('axios');
const currency_routes=require('./routes/currency_routes')
const app=express();
app.use(express.json());
app.use(cors());

app.use('/api',currency_routes);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('server running on port 5000');
})