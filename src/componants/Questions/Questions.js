import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>How React Work?</h1>
            <p>React is used to create a user interface in a more dynamic and efficient way using declarative code. React goes through the virtual DOM, creating a list of these changes that need to be made to the actual DOM. That’s why React is faster. React used the “key” property to made the changes. </p>

            <h1>Props Vs State</h1>
            <h4>Props</h4>
            <p>Props are read only companats. It allows passing data from one component to another. Props allow us to show dynamic data from the data table to the user interface.</p>
            <h4>State </h4>
            <p>State is used to store data. By clicking a user with a function we can change the stored data. By using state, users can change data from anywhere. It is a very important component of React.</p>
        </div>
    );
};

export default Questions;