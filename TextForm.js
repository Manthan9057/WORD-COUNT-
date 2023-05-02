import React, {useState} from 'react'


export default function TextForm(props) {

    const fire = ()=> {
        console.log("fire the value" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const wire = ()=> {
      console.log("wire the value" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }

  const nire = ()=> {
    console.log("wire the value" + text);
    let newText = text.align();
    setText(newText);
}


    const  handelchange= (event)=> {
       console.log("on chnage");
       setText(event.target.value);
    }



    const [text, setText] = useState("enter the text here");
  return (
    <><div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handelchange} id="myBox" rows="8"></textarea>

      </div>
     
      <button className='btn btn-primary mx-2' onClick={fire}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={wire}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={nire}>Convert to bold</button>
    </div>
    
    <div className="container my-3">
    <h1>your text summary</h1>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h3> Preview </h3>  
    <p>{text}</p>
      </div></>
 

 )
}
