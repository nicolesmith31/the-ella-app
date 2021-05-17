import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WorkoutContainer from "./WorkoutContainer";
import WorkoutShowContainer from "./WorkoutShowContainer";
import ExerciseShowContainer from "./ExerciseShowContainer";
import Tdee from "../../../assets/javascripts/Tdee";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/workouts/new" component={WorkoutContainer} />
      <Route path="/tdee" component={Tdee} />
      <Route path="/workouts/:id" component={WorkoutShowContainer} />
      <Route path="/exercises/:id" component={ExerciseShowContainer} />
    </BrowserRouter>
  );
};

export default App;
// have a reviewed workouts route