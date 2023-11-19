import React from "react";
import Slider from "react-slick";
import "./index.css";

const TrendingSection = ({ trendingVideos, onVideoClick }) => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  return (
    <div className="trending-section">
      <div className="trending-wrapper">
        <h2>Trending Now</h2>
        <Slider {...settings}>
          {trendingVideos.map((video) => (
            <div key={video.Id} className="carousel-item">
              <img
                src={require(`../../assets/${video.CoverImage}`)}
                alt={`Trending Video ${video.Id}`}
                onClick={() => onVideoClick(video)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingSection;
