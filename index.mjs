import {getData} from "./service.mjs";
import { Ingredients } from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";

const execute = async () => {
    try
    {
        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        //Creamos el caldero de pociones
        const cauldron = new Cauldron(ingredients);
        // showIngredients(ingredients);
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



