import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Composant DropDownMenu.
 * Menu déroulant avec une fonction de recherche.
 *
 * @typedef {Object} DropDownMenuProps
 * @property {string} title - Renseigne le titre du menu déroulant.
 *
 * @param {DropDownMenuProps} props - Propriétés du composant DropDownMenu.
 * @returns {JSX.Element} Élément React représentant un menu déroulant.
 */
export default function DropDownMenu({ title }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={styles.chevron}
                />
            </div>
            <div className={styles.search}></div>
        </div>
    );
}
