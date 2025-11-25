import styles from "./styles.module.css";
import Image from "next/image";
import { anton } from "@/app/ui/fonts";

/**
 * Props du composant RestaurantCard
 * @typedef {Object} Recipe
 * @property {string} img - Nom du fichier image.
 * @property {string} name - Nom de la recette.
 * @property {string} description - Description de la recette.
 * @property {Ingredient[]} ingredients - Un tableau des ingrédients de la recette.
 * @property {number} time - Le temps pour réaliser la recette en minute.
 */

/**
 * Représente un ingrédient
 * @typedef {Object} Ingredient
 * @property {string} ingredient - l'ingredient utiliser dans la recette.
 * @property {number} [quantity] - La quantité de l'ingrédient (optionnel).
 * @property {string} [unit] - L'unité utilisée pour quantifier l'ingrédient (optionnel).
 */

/**
 * Affiche une carte de recette en fonction des éléments transmis.
 * @param {Recipe} props - Propriétés du composant RestaurantCard.
 * @returns {JSX.Element} Élément React représentant la carte de recette.
 */
export default function RestaurantCard({
    img,
    name,
    description,
    ingredients,
    time,
}) {
    const path = "/images/recipes/";
    return (
        <article className={styles.article}>
            <Image
                className={styles.img}
                src={`${path}${img}`}
                alt="Photo d'un plat"
                height={250}
                width={380}
            />
            <div className={styles.time}>{`${time}min`}</div>
            <div className={styles.contentCard}>
                <h2 className={`${styles.titleCard} ${anton.className}`}>
                    {name}
                </h2>
                <div className={styles.recipe}>
                    <h3 className={styles.titleContent}>RECETTE</h3>
                    <p className={styles.contentRecipe}>{description}</p>
                </div>
                <div className={styles.ingredients}>
                    <h3 className={styles.titleContent}>INGRÉDIENTS</h3>
                    <div className={styles.ingredientsContent}>
                        {ingredients.map((element, index) => (
                            <div
                                className={styles.ingredientContent}
                                key={`${element.ingredient}-${index}`}
                            >
                                <p className={styles.ingredient}>
                                    {element.ingredient}
                                </p>
                                <p className={styles.quantity}>{`${
                                    element.quantity ? element.quantity : ""
                                } ${element.unit ? element.unit : ""}`}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
