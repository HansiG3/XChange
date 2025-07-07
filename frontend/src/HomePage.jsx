import React,{useState} from "react";
import axios from 'axios';
const HomePage=()=>{
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);
    const [rate, setRate] = useState(null);
    const handleConvert = async () => {
        try {
        const response = await axios.post("http://localhost:5000/api/convert", {
            from,
            to,
            amount,
        });
        setRate(response.data.rate);
        setResult(response.data.result);
        } catch (err) {
        alert("Conversion failed. Please check your inputs and API key.");
        }
    }
    return (
    <div className="container">
      <h1>XChange - Currency Converter</h1>
      <div className="card">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value.toUpperCase())}
          placeholder="From (e.g. USD)"
        />
        <input
          value={to}
          onChange={(e) => setTo(e.target.value.toUpperCase())}
          placeholder="To (e.g. INR)"
        />
        <button onClick={handleConvert}>Convert</button>
        {result && (
          <div className="result">
            <p>Exchange Rate: 1 {from} = {rate} {to}</p>
            <h3>Converted Amount: {result.toFixed(2)} {to}</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;

