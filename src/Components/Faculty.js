import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Divider, Box, Avatar, Card, CardContent, Modal, Snackbar, List, ListItem, ListItemText, TextField } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QuizIcon from '@mui/icons-material/Quiz';
import { styled } from '@mui/system';

// Sample faculty data with additional faculty
const facultyData = [
  {
    id: 1,
    name: 'Dr. Praveen',
    department: 'Computer Science',
    courses: ['Data Structures', 'Algorithms'],
    profilePic: 'https://live.staticflickr.com/65535/49455631151_db57d1a5c9_b.jpg',
    students: ['John Doe', 'Jane Smith'],
  },
  {
    id: 2,
    name: 'Dr. Kiran',
    department: 'Mathematics',
    courses: ['Calculus', 'Statistics'],
    profilePic: 'https://tse2.mm.bing.net/th?id=OIP.khCRkTPBcJrtkdQ_UD9b6wHaE7&pid=Api&P=0&h=220',
    students: ['Alice Brown', 'Bob Green'],
  },
  // Other faculty data...
  {
    id: 2,
    name: 'Dr. Bhargav',
    department: 'Mathematics',
    courses: ['Calculus', 'Statistics'],
    profilePic: 'https://tse2.mm.bing.net/th?id=OIP.khCRkTPBcJrtkdQ_UD9b6wHaE7&pid=Api&P=0&h=220',
    students: ['Alice Brown', 'Bob Green'],
  },
  {
    id: 2,
    name: 'Dr. Nihar',
    department: 'Mathematics',
    courses: ['Calculus', 'Statistics'],
    profilePic: 'https://tse2.mm.bing.net/th?id=OIP.khCRkTPBcJrtkdQ_UD9b6wHaE7&pid=Api&P=0&h=220',
    students: ['Alice Brown', 'Bob Green'],
  },
];

// Styled components
const FacultyCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
  },
}));

const FacultyProfile = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  flex: 1,
  padding: theme.spacing(3),
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#f9f9f9',
  borderTop: '1px solid #e0e0e0',
  borderRadius: '8px',
  marginTop: theme.spacing(4),
}));

const HomeworkList = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#f4f6f8',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const Faculty = () => {
  const [openQuizModal, setOpenQuizModal] = useState(false);
  const [quizDetails, setQuizDetails] = useState({
    quizName: '',
    description: '',
    dueDate: '',
  });
  const [homeworkDetails, setHomeworkDetails] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedFacultyId, setSelectedFacultyId] = useState(null);
  const [openHomeworkModal, setOpenHomeworkModal] = useState(false);

  const handleGiveQuiz = (facultyId) => {
    setSelectedFacultyId(facultyId);
    setOpenQuizModal(true);  // Open the quiz modal
  };

  const handleCloseModal = () => {
    setOpenQuizModal(false);
    setOpenHomeworkModal(false);
  };

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizDetails({
      ...quizDetails,
      [name]: value,
    });
  };

  const handleAssignQuiz = () => {
    alert(`Quiz Assigned: ${quizDetails.quizName}\nDescription: ${quizDetails.description}\nDue Date: ${quizDetails.dueDate}`);
    setOpenQuizModal(false);
    setQuizDetails({
      quizName: '',
      description: '',
      dueDate: '',
    });
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <Typography variant="h4" component="div" align="center" sx={{ fontWeight: 700, marginBottom: 4, color: '#333' }}>
        Faculty Management Dashboard
      </Typography>

      <Divider sx={{ marginY: 4 }} />

      <Grid container spacing={3} direction="row" justifyContent="center">
        {facultyData.map((faculty) => (
          <Grid item xs={12} sm={6} md={6} key={faculty.id}>
            <FacultyCard>
              <FacultyProfile>
                <Avatar
                  alt={faculty.name}
                  src={faculty.profilePic}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    boxShadow: 3,
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faculty.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    <strong>{faculty.department}</strong>
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#888' }}>
                    <strong>Courses:</strong> {faculty.courses.join(', ')}
                  </Typography>
                </Box>
              </FacultyProfile>

              <ActionButtons>
                <Button
                  variant="contained"
                  startIcon={<AssignmentIcon />}
                  onClick={() => handleGiveAssignment(faculty.id)}
                  sx={{
                    backgroundColor: '#1976d2',
                    '&:hover': { backgroundColor: '#125a9e' },
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontWeight: 600,
                    textTransform: 'none',
                    width: '100%',
                    marginBottom: '12px',
                  }}
                >
                  Assign Homework
                </Button>

                <Button
                  variant="contained"
                  color="success"
                  startIcon={<CheckCircleOutlineIcon />}
                  sx={{
                    backgroundColor: '#4caf50',
                    '&:hover': { backgroundColor: '#388e3c' },
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontWeight: 600,
                    textTransform: 'none',
                    width: '100%',
                    marginBottom: '12px',
                  }}
                >
                  Mark Attendance
                </Button>

                <Button
                  variant="contained"
                  color="info"
                  startIcon={<QuizIcon />}
                  onClick={() => handleGiveQuiz(faculty.id)}
                  sx={{
                    backgroundColor: '#009688',
                    '&:hover': { backgroundColor: '#00796b' },
                    borderRadius: '8px',
                    padding: '12px 24px',
                    fontWeight: 600,
                    textTransform: 'none',
                    width: '100%',
                  }}
                >
                  Assign Quiz
                </Button>
              </ActionButtons>
            </FacultyCard>
          </Grid>
        ))}
      </Grid>

      <Modal open={openQuizModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2,
            boxShadow: 24,
            width: '400px',
          }}
        >
          <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
            Assign Quiz
          </Typography>
          <TextField
            label="Quiz Name"
            variant="outlined"
            fullWidth
            name="quizName"
            value={quizDetails.quizName}
            onChange={handleQuizChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={quizDetails.description}
            onChange={handleQuizChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Due Date"
            variant="outlined"
            fullWidth
            name="dueDate"
            type="date"
            value={quizDetails.dueDate}
            onChange={handleQuizChange}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAssignQuiz}
            sx={{ width: '100%' }}
          >
            Assign Quiz
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Faculty;
