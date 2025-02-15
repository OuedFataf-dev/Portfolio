import React from "react";

const Portfolio = ({ data }) => {
  return (
    <div className="card card-compact bg-base-100 max-w-2xl shadow-xl">
      {data.map((img, index) => (
        <div key={index}>
          <figure>
            <img src={img.image} alt={`Portfolio item ${index}`} />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
