import React, {useState} from "react";

import "./InputField.css";

export const InputField =  (props) =>{
  
  const {label,id, handleChange, errorMessage, ...inputProps} = props ;

  const [focused, setFocused] = useState(false);
    return(
      <div className="form-control">
      <label>{props.label}</label>
      <input {...inputProps} onChange={handleChange} 
      // onFocus={()=> inputProps.name === "confirmPassword" &&  setFocused(!focused)} 
      onBlur={()=> setFocused(!focused)} focused={focused.toString()}/>
      <span>{props.errorMessage}</span>
      
  </div>
    )
}