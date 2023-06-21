import React from "react";
import { BsStarFill } from "react-icons/bs";
import reviewGraph from "../assets/reviews-graph.png";
import "../styles/review.css";

function Review() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 2,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];
  const testArr = function (n) {
    const myArray = [];
    for (let i = 0; i < n; i++) {
      myArray.push(i);
    }
    const displayRating = myArray.map((arr) => <BsStarFill key={arr.id} />);
    return displayRating;
  };

  //const ar = testArr(2);

  const reviewsElts = reviewsData.map((review) => {
    return (
      <div key={review.id} className="review-description">
        <span style={{ color: "red" }}> {testArr(review.rating)}</span>
        <p style={{ fontWeight: "bold" }}>
          {review.name}
          <span
            style={{
              marginLeft: "10px",
              fontWeight: "lighter",
              color: "gray",
            }}
          >
            {review.date}
          </span>
        </p>
        <p style={{ letterSpacing: "0.1em", lineHeight: "1.5rem" }}>
          {review.text}
        </p>
      </div>
    );
  });

  //console.log(ar);
  return (
    <div className="review-container">
      <div className="review-header">
        <h1 style={{ fontSize: "40px" }}>Your reviews</h1>
        <p style={{ color: "gray", fontSize: "20px" }}>
          Last{" "}
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            30 days
          </span>
        </p>
      </div>

      <img src={reviewGraph} />
      <h3>Reviews ({reviewsData.length})</h3>
      {reviewsElts}
    </div>
  );
}

export default Review;
