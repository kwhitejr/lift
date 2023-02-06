import React, {useState, useEffect} from "react";
import Papa from "papaparse";
import Calendar from "./Calendar";
import data from "./calendar-demo-data.json";
import './App.css';

const publishedCsv = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRx0VGPZXXdeQCHi865kjqvK76ZEucHt786cAt4M0Z2LRKxM2vnhiUM1VL9YtLMbyEYualICQWbA4ak/pub?output=csv";

function App() {

  const [liftData, setLiftData] = useState();

  useEffect(() => {
    const fetchData = async () => Papa.parse(publishedCsv, {
      download: true,
      header: true,
      complete: (results) => {
        setLiftData(results.data);
      },
    });

    fetchData();
  }, [])
  // const lifts = Array.from(liftData);

  console.log(liftData);

  return (
    <div className="App">
      <header className="App-header">
        Lift More
      </header>
      <Calendar
        data={data}
        config={{
          x: d => d["Date"],
          y: d => d.Volume,
        }}
      />
    </div>
  );
}

export default App;
