import './App.css';
import Info from './Components/Info.js';
import Card from './Components/Card.js';
import React, { useState } from 'react';

function App() {
  const [daysLeft, setDaysLeft] = useState(100);
  const [round, setRound] = useState(1.1);
  return (
    <div className="h-screen">
      <Info daysLeft={daysLeft} round={round}/>
      <div className="flex items-center justify-center">
        <Card className="h-3/4 w-3/4">
          <h1 className="text-center">Save Timmy!</h1>
          <div className="flex items-center justify-center">
            <h2>Solve: </h2>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
