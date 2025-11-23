import { anton } from "@/app/ui/fonts";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @returns {JSX.Element} Élément React représentant un titre et la barre de recherche.
 */
export default function SearchBar() {
    return (
        <div className={styles.containerSearch}>
            <h1 className={`${styles.title} ${anton.className}`}>
                DÉCOUVREZ NOS RECETTES
                <br /> DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
            </h1>
            <form className={styles.form}>
                {/* Regarder s'il faut laisser le label */}
                <input
                    id="recipe"
                    className={styles.inputRecipe}
                    name="recipe"
                    type="text"
                    placeholder="Rechercher une recette, un ingrédient, ..."
                    aria-label="Rechercher une recette"
                />
                <button type="submit" className={styles.button}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className={styles.glass}
                    />
                </button>
            </form>
        </div>
    );
}
