import React from "react";
import ReactDOM from "react-dom";
import TextField from "@material-ui/core/TextField";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TestInput />
      <TextField
        onKeyPress={ev => {
          console.log(`Pressed keyCode ${ev.key}`);
          if (ev.key === "Enter") {
            // Do code here
            ev.preventDefault();
          }
        }}
      />
    </div>
  );
}

class TestInput extends React.Component {
  render() {
    return "hello world";
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
