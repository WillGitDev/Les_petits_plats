import Banner from "@components/Banner";
import Recipe from "@/app/components/Recipe";
import data from "@data/data_recipes.json";
import { notFound } from "next/navigation";
/**
 * Page représentant la recette.
 *
 * @typedef {Object} PageRecipe
 * @property {Params} params - Pour récupérer le segment dynamique.
 *
 * @param {PageRecipe} props - Propriétés du composant PageRecipe.
 * @returns
 */
export default async function Page({ params }) {
    const pathImage = "/images/recipes/";
    const { slug } = await params;
    if (data.filter((element) => element.slug === slug)) {
        console.log("La recette existe");
    } else {
        console.log("La recette n'existe pas");
    }
    const dataRecipe = data.find((recipe) => {
        return recipe.slug === slug;
    });

    if (!dataRecipe) {
        notFound();
    }

    console.log(dataRecipe.slug);
    return (
        <>
            <Banner img={`${pathImage}Recette01.jpg`} />
            <Recipe
                key={dataRecipe.id}
                img={`${pathImage}${dataRecipe.image}`}
                name={dataRecipe.name}
                description={dataRecipe.description}
                ingredients={dataRecipe.ingredients}
                time={dataRecipe.time}
                ustensils={dataRecipe.ustensils}
                appliance={dataRecipe.appliance}
            />
        </>
    );
}
