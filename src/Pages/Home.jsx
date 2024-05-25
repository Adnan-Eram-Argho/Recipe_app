/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import Banner from "../components/home/Banner"
import { useState } from "react";
import RecipeCard from "../components/card/RecipeCard";
import Catagories from "../components/card/Catagories";

function Home() {
  const [recipies,setRecipies] = useState();
  const [catagories,setCatagories]=useState();
  useEffect(()=>{
    // fetch("http://localhost:3000/recipes")
    // .then(res=>res.json())
    // .then(data=>setRecipies(data))
    async function load(){

      //get recipies
     const recipeRes = await fetch("http://localhost:3000/recipes")
     const recipeData =await recipeRes.json();
     
      setRecipies(recipeData)

      //get catagories
      const catagoryRes =await fetch("http://localhost:3000/categories")
      const catagoryData = await catagoryRes.json();
      setCatagories(catagoryData);
      
    }
    load()
    // fetch("http://localhost:3000/categories")
    // .then(res=>res.json())
    // .then(data=>setCatagories(data))


  },[])
  
  return (
    <div className="px-16">
      <Banner/>
      <div>
        <h1 className="text-4xl my-8 text-center">Our recipie catagpries</h1>
        <div className="grid grid-cols-4 gap-4">
          {
            catagories
            ?.map(catagorie=><Catagories key={catagorie.id} catagorie={catagorie}/>)
          }
        </div>
      </div>
      <div>
        <h1 className="text-4xl my-8 text-center">Our mewest recipies</h1>
        <div className="grid grid-cols-4 gap-4">
          {
            recipies?.reverse().slice(0,4)
            ?.map(recipe=><RecipeCard key={recipe.id} recipe={recipe}/>)
          }
        </div>
      </div>
      
    </div>
  )
}

export default Home
