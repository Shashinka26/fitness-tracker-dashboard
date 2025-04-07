import React from 'react';
import './App.css';
import WorkoutTracker from './WorkoutTracker';
import UserProfile from './userprofile';


function App() {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <UserProfile />
      <WorkoutTracker />
      
    </div>
  );
}

export default App;
