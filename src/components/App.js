import React, { useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {
//   useEffect(()=> {
//     fetch( "http://localhost:8001/transactions")
//     .then(r => r.json())
//     .then(transc=> console.log(transc))
// }) //check if it is fetching data
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
