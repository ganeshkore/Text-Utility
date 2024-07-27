import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared ","danger")
  };

  const handleLrClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };

  const handleSpaceClick = () => {
    let newText = text.split(" ").join("");
    setText(newText);
    props.showAlert("Spaces Removed ","success")
  };

  const handleCopyClick = (event) => {
    let copyTextarea = document.querySelector("#myBox");
    copyTextarea.focus();
    copyTextarea.select();
    // eslint-disable-next-line
    let successful = document.execCommand("copy");
    document.getSelection().removeAllRanges();
    props.showAlert("Copied Text ","success")
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleonChange}
            className="form-control border border-primary"
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
              fontWeight:"bold",
              fontSize:"17px"
            }}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1 text-light" onClick={handleUpClick}>
          Convert To Uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleLrClick}>
          Convert To LowerCase
        </button>

        <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleSpaceClick}>
          Remove Spaces
        </button>

        <button disabled={text.length===0} className="btn btn-primary btn-sm mx-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button disabled={text.length===0} className="btn btn-danger btn-sm  mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-5 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary!</h2>
        <h5>
          {text.split(/\s+/).filter((element)=>{return element != 0;}).length} words and {text.length} characters
        </h5>

        <h3 style={{color:props.mode ==='light'?'#007bff':'white'}}>Preview</h3>
        <h6>{text.length > 0 ? text : "Please enter text in above text area to process"}</h6>
      </div>
    </>
  );
}