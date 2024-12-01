import React from "react";
import Form from "./Form";

let isRegistered = false;

function App() {
  return (
    <div className="container">
      {isRegistered ? <h1>Welcome back!</h1> : <h1>Sign up here!</h1>}

      <Form isRegistered={isRegistered} />
    </div>
  );
}

export default App;
