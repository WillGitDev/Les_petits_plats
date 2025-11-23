import styles from "./styles.module.css";
import { anton } from "@/app/ui/fonts";

export default function NumberRecipe({ numberRecipe }) {
    const recette = numberRecipe > 1 ? "recettes" : "recette";
    return (
        <p
            className={`${styles.content} ${anton.className}`}
        >{`${numberRecipe} ${recette}`}</p>
    );
}
