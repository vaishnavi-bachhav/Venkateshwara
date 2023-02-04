import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import * as productService from 'src/services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import swal from 'sweetalert';

const ProductCategory = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Title should be minimum 2 characters.').max(50, 'Title should be maximum 50 characters.').required('Title is required.'),
  });

  const addNews = values => {
    productService.addProductCategory(values).then(response => {
      console.log("response", response);
      getNews();
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

  const deleteCareer = (id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this career!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                productService.deleteProductCategory(id).then(response => {
                    swal("Career has been deleted!", {
                        icon: "success",
                    });
                    getNews();
                });
            }
        });
}

  return (
    <div>
      <ToastContainer theme="colored" limit={1} />

      <div className="container row">
        <div className=' col-md-12 justify-content-center'>
          <div className=' py-5 mt-3 row  justify-content-center align-items-center'>
            <div className='row p-1 text-center'>
              <div className="col-md-4 col-lg-7 text-end">
                <h4>Product Categories</h4>
              </div>

              <div className="col md-4 text-end justify-content-center mb-2">
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#508bfc" }}>
                  Add Product Category
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4>Add Product Category</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body" >
                        <section className="text-center">
                          <div className=" py-2">
                            <div className="row">
                              <div className="text-center">
                                <div className=" " >
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
                                          <TextField label="Product Name" name='name' type="text" />
                                          <button className='btn btn-success text-white w-100' type='submit'>Add Products Category</button>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {news.map((c, index) => {
                  return (
                    <tr key={c.id} >
                      <td>{index + 1}</td>
                      <td>{c.name}</td>
                      <td><button className='btn btn-danger' onClick={() => { deleteCareer(c.id) }}>Delete</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory