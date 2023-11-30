/* old syntax */
// ReactDOM.render(<p>Hello world from react</p>, document.getElementById("root"));
/*
ReactDOM.render(
    <div>
        <h1>React Course</h1>    
        <p>We will learn react in this course</p>
    </div>
    , document.getElementById("root"));
*/

// new syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>React Course</h1>    
        <p>We will learn react in this course</p>
    </div>
);