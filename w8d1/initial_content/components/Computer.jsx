import React from 'react';

export default function Computer(props) {
  const {setState, cheating} = props
  return (
   <section className="computer">
      <span data-testid="robot-icon" className={cheating ? "cheating" : null} role="img" aria-label="robot" onClick={() => setState(prevState => ({ ...prevState, cheating: (prevState.cheating ? false : true) })) }>
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button><span role="img" aria-label="moai">❔</span></button>
          <button><span role="img" aria-label="axe">❔</span></button>
          <button><span role="img" aria-label="tree">❔</span></button>
        </div>
      </div>
   </section>
  )
}