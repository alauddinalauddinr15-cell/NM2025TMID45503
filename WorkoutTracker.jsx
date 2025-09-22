import { useState } from "react";

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");

  const addWorkout = () => {
    if (!exercise || !reps) return;
    setWorkouts([...workouts, { exercise, reps }]);
    setExercise("");
    setReps("");
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-2">Workout Tracker</h2>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <button
        onClick={addWorkout}
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
      >
        Add Workout
      </button>

      <ul className="mt-3 text-sm">
        {workouts.map((w, i) => (
          <li key={i} className="border-b py-1">
            {w.exercise} – {w.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
}
