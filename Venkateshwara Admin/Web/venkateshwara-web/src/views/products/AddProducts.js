
import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
import { TextAreaField } from 'src/components/shared/TextAreaField';
import { FileField } from 'src/components/shared/FileField';
import { DropdownField } from 'src/components/shared/DropdownField';
import * as productService from 'src/services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    size: '',
    category:'',
    price:'',
    // image: '',
    rating: 0,
    description: '',
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
     description: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Description should be maximum 50 characters.').required('Description is required.'),
     size: Yup.string().min(2, 'size should be minimum 2 characters.').max(500, 'size should be maximum 10 characters.').required('size is required.'),
     price: Yup.string().required('Price is required.'),
     category: Yup.string().required('Please select assigned to'),
    // category: Yup.string().min(2, 'Description should be minimum 2 characters.').max(500, 'Category should be maximum 10 characters.').required('Category is required.'),
    // image: Yup.mixed().required("Please select image"),
    rating: Yup.number().required('Rating is required.')
  });

  const navigate = useNavigate();

  const addNews = values => {
    debugger;
   productService.addProduct(values).then(response => {
   console.log("response", response);
      navigate("/allproducts");
   if(response){
    toast.success("News added successfully");
   }
   else{
    toast.error("News addition failed");
   }
   });
  }

  const [news, setNews] = useState([]);

  const getNews = () => {
    productService.getProductsCategory().then(response => {
      console.log(response);
      setNews(response);
    });
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
             <ToastContainer theme="colored" limit={1} />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header bg-success">
                  <h3 className="card-title text-white">Products</h3>
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
                        <TextField label="Product Name" name='name' type="text" />
                        <TextField label="Product Description" name='description' as="textarea"/>
                        <TextField label="Product Size" name='size' type="text" />
                        <TextField label="Product Price" name='price' type="text" />
                        <TextField label="Product Rating" name='rating' type="number" />
                        <DropdownField label='Category' options={news} defaultOption='Select Category' name='category'/> 
                        {/* <FileField label="Image" name="image" /> */}
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

export default AddProduct
