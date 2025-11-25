import styles from "./styles.module.css";
import Image from "next/image";
import { anton } from "@ui/fonts";

/**
 * Affiche l'image et la recette.
 *
 * @typedef {Object} Recipe
 * @property {string} img - Nom du fichier image.
 * @property {string} name - Nom de la recette.
 * @property {string} description - Description de la recette.
 * @property {Ingredient[]} ingredients - tableau d'ingrédients.
 * @property {number} time - Le temps pour réaliser la recette en minute.
 * @property {string[]} ustensils - Un tableau des ustensiles utilisé par la recette.
 * @property {string} appliance - Un matériel utilisé par la recette.
 *
 */
/**
 * Représente un ingrédient
 * @typedef {Object} Ingredient
 * @property {string} ingredient - l'ingredient utiliser dans la recette.
 * @property {number} [quantity] - La quantité de l'ingrédient (optionnel).
 * @property {string} [unit] - L'unité utilisée pour quantifier l'ingrédient (optionnel).
 */

/**
 * @param {Recipe} props - Propriété du composant Menu.
 * @returns {JSX.Element} Élément React représentant une recette.
 */
export default function Recipe({
    img,
    name,
    description,
    ingredients,
    time,
    ustensils,
    appliance,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.containerImage}>
                <Image src={img} alt="Un plat" width={600} height={740} />
            </div>
            <div className={styles.containerRecipe}>
                <div className={styles.header}>
                    <h2 className={`${styles.title} ${anton.className}`}>
                        {name}
                    </h2>
                    <h3 className={styles.h3}>TEMPS DE PRÉPARATION</h3>
                    <div className={styles.time}>{`${time}min`}</div>
                </div>
                <div className={styles.containerIngredients}>
                    <h3 className={styles.h3}>INGRÉDIENTS</h3>
                    <div className={styles.listeIngredient}>
                        {ingredients.map((ingredient, index) => (
                            <div
                                key={`${ingredient.ingredient}-${index}`}
                                className={styles.ingredient}
                            >
                                <p>{ingredient.ingredient}</p>
                                <p>{`${ingredient.quantity ?? ""} ${
                                    ingredient.unit ?? ""
                                }`}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.containerUstensils}>
                        <h3 className={styles.h3}>USTENSILES NÉCESSAIRES</h3>
                        <div className={styles.ustensilElement}>
                            {ustensils.map((ustensil, index) => (
                                <div key={`${ustensil}-${index}`}>
                                    <p>{ustensil}</p>
                                    <p>1</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.containerAppliance}>
                        <h3 className={styles.h3}>APPAREILS NÉCESSAIRES</h3>
                        <div className={styles.containerAppliance}>
                            <p>{appliance}</p>
                            <p>1</p>
                        </div>
                    </div>
                    <div className={" "}></div>
                </div>
            </div>
        </div>
    );
}
