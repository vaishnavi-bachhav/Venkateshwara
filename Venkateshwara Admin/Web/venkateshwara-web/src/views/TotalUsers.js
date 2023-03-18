import * as userService from 'src/services/UserService';
import React, { useState, useEffect } from 'react'

const TotalUsers = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    userService.getNews().then(response => {
      console.log(response);
      setNews(response);
    });
  }

  useEffect(() => {
    getNews();
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                </tr>
              </thead>
                {news.length === 0 ? (
                  <tr><td>No data found.</td></tr>
                ) : (
                  <tbody>{news.map((c, index) => {
                    return (
                      <tr key={c.id} >
                        <td>{index + 1}</td>
                        <td>{c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.contactNumber}</td>
                        <td>{c.address}</td>
                      </tr>
                    )
                  })}</tbody>
                )}
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TotalUsers
