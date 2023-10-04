import React from "react";
// import useFetch from "../hooks/UseFetch";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          title
          body
          rating
        }
      }
    }
  }
`;

export default function Homepage() {
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/reviews"
  // );

  const { loading, error, data } = useQuery(REVIEWS);
  console.log("hi");
  console.log(data.data);
  const content = data.reviews.data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>testing</div>
    // <div>
    //   {content.map((review) => (
    //     <div key={review.id} className="review-card">
    //       <div className="rating">{review.attributes.rating}</div>
    //       <h2>{review.attributes.title}</h2>
    //       <small>coonsole list</small>
    //       <p>{review.attributes.body}</p>
    //       <Link to={`/details/${review.id}`}>read more</Link>
    //     </div>
    //   ))}
    // </div>
  );
}
