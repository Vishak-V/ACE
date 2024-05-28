import React from 'react';

interface InputGroupProps {
  type: string;
  labelText: string;
  placeholder?: string;
  id: string;
  required: boolean;
  onChange?: (event: any) => void;
}

const InputGroup = ({ type, labelText, placeholder, id, required, onChange}: InputGroupProps) => {
  return (
    <div className='mb-3 row'>
      <label className='col-sm-1 col-form-label' htmlFor={id}>
        {required && <span className="text-danger">*</span>}
        {labelText}
      </label>
      <div className='col-sm-3'>
        <input className='form-control' id={id} type={type} placeholder={placeholder} onChange={onChange}/>
      </div>
    </div>
  );
}

export default InputGroup;
