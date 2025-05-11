import { useState, useEffect, useCallback } from 'react';
import './App.css';

const DiceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2V7z"/>
  </svg>
);

const SpinnerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/>
    <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.5,1.5,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
    </path>
  </svg>
);

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://api.adviceslip.com/advice";

  const fetchAdvice = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // MODIFICATION: Added { cache: 'no-store' } to prevent caching
      const response = await fetch(API_URL, { cache: 'no-store' });

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.slip) {
        // Optional: Check if the new advice is actually different from the current one
        // This can help diagnose if the API itself is returning the same slip repeatedly.
        if (data.slip.id === adviceId) {
          console.warn("API returned the same advice slip ID. If advice text is also same, UI won't change.");
          // If the API frequently returns the same ID, appending a unique timestamp to the URL might be more effective:
          // const response = await fetch(`${API_URL}?c=${new Date().getTime()}`);
        }
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      } else {
        throw new Error("Invalid data structure from API");
      }

    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch:", err.message);
      setAdvice('');
      setAdviceId('');
    } finally {
      setLoading(false);
    }
  }, [adviceId]); // Added adviceId to dependency array for the console.warn check.
                  // If you don't need that specific warning or find it causes too many re-creations
                  // of fetchAdvice, you can revert to an empty array `[]` if API_URL is stable.
                  // For fetching new data from a button, an empty array `[]` for useCallback is usually fine
                  // as the function's internal logic doesn't change based on other state/props for its *next* call.
                  // Let's stick with `[]` for now to keep it standard, the cache fix is primary.

  // Reverted useCallback dependency to [] as the cache fix is the main target
  const memoizedFetchAdvice = useCallback(fetchAdvice, []);


  useEffect(() => {
    memoizedFetchAdvice(); // Use the memoized version
  }, [memoizedFetchAdvice]);

  const renderContent = () => {
    if (loading && !advice) {
      return <p className='loading-message'>Fetching your first piece of advice...</p>;
    }
    if (error) {
      return <p className='error-message'>Error: {error}</p>;
    }
    if (advice) {
      return <h3 className='Advice-Text'>{advice}</h3>;
    }
    return <p>No advice found. Try again!</p>;
  };

  return (
    <>
      <div className='Background'>
        <div className='Box-container'>
          <div className='Main-content'>
            {error ? (
              <h6 className='Advice-Number'>ERROR</h6>
            ) : adviceId ? ( // If there's an ID and no error, always display it
              <h6 className='Advice-Number'>ADVICE #{adviceId}</h6>
            ) : loading ? ( // Only if no ID exists yet (initial load) AND we are loading, show "LOADING..."
              <h6 className='Advice-Number'>LOADING ADVICE ID...</h6>
            ) : null /* Or a placeholder if needed when no ID, not loading, and no error */}

            <div className='Advice-Quote'>
              {renderContent()}
            </div>

            <div className='divider'></div>
          </div>
          <div className='button-container'>
            <button onClick={memoizedFetchAdvice} disabled={loading} aria-label="Get new advice">
              {loading ? <SpinnerIcon /> : <DiceIcon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;