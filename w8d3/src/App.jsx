import React, { useState, useEffect } from "react";
import { punishingPlayerForBeingLucky, chooseItemRandomlyIGuess, validateResult } from './helpers'
import "./App.scss";

function App() {
  const [cheating, setCheating] = useState(false)
  const [playerChoice, setPlayerChoice] = useState(null)
  const [result, setResult] = useState(null)

  const newRound = () => {
    setPlayerChoice(null)
    setResult(null)
  }
  useEffect(() => {
    console.log('ran!')
    if (playerChoice) {
      let computerResult;
      if (cheating) {
        computerResult = punishingPlayerForBeingLucky(playerChoice)
      } else {
        computerResult = chooseItemRandomlyIGuess(Math.floor(Math.random() * 3))
      }
      setResult(validateResult(playerChoice, computerResult))

    }
  }, [playerChoice])
  return (
    <div className='App'>
      <h1>Welcome to Moai vs Axe vs Tree</h1>
      <section className="game">
        <span
          className={cheating ? "cheating" : undefined}
          onClick={() => setCheating(!cheating)}
        >
          :|
        </span>
        <span>:)</span>
      </section>
      {!result &&
        <section class="choices">
          <h2>Choose your destiny!</h2>
          <button onClick={() => setPlayerChoice('🌴')}>🌴</button>
          <button onClick={() => setPlayerChoice('🪓')}>🪓</button>
          <button onClick={() => setPlayerChoice('🗿')}>🗿</button>
        </section>
      }
      {result &&
        <>
          <section class="result" data-testid="result">
            {result === "Won" && <h2>Human won, for now.</h2>}
            {result === "Lost" && <h2>Computer won</h2>}
            {result === "Tied" && <h2>They tied (the knot?)</h2>}
          </section>
          <button onClick={newRound} id="restart">Play another round</button>
        </>
      }
    </div>
  );
}

export default App;
