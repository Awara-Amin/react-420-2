import React, { useState } from "react";

function App() {
  // var count = 0;
  // const state = useState();
  const state = useState(1256);

  // to hold what is in the useState
  console.log(state[0]);

  function increase() {
    // count++;
    // // console.log("I got clicked mate :)");
    // console.log(count);
    // //  we rerender to see change on the screen
    // ReactDOM.render(
    //   <div className="container">
    //     {/* <h1>0</h1> */}
    //     <h1>{count}</h1>
    //     {/* <button>+</button> */}
    //     <button onClick={increase}>+</button>
    //   </div>,
    //   document.getElementById("root")
    // );
  }

  //  make this like an out put for the App above
  return (
    <div className="container">
      {/* <h1>0</h1> */}
      {/* <h1>{count}</h1> */}
      <h1>{state[0]}</h1>
      {/* <button>+</button> */}
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
