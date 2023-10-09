import React from "react";
import "./CategoryButtons.css";

export default function CategoryButtons({ categoryName }) {
  return <button className="category__select-btn">{categoryName}</button>;
}
