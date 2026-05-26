import { useEffect, useState } from "react";

import NewsCard from "../components/NewsCard";

import { fetchNews } from "../services/newsService";

import Loader from "../components/Loader";

import "../styles/News.css";

import useTitle from "../hooks/useTitle";



function News() {
useTitle("News");

  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getNews() {
      try {
        const data = await fetchNews();

        setNews(data.slice(0, 12));
      } catch (error) {
        console.error(
          "Failed to fetch news:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    getNews();
  }, []);

  const filteredNews = news.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }



  return (
    <div className="news-container">
      <h1>Latest Formula 1 News</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search F1 news..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      <div className="news-page">
        {filteredNews.length === 0 ? (
          <div className="empty-state">
            <h2>No news found</h2>
          </div>
        ) : (
          filteredNews.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title.slice(0, 60) + "..."  
              }
              description={
                item.description?.slice(0, 100) + "..."
              }
              image={item.image}
              url={item.url}
              source={
                item.source?.name
              }
              date={item.publishedAt}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default News;

        
