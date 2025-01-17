import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_KEY } from "./constants";
import Card from "./components/Card";

function App() {
  const [photo, setPhoto] = useState({});
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        setPhoto(res.data)
        setDate(res.data.date);
      })
      .catch(err => console.log(err))
  }, [date]);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Card photoInfo={photo}/>
    </div>
  );
}

export default App;
