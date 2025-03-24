###   What is a Component in React?
A component in React is a reusable, self-contained piece of UI. It helps in breaking down the UI into smaller, manageable parts.

##  Types of Components in React


##  Functional Component (Recommended)

A simple JavaScript function that returns JSX.

Does not use this keyword.

Can use React Hooks (like useState, useEffect).
## there are multiple way use function component

const age = 21;
const jsxHeading = (
    <div className="container">
     <h1 id="heading"> {age} </h1>
    </div>
 )


const Heading1 = () => {
    return <h1 id="heading">HEADING</h1>
}


const Heading2 = () =>  <h1 id="heading">HEADING</h1>;

const Heading3 = () => (
    <div className="container">
    <Heading2/>     //multiple wayto use other into function
    <Heading2></Heading2>
    {Heading2()}
    <h1 id="heading"> {age} </h1>
   </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading3/>);

