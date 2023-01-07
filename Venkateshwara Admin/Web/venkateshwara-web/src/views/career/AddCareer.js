
import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';

const AddCareer = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    date: new Date(),
    positions: '',
    category:'',
    image: '',
    description: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
    description: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Description should be maximum 50 characters.').required('Description is required.'),
    positions: Yup.string().min(2, 'Position should be minimum 2 characters.').max(500, 'Position should be maximum 50 characters.').required('Positon is required.'),
    category: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Category should be maximum 10 characters.').required('Category is required.'),
    image: Yup.mixed().required("Please select image"),
  });

  return (
    <div>
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header bg-success">
                  <h3 class="card-title text-white">Career</h3>
                </div>
                <div className="card-body">
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
                        <TextField label="Post Name" name='title' type="text" />
                        <TextAreaField label="post Description" name="description" isRequired={false} />
                        <TextField label="Positions" name='positions' type="text" />
                        <TextField label="Category" name='category' type="text" />
                        <TextField label="Date" name='date' type="date" isRequired={false} />
                        <FileField label="Image" name="image" />
                        <button className='btn btn-success text-white w-100' type='submit'>Add Career</button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddCareer
