import React from 'react'

const AddProducts = () => {
    return (
        <div>
            {/* <!-- Main content --> */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- left column --> */}
                        <div className="col-md-12">
                            {/* <!-- jquery validation --> */}
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title">Add Products</h3>
                                </div>
                                {/* <!-- /.card-header --> */}
                                <form id="quickForm">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Product Name</label>
                                            <input type="text" placeholder="Product Name " name="text"
                                                className="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Product Description</label>
                                            <input type="text" placeholder="Product Description" name="text"
                                                className="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Product Size</label>
                                            <input type="text" placeholder="Product Size" name="text"
                                                className="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Product Price</label>
                                            <input type="text" placeholder="Product Price" name="text"
                                                className="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Product Rating</label>
                                            <input type="text" placeholder="Product Rating" name="text"
                                                className="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div>
                                            <label for="exampleInputEmail1">Product Type</label>
                                            <select name="" id="" className="form-group form-control w-100 rounded-0">
                                                <option value="">Dry Fruit</option>
                                                <option value="">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Product Image</label>
                                            <input type="file" placeholder="Product Price" name="text" className=" rounded-0"
                                                id="exampleInputEmail1" />
                                        </div>

                                    </div>
                                    {/* <!-- /.card-body --> */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-success w-100">Upload</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- /.card --> */}
                        </div>

                    </div>
                    {/* <!-- /.row --> */}
                </div>
            </section>
        </div>
    )
}

export default AddProducts
