import { useState } from "react";

export default function NutritionLog() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");

  const addMeal = () => {
    if (!meal) return;
    setMeals([...meals, meal]);
    setMeal("");
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-2">Nutrition Log</h2>
      <input
        type="text"
        placeholder="Add meal..."
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <button
        onClick={addMeal}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Save Meal
      </button>

      <ul className="mt-3 text-sm">
        {meals.map((m, i) => (
          <li key={i} className="border-b py-1">
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}
