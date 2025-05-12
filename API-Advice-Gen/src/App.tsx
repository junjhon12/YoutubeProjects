import { useState, useEffect, useCallback } from 'react';
import './App.css';
import diceIconUrl from './assets/icon-dice.svg';
import desktopDivider from './assets/pattern-divider-desktop.svg';

// --- Component Definitions (DiceIcon, DesktopDivider remain the same) ---
const DiceIcon = ({ width = 24, height = 24, alt = "Dice icon", }) => (
  <img
    src={diceIconUrl}
    alt={alt}
    width={width}
    height={height}
  />
);

// Consider adjusting default width/height or removing them if the SVG scales via CSS
const DesktopDivider = ({ width = 444, height = 16, alt="" }) => ( // Example adjusted size
    <img
    src={desktopDivider}
    alt={alt} // Alt text usually empty for decorative images
    width={width}
    height={height}
    aria-hidden="true" // Hide decorative divider from screen readers
    />
);
// --- End Component Definitions ---


function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = "https://api.adviceslip.com/advice";

  const fetchAdvice = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      if (data && data.slip) {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      } else {
        throw new Error("Invalid data structure received from API.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      console.error("Failed to fetch advice:", errorMessage);
      setAdvice('');
      setAdviceId('');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  const renderContent = () => {
    if (loading && !advice && !error) return <p className='loading-message'>Fetching advice...</p>;
    if (error) return <p className='error-message'>Error: {error}</p>;
    if (advice) return <blockquote className='Advice-Text text-3xl text-center'>"{advice}"</blockquote>; // Added text-center
    return <p>Click the dice to get advice!</p>;
  };

  return (
    <main className='Background h-screen w-screen flex justify-center items-center p-4'> {/* Added padding to main */}
      {/* STEP 1: Add `relative` here */}
      <div className='Box-container relative bg-cyan-900 w-full max-w-lg min-h-[200px] rounded-2xl flex flex-col p-8 pt-10'> {/* Adjusted sizing & padding */}

        {/* Main content area - allow it to grow naturally */}
        <div className='Main-content flex flex-col items-center flex-grow mb-10'> {/* Added flex-grow and margin-bottom */}
          {/* Advice ID Display Logic */}
          {error ? (
            <h3 className='Advice-Number text-green-300 text-xs tracking-[0.2em] uppercase' aria-live="polite">Error Fetching Advice</h3>
          ) : adviceId ? (
            <h2 className='Advice-Number text-green-300 text-xs tracking-[0.2em] uppercase m-5' aria-live="polite">ADVICE # {adviceId}</h2> // Added margin-bottom
          ) : loading ? (
            <h3 className='Advice-Number text-green-300 text-xs tracking-[0.2em] uppercase' aria-live="polite">Loading Advice...</h3>
          ) : (
            <h3 className='Advice-Number text-green-300 text-xs tracking-[0.2em] uppercase' aria-live="polite">Advice Ready</h3>
          )}

          <div className='Advice-Quote flex-grow flex items-center justify-center mb-6'> {/* Added flex-grow and centering */}
            {renderContent()}
          </div>

          {/* Correctly call the component and add spacing */}
          <div className='divider w-full m-5'> {/* Ensure divider takes full width, adjust margin */}
             <DesktopDivider/> {/* Use component correctly, adjust props as needed */}
          </div>
        </div> {/* End Main-content */}

        {/* STEP 2 & 3: Move absolute positioning classes here, remove old relative/translate */}
        {/* Position this container relative to Box-container */}
        <div className='button-container absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2'>
          {/* STEP 4: Remove positioning classes from the button itself */}
            <button
              onClick={fetchAdvice}
              disabled={loading}
              aria-label="Get new advice"
              aria-busy={loading}
              title="Get new advice"
              // Add styling for the button appearance (padding, background, shape)
              // MODIFIED LINE: Added hover:shadow-lg and hover:shadow-cyan-400/50 (or your preferred color)
              className={`p-4 bg-green-400 rounded-full flex items-center justify-center transition duration-300 ease-in-out 
                         hover:shadow-[0_0_20px_5px_theme(colors.green.300/0.75)] 
                         focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75`}
            >
              <DiceIcon />
            </button>
        </div>
      </div> {/* End Box-container */}
    </main>
  );
}

export default App;