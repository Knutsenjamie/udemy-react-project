// Import the React and ReactDOM libraries
import { root } from 'postcss-selector-parser';
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter Stuff Here</label>
            <input id="name" type="text"/>
            <button style="background-color: blue; color: white;">Send</button>
        </div> 
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
<App />,
document.querySelector('#root')
);