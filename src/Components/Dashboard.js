import React from 'react';
import mentor4 from './Images/mentor4.jpg';  // Import the image for mentor 1
import mentor5 from './Images/mentor5.jpg';
import mentor6 from './Images/mentor6.jpg';
const Dashboard = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f4f7fb',
      fontFamily: 'Poppins, sans-serif',
      padding: '30px 20px',
    },
    header: {
      backgroundColor: '#00695c',
      color: '#fff',
      padding: '50px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 1s ease-out',
    },
    headerTitle: {
      fontSize: '3.5rem',
      fontWeight: '600',
      marginBottom: '10px',
      animation: 'fadeIn 1.5s ease-out',
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      fontWeight: '300',
      marginBottom: '20px',
      animation: 'fadeIn 2s ease-out',
    },
    section: {
      marginTop: '50px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      marginTop: '20px',
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeUp 1.5s ease-out forwards',
    },
    statCard: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      textAlign: 'center',
      fontWeight: '600',
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeUp 1s ease-out forwards',
    },
    statNumber: {
      fontSize: '3rem',
      color: '#00796b',
    },
    statLabel: {
      fontSize: '1.1rem',
      color: '#555',
    },
    mentorSection: {
      marginTop: '60px',
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 1.5s ease-out',
    },
    mentorList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      opacity: 1,
      transform: 'translateY(0)',
      animation: 'fadeUp 1.5s ease-out forwards',
    },
    mentorCard: {
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    mentorImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      marginBottom: '15px',
      border: '3px solid #00796b',
      transition: 'transform 0.3s ease',
    },
    mentorName: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#00796b',
      marginBottom: '5px',
    },
    mentorRole: {
      fontSize: '1rem',
      color: '#555',
    },
    quickLinks: {
      marginTop: '50px',
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 2s ease-out',
    },
    quickLinkList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      listStyle: 'none',
      padding: '0',
    },
    quickLinkItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      color: '#00796b',
      fontWeight: 'bold',
      padding: '15px',
      backgroundColor: '#f0f4f4',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
    },
    quickLinkItemHover: {
      backgroundColor: '#e1f5f5',
      color: '#004d40',
      transform: 'translateY(-5px)',
    },
    footer: {
      marginTop: '50px',
      textAlign: 'center',
      fontSize: '1rem',
      color: '#555',
      padding: '20px',
      backgroundColor: '#00695c',
      color: '#fff',
      borderRadius: '10px',
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Welcome to EDU-LOOP</h1>
        <p style={styles.headerSubtitle}>
          Your one-stop platform for online course management and learning success.
        </p>
      </header>

      {/* Mentor Section */}
      <section style={styles.mentorSection}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Meet Our Mentors</h2>
        <div style={styles.mentorList}>
          <div style={styles.mentorCard}>
            <img
              src={mentor4}
              alt="Bhargavi"
              style={styles.mentorImage}
            />
            <h3 style={styles.mentorName}>Bhargavi</h3>
            <p style={styles.mentorRole}>AI/ML Expert</p>
          </div>
          <div style={styles.mentorCard}>
            <img
              src={mentor5}
              alt="Niharika"
              style={styles.mentorImage}
            />
            <h3 style={styles.mentorName}>Niharika</h3>
            <p style={styles.mentorRole}>DBMS Specialist</p>
          </div>
          <div style={styles.mentorCard}>
            <img
              src={mentor6}  // Use imported image for Jayathi
              alt="Jayathi"
              style={styles.mentorImage}
            />
            <h3 style={styles.mentorName}>Jayathi</h3>
            <p style={styles.mentorRole}>Data Science Expert</p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section style={styles.quickLinks}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Quick Links</h2>
        <ul style={styles.quickLinkList}>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Course Catalog
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Academic Calendar
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Support Center
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Student Dashboard
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Faculty Portal
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Course Feedback
            </a>
          </li>
          {/* Added new quick links */}
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Admission Information
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              Career Opportunities
            </a>
          </li>
          <li style={styles.quickLinkItem}>
            <a href="#" style={{ ...styles.quickLinkItem, ...styles.quickLinkItemHover }}>
              FAQs
            </a>
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 EDU-LOOP. All rights reserved. | <a href="#" style={styles.footerLink}>Privacy Policy</a> | <a href="#" style={styles.footerLink}>Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default Dashboard;
