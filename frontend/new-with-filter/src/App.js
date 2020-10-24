import React, { useEffect, useState } from 'react';

import './App.css';
import DogCard from './Card';
import CardList from "./CardList";
import axios from "axios";

function App() {
    const [values, setValues] = React.useState({
        dog_datas: []
    })

    useEffect(() => {
        console.log("brandon");
        axios.get(`http://127.0.0.1:5000/api/get_dogs?limit=5`)
            .then((res) => {
                const data = res.data;
                console.log(data)
                setValues({...values, dog_datas: data.dog_data})
            });
    }, [])

    console.log(values.dog_datas)
  return (
    <div className="App">
      <header className="App-header">
          <CardList dog_datas={values.dog_datas}/>
      </header>
    </div>
  );
}

export default App;
