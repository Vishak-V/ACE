import React, { useState, useEffect } from 'react';
import InputGroup from './InputGroup';
import Button from './Button';
import { FormEvent } from 'react';

// interface to pass in fields for the input group:
interface InputField {
    inputFieldName: string;
    inputFieldValue: string;
}
interface FormProps {
    inputFieldList: InputField[];
}
const Form = ({inputFieldList}: FormProps) => {
    
    const[inputState, setInputState] = useState(inputFieldList);
    // hook to keep track of the form state
    const [isDone, setIsDone] = useState(true);

    // update the inputState hook whenever the input element is changed
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.currentTarget.id; //get the id of the current input element
        const value = event.currentTarget.value; //get the value of the current input element
        setInputState(prevState => 
            // loop through the list of input fields
            prevState.map((inputField) =>
                // if the name of the field is equal to the current element's id, update the field value with the current element's value
                // else, keep it the same
                inputField.inputFieldName === id ? {...inputField, inputFieldValue: value} : inputField
            )
        );
      };



    
    // handle submission of the form
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            
            {inputState.map((inputField, index) => (
                <InputGroup
                    key={index}
                    id={inputField.inputFieldName}
                    type="text"
                    placeholder={`Enter your ${inputField.inputFieldName}...`}
                    labelText={inputField.inputFieldName}
                    required
                    onChange={handleInputChange}
                />
            ))}
            <Button id="SubmitBtn" color="primary" disabled={!isDone} type="submit">Submit</Button>
        </form>
    );
};

export default Form;

    // Check if all required fields are filled out
    // useEffect(() => {
    //     const { fname, lname, email } = inputState;
    //     const isDone = fname.trim() !== '' && lname.trim() !== '' && email.trim() !== '';
    //     setIsDone(isDone);
    //     console.log('isDone:', isDone); // Log the value of isDone
    // }, [inputState]);

        // hook to keep track of the inputs
    // const [inputState, setInputState] = useState({
    //     fname:'',
    //     lname:'',
    //     email:''
    // })