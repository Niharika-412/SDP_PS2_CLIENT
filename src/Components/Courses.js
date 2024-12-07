import React, { useState } from 'react';
import CourseCard from './CourseCard';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import webdev1 from './Images/webdev1.jpg';
import webdev2 from './Images/webdev2.jpg';
import webdev3 from './Images/webdev3.jpg';
import webdev4 from './Images/webdev4.jpg';
import webdev5 from './Images/webdev5.jpg';
import webdev6 from './Images/webdev6.jpg';
import python1 from './Images/python1.jpg';
import python2 from './Images/python2.jpg';
import python3 from './Images/python3.jpg';
import python4 from './Images/python4.jpg';
import python5 from './Images/python5.jpg';
import java1 from './Images/java1.jpg';
import java2 from './Images/java2.jpg';
import java3 from './Images/java3.jpg';
import java4 from './Images/java4.jpg';
import java5 from './Images/java5.jpg';
import dbms1 from './Images/dbms1.jpg';
import dbms2 from './Images/dbms2.jpg';
import dbms3 from './Images/dbms3.jpg';
import dbms4 from './Images/dbms4.jpg';
import dbms5 from './Images/dbms5.jpg';
import dbms6 from './Images/dbms6.jpg';
import Aiml1 from './Images/Aiml1.jpg';
import Aiml2 from './Images/Aiml2.jpg';
import Aiml3 from './Images/Aiml3.jpg';
import Aiml4 from './Images/Aiml4.jpg';
import Aiml5 from './Images/Aiml5.jpg';
import Aiml6 from './Images/Aiml6.jpg';
import cb1 from './Images/cb1.jpg';
import cb2 from './Images/cb2.jpg';
import cb3 from './Images/cb3.jpg';
import cb4 from './Images/cb4.jpg';
import cb5 from './Images/cb5.jpg';
import cb6 from './Images/cb6.jpg';
import php1 from './Images/php1.jpg';
import php2 from './Images/php2.jpg';
import php3 from './Images/php3.jpg';
import php4 from './Images/php4.jpg';
import php5 from './Images/php5.jpg';
import php6 from './Images/php6.jpg';
import nosql1 from './Images/nosql1.jpg';
import nosql2 from './Images/nosql2.jpg';
import nosql3 from './Images/nosql3.jpg';
import nosql4 from './Images/nosql4.jpg';
import nosql5 from './Images/nosql5.jpg';
import nosql6 from './Images/nosql6.jpg';
import ts1 from './Images/ts1.jpg';
import ts2 from './Images/ts2.jpg';
import ts3 from './Images/ts3.jpg';
import ts4 from './Images/ts4.jpg';
import ts5 from './Images/ts5.jpg';
import ts6 from './Images/ts6.jpg';


const StyledButton = styled(Button)(({ theme }) => ({
    margin: '0 10px',
    paddingTop: '10px',
    paddingBottom:'10px',
    paddingLeft:'70px',
    paddingRight:'70px',
    backgroundColor: 'transparent',
    color: '#28a745',
    border: '2px solid #28a745',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: '#28a745',
        color: '#fff',
    },
}));

