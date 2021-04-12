import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// var count = 0;

// function increase() {
//   count++;
//   // console.log("I got clicked mate :)");
//   console.log(count);
//   //  we rerender to see change on the screen
//   ReactDOM.render(
//     <div className="container">
//       {/* <h1>0</h1> */}
//       <h1>{count}</h1>
//       {/* <button>+</button> */}
//       <button onClick={increase}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// }

ReactDOM.render(
  <App />,
  // <div className="container">
  //   {/* <h1>0</h1> */}
  //   <h1>{count}</h1>s
  //   {/* <button>+</button> */}
  //   <button onClick={increase}>+</button>
  // </div>,
  document.getElementById("root")
);
