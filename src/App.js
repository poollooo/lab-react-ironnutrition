import { React, useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return (
            <FoodBox food={{ ...food }} />
          )
        })}
      </Row>
    </div>
  );
}

export default App;
