import Calendar from "./Calendar";
import data from "./calendar-demo-data.json";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calendar
        data={data}
        config={{
          x: d => d["Date"],
          y: d => d.Volume,
        }}
      />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
