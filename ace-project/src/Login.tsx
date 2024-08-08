import React from 'react'
import Form from './components/Form'
import { useState } from 'react'

function Login() {
  return (
    <Form inputFieldList={[
        {inputFieldName:"username",inputFieldValue:""},
        {inputFieldName:"password",inputFieldValue:""}]}>
    </Form>
  )
}

export default Login