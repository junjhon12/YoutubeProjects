import { useState } from 'react'
import './App.css'

function App() {

  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://api.adviceslip.com/advice";

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    setAdvice(null);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Error! Status: ${response.status}');
      }

      const data = await response.json();

      setAdvice({ setup: data.setup, advice: data.advice});

    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch:", error)
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className='App'>

      </div>
    </>
  )
}

export default App
