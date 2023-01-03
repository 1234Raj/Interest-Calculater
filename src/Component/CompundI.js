import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function CompoundI() {
  const [add, setAdd] = useState([]);
  const [state, setState] = useState([]);

  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [TimePeriod, setTimeperiod] = useState(0);
  const [num4, setNum4] = useState(0)

 

  const calcSum = (e) => {
    e.preventDefault()
    console.log(e);

    if (principal === 0 || rate === 0 || TimePeriod === 0 || num4 === 0){
      alert("please enter a valid weight and height")
    }

    else {
      
      const compoundInterest = principal * (Math.pow((1 + (rate / (100*num4))), (num4 * TimePeriod)));
      const total= compoundInterest.toFixed(2)-principal
      setAdd(total.toFixed(2));
      if(num4===1){
      const Data = { name: "Yearly", uv:total.toFixed(2) }
        setState([Data, ...state])
        console.log("gr:", state)
      }else if(num4===2){
        const Data = { name: "Semiannualy", uv:total.toFixed(2) }
        setState([Data, ...state])
        console.log("gr:", state)
      }else if(num4===4){
        const Data = { name: "Quaterly", uv:total.toFixed(2) }
        setState([Data, ...state])
        console.log("gr:", state)
      }else{
        const Data = { name: "Monthely", uv:total.toFixed(2) }
        setState([Data, ...state])
        console.log("gr:", state)
      }
    }
       
    }


  



  const handleClick = (e) => {
    setAdd(0);
    setPrincipal(0)
    setRate(0)
    setTimeperiod(0)
    setNum4(0)

  }

  return (
    <>

      <div className="SimpleI">
        <div className='container'>
          <div className='container-1'>
            <div className='heading_text'>
              <h1 className='heading_one'>Compound Interest Calculator</h1>
              <Link to='/'  className='heading_two'>Calculate your Simple interest Easily Tap here </Link>
            </div>
            <div className='total_amount_card'>
              <div className='card_text '>
                <h3 className='total_amount_heading'>₹ {add}</h3>
                <p className='total_amount_para'>Total Compound interest</p>
              </div>
            </div>
            <form onSubmit={calcSum}>

              <div className='input_area'>
                <div className='input_field'>
                  <TextField type="number" value={principal || ""} onChange={(e) => setPrincipal(e.target.value)} id="outlined-basic" label="₹ Principal amount" variant="outlined" />
                </div>
                <div className='input_field'>
                  <TextField type="number" value={rate || ""} onChange={(e) => setRate(e.target.value)} id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
                </div>
                <div className='input_field'>
                  <TextField type="number" value={TimePeriod || ""} onChange={(e) => setTimeperiod(e.target.value)} id="outlined-basic" label="Time period" variant="outlined" />
                </div>
              </div>
              <div className='input_field'>
                <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label">(Year/Month)</InputLabel>
                  <Select className='select'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={num4 || ""} onChange={(e) => setNum4(e.target.value)}
                    label="(Year/Month)">
                    <MenuItem value={1}>Yearly</MenuItem>
                    <MenuItem value={4}>Quartely</MenuItem>
                    <MenuItem value={2}>Semiannualy</MenuItem>
                    <MenuItem value={12}>Monthly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='button_collection'>
                <Stack spacing={2} direction="row">
                  <Button type='submit' className='btn_one' style={{ backgroundColor: '#587fff' }} variant="contained">Calculate</Button>
                  <Button className='btn_one' onClick={handleClick} variant="outlined">Reset</Button>
                </Stack>
              </div>
            </form>
          </div>
          <div className="mixed-chart">
            <BarChart width={400}
              height={400} data={state} className='chart'  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompoundI;