import { Fragment, useCallback, useEffect, useState } from 'react';
import React from 'react';

function App() {
  const[advice, setAdvice] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  //Fetch the info from API
  const fetchAdvice = useCallback(async () => {
    setLoading(true); 
    setError(null); //Clear for new advice
    try {
      const advice = await fetch('https://api.adviceslip.com/advice');
      if (!Response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
      }
      const data = await advice.json();
      setAdvice(data);
    } catch (e) {
      setError(e.message);
      setAdvice(null);
      console.error("Failed to fetch advice:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  const handleAdvice = () => {
    fetchAdvice();
  };
  return (
    <div className='min-h-screen bg-neutral-blue950 '>
      
    </div>
  )
}

export default App
