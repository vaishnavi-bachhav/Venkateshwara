
import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';

const AddCareer = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    size: '',
    category:'',
    price:'',
    image: '',
    description: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
    description: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Description should be maximum 50 characters.').required('Description is required.'),
    size: Yup.string().min(2, 'size should be minimum 2 characters.').max(500, 'size should be maximum 10 characters.').required('size is required.'),
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
                  <h3 class="card-title text-white">Products</h3>
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
                        <TextField label="Product Name" name='title' type="text" />
                        <TextAreaField label="Product Description" name="description" isRequired={false} />
                        <TextField label="Product Size" name='size' type="text" />
                        <TextField label="Product Price" name='price' type="text" />
                        <TextField label="Category" name='category' type="text" />
                        <FileField label="Image" name="image" />
                        <button className='btn btn-success text-white w-100' type='submit'>Add Products</button>
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
