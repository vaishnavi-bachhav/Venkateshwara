import React from 'react'

const AddNews = () => {
  return (
    <div>
      {/* <!-- Main content --> */}
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            {/* <!-- left column --> */}
            <div class="col-md-12">
              {/* <!-- jquery validation --> */}
              <div class="card card-success">
                <div class="card-header">
                  <h3 class="card-title">Add News</h3>
                </div>
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form id="quickForm">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">News Title</label>
                      <input type="text" placeholder="News Title " name="text"
                        class="form-control rounded-0" id="exampleInputEmail1" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">News Description</label>
                      <input type="text" placeholder="News Description" name="text"
                        class="form-control rounded-0" id="exampleInputEmail1" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">News Date</label>
                      <input type="text" placeholder="News Date" name="text"
                        class="form-control rounded-0" id="exampleInputEmail1" />
                    </div>


                    <div class="form-group">
                      <label for="exampleInputEmail1">News Image</label>
                      <input type="file" placeholder="News Img" name="text" class=" rounded-0"
                        id="exampleInputEmail1" />
                    </div>

                  </div>
                  {/* <!-- /.card-body --> */}
                  <div class="card-footer">
                    <button type="submit" class="btn btn-success w-100">Upload</button>
                  </div>
                </form>
              </div>
              {/* <!-- /.card --> */}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AddNews
