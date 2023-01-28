import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
