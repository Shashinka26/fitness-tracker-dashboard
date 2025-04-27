// src/UserProfile.js
import React, { useState } from 'react';
import { db } from './firebase';  // make sure you already have firebase.js setup
import { doc, setDoc } from 'firebase/firestore';

const saveUserProfile = async (profileData) => {
  try {
    await setDoc(doc(db, "users", profileData.email), profileData);
    alert("Profile saved! 💾");
  } catch (error) {
    console.error("Error saving profile:", error);
  }
};


const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    saveUserProfile(profile); // 🔥 This sends data to Firebase
  };
  

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        style={styles.image}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
        style={styles.input}
      />
      <button onClick={handleSave} style={styles.button}>
        Save Profile
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
  },
  image: {
    borderRadius: '50%',
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    width: '90%',
    padding: '10px',
    margin: '10px auto',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default UserProfile;
