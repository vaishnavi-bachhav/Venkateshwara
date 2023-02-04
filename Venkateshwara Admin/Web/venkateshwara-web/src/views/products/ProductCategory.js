import React from 'react'
import {AiFillEdit, AiFillDelete} from "react-icons/ai"

const ProductCategory = () => {
  return (
    <div>
    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover text-nowrap text-center">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Product Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row">
                <th>1</th>
                <th>Almond</th>
                <th><AiFillDelete className='fs-3'/></th>
                <th><AiFillEdit className='fs-3'/></th>
              </tr>
              <tr scope="row">
                <th>1</th>
                <th>Peanuts</th>
                <th><AiFillDelete className='fs-3'/></th>
                <th><AiFillEdit className='fs-3'/></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ProductCategory