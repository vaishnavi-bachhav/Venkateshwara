import React, { useState, useEffect } from 'react'

const NewsItem = (props) => {

    return (
        <>
            <div className="col-md-3 card m-2 card-custom" key={props.news.id}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.news.name}</h5>
                    <p className="card-text">{props.news.description}</p>
                </div>
            </div>
        </>
    )
}

export default NewsItem
