import React from "react";
import styles from "./StarRating";
import { FaRegStar } from "react-icons/fa6";

function StarRating({ rating }) {
  const starMax = 5; // Tổng số ngôi sao tối đa
  return <div>{Array.from({ length: starMax }, (_, index) => (index < rating ? <FaRegStar key={index} /> : ""))}</div>;
}

export default StarRating;
