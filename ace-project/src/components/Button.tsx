import React from 'react'
import { Fragment } from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    type?: "button" | "submit";
    color: string;
    onClick?: () => void;
    disabled?: boolean;
    id: string;
}
const Button = ({type, children, color, disabled, onClick, id}: ButtonProps) => {
  return (
    <button className={['btn btn-'+ color].join()} type={type} onClick={onClick} disabled={disabled} id={id}>{children}</button>
  )
}

export default Button