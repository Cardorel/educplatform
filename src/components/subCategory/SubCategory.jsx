import React from "react";
import { useParams } from "react-router-dom";
import { categoryImages } from "../../assets/consts/data";
import CategoryContent from "../Categories/CategoryContent";

export default function SubCategory() {
  const params = useParams();
  const { title, sub_category } = categoryImages.find(
    (category) => category.title === params.category
  );
  return (
    <div className="sub-category">
      <div className="subcategory-content">
        <CategoryContent
          data={sub_category}
          texts={title}
          btnText="назад до всіх галузей"
          direction="qualification"
        />
      </div>
    </div>
  );
}
