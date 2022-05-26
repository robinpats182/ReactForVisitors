import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';



const App= ()=> {
  const [p, setP] = useState(0)
  const [t, setT] = useState(0)
  const [r, setR] = useState(0)
  const [si,setSi] = useState(0)

  const Result =()=>{
    setSi(p*t*r/100)
  }

  return (
    <div className="App">


      <AppBar position="static">
        <Toolbar>
          <Typography className='SI' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <div className='inputs'>
      <TextField onChange={(event)=> setP(event.target.value)} id="outlined-basic" label="Enter Principle" variant="outlined" />
      <br></br>
      <TextField onChange={(event)=> setT(event.target.value)} id="outlined-basic" label="Enter Time" variant="outlined" />
      <br></br>
      <TextField onChange={(event)=> setR(event.target.value)} id="outlined-basic" label="Enter Rates" variant="outlined" />
      </div>
      <div className='button'>
      <Button onClick={()=> Result()}  variant="contained">Calculate</Button>
    </div>
    <div className='SII'>
    <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest is : {si}
          </Typography>
          </div>
    </div>
  );
}

export default App;
