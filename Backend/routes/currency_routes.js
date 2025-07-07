const express=require('express')
const axios=require('axios')
const router =express.Router();

router.post('/convert',async(req,res)=>{
    const{from,to,amount}=req.body;
    const apikey=process.env.EXCHANGE_API_KEY;
    console.log("API key used:", apikey);
    try{
        const response=await axios.get(`https://v6.exchangerate-api.com/v6/${apikey}/latest/${from}`);
        const rate=response.data.conversion_rates[to];
        const result=amount*rate;
        res.json({from,to,amount,rate,result});
    }
    catch(error){
        console.error("Conversion failed",error.message);
        res.status(500).json({error:"Currency Conversion failed"});
    }
});
module.exports=router;