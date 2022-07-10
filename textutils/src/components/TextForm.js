import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const [text,setText]=useState('');
    const handleUpclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClclick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const replaceword=()=>{
        let repval=prompt("Enter the word to be replaced:")
        let tobereplaced=new RegExp(repval,'g');
        let toreplace=prompt("Enter the text you want to replace with:");
        let newText=text.replace(tobereplaced,toreplace);
        setText(newText);
        props.showAlert("Replaced word!","success");
    }
    const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!","success");
    }
    

  return (
    <>  
<div className='container' style={{color:props.mode==='dark' ? 'white' : 'black'}} >
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark' ? '#1a1919' : 'white',color:props.mode==='dark' ? 'white' : 'black',opacity:1}} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={replaceword}>Replace word</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClclick}>Clear Text</button>
</div>
{text && <div className="container my-3" style={{color:props.mode==='dark' ? 'white' : 'black'}} >
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters(including spaces)</p>
   <p>{0.0088*text.split(" ").filter(word => word !== "").length} Minutes required to read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>}
    </>
  )
}
