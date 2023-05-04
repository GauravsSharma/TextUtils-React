import React, {useState} from 'react';

export default function Form(props) {
    const Uppercase =()=>{
        console.log("Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into upper case","success")
    }
    const LowerCase =()=>{
        console.log("Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lower case","success")
    }
    const ClearText = ()=>{
      setText("");      
      props.showAlert("Text Cleared!!", "success");  
    }
    const CopyText = ()=>{
      let text = document.getElementById('my-box');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to the clipboard!!", "success");
    }
    const RemoveExSpace = ()=>{
        console.log("exxx")
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra sapce removedprops.!!", "success");
    }
    const handleOnChange =(event)=>{
       setText(event.target.value);
    }
    const mystyle = {
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'#242020':'white'
    }
    const [text,setText] = useState('Enter Your Text');
    return (
        <div>
            <div className="container" style={mystyle}>
            <h2>{props.heading}</h2>
            <div className="input-group" style={mystyle}>
                <textarea className="form-control" id="my-box" value={text} style={mystyle} onChange={handleOnChange} rows="8" aria-label="With textarea"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary my-3 mx-2" onClick={Uppercase}>Convert To Uppercase</button>
            <button disabled={text.length===0}className="btn btn-primary my-3 mx-2" onClick={LowerCase}>Convert To Lowercase</button>
            <button disabled={text.length===0}className="btn btn-primary my-3 mx-2" onClick={CopyText}>Copy Text</button>
            <button disabled={text.length===0}className="btn btn-primary my-3 mx-2" onClick={RemoveExSpace}>Reamove Extra Space</button>
            <button disabled={text.length===0}className="btn btn-primary my-3 mx-2" onClick={ClearText}>Clear Text</button>
             <div className="container" style={{color:props.mode===`dark`?`white`:`black`}}>
                <h3>Your text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character detected</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to reads this word</p>
                <h3>Preview</h3>
                <p>{text}</p>
             </div>
             </div>
        </div>
    )
}
