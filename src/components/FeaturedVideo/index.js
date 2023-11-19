import logo from "../../assets/FeaturedTitleImage.png";
import ConvertSeconds from "../../helpers/convertSeconds";
import Button from "../Button";

import "./index.css";

const FeaturedVideo = ({ video }) => {
  console.log(video);
  const { Category, ReleaseYear, MpaRating, Duration, Description } = video;

  return (
    <div className="featured-video-block">
      <div className="video-details">
        <div className="category">{Category}</div>
        <img src={logo} alt="Movie Logo" className="logo" />
        <div className="video-info">
          <span>{ReleaseYear}</span>
          <span>{MpaRating}</span>
          <span>{ConvertSeconds(Duration)}</span>
        </div>

        <p className="description">{Description}</p>
        <div className="buttons">
          <Button
            text={"Play"}
            style={{ color: "#000", backgroundColor: "#fff" }}
          />
          <Button
            text={"More Info"}
            style={{ color: "#fff", backgroundColor: "#3a56d6" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
