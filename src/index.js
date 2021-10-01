// ./index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ToggleSwitch from "../src/Components/ToggleSwitch";
import CustomSelect from "../src/Components/CustomSelect.js";
import FormInput from "../src/Components/FormInput.js";
import Button from "../src/Components/Button";
import Modal from "../src/Components/Modal.js";
import "./styles.css";




function App() {
  const data = [
    {
      id: "1",
      name: "One"
    },
    {
      id: "2",
      name: "Two"
    },
    {
      id: "3",
      name: "Three"
    },
    {
      id: "4",
      name: "Four"
    }
  ];
  function handleChange(event) {
    console.log(event.target.value);
  }
  function onSelectChange(event) {
    console.log(event.target.value);
  }
  function onToggleChange(event) {
    console.log(event.target.checked);
  }
  return (
    <div className="App">
      <form>
        <Modal show={true} message={"Hello"}>
          <p>THIS IS A MODAL</p><br /><br />
        </Modal>
        <FormInput type={"text"} onChange={handleChange} />	&nbsp;	&nbsp;	&nbsp;	&nbsp;
        <FormInput type={"email"} onChange={handleChange} /><br /><br />
        <div>
          <CustomSelect data={data} onSelectChange={onSelectChange} className="align-switch" />
        </div><br />
        <div>
          <ToggleSwitch
            id="id"
            defaultChecked={false}
            disabled={false}
            Text={["Yes", "No"]}
            onToggleChange={onToggleChange}
          /><br /><br />
        </div>
        <Button variant="danger" size={"sm"} >Small Button</Button>&nbsp;	&nbsp;	&nbsp;	&nbsp;
        <Button variant="primary" size={"lg"} >Smaller Button</Button>&nbsp;	&nbsp;	&nbsp;	&nbsp;
        <Button variant="warning" size={"xs"} >Big Button</Button><br /><br />
      </form>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);