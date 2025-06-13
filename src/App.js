
import './App.css';
import React, { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0)
  const [message, setMessage] = useState(0);

  //logic
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('please enter a valid weight and height')
    }
    else {
      let bmi = (weight / (height *0.3048 )**2) 
      setBmi(bmi.toFixed(1))

      //
      if (bmi < 18.5) {
        setMessage('you are underweight')
      }
      else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('you are healthy weight')
      }
      else {
        setMessage('you are over weight')
      }
    }
  }
    //realod
    let reload = () => {
      window.location.reload()
    }




    return (
      <div className="App">
        <div className='container'>
          <h2>BMI CALCULATOR</h2>
          <form onSubmit={calcBmi}>
            <div className='weight'>
              <label>Weight(kg)</label>
              <input type='text' placeholder='enter your weight' value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className='height' >

              <label>Height(feet)</label>
              <input type='text' placeholder='enter your height' value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className='btnn'>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
            </div>
            <div className='center'>
              <h3>Your Bmi is:{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>


      </div>
    );
  }

  export default App;
