import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  }
  const handleLwClick = () => {
    setText(text.toLowerCase());
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here");
  
  return (
    <div>
      <div className={`container bg-${props.mode === "light"? "light" : "secondary" } p-3 text-start text-${props.mode === "light" ? "dark" : "light"}`}>{/*style={{textAlign: "left", backgroundColor: "lightGray", padding: 2}} */}
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className={`form-control bg-${props.mode === "light" ? "warning-subtle" : "dark"} p-3 text-start text-${props.mode === "light" ? "dark" : "light"}`} id="exampleFormControlTextarea1" value={text} onChange={handleTextChange} rows="9" style={{backgroundColor: "lightYellow"}}></textarea>
        </div>
        <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2`} onClick={handleUpClick}>Upper Case</button>
        <button type="button" className={`btn btn-${props.mode === "light" ? "dark" : "light"} mx-2`} onClick={handleLwClick}>Lower Case</button>
      </div>
      <div className={`container text-start bg-${props.mode === "light" ? "danger" : "dark-subtle"} bg-opacity-25 text-${props.mode === "light" ? "dark" : "primary"}`}>
        <h3>Your data</h3>
        <p className='fst-italic fw-semibold'>{text.split("\n").length} lines and {text.trim() === "" ? "0":text.replace(/(\n+|\s+)/g, " ").trim().split(" ").length} words and {text.length} characters</p>
        <p className='fst-italic fw-semibold'>You can read all in {0.008 * text.split(" ").length} minits</p>
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