import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const sportsData = [
  {
    name: "Football",
    image: "https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_742320_1679349106715629.jpg",
    description: "Football is a popular sport played between two teams aiming to score goals.",
    link: "https://www.fifa.com/", 
  },
  {
    name: "Basketball",
    image: "https://cdn-attachments.timesofmalta.com/b29412e8a592efff037e2b211f6092a1e3d30432-1655124335-50e3749a-1920x1280.jpg",
    description: "Basketball is a fast-paced game where players score points by shooting a ball through a hoop.",
    link: "https://www.nba.com/", 
  },
  {
    name: "Tennis",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_Racket_and_Balls.jpg",
    description: "Tennis is a sport played individually or in doubles, requiring skill and endurance.",
    link: "https://www.atptour.com/", 
  },
];

const Home = () => {
  return (
    <div className="container text-center mt-4">
      <h1 className="mb-4">Welcome to the Sports Hub</h1>
      <div className="row justify-content-center">
        {sportsData.map((sport, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow">
              <img src={sport.image} alt={sport.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{sport.name}</h5>
                <p className="card-text">{sport.description}</p>
                <a href={sport.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Open
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
