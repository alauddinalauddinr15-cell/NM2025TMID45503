import WorkoutTracker from "./components/WorkoutTracker";
import NutritionLog from "./components/NutritionLog";
import Goals from "./components/Goals";
import ProgressDashboard from "./components/ProgressDashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
        FitFlex 💪 Your Personal Fitness Companion
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WorkoutTracker />
        <NutritionLog />
        <Goals />
        <ProgressDashboard />
      </div>
    </div>
  );
}
