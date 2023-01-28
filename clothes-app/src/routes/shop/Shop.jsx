import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";

import { setCategories } from "../../store/categories/categories.action";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import "./shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    return () => getCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
