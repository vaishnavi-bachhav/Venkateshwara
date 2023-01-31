import * as newsService from 'src/services/NewsService';
import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';

const AllNews = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    newsService.getNews().then(response => {
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
        <div className="container p-5">
          <div className="row">
            {news.map((newsDetails, idx) => (
              <NewsItem news={newsDetails} getNews={getNews}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllNews
