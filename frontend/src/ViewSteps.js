import React, { useEffect, useState } from 'react';
import { db } from './firebase'; // Import firebase instance

const getSteps = async (userId) => {
  const stepsSnapshot = await db.collection('users')          // Access the "users" collection
    .doc(userId)                                              // Get the user document
    .collection('steps')                                       // Access the "steps" sub-collection
    .get();                                                   // Retrieve all documents

  const steps = stepsSnapshot.docs.map(doc => doc.data());     // Get step data
  return steps;
};

const ViewSteps = () => {
  const [stepsData, setStepsData] = useState([]);
  const userId = 'user123'; // Use actual logged-in user ID

  useEffect(() => {
    const fetchSteps = async () => {
      const steps = await getSteps(userId);
      setStepsData(steps);
    };
    fetchSteps();
  }, []);

  return (
    <div>
      <h2>User Steps</h2>
      <ul>
        {stepsData.map((step, index) => (
          <li key={index}>
            Date: {step.date}, Steps: {step.steps}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSteps;
