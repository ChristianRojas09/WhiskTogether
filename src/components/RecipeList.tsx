import React from "react";
import RecipeCard from "./RecipeCard";

interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    ingredients: string[];
    instructions: string;
    author: string;
}

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({recipes}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    imageUrl={recipe.imageUrl}
                    author={recipe.author}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                />
            ))}
        </div>
    );
};

export default RecipeList;