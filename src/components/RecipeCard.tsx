import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface RecipeCardProps {
    title: string;
    imageUrl: string;
    author: string;
    description: string;
    ingredients: string[];
    instructions: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
    title, 
    imageUrl, 
    author, 
    description, 
    ingredients, 
    instructions}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='cursor-pointer rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition'>
                <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-40 object-cover"
                    />
                    <div className='p-4'>
                        <h4>{author}</h4>
                        <hr />
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                </div>
            </DialogTrigger>

            {/* Modal Content */}
            <DialogContent className='bg-white p-6 rounded-lg max-w-md mx-auto shadow-md'>
                <h2 className='text-xl font-bold mb-4'>
                    {title}
                </h2>
                <img 
                    src={imageUrl}
                    alt={title}
                    className="w-full h-40 object-cover mb-4 rounded-md"                
                />
                <h3 className="text-lg font-semibold">Ingredients</h3>
                <ul className="list-disc pl-6 my-2">
                    {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className='text-lg font-semibold mt-4'>Instructions</h3>
                <p className='text-gray-700 mt-2'>{instructions}</p>
            </DialogContent>
        </Dialog>
    );
};

export default RecipeCard;