import {getData} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";

const execute = async () => {
    try
    {
        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients);
    }
    catch(error){
        //ERROR
        console.log(error.message);
    }
}

function showIngredients(ingredients){
    console.log(ingredients)
}

execute();



