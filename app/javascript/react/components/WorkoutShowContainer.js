import React, { useState, useEffect  } from 'react';

const WorkoutShowContainer = (props) => {
  const [exerciseLinks, setExerciseLinks] = useState([]);
  
  
  let workoutId = props.match.params.id;
  const fetchData = async () => {
    try {
      const workoutResponse = await fetch(`/api/v1/workouts/${workoutId}`);
      if (workoutResponse.ok) {
        const parsedWorkoutResponse = await workoutResponse.json();
        
        let exercises = parsedWorkoutResponse.exercises;
        let exerciseLinks = [];
        var i;
        for (i = 0; i < exercises.length; i++) {
          let link = "/exercises/" + exercises[i][0]
          exerciseLinks.push(<li><a href={link}>{exercises[i][1]}</a></li>)
        }
        setExerciseLinks(exerciseLinks)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="workoutmargin">{exerciseLinks}</div>
      
    </div>
  );
}
export default WorkoutShowContainer;