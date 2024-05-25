/* eslint-disable react/prop-types */

import axios from "axios"

import { Link } from "react-router-dom"


function RecipeRow({recipe}) {

    async function deleteElement(){
      const del = await axios.delete(`http://localhost:3000/recipes/${recipe.id}`);
      if(del){
       
        window.location.reload();

      }
     }
     console.log(recipe)
 
  return (
    <tr >
    <th>{recipe.id}</th>
    <td>{recipe.title}</td>
    <td>{recipe.price}</td>
    <td>{recipe.category}</td>
    <td className="flex gap-4">
        <Link to={`/dashboard/edit-recipies/${recipe?.id}`} className="btn btn-xs btn-neutral">Edit</Link>
        <button className="btn btn-xs btn-error" onClick={deleteElement}>Delete</button>
    </td>
  </tr>
  )
}

export default RecipeRow
