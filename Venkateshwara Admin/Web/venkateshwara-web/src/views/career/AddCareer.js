import React from 'react'

const AddCareer = () => {
  return (
    <div>
      <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Add Position </h3>
              </div>
         
              <form id="quickForm">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Post Name</label>
                    <input type="text" placeholder="Post Name " name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Post Description</label>
                    <input type="text" placeholder="Post Description" name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Positions</label>
                    <input type="text" placeholder="Positions" name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Category</label>
                    <input type="text" placeholder="Part Time/ Full Time" name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                  </div>
                  
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-success w-100">Upload</button>
                </div>
              </form>
            </div>
            </div>
        
          {/* <!--/.col (right) --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </section>
    </div>
  )
}

export default AddCareer
