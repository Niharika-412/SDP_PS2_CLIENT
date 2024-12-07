import React, { useEffect } from 'react';
import { Button, Grid, Paper, TextField, Typography, Container, Divider } from '@mui/material';
import { ArrowForward, Timeline, Person } from '@mui/icons-material';
import './Admissions.css';

const Admissions = () => {
    useEffect(() => {
        const processSections = document.querySelectorAll('.admissions-process, .admissions-testimonials, .admissions-form, .featured-courses');
        processSections.forEach((section, index) => {
            section.style.animationDelay = `${index * 0.3}s`;
            section.classList.add('fade-in');
        });
    }, []);

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
                    {["Web Development", "Data Science", "AI & Machine Learning", "Digital Marketing"].map((course, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Paper elevation={3} className="course-card">
                                <Typography variant="h6">{course}</Typography>
                                <Typography variant="body2">
                                    Short description of the course to attract students.
                                </Typography>
                                <Button variant="contained" color="primary" className="course-button">
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Admissions Process Section */}
            <Container maxWidth="lg" className="admissions-process">
                <Typography variant="h4" gutterBottom>
                    Admission Timeline
                </Typography>
                <Grid container spacing={4}>
                    {[ 
                        { step: "Step 1: Submit Application", description: "Fill out the form and submit your application with all the necessary details." },
                        { step: "Step 2: Attend Interview", description: "Attend a personalized interview to discuss your goals and aspirations." },
                        { step: "Step 3: Confirmation", description: "Receive an offer letter and start your course with us." },
                        { step: "Step 4: Pay Tuition Fees", description: "Complete the payment of your tuition fees to secure your spot." },
                        { step: "Step 5: Orientation", description: "Join us for an orientation session to meet faculty and peers." },
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
                <Divider />
                <Typography variant="h4" className="testimonials-title">
                    What Our Students Say
                </Typography>
                <Grid container spacing={4}>
                    {[
                        { quote: "The courses and the community here are excellent. I feel well-prepared for my career!", name: "Sarah J.", position: "Software Engineer" },
                        { quote: "Great learning experience with personalized attention from experts!", name: "John D.", position: "Data Scientist" },
                        { quote: "I gained a lot of knowledge and practical skills that I use daily in my job.", name: "Alice M.", position: "Web Developer" },
                        { quote: "The support from the instructors was invaluable during my learning journey!", name: "Mark T.", position: "UX Designer" },
                        { quote: "An amazing experience! I made lasting connections with fellow students.", name: "Linda K.", position: "Data Analyst" },
                    ].map((testimonial, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper elevation={3} className="testimonial-card">
                                <Person className="testimonial-icon" />
                                <Typography variant="body1">
                                    "{testimonial.quote}"
                                </Typography>
                                <Typography variant="subtitle2">— {testimonial.name}, {testimonial.position}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <Divider />
            </Container>

            {/* Application Form Section */}
            <Container maxWidth="lg" className="admissions-form">
                <Typography variant="h4" gutterBottom>
                    Apply Now
                </Typography>
                <Paper elevation={3} className="form-paper">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField label="First Name" variant="outlined" fullWidth className="text-field" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Last Name" variant="outlined" fullWidth className="text-field" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Email" variant="outlined" fullWidth className="text-field" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Phone Number" variant="outlined" fullWidth className="text-field" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Why do you want to join?"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    className="text-field"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" size="large" className="submit-button">
                                    Submit 
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Admissions;
