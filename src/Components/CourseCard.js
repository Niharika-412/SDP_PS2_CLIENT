import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CourseCard.css'; // Make sure the path is correct based on your file structure
 // Import the CSS for flipping

const CourseCard = ({ title, instructor, rating, learners, price, originalPrice, image, additionalInfo }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div 
      className={`card-container ${flipped ? 'flipped' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
        {/* Front Side */}
        <div className="card-front">
          <Card>
            <CardMedia
              component="img"
              alt={title}
              height="140"
              image={image}
            />
            <CardContent>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="subtitle1">{instructor}</Typography>
              <Typography variant="body2">Rating: {rating} ⭐</Typography>
              <Typography variant="body2">Learners: {learners}</Typography>
              <Typography variant="body1">
                Price: ₹{price} <span style={{ textDecoration: 'line-through' }}>₹{originalPrice}</span>
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Back Side */}
        <div className="card-back">
          <Card style={{ backgroundColor: 'grey', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">Additional Information</Typography>
              <Typography variant="body2">
                {additionalInfo || "No additional information available."}
              </Typography>
              <Typography variant="body2" style={{ marginTop: '10px' }}>
                This course includes:
              </Typography>
              <ul>
                <li>In-depth tutorials</li>
                <li>Hands-on projects</li>
                <li>Support and resources</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
