import React, { useState, useEffect } from 'react';
import InputGroup from './InputGroup';
import Button from './Button';
import { FormEvent } from 'react';

const Form = () => {
    // hook to keep track of the inputs
    const [inputState, setInputState] = useState({
        fname:'',
        lname:'',
        email:''
    })
    // hook to keep track of the form state
    const [isDone, setIsDone] = useState(true);

    // update the inputState hook whenever the input element is changed
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.currentTarget.id; //get the id of the current input element
        setInputState(prevState => ({
            ...prevState, //keep the previous all input values
            [id]: event.target.value //just update the value of the item with key = id
          }));
      };

    // Check if all required fields are filled out
    useEffect(() => {
        const { fname, lname, email } = inputState;
        const isDone = fname.trim() !== '' && lname.trim() !== '' && email.trim() !== '';
        setIsDone(isDone);
        console.log('isDone:', isDone); // Log the value of isDone
    }, [inputState]);

    
    // handle submission of the form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup id="fname" type="text" placeholder='Enter your First Name...' labelText='First Name:' required onChange={(e) => handleInputChange(e)} />
            <InputGroup id="lname" type="text" placeholder='Enter your Last Name...' labelText='Last Name:' required onChange={(e) => handleInputChange(e)}/>
            <InputGroup id="email" type="email" placeholder='Enter your UA Email...' labelText='UA Email:' required onChange={(e) => handleInputChange(e)}/>
            <Button id="SubmitBtn" color="primary" disabled={!isDone} type="submit">Submit</Button>
        </form>
    );
};

export default Form;
