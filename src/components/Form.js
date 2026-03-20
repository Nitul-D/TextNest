import React, {useState} from 'react';

export default function Form(props){
    const [text, setText] = useState("");
    const [spaceCount, setSpaceCount] = useState(0);

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        setSpaceCount(event.target.value.split(" ").length - 1);
    }

    const reverseString = (str) => {
        let splitArray = str.split("");
        let reverseArray = splitArray.reverse();
        let joinArray = reverseArray.join ("");
        return joinArray;
    }

    const onUpClick = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const onLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const onClearClick = () => {
        let newText = "";
        setText(newText);
        setSpaceCount(0);
        props.showAlert("Text Cleared", "success");
    }

    const onReverse = () => {
        let newText = reverseString(text);
        setText(newText);
        props.showAlert("Text Reversed", "success");
    }

    const copyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const pasteText = () => {
        navigator.clipboard.readText().then(clipText => {
            setText(clipText)
            props.showAlert("Text Pasted from Clipboard", "success");
    });
    }

    return (
        <>
        <div className = "container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="15" placeholder="Enter Text Here"
            style={{backgroundColor : props.mode === 'light' ? 'white' : 'black',
            color : props.mode === 'dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2" onClick = {onUpClick} >Convert to Upper Case </button>
            <button className="btn btn-outline-info mx-2" onClick = {onLowClick} >Convert to Lower Case </button>
            <button className = "btn btn-outline-primary mx-2" onClick = {onReverse} > Reverse Text </button>
            <button className = "btn btn-outline-info mx-2" onClick = {copyText} > Copy All </button>
            <button className="btn btn-outline-primary mx-2" onClick = {pasteText} > Paste </button>
            <button className = "btn btn-outline-danger mx-2" onClick = {onClearClick} > Clear All </button>
        </div>

        <div className = "container my-4" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h3> Text Summary </h3>
            <p> {text.split(" ").length - 1} words and {text.length} characters </p>
            <p> {0.008 * (text.split(" ").length - 1)} Minutes it will take to read the text </p>
            <p> {spaceCount} spaces </p>
            <h4> Preview </h4>
            <p> {text.length > 0 ? text : "Enter Text Above To Preview It"} </p>

        </div>
        </>
    )
}