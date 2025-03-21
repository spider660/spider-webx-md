import React, { useState } from "react";
import axios from "axios";
import PairingForm from "./components/PairingForm";
import "./styles/style.css";  // Optional styling

function App() {
  const [message, setMessage] = useState("");

  const handlePairing = async (bot1, bot2) => {
    try {
      const response = await axios.post("http://localhost:3000/api/pair", { bot1, bot2 });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error pairing bots.");
    }
  };

  return (
    <div className="spider-md">
      <h1>Bot Pairing</h1>
      <PairingForm onPair={handlePairing} />
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;