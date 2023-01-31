import * as careerService from 'src/services/CareerService';
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';

const TotalCareer = () => {
  const [career, setCareer] = useState([]);

  const getCareer = () => {
    careerService.getCareer().then(response => {
      console.log(response);
      setCareer(response);
    });
  }

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
                careerService.deleteCareer(id).then(response => {
                    swal("Career has been deleted!", {
                        icon: "success",
                    });
                    getCareer();
                });
            }
        });
}
  useEffect(() => {
    getCareer();
  }, []);

  return (
    <div>
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Positions</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {career.map((c, index) => {
                  return (
                    <tr key={c.id} >
                      <td>{index + 1}</td>
                      <td>{c.name}</td>
                      <td>{c.description}</td>
                      <td>{c.positions}</td>
                      <td>{c.categoryName}</td>
                      <td><button className='btn btn-danger' onClick={() => { deleteCareer(c.id) }}>Delete</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TotalCareer
