import React from 'react';
import swal from 'sweetalert';
import * as newsService from 'src/services/NewsService';

const NewsItem = (props) => {
    const deleteNews = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this news!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    newsService.deleteNews(id).then(response => {
                        swal("News has been deleted!", {
                            icon: "success",
                        });
                        props.getNews();
                    });
                }
            });
    }

    return (
        <>
            <div className="col-md-3 card m-2 card-custom" key={props.news.id}>
                <img src={props.news.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.news.name}</h5>
                    <p className="card-text">{props.news.description}</p>
                </div>
                <div className="d-flex">
                    <button className="btn btn-primary btn-block mr-2">Edit</button>
                    <button className="btn btn-danger btn-block" onClick={() => { deleteNews(props.news.id) }}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default NewsItem
