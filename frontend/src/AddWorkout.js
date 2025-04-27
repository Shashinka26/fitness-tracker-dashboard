import React, { useState } from 'react';
import { db } from './firebase'; // Import the firebase instance

const addWorkout = async (userId, workoutData) => {
  await db.collection('users')         // Access the "users" collection
    .doc(userId)                        // Access the specific user document
    .collection('workouts')             // Go to the "workouts" sub-collection
    .add({
      type: workoutData.type,           // Workout type (e.g., Running)
      duration: workoutData.duration,   // Duration (e.g., 30 minutes)
      caloriesBurned: workoutData.caloriesBurned, // Calories burned (e.g., 200)
      date: workoutData.date,           // Current date
    });
};

const AddWorkout = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleSubmit = async () => {
    const userId = 'user123'; // Use actual logged-in user ID
    const workoutData = {
      type: workoutType,
      duration: duration,
      caloriesBurned: caloriesBurned,
      date: new Date().toISOString(),
    };
    await addWorkout(userId, workoutData); // Add workout to Firestore
    alert('Workout added!');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Workout Type"
        value={workoutType}
        onChange={(e) => setWorkoutType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={caloriesBurned}
        onChange={(e) => setCaloriesBurned(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Workout</button>
    </div>
  );
};

export default AddWorkout;
