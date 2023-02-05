import React from 'react';
import swal from 'sweetalert';
import * as productService from 'src/services/ProductService';

const ProductItem = (props) => {
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
                    productService.deleteProduct(id).then(response => {
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
            <div className="col-md-3" key={props.products.id}>
                <div className="card card-custom">
                    <img src={props.products.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.products.name}</h5>
                        <p className="card-text">{props.products.description}</p>
                        <p className="card-text">{props.products.size}</p>
                        <p className="card-text">{props.products.price}</p>
                        <p className="card-text">{props.products.rating}</p>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary btn-block mr-2">Edit</button>
                        <button className="btn btn-danger btn-block" onClick={() => { deleteNews(props.products.id) }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem
