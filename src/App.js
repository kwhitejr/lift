import React, {useState, useEffect} from "react";
// import { GoogleSpreadsheet } from "google-spreadsheet";
import Calendar from "./Calendar";
import data from "./calendar-demo-data.json";
import './App.css';

// const DOC_ID = "1_nlDf0QP9izwRCQDMMB8ut6cLsnPNzPf96ayGwgohYc"

function App() {

  // const [data, setData] = useState(data);

  // useEffect(() => {
  //   const getGoogleSheet = async () => {
  //     const doc = new GoogleSpreadsheet(DOC_ID);
  //     // await doc.useServiceAccountAuth(creds);
  //     await doc.loadInfo();
  //     const sheet = doc.sheetsByIndex[0];
  //     console.log(sheet);
  //     setData(sheet);
  //   };

  //   getGoogleSheet();
  // }, [])

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
