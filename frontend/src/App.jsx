import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/hello/");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
    <div className="App">
      <h1>Triple B</h1>
      <button onClick={fetchMessage}>Click to eliminate bias</button>
      {message && <p>Message from backend: {message}</p>}
    </div>
  );
}

export default App;
