import React, { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]); // State to store students
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/students') // Replace with your backend API URL
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch students'); // Handle HTTP errors
        }
        return res.json();
      })
      .then((data) => {
        setStudents(data); // Save data to state
      })
      .catch((err) => {
        console.error(err); // Log errors
        setError(err.message); // Set error message
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>Student Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name}</li> // Adjust "student.name" based on your backend response
          ))}
        </ul>
      ) : (
        <p>Loading students...</p> // Display while loading
      )}
    </div>
  );
};

export default Students;
