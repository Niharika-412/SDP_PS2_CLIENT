import React, { useState } from "react";
import { Typography, TextField, Button, Box, Paper } from "@mui/material";

const Grades = () => {
  const [studentId, setStudentId] = useState("");
  const [studentGrades, setStudentGrades] = useState(null);
  const [error, setError] = useState(null); // To handle errors

  // Sample grades data
  const gradesData = {
    "123": { Math: 85, Science: 90, English: 78, History: 88, Geography: 92 },
    "124": { Math: 75, Science: 80, English: 85, History: 70, Geography: 80 },
    "125": { Math: 95, Science: 92, English: 90, History: 94, Geography: 89 },
    "318": { AOOP: 90, daa: 95, aiml: 98, dbms: 99 },
    "319":{pfsd:90,mswd:90},
  };

  const handleSearch = async () => {
    // Check if the student ID exists in the gradesData first
    if (gradesData[studentId]) {
      setStudentGrades(gradesData[studentId]);
      setError(null); // Reset error if data is found
    } else {
      setStudentGrades(null); // Clear previous grades if not found
      setError("Student ID not found. Please check and try again.");
    }

    // Save the student ID in localStoragexxxx 
    localStorage.setItem("studentId", studentId);

    // Simulate API call if data is not found in gradesData
    if (!gradesData[studentId]) {
      try {
        const response = await fetch(`/api/grades/${studentId}`); // Call backend API
        const data = await response.json();

        if (response.ok) {
          setStudentGrades(data.grades);
          setError(null); // Reset error if data is fetched successfully
        } else {
          setStudentGrades(null); // Clear previous grades if error
          setError(data.error || "An error occurred. Please try again.");
        }
      } catch (err) {
        setStudentGrades(null); // Clear previous grades if error
        setError("Unable to connect to the server. Please try again later.");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "50px",
        backgroundColor: "#f5f5f5",
        color: "#333",
        width: "100%",
        margin: "0",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Student Grades Portal
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ marginBottom: "30px" }}>
          Enter a Student ID to retrieve grades.
        </Typography>

        {/* Centered search bar */}
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "30px", gap: "15px", width: "100%" }}>
          <TextField
            label="Student ID"
            variant="outlined"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            sx={{ minWidth: "250px", width: "400px", borderRadius: "8px" }} // Adjusted width
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              backgroundColor: "#3f51b5",
              color: "white",
              "&:hover": {
                backgroundColor: "#303f9f",
              },
              borderRadius: "8px",
            }}
          >
            Search
          </Button>
        </Box>

        {/* Display grades or error message */}
        {error && (
          <Typography variant="h6" color="red" align="center" marginTop="30px">
            {error}
          </Typography>
        )}

        {studentGrades ? (
          <Paper
            elevation={4}
            sx={{
              marginTop: "30px",
              padding: "30px",
              borderRadius: "12px",
              backgroundColor: "#e0f7fa",
            }}
          >
            <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
              Grades for Student ID: {studentId}
            </Typography>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              {/* Centered grades section */}
              {Object.entries(studentGrades).map(([subject, grade]) => (
                <Typography key={subject} variant="h6" align="center" sx={{ margin: "10px 0" }}>
                  {subject}: <span style={{ fontWeight: "bold" }}>{grade}</span>
                </Typography>
              ))}
            </Box>
          </Paper>
        ) : (
          studentId && !error && (
            <Typography variant="h6" color="red" align="center" marginTop="30px">
              Student ID not found. Please check and try again.
            </Typography>
          )
        )}
      </Box>

      {/* Footer */}
      <Box sx={{ padding: "20px", backgroundColor: "#333", color: "white", textAlign: "center" }}>
        <Typography variant="body2">&copy; 2024 Online Course Management System. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Grades;
