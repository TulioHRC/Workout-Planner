import './App.css'
import Header from './components/Header'
import Workouts from './components/Workouts'


function App() {
  return (
    <div className="App">
      <Header title="Workout Planner" />
      <Workouts />
    </div>
  );
}

export default App;
