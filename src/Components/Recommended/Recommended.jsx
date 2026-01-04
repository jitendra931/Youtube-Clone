import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url =
      categoryId === "0"
        ? `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`
        : `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY}`;

    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
