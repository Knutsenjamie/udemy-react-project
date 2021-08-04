// Import the React and ReactDOM libraries
import { root } from 'postcss-selector-parser';
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    const buttonText = { text: 'Click Me'};

    return (
        <div>
            <label className="label" for="name">Enter Stuff Here</label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
                {/* if you try to use an empty javascript object, you'll get the following error: "Objects are not valid as a React Child" UNLESS you add .text to the end of referenced object (see above ^)*/}
            </button>
        </div> 
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
);