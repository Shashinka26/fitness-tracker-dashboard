import React, { useState } from 'react';


const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    type: '',
    duration: '',
    caloriesBurned: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Workout Log:', workout);
    // Here you would add functionality to send this data to Firebase
  };

  return (
    <div>
      <h2>Workout Tracker</h2>
      <input
        type="text"
        name="type"
        placeholder="Workout Type"
        value={workout.type}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="duration"
        placeholder="Duration (minutes)"
        value={workout.duration}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="caloriesBurned"
        placeholder="Calories Burned"
        value={workout.caloriesBurned}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Log Workout</button>
    </div>
  );
};

export default WorkoutTracker;
