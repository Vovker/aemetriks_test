import React from "react";
import {InputTypes} from "./input.types";
import './style.scss';

export const Input: React.FC<InputTypes> = ({ type, handleChange, name, placeholder }) => {

  return (
      <input type={type} className={'input'} placeholder={placeholder} onChange={handleChange} />
  )
}
