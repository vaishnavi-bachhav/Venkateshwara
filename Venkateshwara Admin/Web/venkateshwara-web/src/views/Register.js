import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';



import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    number: '',
    email:'',
    address:'',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
    address:Yup.string().min(10, 'Address should be minimum 10 characters.').max(12, 'Address should be maximum 12 characters.').required('Address is required.'),
    number: Yup.string().min(10, 'Contact Number should be minimum 10 characters.').max(50, 'Contact Number should be maximum 12 characters.').required('Contact Number is required.'),
  });
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
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
                        <TextField label="Full Name" name='title' type="text" />
                        <TextField label="Contact Number" name="number" type="number" isRequired={false} />
                        <TextField label="Email-Id" name="email" type="email" isRequired={false} />
                        <TextField label="Address" name="address" type="text" isRequired={false} />
                        <div className="d-grid">
                          <CButton color="success">Create Account</CButton>
                        </div>
                      </Form>
                    )}
                  </Formik>

                  <NavLink className="text-center" to="/login">I have already an accout ?Login</NavLink>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
