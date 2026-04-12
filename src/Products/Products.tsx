
import type { Product } from "./categories"
import { Link } from "react-router-dom"
import { useParams,useLocation } from 'react-router-dom'

function Products() {
  const name = useParams().category
  const {category,products} = useLocation().state
  
   const filterProducts = products.filter( (product:Product) => product.category.name === name || product.category.id === category.id)

  const productsElements = filterProducts.map( (product:Product) => product?
                                         <Link to={`${product.id}`} state={product}>
                                         <div key={product.id} 
                                                     className="flex flex-col gap-2 items-center  hover:shadow-gray-500 hover:shadow-2xl p-4 rounded-2xl border-0">
                                                      <img src={product.images[0]} alt={product.slug} className="h-70 w-68"/>
                                                      <span className="">{product.title}</span>
                                                      <span className="text-xl font-bold">${product.price}</span>
                                                      <button type='button' className="bg-black text-white w-26 p-1.5 rounded">Buy Now</button>
                                          </div>
                                      </Link>:null)
  return (
    <div className="my-30">
    <span className="text-5xl font-bold px-20">{name} :</span>
    <div className="flex flex-wrap gap-10 items-center justify-center my-30">{productsElements}</div>
    </div>
  )
}

export default Products






// {
//     "id": 5,
//     "title": "Classic Black Hooded Sweatshirt",
//     "slug": "classic-black-hooded-sweatshirt",
//     "price": 79,
//     "description": "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
//     "category": {
//       "id": 1,
//       "name": "Clothes",
//       "slug": "clothes",
//       "image": "https://i.imgur.com/QkIa5tT.jpeg",
//       "creationAt": "2026-04-11T21:14:51.000Z",
//       "updatedAt": "2026-04-11T21:14:51.000Z"
//     },
//     "images": [
//       "https://i.imgur.com/cSytoSD.jpeg",
//       "https://i.imgur.com/WwKucXb.jpeg",
//       "https://i.imgur.com/cE2Dxh9.jpeg"
//     ],
//     "creationAt": "2026-04-11T21:14:51.000Z",
//     "updatedAt": "2026-04-11T21:14:51.000Z"
//   }












// function Products({products}:{products:Product[]}) {
  

//   const productsElements = products.map( product => product?
//                                          <Link to={`/${product.id}`} state={product}>
//                                          <div key={product.id} 
//                                                      className="flex flex-col gap-2 items-center  hover:shadow-gray-500 hover:shadow-2xl p-4 rounded-2xl border-0">
//                                                       <img src={product.images[0]} alt={product.slug} className="h-70 w-68"/>
//                                                       <span className="">{product.title}</span>
//                                                       <span className="text-xl font-bold">${product.price}</span>
//                                                       <button type='button' className="bg-black text-white w-26 p-1.5 rounded">Buy Now</button>
//                                           </div>
//                                       </Link>:null)
//   return (
//     <div className="flex flex-wrap gap-10 items-center justify-center">{productsElements}</div>
//   )
// }