
import { useLocation } from "react-router-dom"

function ProductDetails() {
    // const {id} = useParams()
    const location = useLocation().state

  return (
    <div className="flex  m-20 gap-8 justify-between px-40">
        <img src={location.images[0]} alt={location.slug} className="h-[60vh] w-130"/>
        <div className="flex flex-col gap-10">
        <span className="text-4xl font-bold">{location.title}</span>
        <span className="text-3xl font-bold">${location.price}</span>
        <span className="text-xl">{location.description}</span>
        <button type='button' className="bg-black text-white w-62 p-6 rounded text-2xl">Buy Now</button>
        </div>

    </div>
  )
}

export default ProductDetails


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