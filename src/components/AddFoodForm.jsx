// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
// import Input from './Input';
import { React, useState } from 'react';

const initValue = {
    name: '',
    image: '',
    calories: '',
    servings: '',
}

// Iteration 4
function AddFoodForm({ submitFood }) {
    const [formData, setFormData] = useState(initValue);


    //create a generic handler for all inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (data) => {
        data.preventDefault()
        submitFood(formData)
        setFormData(initValue)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Divider>Add Food Entry</Divider>

            <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
            />
            <Input
                name="image"
                value={formData.image}
                onChange={handleChange}
                type="text"
            />
            <Input
                name="calories"
                value={formData.calories}
                onChange={handleChange}
                type="number"
            />
            <Input
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                type="number"
            />
            {/* add a button to submit the form */}
            <button type="submit" >Submit</button>
        </form>
    );
}

export default AddFoodForm;
