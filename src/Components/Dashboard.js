import React from 'react';
import mentor4 from './Images/mentor4.jpg';
import mentor5 from './Images/mentor5.jpg';
import mentor6 from './Images/mentor6.jpg';

const Dashboard = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f9faff',
      fontFamily: 'Poppins, sans-serif',
      padding: '20px 40px',
    },
    header: {
      background: 'linear-gradient(90deg, #00695c, #00acc1)',
      color: '#fff',
      padding: '50px 30px',
      borderRadius: '20px',
      textAlign: 'center',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
      marginBottom: '30px',
      animation: 'fadeIn 1s ease-out',
    },
    headerTitle: {
      fontSize: '4rem',
      fontWeight: '700',
      marginBottom: '15px',
      animation: 'fadeIn 1.5s ease-out',
    },
    headerSubtitle: {
      fontSize: '1.4rem',
      fontWeight: '300',
      marginBottom: '20px',
      animation: 'fadeIn 2s ease-out',
    },
    mentorSection: {
      marginTop: '40px',
      backgroundColor: '#fff',
      padding: '40px 20px',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
    mentorHeading: {
      fontSize: '2.5rem',
      color: '#00796b',
      textAlign: 'center',
      marginBottom: '20px',
    },
    mentorList: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '30px',
    },
    mentorCard: {
      width: '250px',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    mentorImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      marginBottom: '15px',
      border: '3px solid #00796b',
    },
    mentorName: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: '#00796b',
      marginBottom: '10px',
    },
    mentorRole: {
      fontSize: '1rem',
      color: '#555',
    },
    featureSection: {
      marginTop: '50px',
      backgroundColor: '#fff',
      padding: '50px 20px',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
    featureHeading: {
      fontSize: '2.5rem',
      color: '#00695c',
      textAlign: 'center',
      marginBottom: '30px',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    featureCard: {
      backgroundColor: '#f0f4f4',
      padding: '20px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    footer: {
      marginTop: '60px',
      textAlign: 'center',
      fontSize: '1rem',
      color: '#fff',
      padding: '20px',
      backgroundColor: '#004d40',
      borderRadius: '10px',
    },
    quickLinksSection: {
      marginTop: '50px',
      backgroundColor: '#fff',
      padding: '40px 20px',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
    quickLinksHeading: {
      fontSize: '2rem',
      color: '#004d40',
      textAlign: 'center',
      marginBottom: '20px',
    },
    quickLinksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      textAlign: 'center',
    },
    quickLinksColumn: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#00796b',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome to EDU-LOOP</h1>
        <p style={styles.headerSubtitle}>
          Unlock your potential with innovative online learning solutions.
        </p>
      </header>

      {/* Mentor Section */}
      <section style={styles.mentorSection}>
        <h2 style={styles.mentorHeading}>Our Mentors</h2>
        <div style={styles.mentorList}>
          {[{ name: 'Bhargavi', role: 'AI/ML Expert', img: mentor4 },
          { name: 'Niharika', role: 'DBMS Specialist', img: mentor5 },
          { name: 'Jayathi', role: 'Data Science Expert', img: mentor6 }].map((mentor, idx) => (
            <div style={styles.mentorCard} key={idx}>
              <img src={mentor.img} alt={mentor.name} style={styles.mentorImage} />
              <h3 style={styles.mentorName}>{mentor.name}</h3>
              <p style={styles.mentorRole}>{mentor.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featureSection}>
        <h2 style={styles.featureHeading}>Why Choose Us?</h2>
        <div style={styles.featureGrid}>
          {['Interactive Learning', 'Expert Mentorship', '24/7 Support', 'Comprehensive Resources'].map((feature, idx) => (
            <div style={styles.featureCard} key={idx}>
              <h3 style={styles.featureTitle}>{feature}</h3>
              <p>
                Learn with hands-on practice and guidance from our world-class mentors.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section style={styles.quickLinksSection}>
        <h2 style={styles.quickLinksHeading}>Quick Links</h2>
        <div style={styles.quickLinksGrid}>
          {[
            ['Admissions', 'Courses', 'Mentors'],
            ['FAQs', 'Support', 'Contact Us'],
            ['Blog', 'Careers', 'Events'],
          ].map((column, idx) => (
            <div style={styles.quickLinksColumn} key={idx}>
              {column.map((link, i) => (
                <p key={i}>{link}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; 2024 EDU-LOOP. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
