import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'src/components/shared/TextField';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import * as productService from 'src/services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import swal from 'sweetalert';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const ProductCategory = () => {
  const handleClosePopup = () => setShowPopup(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => setShowPopup(true);
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
  const openLeaveModal = () => {
    setInitialValues(initialValues);
    handleShowPopup();
  };

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

              <div className="md-4 text-end justify-content-center mb-2">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="submit"
                  className="btn btn-success btn-user"
                  onClick={() => openLeaveModal()}
                >
                  <i className="fa-solid fa-plus"></i> Leave
                </button>
              </div>
            </div>
            <table className="table table-bordered table-responsive-sm ft-sz">
              <thead className="table-primary">
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
      <Dialog fullWidth={true} open={showPopup} onClose={handleClosePopup}>
        <DialogContent>
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
              <Form className='p-2'>
                <h3>
                  <i className="fa-solid fa-calendar-xmark text-danger"></i>{" "}
                  Add Product Category{" "}
                </h3>
                <hr />
                <TextField label="Product Name" name='name' type="text" />
                <div className="text-right">
                  <button type="submit" className="btn btn-success btn-user mr-2">
                    Save
                  </button>
                  <button
                    onClick={handleClosePopup}
                    type="button"
                    className="btn btn-outline-secondary btn-user"
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductCategory