import { anton } from "@/app/ui/fonts";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/**
 * Barre de recherche
 *
 * @returns {JSX.Element} Élément React représentant une barre de recherche.
 */
export default function SearchBar() {
    return (
        <div className={styles.containerSearch}>
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
