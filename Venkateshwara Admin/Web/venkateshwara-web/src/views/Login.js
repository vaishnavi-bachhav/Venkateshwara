import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CCardGroup,
    CForm,
  
    CRow,
} from '@coreui/react'


const Login = () => {
    const [initialValues, setInitialValues] = useState({
        username: '',
        password: '',

    });

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
        password: Yup.string().min(10, 'Password should be minimum 10 characters.').max(12, 'Password should be maximum 12 characters.').required('Password is required.'),
    });
    return (

        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm>
                                        <h1>Login</h1>
                                        <p className="text-medium-emphasis">Sign In to your account</p>
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            enableReinitialize
                                            onSubmit={values => {
                                                console.log("values", values)
                                            }}
                                        >
                                            {({ values, errors }) => (
                                                <Form>
                                                    {/* <pre>{JSON.stringify(values, null, 102)}</pre>
                                            <pre>{JSON.stringify(errors, null, 102)}</pre> */}
                                                    <TextField label="User Name" name='username' type="text" />
                                                    <TextField label="Password" name="password" type="password" isRequired={false} />

                                                </Form>
                                            )}
                                        </Formik>
                                        <CRow>
                                            <CCol xs={6}>
                                                <CButton color="primary" className="px-4">
                                                    Login
                                                </CButton>
                                            </CCol>
                                            <CCol xs={6} className="text-right">
                                                <CButton color="link" className="px-0">
                                                    Forgot password?
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>

                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login
