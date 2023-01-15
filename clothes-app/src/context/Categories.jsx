import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/Firebase";

// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategories(categoryMap);
    };

    return () => getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
