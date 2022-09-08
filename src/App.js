import { React, useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods);

  const submitFood = (submitFood) => {
    setFood((prevState) => {
      return [...prevState, submitFood];
    });
  }

  return (
    <div className="App">
      <AddFoodForm submitFood={submitFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((food) => {
          return (
            <FoodBox key={food.name} food={food} />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
