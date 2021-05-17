import React, { useState, useEffect  } from 'react';
import { useHistory } from "react-router-dom";

const ExerciseShowContainer = (props) => {

  const [exerciseInfo, setExerciseInfo] = useState([]);

  let exerciseId = props.match.params.id;

  const fetchData = async () => {
    try {
      const exerciseResponse = await fetch(`https://wger.de/api/v2/exerciseinfo/${exerciseId}`);
      if (exerciseResponse.ok) {
        const parsedExerciseResponse = await exerciseResponse.json();
        
        let detailArray = [];

        detailArray.push(<p>{parsedExerciseResponse.name}</p>);
        detailArray.push(<p>{parsedExerciseResponse.description}</p>);

        var i;
        for (i = 0; i < parsedExerciseResponse.images.length; i++) {
          detailArray.push(<img src={parsedExerciseResponse.images[i].image} alt="Image not found"></img>);
        }

        

        setExerciseInfo(detailArray)
        
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
     
      <div className="workoutlinks">{exerciseInfo}</div>
      
    </div>
  );
}
export default ExerciseShowContainer;