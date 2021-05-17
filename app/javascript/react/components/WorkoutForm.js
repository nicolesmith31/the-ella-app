import React, { useState,useEffect } from "react";
import _ from "lodash";
import ErrorList from "./ErrorList";

const WorkoutForm = (props) => {
  const [formFields, setFormFields] = useState({});
  const [workoutExercise, setExercise] = useState({});
  const [fullWorkout, setFullWorkout] = useState([]);
  const [workoutName, setWorkoutName] = useState();

  const handleNameChange = (event) => {
    setWorkoutName({
      "workoutName": event.currentTarget
    });
    console.log(event.currentTarget)
  };

  const handleFieldChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.id]: event.currentTarget.value,
    });
    console.log(formFields)
  };

  const fetchExercise = async () => {
    try {
      const workoutResponse = await fetch(`https://wger.de/api/v2/exercisecategory/?format=json&language=2`);
      if (workoutResponse.ok) {
        const parsedWorkoutResponse = await workoutResponse.json();
        setExercise(parsedWorkoutResponse.results);
        console.log(parsedWorkoutResponse.results);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    fetchExercise();
  }, []);

  let workoutsCategories = [];
  let i;
  for (i = 0; i < workoutExercise.length; i++) {
    workoutsCategories.push(<span>{workoutExercise[i].name}</span>)
    workoutsCategories.push(<input
            name={workoutExercise[i].name}
            id={workoutExercise[i].id}
            type="number"
            min={0}
            max={10}
            value={formFields[workoutExercise[i].name]}
            onChange={handleFieldChange}
          />)
  }

  const validForSubmission = (props) => {
    // let submitErrors = {};
    // const requiredFields = ["category", "exercises"];
    // requiredFields.forEach((field) => {
    //   if (formFields[field].trim() === "") {
    //     submitErrors = {
    //       ...submitErrors,
    //       [field]: "is blank",
    //     };
    //   }
    // });
    // props.setErrors(submitErrors);
    // return _.isEmpty(submitErrors);
  };

  const addNewWorkout = async (formPayload) => {
    const addExercise = async (exerciseId, exerciseName) => {
    let exer = await fetch(`/api/v1/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        
      },
      body: JSON.stringify({exercise_id: exerciseId, name: exerciseName})
    })
    if (exer.ok) {
      const parsedExer = await exer.json();
      console.log(parsedExer);
    }
    
  }

  const addWorkout = async () => {
  let name = document.getElementById("name").value;

  let work = await fetch(`/api/v1/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      
    },
    body: JSON.stringify({name: name})
  })
  if (work.ok) {
    const parsedWork = await work.json();
    console.log(parsedWork);
    return parsedWork
  }
  
}

const addWorkoutExercise = async (exerciseId,workoutId) => {
  let workExer = await fetch(`/api/v1/workout_exercises`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      
    },
    body: JSON.stringify({workoutId: workoutId,exerciseId: exerciseId})
  })
  if (workExer.ok) {
    const parsedWorkExer = await workExer.json();
  }
  
}

  let i;
  for (i = 0; i < fullWorkout.length; i++) {
    addExercise(fullWorkout[i][1], fullWorkout[i][0])
  }

  let workout = addWorkout('test').then(function(response){
   

    let we;
    for (we = 0; we < fullWorkout.length; we++) {
      addWorkoutExercise(fullWorkout[we][1], response.id)
    }

  })

// controller build add exercise see if exists create

    // try {
    //  let exerciseId = workoutsCategories
      
    // }
    //   if (reviewResponse.ok) {
    //     const parsedReviewResponse = await reviewResponse.json();
    //     setReviews([...reviews, { review: parsedReviewResponse.review }]);
    //   }
    //   if (reviewResponse.status === 401 || reviewResponse.status === 422) {
    //     const errorMessage = await reviewResponse.json();
    //     setErrors({ error: errorMessage.error });
    //   }
    //   const error = new Error(`${reviewResponse.status}: ${reviewResponse.statusText}`);
    //   throw error;
    // } catch (error) {
    //   console.error(`Error in fetch: ${error.message}`);
    // }
  };

  let workoutPlan = [];
  let workoutNames = [];
  const generateWorkout = (event) => {
    event.preventDefault();

    let categories = Object.keys(formFields);

    const fetchIt = async () => {
      
      for (let cat = 0; cat < categories.length; cat++) {
      try {
        
        let exerciseResponse = await fetch(`https://wger.de/api/v2/exercise/?format=json&language=2&limit=200&category=` + categories[cat]);
        if (exerciseResponse.ok) {
          let parsedExerciseResponse = await exerciseResponse.json();

        for (let i = 0; i < formFields[categories[cat]]; i++) {
          let ranNum = Math.floor(Math.random() * parsedExerciseResponse.results.length);
          workoutPlan.push([parsedExerciseResponse.results[ranNum].name, parsedExerciseResponse.results[ranNum].id]);

          workoutNames.push(<p className="workoutexercises">{parsedExerciseResponse.results[ranNum].name}</p>);
          
        }
      } 
      console.log(exerciseResponse); 
    
      } catch (error) {
        console.error(`Error in fetch: ${error.message}`);
      }
    }
  }

    fetchIt().then(() => setFullWorkout(workoutNames));
    
    // if (validForSubmission()) {
    //   props.addNewWorkout(formFields);
    //   setFormFields({
    //     category: "",
    //     exercises: "",
    //   });
    // }
  };

  // const clearForm = (event) => {
  //   event.preventDefault();
  //   setFormFields({
  //     "name": ""
  //   });
  // };
  // if (_.isEmpty(props.currentUser)) {
  //   return (
  //     <div>
  //       <h4>Please sign in to leave a review</h4>
  //     </div>
  //   );
  // }

  return (
    <div>
      <form onSubmit={generateWorkout}>
        <ErrorList errors={props.errors} />
        <h3>Generate Workout</h3>
        <div className="workoutform">{workoutsCategories}
          <input className="myButton" type="submit" value="Generate Workout" />
          {/* <input className="alert button, myClearButton" type="button" value="Clear Form" onClick={clearForm} /> */}
        </div>
      </form>
      <span className="workoutform">{fullWorkout}</span>
      <span className="workoutform">Workout Name</span><input type="text" id="name" name="name" required
       minlength="4" maxlength="25" onChange={handleNameChange}></input>
      <span className="saveform"><input className="myButton" type="button" value="Save Workout" onClick={addNewWorkout}/></span>
    </div>
  );
};

export default WorkoutForm;
