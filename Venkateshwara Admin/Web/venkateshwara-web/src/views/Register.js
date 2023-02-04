import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';
import { NavLink } from 'react-router-dom'
import * as careerService from 'src/services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required.'),
    address: Yup.string().required('Address is required.'),
    number: Yup.string().required('Contact Number is required.'),
    email: Yup.string().required('Email is required.'),
    password: Yup.string().required('Password is required.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password and confirm password should be matched.').required('Confirm password is required.')
  });

  const addUser = values => {
    debugger;
    careerService.addUser(values).then(response => {
      console.log("response", response);
      navigate("/totalusers");
      if (response) {
        toast.success("News added successfully");
      }
      else {
        toast.error("News addition failed");
      }
    });
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <ToastContainer theme="colored" limit={1} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-success">
                <h3 className="card-title text-white">Career</h3>
              </div>
              <div className="card-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  enableReinitialize
                  onSubmit={values => {
                    addUser(values);
                    console.log("values", values)
                  }}
                >
                  {({ values, errors }) => (
                    <Form>
                      {/* <pre>{JSON.stringify(values, null, 102)}</pre>
                                            <pre>{JSON.stringify(errors, null, 102)}</pre> */}
                      <TextField label="Full Name" name='name' type="text" />
                      <TextField label="Contact Number" name="number" type="text" isRequired={false} />
                      <TextField label="Email" name="email" type="email" />
                      <TextField label="Password" name="password" type="password" />
                      <TextField label="Confirm Password" name="confirmPassword" type="password" />
                      <TextField as="textarea" label="Address" name="address" isRequired={false} />
                      <button className='btn btn-success text-white w-100' type='submit'>Create Account</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
