import React, { useState, useEffect, Fragment } from 'react';
import WorkoutForm from './WorkoutForm';

const WorkoutContainer = (props) => {
  
  const [reviews, setReviews] = useState();
  const [errors, setErrors] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>

     <WorkoutForm    
          errors={errors}
          currentUser={currentUser}
      />
   
      <div className="backButton"><a href="/" class="myButton" id="btn">Back to Home</a></div>
    </div>
  );
};

export default WorkoutContainer;
