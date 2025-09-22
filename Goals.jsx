import { useState } from "react";

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");

  const addGoal = () => {
    if (!goal) return;
    setGoals([...goals, goal]);
    setGoal("");
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-2">Goals</h2>
      <input
        type="text"
        placeholder="Set a goal..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <button
        onClick={addGoal}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
      >
        Add Goal
      </button>

      <ul className="mt-3 text-sm">
        {goals.map((g, i) => (
          <li key={i} className="border-b py-1">
            🎯 {g}
          </li>
        ))}
      </ul>
    </div>
  );
}
