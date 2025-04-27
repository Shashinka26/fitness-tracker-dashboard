import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

const WorkoutTracker = () => {
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [workouts, setWorkouts] = useState([]);

  // Save workout
  const handleLogWorkout = async () => {
    if (!type || !duration || !calories) {
      alert("Fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, 'workouts'), {
        workoutType: type,
        duration: Number(duration),
        calories: Number(calories),
        timestamp: serverTimestamp(),
      });
      setType('');
      setDuration('');
      setCalories('');
    } catch (error) {
      console.error("Failed to log workout:", error);
    }
  };

  // Fetch workout history
  useEffect(() => {
    const q = query(collection(db, 'workouts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const workoutList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWorkouts(workoutList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Workout Tracker</h2>
      <input
        type="text"
        placeholder="Workout Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories Burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button onClick={handleLogWorkout}>Log Workout</button>

      <h3>Workout History</h3>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            {workout.workoutType} - {workout.duration} min - {workout.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutTracker;
