import axios from "axios";
import { useEffect, useState } from "react"
import RecipeRow from "../../components/card/RecipeRow";


function ManageAllRecipe() {
    const [recipies, setRecipies] = useState([]);
    useEffect(() => {
        async function load() {
            const data = await axios.get("http://localhost:3000/recipes");
            if (data?.status) {
                setRecipies(data?.data)
            }
        }
        load()
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full px-16 mt-10">
                <h1 className="text-center text-3xl mb-4">Manage All Recipe</h1>
                <table className="table table-zebra">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>price</th>
                            <th>catagory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recipies?.map(recipe => <RecipeRow key={recipe.id} recipe={recipe} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageAllRecipe
