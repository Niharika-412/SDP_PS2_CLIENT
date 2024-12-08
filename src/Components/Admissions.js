import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import { ArrowForward, Timeline, Person } from '@mui/icons-material';
import './Admissions.css';

const Admissions = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', isForm: false });

  useEffect(() => {
    const processSections = document.querySelectorAll(
      '.admissions-process, .admissions-testimonials, .admissions-form, .featured-courses'
    );
    processSections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.3}s`;
      section.classList.add('fade-in');
    });
  }, []);

  const handleOpenModal = (title, content, isForm = false) => {
    setModalContent({ title, content, isForm });
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setModalContent({ title: '', content: '', isForm: false });
  };

  return (
    <div className="admissions-container">
      {/* Hero Section */}
      <Container maxWidth={false} className="hero-section">
        <Typography variant="h2" className="hero-title">
          Join the Best Courses Today
        </Typography>
        <Typography variant="body1" className="hero-subtitle">
          Kickstart your journey towards a bright future with our expert-led courses designed for success.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForward />}
          className="hero-button"
          onClick={() =>
            handleOpenModal('Apply Now', 'Fill out the application form to start your journey.', true)
          }
        >
          Apply
        </Button>
      </Container>

      {/* Featured Courses Section */}
      <Container maxWidth="lg" className="featured-courses">
        <Typography variant="h4" gutterBottom>
          Featured Courses
        </Typography>
        <Grid container spacing={4}>
          {['Web Development', 'Data Science', 'AI & Machine Learning', 'Digital Marketing'].map(
            (course, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Paper elevation={3} className="course-card">
                  <Typography variant="h6">{course}</Typography>
                  <Typography variant="body2">
                    Short description of the course to attract students.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="course-button"
                    onClick={() =>
                      handleOpenModal(
                        course,
                        `Learn more about our ${course} course. Dive into the detailed syllabus, outcomes, and more!`
                      )
                    }
                  >
                    Learn More
                  </Button>
                </Paper>
              </Grid>
            )
          )}
        </Grid>
      </Container>

      {/* Admissions Process Section */}
      <Container maxWidth="lg" className="admissions-process">
        <Typography variant="h4" gutterBottom>
          Admission Timeline
        </Typography>
        <Grid container spacing={4}>
          {[ 
            {
              step: 'Step 1: Submit Application',
              description: 'Fill out the form and submit your application with all the necessary details.',
            },
            {
              step: 'Step 2: Attend Interview',
              description: 'Attend a personalized interview to discuss your goals and aspirations.',
            },
            {
              step: 'Step 3: Confirmation',
              description: 'Receive an offer letter and start your course with us.',
            },
            {
              step: 'Step 4: Pay Tuition Fees',
              description: 'Complete the payment of your tuition fees to secure your spot.',
            },
            {
              step: 'Step 5: Orientation',
              description: 'Join us for an orientation session to meet faculty and peers.',
            },
            {
              step: 'Step 6: Start Learning',
              description: 'Begin your exciting learning journey with us!',
            },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} className="timeline-step">
                <Timeline className="timeline-icon" />
                <Typography variant="h6">{item.step}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" className="admissions-testimonials">
        <Typography variant="h4" gutterBottom>
          What Our Students Say
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: 'John Doe',
              testimonial: 'This course has transformed my career! The instructors are excellent, and I learned so much.',
            },
            {
              name: 'Jane Smith',
              testimonial: 'I got a job offer in just 3 months after completing the program. Highly recommended!',
            },
            {
              name: 'Sam Wilson',
              testimonial: 'A game-changing experience. The course was intensive and rewarding. I am now confident in my skills.',
            },
          ].map((student, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} className="testimonial-card">
                <Typography variant="h6">{student.name}</Typography>
                <Typography variant="body2">{student.testimonial}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle>{modalContent.title}</DialogTitle>
        <DialogContent>
          {modalContent.isForm ? (
            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField label="First Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Last Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Phone Number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Why do you want to join?"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
          ) : (
            <Typography variant="body1">{modalContent.content}</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
          {modalContent.isForm && (
            <Button variant="contained" color="primary">
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Admissions;
