import React, { useState } from 'react';
import RecipeDetails from './recipeingredients'

const Recipe = ({recipe}) => {
    const [theshow, settingShow] = useState(false);
    const{label, image, url, ingredients} = recipe.recipe;

return(
<div className="recipe">
   <h2>{label}</h2>
   <img src={image} alt={label}/>
   <a href = {url} target = "_blank" rel="noopener
   noreferrer">
       Click here for more information
   </a>
<button onClick={() => settingShow(!theshow)}> Ingredients</button>
    {theshow && <RecipeDetails ingredients={ingredients}/>}
</div>

)



};

export default Recipe;