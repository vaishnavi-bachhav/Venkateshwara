import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';
import * as newsService from 'src/services/NewsService';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AddNews = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
  //  date: new Date(),
    image: '',
    description: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
    description: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Description should be maximum 50 characters.').required('Description is required.'),
  //  image: Yup.mixed().required("Please select image"),
  });
  const navigate = useNavigate();

  const addNews = values => {
    debugger;
   newsService.addNews(values).then(response => {
   console.log("response", response);
      navigate("/allnews");
   if(response){
    toast.success("News added successfully");
   }
   else{
    toast.error("News addition failed");
   }
   });
  }

  return (
    <div>
       <ToastContainer theme="colored" limit={1} />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header bg-success">
                  <h3 className="card-title text-white">News</h3>
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
                        <TextField label="News Name" name='title' type="text" />
                        <TextAreaField label="News Description" name="description" isRequired={false} />
                        {/* <TextField label="Date" name='date' type="date" isRequired={false} /> */}
                        <FileField label="Image" name="image" />
                        <button className='btn btn-success text-white w-100' type='submit'>Add News</button>
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

export default AddNews
