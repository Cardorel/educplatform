import React from "react";
import { products } from "../../assets/consts/data";
import Feedback from "../feedback/Feedback";
import WhatNextContent from "../student/whatNext/WhatNextContent";
import "./categories.scss";
import CategoryContent from "./CategoryContent";
import { categoryImages } from "../../assets/consts/data";

export default function Categories() {
  return (
    <div className="category">
      <CategoryContent
        data={categoryImages}
        direction="categories"
        texts="галузі знань"
      />
      <Feedback />
      <div className="category-prop">
        <WhatNextContent
          data={products}
          text="Курси, які можуть Вас зацікавити"
        />
      </div>
    </div>
  );
}
