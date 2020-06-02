import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Village from '../components/Village';
import NewSmurf from '../components/NewSmurf';

// context
import { SmurfContext } from '../contexts/context';



function App () {
 
  const [smurfs, setSmurf] = useState([]);


  useEffect(() => {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("res",res.data);
      setSmurf(res.data);
    })
    .catch(err => {
      console.error("error", err);
    })
  }, []);

  const newSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };
  
  return (
    <div className="App">
      <h1>Welcome to Le Pays Maudit</h1>
      <SmurfContext.Provider value = {smurfs}>
      <NewSmurf newSmurf = {newSmurf} />
      <Village/>
       
      </SmurfContext.Provider>
    </div>
  
  );
  
}

export default App;
