import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Currency_convert() {

  const [currency,setCurrency] = useState('');
  const [fromCurrency,setFromCurrency] = useState('');
  const [toCurrency,setToCurrency] = useState('');
  const [fromAmount,setFromAmount] = useState('');

  const currency1=()=>{
    const convertRate={
      USD: 1,
      EUR: 0.85,
      INR: 74.71,
      PKR: 292.75, 
      NPR: 119.53, 
      CAD: 1.26,
    }
    if(currency && fromCurrency && toCurrency){
        // const convert=((currency)*(convertRate)+toCurrency);
        // setFromAmount(convert);
        var convert;
        if(convertRate.USD){
          convert = (parseFloat(currency) * parseFloat(convertRate[toCurrency]));
          setFromAmount(convert);    
        }else if(convertRate.EUR){
          convert = (parseFloat(currency) * parseFloat(convertRate[toCurrency]));
          setFromAmount(convert);
        }else if(convertRate.INR){
          convert = (parseFloat(currency) * parseFloat(convertRate[toCurrency]));
          setFromAmount(convert);
        }else if(convertRate.PKR){
          convert = (parseFloat(currency) * parseFloat(convertRate[toCurrency]));
          setFromAmount(convert);
        }else if(convertRate.NPR){
          convert = (parseFloat(currency) * parseFloat(convertRate[toCurrency]));
          setFromAmount(convert);
        }else if(convertRate.CAD){
          convert = (parseFloat(currency) * parseFloat(convertRate[toCurrency]));
          setFromAmount(convert);
        }
    }else{
        alert("Fill the details");
    }
    
  }

  return (
    <>
      <center>
          <div className='rupee' placeholder='Enter Rupees'>
              <input type='text'  onChange={(e)=>(setCurrency(e.target.value))}></input><br/>
              <select onChange={(e)=>(setFromCurrency(e.target.value))}>
                  <option value=''>Select Country</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='INR'>INR</option>
                  <option value='PKR'>PKR</option>
                  <option value='NPR'>NPR</option>
                  <option value='CAD'>CAD</option>
              </select>

              <select onChange={(e)=>(setToCurrency(e.target.value))}>
                  <option value=''>Select Country</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='INR'>INR</option>
                  <option value='PKR'>PKR</option>
                  <option value='NPR'>NPR</option>
                  <option value='CAD'>CAD</option>
              </select>
              <br/>
              <button onClick={currency1}>Click</button>
              {/* <input type='text' value={fromAmount} placeholder='Converted Rupees'></input> */}
              <span>{fromAmount}</span>
          </div>
      </center>
    </>
  );
}

export default Currency_convert;
