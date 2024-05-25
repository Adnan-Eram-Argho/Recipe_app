/* eslint-disable react/prop-types */
import pizza from "../../assets/pizza.webp"

function RecipeCard({recipe}) {
    console.log(recipe)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={pizza} alt="Pizza picture" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {recipe?.title}
       
      </h2>
      <h2 className="card-title">
        {recipe?.price}
       
      </h2>
      <p>{recipe?.description?.length>30 ? recipe?.description.slice(0,30) : recipe.description}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{recipe?.category}</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
  )
}

export default RecipeCard
