import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import * as userService from 'src/services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Title is required.'),
        password: Yup.string().required('Password is required.'),
    });

    const addNews = values => {
        debugger;
        userService.login(values).then(response => {
       console.log("response", response);
          localStorage.setItem("isAuthenticated", response.isAuthenticated);
          if (!response.isAuthenticated) {
            toast.error(response.message);
          }
    
          if (response.isAuthenticated) {
            localStorage.setItem("userId", response.userId);
            localStorage.setItem("name", response.name);
            navigate("/dashboard");
          };
       });
      }

    return (

        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
        <ToastContainer theme="colored" limit={1} />
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
                        addNews(values);
                      console.log("values", values)
                    }}
                  >
                    {({ values, errors }) => (
                      <Form>
                        {/* <pre>{JSON.stringify(values, null, 102)}</pre>
                                              <pre>{JSON.stringify(errors, null, 102)}</pre> */}
                        <TextField label="Email" name='email' type="text" />
                       
                        <TextField label="Password" name="password" type="password" />
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

export default Login
