why jsx - prevois steps were not a developer friendly there for we started using jsx

<!-- import React from "react";
import ReactDOM from "react-dom/client";

const containerDiv1 = React.createElement('div',{id:"container1" , key:"container1"},[  //first you need select root node
    React.createElement('h1',{className:"h1" ,key: "h1-1"},"hey this is react h1"),
    React.createElement('h2',{className:"h1" , key:"h2-1"},"hey this is react h2")
]);


const containerDiv2 = React.createElement("div",{id:"container2" , key:"container2"},[
    React.createElement('h1',{className:"h1", key:"h1-2"},"hey this is react h1"),
    React.createElement('h2',{className:"h1" , key:"h2-2"},"hey this is react h2")
]);

const parentDiv = React.createElement('div',{key:"parentDiv"},[containerDiv1,containerDiv2]);

const root = ReactDOM.createRoot(document.getElementById('root')); //this where you need to render
root.render(parentDiv); -->


this method was complecated 

there for we  use jsz

//jsx build by facebook developer

<!-- const jsxHeading = <h1>i am heading from JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading); -->

code can be written like this using jsx

->jbrowser does'nt know about jsx there is babel which helps to connect it with this
->jsx is normal react element and java script object


 What is JSX?
JSX is a syntax extension for JavaScript used in React.

It allows you to write HTML-like code inside JavaScript.

JSX makes React code more readable and easier to write.

🔹 Why Use JSX?
✔ Looks like HTML → Easy to understand.
✔ Helps create UI components quickly.
✔ More readable than React.createElement().
✔ JSX gets converted into JavaScript (React.createElement) behind the scenes.




############# babel ###############

🔹 What is Babel?
Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into older versions (ES5) so that browsers can understand it.

It helps React, JSX, and other modern JS features work on all browsers.

🔹 Why Use Babel?
✔ Converts JSX to JavaScript (React uses JSX, which browsers don’t understand).
✔ Ensures compatibility with older browsers.
✔ Supports latest JavaScript features like ES6, ES7, etc.
✔ Improves performance by optimizing code.






################## diff btw normal html and jsx####
1️⃣ Syntax:

Normal HTML uses standard HTML.

JSX looks like HTML but follows JavaScript rules.

2️⃣ JavaScript Integration:

Normal HTML does not allow JavaScript directly.

JSX allows embedding JavaScript inside {}.

3️⃣ Attributes:

In HTML, attributes are written as class, for, etc.

In JSX, use className instead of class and htmlFor instead of for.

4️⃣ Self-Closing Tags:

In HTML, self-closing tags like <br> and <img> are optional.

In JSX, self-closing tags must end with / (e.g., <br />, <img />).

5️⃣ Event Handling:

In HTML, events are written like onclick="myFunction()".

In JSX, use camelCase like onClick={myFunction}.

6️⃣ Comments:

HTML uses <!-- Comment -->.

JSX uses {/* Comment */}.

7️⃣ Parent Element Requirement:

HTML does not require a single parent element.

JSX must have a single parent element wrapping everything.



exapmle 
const age = 21;
const jsxHeading = (
    <div className="container">
     <h1 id="heading"> {age} </h1>
    </div>
 )