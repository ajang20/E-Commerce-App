

import { Link } from "react-router-dom"
import { useLoaderData,Outlet } from "react-router-dom"

// {
//     "id": 1,
//     "name": "Clothes",
//     "slug": "clothes",
//     "image": "https://i.imgur.com/QkIa5tT.jpeg",
//     "creationAt": "2026-04-11T21:14:51.000Z",
//     "updatedAt": "2026-04-11T21:14:51.000Z"
//   }
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

function Categories() {
      const { categories,products } = useLoaderData() as {categories:Category[], products:Product[]};

      const categoryElements = categories.map( category => category?
                                         <Link to={`/categories/${category.name}`} state={{category,products}}>
                                         <div key={category.name} 
                                                     className="flex flex-col gap-2 items-center  hover:shadow-gray-500 hover:shadow-2xl p-4 rounded-2xl border-0">
                                                      <img src={category.image} alt={category.name} className="h-70 w-68"/>
                                                      <span className="">{category.name}</span>
                                                      <button type='button' className="bg-black text-white w-26 p-1.5 rounded">Buy Now</button>
                                          </div>
                                      </Link>:null)
  return (
    <div className="my-30 flex flex-col gap-10">
    <span className="text-5xl font-bold px-20">Categories :</span>
    <div className="flex flex-wrap gap-10 items-center justify-center">{categoryElements}</div>
    <Outlet/>
    </div>
)}

export default Categories