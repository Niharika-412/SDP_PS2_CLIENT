import React, { useState } from 'react';

const DiscussionForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComment = { name, comment };
      setComments([...comments, newComment]);
      setName('');
      setComment('');
    }
  };

  return (
    <div style={styles.discussionForm}>
      <h2>Discussion Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        
        <label htmlFor="comment" style={styles.label}>Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          required
          style={styles.textarea}
        ></textarea>
        
        <button type="submit" style={styles.button} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}>
          Post
        </button>
      </form>

      <div style={styles.comments}>
        {comments.map((commentData, index) => (
          <div
            key={index}
            style={{
              ...styles.comment,
              backgroundColor: index % 2 === 0 ? '#e9f7fc' : '#f2f2f2',
            }}
          >
            <strong>{commentData.name}:</strong>
            <p>{commentData.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  discussionForm: {
    width: '70%',
    margin: '50px auto',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  label: {
    display: 'block',
    marginTop: '10px',
  },
  input: {
    width: '70%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '70%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#007BFF',      
    color: 'white',                 
    border: 'none',
    marginTop: '10px',   
    marginRight:'20px',
    cursor: 'pointer',              
    borderRadius: '2px',
    padding: '25px 25px',            
    fontSize: '16px',  
    width:'10%',
    transition: 'background-color 0.3s ease, transform 0.2s ease', 
  },
  
  buttonHover: {
    backgroundColor: '#0056b3',     
    transform: 'scale(1.05)',        
  },
  
  comments: {
    marginTop: '30px',
  },
  comment: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
  },
};

export default DiscussionForm;
