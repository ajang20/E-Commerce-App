

export async function ProductsLoader(){
const [categoriesResponse,productsResponse] = await Promise.all([fetch('https://api.escuelajs.co/api/v1/categories'),fetch('https://api.escuelajs.co/api/v1/products'),])

if(!categoriesResponse.ok || !productsResponse.ok){
    throw new Error('Error Occured with fetching Products lists')
}
 
const categories = await categoriesResponse.json()
const products = await productsResponse.json()

return {categories,products}
}