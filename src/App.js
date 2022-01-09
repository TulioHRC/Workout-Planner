import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Workouts from './components/Workouts'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       plans: []
    }
  }
  
  addPlan = (serie) => {
    this.setState(prevState => ({
        plans: [...prevState.plans, serie]
    }), () => console.log(this.state.plans))
  }   

  render() {
    return (
      <div className="App">
        <Header title="Workout Planner" addFunction={this.addPlan} />
        <Workouts plans={this.state.plans} />
      </div>
    )
  }
}

export default App;
