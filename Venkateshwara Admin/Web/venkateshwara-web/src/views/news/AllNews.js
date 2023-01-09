import React from 'react'

const AllNews = () => {
  return (
    <div>
      <section className="content">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-3 card m-2" style={{width: "18rem;"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                </div>
            </div>
            <div className="col-md-3 card m-2" style={{width: "18rem;"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                </div>
            </div>
            <div className="col-md-3 card m-2" style={{width: "18rem;"}}>
              <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

export default AllNews
