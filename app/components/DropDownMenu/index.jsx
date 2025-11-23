import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
