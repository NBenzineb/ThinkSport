import React from "react";
import upperBody from './workouts/upperbody.json' 
import lowerBody from './workouts/lowerbody.json' 
import fullBody from './workouts/fullbody.json'
import WorkoutCard from './workoutCard.js'


function WorkoutList(props) {
  if (props.selected.upperBody === true) {
    let workouts = upperBody 
    return (
      <div className="cards">
        {workouts.map((workout) => (
          <WorkoutCard workoutName={`${workout.workoutName}`} workoutLogo={`${workout.workoutLogo}`} exercises={`${workout.exercises}`}/>
        ))}
      </div>
  );
  } else if (props.selected.lowerBody === true) {
    let workouts = lowerBody
    return (
      <div className="cards">
        {workouts.map((workout) => (
          <WorkoutCard workoutName={`${workout.workoutName}`} workoutLogo={`${workout.workoutLogo}`} exercises={`${workout.exercises}`}/>
        ))}
      </div>
  );
  } else if (props.selected.fullBody === true) {
    let workouts = fullBody
    return (
      <div className="cards">
        {workouts.map((workout) => (
          <WorkoutCard workoutName={`${workout.workoutName}`} workoutLogo={`${workout.workoutLogo}`} exercises={`${workout.exercises}`}/>
        ))}
      </div>
  );
  } else {
    return (
      <h3>No body parts selected yet</h3>
    )
  }

    
  
}

export default WorkoutList;