import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  let var1 = "";
  const handleUpClick = () => {
    setText(text.toUpperCase());
  }
  const handleLwClick = () => {
    setText(text.toLowerCase());
  }
  const handleClClick = () => {
    setText("");
    document.getElementById("exampleFormControlTextarea1").focus();
  }
  const handleElClick = () => {
    var1 = [];
    const var2 = text.split(/\n/g);
    //console.log(var2);
    var1 = var2.filter((element) => element.trim() !== '');
    //console.log(var1);
    setText(var1.join("\n"))
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here");
  
  window.onload = function() {
    document.getElementById("exampleFormControlTextarea1").focus();
  };
  return (
    <div>
      <div className={`container bg-${props.mode === "light"? "light" : "secondary" } p-3 text-start text-${props.mode === "light" ? "dark" : "light"}`}>{/*style={{textAlign: "left", backgroundColor: "lightGray", padding: 2}} */}
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className={`form-control bg-${props.mode === "light" ? "warning-subtle" : "dark"} p-3 text-start text-${props.mode === "light" ? "dark" : "light"}`} id="exampleFormControlTextarea1" value={text} onChange={handleTextChange} rows="9" style={{backgroundColor: "lightYellow"}}></textarea>
        </div>
        <button type="button" disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={handleUpClick}>Upper Case</button>
        <button type="button" disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={handleLwClick}>Lower Case</button>
        <button type="button" disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={handleClClick}>Clear All</button>
        <button type="button" disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2 my-2`} onClick={handleElClick}>Empty Line Remove</button>
      </div>
      <div className={`container text-start bg-${props.mode === "light" ? "danger" : "dark-subtle"} bg-opacity-25 text-${props.mode === "light" ? "dark" : "primary"}`}>
        <h3>Your data</h3>
        {/* In next line \s* need to add before \n+ for words count as it count new word for entering in new line and hit space make calculation wrong */}
        <p className='fst-italic fw-semibold'>{text.split("\n").length} lines and {text.trim() === "" ? "0":text.replace(/(\s*\n+\s*|\s+)/g, " ").trim().split(" ").length} words and {text.length} characters</p>
        <p className='fst-italic fw-semibold'>You can read all in {0.008 * text.split(" ").filter((ele)=>{return ele.length !== 0}).length} minits</p>
        <p>
          <span className='d-block fs-3 fw-bold'>Preview : </span>
          {text.length === 0 ? "Enter some text in textbox for preview" : text}
        </p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}