import { useEffect, useState } from 'react';

function App()
{
  const [quote, setQuote] = useState("");

  async function getQuote()
  {
    const res = await fetch("https://stoic.tekloon.net/stoic-quote");
    const data = await res.json();
    setQuote(data.quote)
  }

  useEffect(() =>
  {
    getQuote();
  }, []);

  return (
    <div className="App h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center p-5 mb-5">Get your daily stoic quote.</h1>
        <p className="text-lg mb-10 text-center p-5">{quote}</p>
        <div className="btn flex justify-center">
          <button onClick={getQuote} className='rounded p-2 bg-black text-zinc-200'>Get quote</button>
        </div>
      </div>

    </div>
  );
}

export default App;
