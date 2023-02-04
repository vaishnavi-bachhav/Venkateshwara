import React from 'react'
import { TextField } from '@mui/material'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai"

const ProductCategory = () => {
  return (
    <div>
      <div className="container row">
        <div className=' col-md-12 justify-content-center'>
          <div className=' py-5 mt-3 row  justify-content-center align-items-center'>
            <div className='row p-1 text-center'>
              <div className="col-md-4 col-lg-7 text-end">
                <h4>Previous  Product Categories</h4>
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
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body" >
                        <section className="text-center">
                          <div className=" py-2">
                            <div className="row">
                              <div className="text-center">
                                <div className=" " >
                                  <div className="card-body p-4 text-center">

                                    <h3 className="mb-5">Add Product Category</h3>
                                    <div className=" mb-4">
                                      <TextField
                                        name="name"
                                        margin='dense'
                                        type="text"
                                        placeholder='product name'
                                        variant='outlined'
                                        label="Product Name"
                                        fullWidth required>
                                      </TextField>
                                    </div>
                                  
                                    <button className="btn btn-info btn-lg btn-block w-100 text-white" type="submit" style={{ backgroundColor: "#508bfc" }}>Add </button>
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
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Otto</td>
                  <td><AiOutlineEdit /></td>
                  <td><AiFillDelete /></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Otto</td>
                  <td><AiOutlineEdit /></td>
                  <td><AiFillDelete /></td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Otto</td>
                  <td><AiOutlineEdit /></td>
                  <td><AiFillDelete /></td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Otto</td>
                  <td><AiOutlineEdit /></td>
                  <td><AiFillDelete /></td>
                </tr>
                <tr>
                  <th scope="row">3</th>

                  <td>Otto</td>
                  <td><AiOutlineEdit /></td>
                  <td><AiFillDelete /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategory