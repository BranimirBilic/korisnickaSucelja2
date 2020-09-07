import React from 'react'
import style from './input.module.css'

function Input(props) {
    return (
        <input type={props.type} name="firstName" placeholder = {props.placeholder} className = {style.InputStyle}/>
    )
}

export default Input
