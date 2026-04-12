// import React from 'react'
// import Body from "./Body/BodySection";
// import useUsers from "./Components/users/userUsers";
import { useLoaderData } from "react-router-dom";
// import Products from "./Products/Products";
import Categories from "./Products/categories";

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
};
export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string,
  updatedAt: string
};

export default function App() {
  const { products } = useLoaderData() as {categories:Category[], products:Product[]};

  return (
    <div>
      {/* <Body/> */}
        <Categories />
      {/* <Products products={products} /> */}
    </div>
  );
}


