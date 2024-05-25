import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditRecipe() {
    const { id } = useParams();
  const [catagories, setCatagories] = useState();
  const [recipe,setRecipe]=useState();
  console.log(recipe)
  useEffect(() => {
    async function load() {
      const catagoriesData =await axios.get("http://localhost:3000/categories");
      
      if (catagoriesData?.status === 200) {
        setCatagories(catagoriesData?.data);       
      }
    

    const  recipeData = await axios.get(`http://localhost:3000/recipes/${id}`)
    if(recipeData?.status===200){
        setRecipe(recipeData.data)
    }

}
    load()
  }, []);
  
  const  handleCreateRecipe=async(e)=>{
    e.preventDefault();
    const form =e.target;
    
    const title = form.title.value;
    const price = form.price.value;
    const catagory=form.catagory.value;
    const description = form.description.value;
    const recipeData = {id,title,price,catagory,description}
    console.log(recipeData)

     await axios.patch(`http://localhost:3000/recipes/${id}`,recipeData) 
  }
  return (
    <div className="w-full p-16">
        <h1 className="text-center text-3xl">Add recipe</h1>
      <form className="w-full" onSubmit={handleCreateRecipe}>
      
        <div className="mb-4">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            placeholder={recipe?.title}
            defaultValue={recipe?.title}
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">price</label>
          <input
            type="number"
            name="price"
            placeholder={recipe?.price}
            defaultValue={recipe?.price}
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
            <label htmlFor="">catagory</label>
          <select name="catagory"  className="w-full py-5 px-7 border" >
            
            {
                catagories?.map(catagorie=><option key={catagorie.id} value={catagorie.title} selected={catagorie?.title==recipe?.title} >{catagorie?.title}</option>)
                
            }
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="">description</label>
          <textarea
            type="text"
            name="description"
            placeholder={recipe?.description}
            defaultValue={recipe?.description}
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
        
          <input
            type="submit"
            
            value={"Add Product"}
            className="w-full py-5 px-7 border btn btn-neutral"
          />
        </div>
      </form>
    </div>
  );
}

export default EditRecipe;
