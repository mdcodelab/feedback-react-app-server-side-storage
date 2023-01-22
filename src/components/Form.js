import React from 'react';
import { useGlobalContext } from '../context';
import Rating from "./Rating";


function FormStat() {

    const {handleAdd, feedback, edit, handleEdit, updateFeedbackItem}=useGlobalContext();

    const[text, setText]=React.useState("");
    const [message, setMessage]=React.useState(null);

    const[buttonStyle, setButtonStyle]=React.useState({
        disabled: true,
        primary: false,
        secondary: false
    })

    const{disabled, primary, secondary}=buttonStyle;

    const[rating, setRating]=React.useState(10);

    function onChange(e) {
        setText(e.target.value);
        if(text === "") {
            setButtonStyle(buttonStyle);
        } else if(text.length !==0 && text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters.");
            setButtonStyle(buttonStyle);
        } else {
            setMessage(null);
            setButtonStyle({disabled: false, primary: true, secondary: false})
        }
    }

      function onSubmit (e) {
      e.preventDefault();
    
      let newFeedback = {
        id: new Date().getTime().toString(),
        text: text,
        rating: rating,
        date: new Date().toLocaleString()
    }
    if(edit.startEdit===true) {
      updateFeedbackItem(edit.editedItem.id, newFeedback);
      setButtonStyle({disabled: true, primary: false, secondary: false})
    } else {
    handleAdd(newFeedback);
    setButtonStyle({disabled: false, primary: false, secondary: true})
    setText("");
    setRating(feedback.rating);
    }
  }

React.useEffect(() => {
if(edit.startEdit === true) {
  setButtonStyle({disabled: false, primary: true, secondary: false});
  console.log(edit.editedItem.text);
  setText(edit.editedItem.text);
  setRating(edit.editedItem.rating);
}
}, [edit])

  


  return (
    <form className="form-container" onSubmit={onSubmit}>
      <Rating selectRating={(rating) =>setRating(rating)}></Rating>
      {message && (
        <div className="message">{message}</div>
      )}

      <div className="input-button">
      <input type="text" id="text" placeholder="Write a review" 
      onChange={onChange} value={text}></input>
      <button type="submit" className={`btn ${primary ? "primary" : "secondary"}`} disabled={disabled}>SEND</button>
      </div> 
    </form>
  );
}

export default FormStat;


