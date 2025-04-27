import React from 'react';
import './App.css';
import WorkoutTracker from './WorkoutTracker';
import UserProfile from './userprofile';
import WorkoutHistory from './WorkoutHistory';

function App() {
  const userId = 'demoUser123'; // Replace with the actual logged-in user ID

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <UserProfile />
      <WorkoutTracker userId={userId} />
      <WorkoutHistory userId={userId} />
    </div>
  );
}

export default App;
