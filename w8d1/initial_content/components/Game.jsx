import React, { useState } from 'react'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'

export default function Game(props) {
  const [state, setState] = useState({compSelection:null, playerSelection:null, status:'Waiting', cheating:false})
  return (
    <div>
    <main className="game">
      <Computer setState={setState} cheating={state.cheating} />
      <Player state={state} setState={setState}/>
    </main>
      <Result status={state.status} />
    </div>
  )
}