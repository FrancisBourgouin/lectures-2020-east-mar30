import React from 'react';


const CurrentDay = () => {
  const currentDate = new Date()
  return (
    <section>
      <h1>Current day</h1>
      <h2>Today's date: {currentDate.toDateString()}</h2>
    </section>
  )
}

export default CurrentDay