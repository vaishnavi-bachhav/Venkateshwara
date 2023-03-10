import * as achievementService from 'src/services/AchievementService';
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';

const AllAchievements = () => {
    const [career, setCareer] = useState([]);

    const getCareer = () => {
        achievementService.getAchievements().then(response => {
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
                    achievementService.deleteAchievement(id).then(response => {
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
                    <div className="col-12">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {career.length === 0 ? (
                                    <tr><td>No data found</td></tr>
                                ) : (
                                    <tbody>
                                        {career.map((c, index) => {
                                            return (
                                                <tr key={c.id} >
                                                    <td>{index + 1}</td>
                                                    <td>{c.name}</td>
                                                    <td>{c.description}</td>
                                                    <td><img alt={c.name} src={c.image} width="70" height="70" /></td>
                                                    <td><button className='btn btn-danger' onClick={() => { deleteCareer(c.id) }}>Delete</button></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default AllAchievements
