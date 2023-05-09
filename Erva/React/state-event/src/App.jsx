import { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  return (
    <>
      <div className="flex-content">
        <div className="card">
          <h1>{time}</h1>
          <button className="btn-green" onClick={() => setTime((time) => new Date().toLocaleTimeString())}>
            Get Time
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
