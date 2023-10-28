import React, {useState} from 'react'

export default function About() {
const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "0.1px solid gray"
});
const [myStyle2, setMyStyle2] = useState({
    color: "darkBlue",
    backgroundColor: "lightBlue",
    border: "0.1px solid gray"
});
const [btnText, setBtnText] = useState("Enable Dark Mode");

const toggleStyle = ()=>{
    if(myStyle.color === "black"){
        setMyStyle({
            color: "white",
            backgroundColor: "black",
            border: "0.1px solid white"
        });
        setMyStyle2({
            color: "white",
            backgroundColor: "rgba(128,128,128,0.7)",
            border: "0.1px solid white"
        });
        setBtnText("Enable Light Mode");
    }
    else{
        setMyStyle({
            color: "black",
            backgroundColor: "white",
            border: "0.1px solid gray"
        });
        setMyStyle2({
            color: "darkBlue",
            backgroundColor: "lightBlue",
            border: "0.1px solid gray"
        });
        setBtnText("Enable Dark Mode");
    }
}
  return (
    <div className='container my-5 text-start'>
        <div className="accordion container" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle2}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle2}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle2}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-center my-3">
            <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
        </div>
    </div>
  )
}