const Courses = () => {
    const coursesData = {
        webDevelopment: [
            {
                title: "The Complete 2024 Web Development Bootcamp",
                instructor: "Dr. Angela Yu",
                rating: 4.7,
                learners: "404,360",
                price: 449,
                originalPrice: 3099,
                image: webdev1
            },
            {
                title: "The Web Developer Bootcamp 2024",
                instructor: "Colt Steele",
                rating: 4.7,
                learners: "275,996",
                price: 449,
                originalPrice: 3099,
                image: webdev2
            },
            {
                title: "React - The Complete Guide",
                instructor: "Maximilian Schwarzmüller",
                rating: 4.8,
                learners: "200,000",
                price: 499,
                originalPrice: 2999,
                image: webdev3
            },
            {
                title: "JavaScript: Understanding the Weird Parts",
                instructor: "Tony Alicea",
                rating: 4.8,
                learners: "120,000",
                price: 399,
                originalPrice: 1999,
                image: webdev4
            },
            {
                title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
                instructor: "Jonas Schmedtmann",
                rating: 4.9,
                learners: "150,000",
                price: 399,
                originalPrice: 1999,
                image: webdev5
            },
            {
                title: "The Complete Node.js Developer Course",
                instructor: "Andrew Mead",
                rating: 4.9,
                learners: "250,000",
                price: 499,
                originalPrice: 2999,
                image: webdev6
            },
        ],
        java: [
            {
                title: "Java Programming Masterclass for Software Developers",
                instructor: "Tim Buchalka",
                rating: 4.8,
                learners: "150,000",
                price: 499,
                originalPrice: 3999,
                image: java1
            },
            {
                title: "Complete Java Masterclass",
                instructor: "Tim Buchalka",
                rating: 4.7,
                learners: "120,000",
                price: 499,
                originalPrice: 2999,
                image: java2
            },
            {
                title: "Java In-Depth: Become a Complete Java Engineer!",
                instructor: "Dheeru Mundluru",
                rating: 4.9,
                learners: "90,000",
                price: 499,
                originalPrice: 2999,
                image: java3
            },
            {
                title: "Master Java Web Services and RESTful API with Spring Boot",
                instructor: "Bharath Thippireddy",
                rating: 4.8,
                learners: "70,000",
                price: 399,
                originalPrice: 1999,
                image: java4
            },
            {
                title: "Learn Java 8 from Scratch",
                instructor: "Imtiaz Ahmad",
                rating: 4.6,
                learners: "50,000",
                price: 399,
                originalPrice: 1999,
                image: java5
            },
            {
                title: "Java Multithreading, Concurrency & Performance Optimization",
                instructor: "In28Minutes Official",
                rating: 4.7,
                learners: "80,000",
                price: 499,
                originalPrice: 2999,
                image: "path/to/your/java-course-image6.jpg"
            },
        ],
        python: [
            {
                title: "Python for Everybody",
                instructor: "Dr. Charles Severance",
                rating: 4.8,
                learners: "600,000",
                price: 399,
                originalPrice: 1999,
                image: python1
            },
            {
                title: "Complete Python Developer in 2024: Zero to Mastery",
                instructor: "Andrei Neagoie",
                rating: 4.9,
                learners: "300,000",
                price: 499,
                originalPrice: 2999,
                image: python2
            },
            {
                title: "Automate the Boring Stuff with Python Programming",
                instructor: "Al Sweigart",
                rating: 4.7,
                learners: "200,000",
                price: 399,
                originalPrice: 1999,
                image: python3
            },
            {
                title: "Python for Data Science and Machine Learning Bootcamp",
                instructor: "Jose Portilla",
                rating: 4.8,
                learners: "150,000",
                price: 499,
                originalPrice: 2999,
                image: python4
            },
            {
                title: "Deep Learning A-Z: Hands-On Artificial Neural Networks",
                instructor: "Hadelin de Ponteves",
                rating: 4.8,
                learners: "100,000",
                price: 499,
                originalPrice: 2999,
                image: python5
            },
            {
                title: "Python Data Science Handbook",
                instructor: "Jake VanderPlas",
                rating: 4.7,
                learners: "90,000",
                price: 399,
                originalPrice: 1999,
                image: "path/to/your/python-course-image6.jpg"
            },
        ],
        dbms: [
            {
                title: "Database Management Essentials",
                instructor: "Dr. John Doe",
                rating: 4.6,
                learners: "50,000",
                price: 399,
                originalPrice: 1999,
                image: dbms1
            },
            {
                title: "SQL for Data Science",
                instructor: "Dr. Jane Smith",
                rating: 4.7,
                learners: "60,000",
                price: 499,
                originalPrice: 2999,
                image: dbms2
            },
            {
                title: "Advanced SQL and Database Design",
                instructor: "Dr. Emily Davis",
                rating: 4.8,
                learners: "30,000",
                price: 499,
                originalPrice: 2999,
                image: dbms3
            },
            {
                title: "NoSQL Databases Explained",
                instructor: "Dr. Michael Johnson",
                rating: 4.5,
                learners: "20,000",
                price: 399,
                originalPrice: 1999,
                image: dbms4
            },
            {
                title: "MongoDB - The Complete Developer's Guide",
                instructor: "Dr. Maximilian Schwarzmüller",
                rating: 4.7,
                learners: "45,000",
                price: 499,
                originalPrice: 2999,
                image: dbms5
            },
            {
                title: "Introduction to Relational Databases",
                instructor: "Dr. Sarah Lee",
                rating: 4.6,
                learners: "25,000",
                price: 399,
                originalPrice: 1999,
                image: dbms6
            },
        ],
        aiMl: [
            {
                title: "Machine Learning A-Z: Hands-On Python & R In Data Science",
                instructor: "Kirill Eremenko",
                rating: 4.9,
                learners: "150,000",
                price: 499,
                originalPrice: 2999,
                image: Aiml1
            },
            {
                title: "Deep Learning A-Z: Hands-On Artificial Neural Networks",
                instructor: "Hadelin de Ponteves",
                rating: 4.8,
                learners: "100,000",
                price: 499,
                originalPrice: 2999,
                image: Aiml2
            },
            {
                title: "AI For Everyone",
                instructor: "Andrew Ng",
                rating: 4.7,
                learners: "200,000",
                price: 399,
                originalPrice: 1999,
                image: Aiml3
            },
            {
                title: "Python for Data Science and Machine Learning Bootcamp",
                instructor: "Jose Portilla",
                rating: 4.9,
                learners: "250,000",
                price: 399,
                originalPrice: 1999,
                image: Aiml4
            },
            {
                title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
                instructor: "Laurence Moroney",
                rating: 4.6,
                learners: "80,000",
                price: 499,
                originalPrice: 2999,
                image: Aiml5
            },
            {
                title: "Data Science and Machine Learning Bootcamp with R",
                instructor: "Jose Portilla",
                rating: 4.8,
                learners: "120,000",
                price: 499,
                originalPrice: 2999,
                image: Aiml6
            },
        ],
        cybersecurity: [
            {
                title: "The Complete Cyber Security Course: Hackers Exposed!",
                instructor: "Nathan Hunter",
                rating: 4.8,
                learners: "70,000",
                price: 499,
                originalPrice: 2999,
                image: cb1
            },
            {
                title: "Cybersecurity for Business",
                instructor: "David Gilmore",
                rating: 4.7,
                learners: "40,000",
                price: 399,
                originalPrice: 1999,
                image: cb2
            },
            {
                title: "Ethical Hacking: Beginners Guide to Hacking",
                instructor: "John Doe",
                rating: 4.5,
                learners: "30,000",
                price: 299,
                originalPrice: 1999,
                image: cb3
            },
            {
                title: "CompTIA Security+ Certification: SY0-601",
                instructor: "Jason Dion",
                rating: 4.9,
                learners: "50,000",
                price: 499,
                originalPrice: 2999,
                image: cb4
            },
            {
                title: "Network Security Fundamentals",
                instructor: "Michael J. McKenzie",
                rating: 4.6,
                learners: "20,000",
                price: 399,
                originalPrice: 1999,
                image: cb5
            },
            {
                title: "Introduction to Cyber Security",
                instructor: "Shane Smith",
                rating: 4.5,
                learners: "25,000",
                price: 299,
                originalPrice: 1999,
                image: cb6
            },
        ],

        php: [
            {
                title: "The Complete php Course: Hackers Exposed!",
                instructor: "Nathan Hunter",
                rating: 4.8,
                learners: "70,000",
                price: 499,
                originalPrice: 2999,
                image: php1
            },
            {
                title: "Php for Business",
                instructor: "David Gilmore",
                rating: 4.7,
                learners: "40,000",
                price: 399,
                originalPrice: 1999,
                image:php2
            },
            {
                title: "Php: Beginners Guide to Hacking",
                instructor: "John Doe",
                rating: 4.5,
                learners: "30,000",
                price: 299,
                originalPrice: 1999,
                image: php3
            },
            {
                title: "CompTIA Security+ Certification: SY0-601",
                instructor: "Jason Dion",
                rating: 4.9,
                learners: "50,000",
                price: 499,
                originalPrice: 2999,
                image: php4
            },
            {
                title: "Network Security Fundamentals",
                instructor: "Michael J. McKenzie",
                rating: 4.6,
                learners: "20,000",
                price: 399,
                originalPrice: 1999,
                image: php5
            },
            {
                title: "Introduction to Php",
                instructor: "Shane Smith",
                rating: 4.5,
                learners: "25,000",
                price: 299,
                originalPrice: 1999,
                image: php6
            },
        ],

        nosql: [
            {
                title: "The Complete NOSQL Course: Hackers Exposed!",
                instructor: "Nathan Hunter",
                rating: 4.8,
                learners: "70,000",
                price: 499,
                originalPrice: 2999,
                image: nosql1
            },
            {
                title: "NOSQL for Business",
                instructor: "David Gilmore",
                rating: 4.7,
                learners: "40,000",
                price: 399,
                originalPrice: 1999,
                image: nosql2
            },
            {
                title: "Ethical Hacking: Beginners Guide to Hacking",
                instructor: "John Doe",
                rating: 4.5,
                learners: "30,000",
                price: 299,
                originalPrice: 1999,
                image: nosql3
            },
            {
                title: "CompTIA Security+ Certification: SY0-601",
                instructor: "Jason Dion",
                rating: 4.9,
                learners: "50,000",
                price: 499,
                originalPrice: 2999,
                image: nosql4
            },
            {
                title: "Network Security Fundamentals",
                instructor: "Michael J. McKenzie",
                rating: 4.6,
                learners: "20,000",
                price: 399,
                originalPrice: 1999,
                image: nosql5
            },
            {
                title: "Introduction to MYSQL",
                instructor: "Shane Smith",
                rating: 4.5,
                learners: "25,000",
                price: 299,
                originalPrice: 1999,
                image: nosql6
            },
        ],

        


    };

    const [selectedCategory, setSelectedCategory] = useState('webDevelopment');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <Box sx={{ padding: 2 }}>
           <Typography 
  variant="h4" 
  sx={{ 
    marginBottom: 2, 
    fontFamily: "'Playfair Display', serif", 
    fontWeight: '600', 
    textTransform: 'uppercase', 
    letterSpacing: '0.100rem', 
    color: '#333',
    paddingLeft:'45%',
   // Adjust the color as needed
  }}
>
  Courses
</Typography>


            <Box sx={{ marginBottom: 2 }}>
                {Object.keys(coursesData).map((category) => (
                    <StyledButton key={category} onClick={() => handleCategoryChange(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </StyledButton>
                ))}
            </Box>
            <Grid container spacing={4}>
                {coursesData[selectedCategory].map((course) => (
                    <Grid item xs={12} sm={6} md={4} key={course.title}>
                        <CourseCard {...course} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Courses;
