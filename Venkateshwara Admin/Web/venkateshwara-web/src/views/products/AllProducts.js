import * as productService from 'src/services/ProductService';
import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';

const AllProducts = () => {
    const [news, setNews] = useState([]);

  const getNews = () => {
    productService.getProducts().then(response => {
      console.log(response);
      setNews(response);
    });
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
       {/* <!-- Main content --> */}
    <section className="content">
        <div className="container">
            <div className="row">
            {news.map((newsDetails, idx) => (
              <ProductItem products={newsDetails} getNews={getNews}/>
            ))}
            </div>
        </div>
    </section>
    </div>
  )
}

export default AllProducts
