import styles from "./styles.module.css";
import { anton } from "@/app/ui/fonts";

/**
 * Affiche le nombre de recette à partir de la propriété "numberRecipe".
 *
 * @typedef {Object} NumberRecipe
 * @property {number} numberRecipe - Le nombre de recette.
 *
 * @param {NumberRecipe} props - Propriété du composant NumberRecipe.
 * @returns {JSX.Element} Élement React représentant un nombre et du mot "recette" ou "recettes" selon la quantitée.
 */
export default function NumberRecipe({ numberRecipe }) {
    const recette = numberRecipe > 1 ? "recettes" : "recette";
    return (
        <p
            className={`${styles.content} ${anton.className}`}
        >{`${numberRecipe} ${recette}`}</p>
    );
}
