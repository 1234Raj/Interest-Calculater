import React, { useState } from 'react';
import './SimpleI.css';
 
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function SimpleI() {

  const [add, setAdd] = useState([]);
  const [state, setState] = useState([]);
      

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState('');


  const calcSum = (e) => {
    e.preventDefault()
    console.log(e);

    if (num1 === 0 || num2 === 0 || num3 === 0 || num4 === '') {
      alert("please enter a valid weight and height")
    }

    else {
      if (num4 === 'Year') {
        var Add = parseInt(num1) * parseInt(num2) * parseInt(num3) / 100;
        setAdd(parseInt(Add));
        const data = { name: "yearly", Interest: Add.toFixed(2) }
        setState([data, ...state])
        console.log("gr:", state)
      } else {
        var result = parseInt(num1) * parseInt(num2) * parseInt(num3) / 1200;
        setAdd(parseInt(result));
        console.log(typeof (result));
        const Data = { name: "Months", Interest: result.toFixed(2) }
        setState([Data, ...state])
        console.log("gr:", state)
      }

    }

  }

  const handleClick = (e) => {
    setAdd(0);
    setNum1(0)
    setNum2(0)
    setNum3(0)
    setNum4('')


  }

  return (
    <>
       


      <div className="SimpleI">
      <div className='container'>
        <div className='container-1'>
          <div className='heading_text'>
            <h1 className='heading_one'>Simple Interest Calculator</h1>
            <Link to='/Compound' className='heading_two'>Calculate your Compound interest Easily Tap here</Link>
          </div>
          <div className='total_amount_card'>
            <div className='card_text '>
              <h3 className='total_amount_heading'>₹ {add}</h3>
              <p className='total_amount_para'>Total simple interest</p>
            </div>
          </div>
          <form onSubmit={calcSum}>

            <div className='input_area'>
              <div className='input_field'>
                <TextField type="number" value={num1 || ""} onChange={(e) => setNum1(e.target.value)} id="outlined-basic" label="₹ Principal amount"   />
              </div>
              <div className='input_field'>
                <TextField type="number" value={num2 || ""} onChange={(e) => setNum2(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %"   />
              </div>
              <div className='input_field'>
                <TextField type="number" value={num3 || ""} onChange={(e) => setNum3(e.target.value)} id="outlined-basic" label="Time period"   />
              </div>
           
            <div className='input_field'>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">(Year/Month)</InputLabel>
                <Select className='select'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={num4 || ""} onChange={(e) => setNum4(e.target.value)}
                  label="(Year/Month)">
                  <MenuItem value={'Year'}>Year</MenuItem>
                  <MenuItem value={'Month'}>Month</MenuItem>
                </Select>
              </FormControl>
            </div>
            </div>
            <div className='button_collection'>
              <Stack spacing={2} direction="row">
                <Button type='submit' className='btn_one' style={{ backgroundColor: '#587fff' }} variant="contained">Calculate</Button>
                <Button className='btn_one' onClick={handleClick} variant="outlined">Reset</Button>
              </Stack>
            </div>
          </form>
        </div>
        <div className="mix-chart" >
          
           
            <BarChart width={400}
              height={400} data={state} className='chart'  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Interest" barSize={30} fill="#587fff" />
            </BarChart>
          
        </div>
        </div>
      </div>
    </>
  );
}

export default SimpleI;