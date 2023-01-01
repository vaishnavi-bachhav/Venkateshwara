import React, { useState, useEffect } from 'react'
import { TextField } from "../shared/TextField"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextAreaField } from '../shared/TextAreaField';
import { FileField } from '../shared/FileField';

export const News = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    date: new Date(),
    image: '',
    description: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'News title should be minimum 2 characters.').max(50, 'News title should be maximum 50 characters.').required('News title is required.'),
    description: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Description should be maximum 50 characters.').required('Description is required.'),
    image: Yup.mixed().required("Please select image"),
  });
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
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
                  <pre>{JSON.stringify(values, null, 102)}</pre>
                  <pre>{JSON.stringify(errors, null, 102)}</pre>
                  <TextField label="News Title" name='title' type="text" />
                  <TextField label="News Date" name='date' type="date" isRequired={false} />
                  <TextAreaField label="Description" name="description" isRequired={false} />
                  <FileField label="Image" name="image" />
                  <button className='btn green-btn font-weight-bold' type='submit' >Add News</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

