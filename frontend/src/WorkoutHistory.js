import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase";

const WorkoutHistory = ({ userId }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "workouts"),
      where("userId", "==", userId),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const workoutList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setWorkouts(workoutList);
    });

    return () => unsubscribe();
  }, [userId]);

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Workout History</h3>
      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            <strong>{w.workoutType}</strong> - {w.duration} min - Intensity: {w.intensity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutHistory;
