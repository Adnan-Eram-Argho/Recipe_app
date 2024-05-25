import axios from "axios";
import { useEffect, useState } from "react";

function AddRecipies() {
  const [catagories, setCatagories] = useState();
  useEffect(() => {
    async function load() {
      const data =await axios.get("http://localhost:3000/categories");
      
      if (data?.status === 200) {
        setCatagories(data?.data);
        
      }
    }


    load()
  }, []);
  
  const  handleCreateRecipe=async(e)=>{
    e.preventDefault();
    const form =e.target;
    const id = form.id.value;
    const title = form.title.value;
    const price = form.price.value;
    const category=form.catagory.value;
    const description = form.description.value;
    const recipeData = {id,title,price,category,description}
    console.log(recipeData)

     await axios.post("http://localhost:3000/recipes",recipeData) 
  }
  return (
    <div className="w-full p-16">
        <h1 className="text-center text-3xl">Add recipe</h1>
      <form className="w-full" onSubmit={handleCreateRecipe}>
        <div className="mb-4">
          <label htmlFor="">id</label>
          <input
            type="text"
            name="id"
            placeholder="id"
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            placeholder="id"
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">price</label>
          <input
            type="number"
            name="price"
            placeholder="id"
            className="w-full py-5 px-7 border"
          />
        </div>
        <div className="mb-4">
            <label htmlFor="">catagory</label>
          <select name="catagory" id="" className="w-full py-5 px-7 border">
            
            {
                catagories?.map(catagorie=><option key={catagorie.id} value={catagorie.title} >{catagorie.title}</option>)
                
            }
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="">description</label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
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

export default AddRecipies;
