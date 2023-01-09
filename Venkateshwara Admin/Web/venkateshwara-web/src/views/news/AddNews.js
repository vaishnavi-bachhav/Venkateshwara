
import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';
import * as newsService from 'src/services/NewsService';
import axios from 'axios';

const AddNews = () => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    date: new Date(),
    image: '',
    description: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
    description: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Description should be maximum 50 characters.').required('Description is required.'),
    image: Yup.mixed().required("Please select image"),
  });

  const addNews = values => {
    debugger;
    
    const payload = {
      Name: values.title,
      Image: values.image,
      Description: values.description,
      NewsDate: values.date
    };

    axios.post('https://localhost:7262/api/News', payload)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  
    // return axios.post('https://localhost:7262/api/News', payload, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'userId': storage.getItem("userId"),
    //     // 'pharmacyId': storage.getItem("pharmacyId"),
    //     // 'Ocp-Apim-Subscription-Key': appConfig.SUBR_KEY,
    //   }
    // })
    //   .then(response => response.data)
    //   .catch(error => error.response);
   // showLoader();
  // newsService.addNews(values).then(response => {
   // console.log("response", response);
    //  hideLoader();
    //   setAddNewsModalOpen(false)
    //   response.status.toLowerCase() === 'success' ?
    //    toast.success(response.message) :
    //    toast.error(response.message);
    //  getNews();
   //});
  }

  return (
    <div>
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
                        {/* <pre>{JSON.stringify(values, null, 102)}</pre>
                                            <pre>{JSON.stringify(errors, null, 102)}</pre> */}
                        <TextField label="News Name" name='title' type="text" />
                        <TextAreaField label="News Description" name="description" isRequired={false} />
                        <TextField label="Date" name='date' type="date" isRequired={false} />
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
